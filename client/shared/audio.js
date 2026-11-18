// Sound for the overlays, iPhone first.
// - One AudioContext for everything, unlocked by the first tap (iOS needs a tap; a silent buffer is played inside it)
//   and a real 0.3 s silent MP3 on one <audio> element (never an empty WAV: that crashed WebKit's media pipeline).
// - Sound effects are synthesized (no files to download or decode -> tiny memory), rate-limited per kind.
// - The announcer voice (MP3 from the server's free TTS) is decoded and played through the same context; sfx duck.
// - Render mode: nothing plays; every cue is recorded and mixed offline into a WAV for the demo video.
export function createAudio({ silenceUrl = '/assets/silence.mp3', record = false } = {}) {
  const A = { ctx: null, master: null, sfxGain: null, voiceGain: null, unlocked: false, played: 0, fails: 0, cues: [], record, last: {}, speakingUntil: 0, muted: false };
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}
  const el = new Audio(); el.setAttribute('playsinline', ''); el.preload = 'auto';

  function make() {
    if (A.ctx || record) return A.ctx;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    try { A.ctx = new AC(); } catch { return null; }
    wire(A.ctx, A.ctx.destination, A);
    return A.ctx;
  }
  function wire(ctx, dest, o) {
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 6; comp.attack.value = 0.003; comp.release.value = 0.2;
    o.master = ctx.createGain(); o.master.gain.value = 0.9;
    o.sfxGain = ctx.createGain(); o.sfxGain.gain.value = 0.55;
    o.voiceGain = ctx.createGain(); o.voiceGain.gain.value = 1.0;
    o.sfxGain.connect(o.master); o.voiceGain.connect(o.master); o.master.connect(comp); comp.connect(dest);
  }
  A.unlock = () => {
    const c = make(); if (!c) return;
    try { c.resume(); const b = c.createBuffer(1, 1, 22050), s = c.createBufferSource(); s.buffer = b; s.connect(c.destination); s.start(0); } catch {}
    if (!A.elUnlocked) { el.src = silenceUrl; el.play().then(() => { el.pause(); A.elUnlocked = true; }).catch(() => {}); }
    A.unlocked = c.state === 'running';
    setTimeout(() => { A.unlocked = c.state === 'running'; A.onstate && A.onstate(A.unlocked); }, 120);
  };
  A.resume = () => { if (A.ctx && A.ctx.state !== 'running') A.ctx.resume().catch(() => {}); };
  A.state = () => (record ? 'record' : A.ctx ? A.ctx.state : 'none');

  // ------------------------------------------------------------------ synthesized effects
  const noiseBuf = (ctx) => { if (ctx.__noise) return ctx.__noise; const n = ctx.sampleRate; const b = ctx.createBuffer(1, n, n); const d = b.getChannelData(0); let s = 1; for (let i = 0; i < n; i++) { s = (s * 16807) % 2147483647; d[i] = (s / 1073741823.5) - 1; } ctx.__noise = b; return b; };
  function env(ctx, g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  function tone(ctx, out, t, { type = 'sine', f0 = 440, f1 = f0, a = 0.005, d = 0.2, peak = 0.3, det = 0 }) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + a + d); o.detune.value = det;
    env(ctx, g, t, a, peak, d); o.connect(g).connect(out); o.start(t); o.stop(t + a + d + 0.05);
  }
  function noise(ctx, out, t, { type = 'lowpass', f0 = 1000, f1 = f0, q = 0.7, a = 0.003, d = 0.15, peak = 0.4 }) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf(ctx); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t); if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + a + d);
    env(ctx, g, t, a, peak, d); s.connect(f).connect(g).connect(out); s.start(t, Math.random() * 0.5); s.stop(t + a + d + 0.05);
  }
  const SFX = {
    punch: (c, o, t, v = 1) => { noise(c, o, t, { f0: 1400, f1: 300, d: 0.08, peak: 0.5 * v }); tone(c, o, t, { f0: 150, f1: 55, d: 0.1, peak: 0.55 * v }); },
    crit: (c, o, t) => { SFX.punch(c, o, t, 1.2); tone(c, o, t, { type: 'square', f0: 1800, f1: 900, d: 0.06, peak: 0.12 }); noise(c, o, t + 0.01, { type: 'highpass', f0: 3000, d: 0.12, peak: 0.25 }); },
    block: (c, o, t) => { tone(c, o, t, { type: 'triangle', f0: 1200, f1: 1100, d: 0.18, peak: 0.18 }); tone(c, o, t, { type: 'triangle', f0: 1810, d: 0.14, peak: 0.1 }); },
    ko: (c, o, t) => { tone(c, o, t, { type: 'sine', f0: 260, f1: 980, a: 0.005, d: 0.16, peak: 0.35 }); noise(c, o, t, { type: 'bandpass', f0: 2500, f1: 600, q: 1.2, d: 0.25, peak: 0.35 }); tone(c, o, t + 0.09, { type: 'triangle', f0: 1320, d: 0.2, peak: 0.12 }); },
    dash: (c, o, t) => { noise(c, o, t, { type: 'bandpass', f0: 500, f1: 3500, q: 2, a: 0.04, d: 0.22, peak: 0.45 }); },
    shield: (c, o, t) => { [880, 1320, 1760].forEach((f, i) => tone(c, o, t + i * 0.03, { type: 'sine', f0: f, d: 0.45, peak: 0.09 })); },
    boom: (c, o, t, v = 1) => { noise(c, o, t, { f0: 900, f1: 80, a: 0.004, d: 0.9, peak: 0.8 * v }); tone(c, o, t, { f0: 90, f1: 28, d: 0.8, peak: 0.8 * v }); },
    whistle: (c, o, t) => { tone(c, o, t, { type: 'sine', f0: 1900, f1: 500, a: 0.05, d: 0.95, peak: 0.07 }); },
    coin: (c, o, t) => { tone(c, o, t, { type: 'square', f0: 988, d: 0.07, peak: 0.1 }); tone(c, o, t + 0.07, { type: 'square', f0: 1319, d: 0.28, peak: 0.1 }); },
    power: (c, o, t) => { [523, 659, 784, 1047].forEach((f, i) => tone(c, o, t + i * 0.05, { type: 'triangle', f0: f, d: 0.3, peak: 0.14 })); noise(c, o, t, { type: 'highpass', f0: 2000, f1: 6000, a: 0.1, d: 0.4, peak: 0.12 }); },
    heal: (c, o, t) => { [660, 880, 1100].forEach((f, i) => tone(c, o, t + i * 0.06, { f0: f, d: 0.25, peak: 0.08 })); },
    beep: (c, o, t) => { tone(c, o, t, { f0: 880, d: 0.12, peak: 0.22 }); },
    go: (c, o, t) => { tone(c, o, t, { type: 'sawtooth', f0: 660, d: 0.5, peak: 0.12 }); tone(c, o, t, { type: 'square', f0: 1320, d: 0.5, peak: 0.08 }); noise(c, o, t, { f0: 4000, f1: 500, d: 0.4, peak: 0.25 }); },
    land: (c, o, t) => { tone(c, o, t, { f0: 120, f1: 50, d: 0.12, peak: 0.3 }); noise(c, o, t, { f0: 600, d: 0.1, peak: 0.15 }); },
    spin: (c, o, t) => { noise(c, o, t, { type: 'bandpass', f0: 300, f1: 2400, q: 3, a: 0.08, d: 0.35, peak: 0.5 }); SFX.punch(c, o, t + 0.25, 1.1); },
    cheer: (c, o, t) => { noise(c, o, t, { type: 'bandpass', f0: 1200, f1: 1500, q: 0.6, a: 0.25, d: 2.2, peak: 0.35 }); noise(c, o, t + 0.1, { type: 'bandpass', f0: 2600, f1: 2200, q: 0.8, a: 0.3, d: 2.0, peak: 0.18 }); },
    fanfare: (c, o, t) => { [[523, 0], [659, 0.12], [784, 0.24], [1047, 0.38], [784, 0.6], [1047, 0.72]].forEach(([f, dt], i) => { tone(c, o, t + dt, { type: 'sawtooth', f0: f, d: i === 5 ? 0.9 : 0.16, peak: 0.07 }); tone(c, o, t + dt, { type: 'triangle', f0: f * 2, d: i === 5 ? 0.9 : 0.16, peak: 0.05 }); }); SFX.cheer(c, o, t + 0.2); },
    nuke: (c, o, t) => { SFX.boom(c, o, t, 1.3); SFX.boom(c, o, t + 0.25, 1); tone(c, o, t, { type: 'sawtooth', f0: 220, f1: 40, d: 1.6, peak: 0.25 }); },
    pop: (c, o, t) => { tone(c, o, t, { f0: 500, f1: 1400, d: 0.07, peak: 0.15 }); },
    // ---- Haunted Tower (spooky but fun)
    creak: (c, o, t) => { tone(c, o, t, { type: 'sawtooth', f0: 95, f1: 140, a: 0.08, d: 0.7, peak: 0.07, det: 8 }); tone(c, o, t + 0.05, { type: 'square', f0: 190, f1: 120, a: 0.1, d: 0.6, peak: 0.03 }); noise(c, o, t, { type: 'bandpass', f0: 900, f1: 500, q: 6, a: 0.1, d: 0.6, peak: 0.12 }); },
    ghost: (c, o, t) => { tone(c, o, t, { type: 'sine', f0: 520, f1: 760, a: 0.25, d: 0.9, peak: 0.08, det: 15 }); tone(c, o, t + 0.1, { type: 'sine', f0: 780, f1: 500, a: 0.3, d: 0.9, peak: 0.05 }); },
    thunder: (c, o, t) => { noise(c, o, t, { f0: 500, f1: 60, a: 0.02, d: 1.8, peak: 0.6 }); noise(c, o, t + 0.15, { f0: 250, f1: 50, a: 0.1, d: 1.6, peak: 0.45 }); },
    bell: (c, o, t) => { [[110, 0.25], [220, 0.12], [277, 0.07], [330, 0.06], [440, 0.04]].forEach(([f, p]) => tone(c, o, t, { type: 'sine', f0: f, a: 0.004, d: 2.6, peak: p })); },
    organ: (c, o, t) => { [[147, 0], [175, 0], [220, 0], [294, 0.02], [131, 0.6], [165, 0.6], [196, 0.6], [262, 0.62]].forEach(([f, dt]) => { tone(c, o, t + dt, { type: 'sawtooth', f0: f, a: 0.04, d: dt ? 0.9 : 0.55, peak: 0.035 }); tone(c, o, t + dt, { type: 'triangle', f0: f * 2, a: 0.04, d: dt ? 0.9 : 0.55, peak: 0.03 }); }); },
    heart: (c, o, t) => { tone(c, o, t, { f0: 70, f1: 45, d: 0.12, peak: 0.45 }); tone(c, o, t + 0.17, { f0: 62, f1: 40, d: 0.14, peak: 0.35 }); },
    chime: (c, o, t) => { [1319, 1568, 1976, 2637].forEach((f, i) => tone(c, o, t + i * 0.07, { type: 'sine', f0: f, d: 0.6, peak: 0.07 })); },
    trap: (c, o, t) => { noise(c, o, t, { type: 'bandpass', f0: 3000, f1: 300, q: 1.5, a: 0.01, d: 0.35, peak: 0.4 }); SFX.boom(c, o, t + 0.22, 0.7); },
    shatter: (c, o, t) => { for (let i = 0; i < 6; i++) tone(c, o, t + i * 0.035, { type: 'triangle', f0: 2200 + i * 430, f1: 1800, d: 0.12, peak: 0.06 }); noise(c, o, t, { type: 'highpass', f0: 4000, d: 0.4, peak: 0.3 }); },
    wind: (c, o, t) => { noise(c, o, t, { type: 'bandpass', f0: 380, f1: 700, q: 4, a: 0.9, d: 2.2, peak: 0.12 }); },
    squeak: (c, o, t) => { tone(c, o, t, { type: 'triangle', f0: 900, f1: 1300, d: 0.08, peak: 0.07 }); },
    roar: (c, o, t) => { tone(c, o, t, { type: 'sawtooth', f0: 120, f1: 60, a: 0.05, d: 0.9, peak: 0.16, det: 20 }); noise(c, o, t, { type: 'lowpass', f0: 1200, f1: 300, a: 0.05, d: 0.9, peak: 0.35 }); },
  };
  const GAP = { squeak: 0.06, ghost: 0.25, heart: 0.3, punch: 0.045, crit: 0.06, block: 0.08, ko: 0.08, heal: 0.15, land: 0.06, pop: 0.05, coin: 0.05, boom: 0.06 };
  A.sfx = (kind, t = A.now(), v = 1) => {
    if (A.muted || !SFX[kind]) return;
    const g = GAP[kind] || 0.03; if (A.last[kind] && t - A.last[kind] < g) return; A.last[kind] = t;
    if (record) { A.cues.push({ k: 'sfx', kind, t, v }); return; }
    const c = A.ctx; if (!c || c.state !== 'running') return;
    try { SFX[kind](c, A.sfxGain, c.currentTime + 0.01, v); } catch {}
  };
  A.now = () => (record ? A.clock() : A.ctx ? A.ctx.currentTime : 0);
  A.clock = () => 0;   // render mode sets this to the virtual clock (seconds)

  // ------------------------------------------------------------------ announcer voice
  let cur = null;
  A.voice = async (url, dur) => {
    if (A.muted || !url) return false;
    A.speakingUntil = A.now() + (dur || 2);
    if (record) { A.cues.push({ k: 'voice', url, t: A.now(), dur }); return true; }
    const c = A.ctx;
    if (c && c.state !== 'running') A.resume();
    if (c && c.state === 'running') {
      try {
        const buf = await fetch(url).then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); });
        const audio = await new Promise((ok, bad) => { const p = c.decodeAudioData(buf, ok, bad); if (p && p.catch) p.catch(bad); });
        if (cur) { try { cur.stop(); } catch {} }
        const s = c.createBufferSource(); s.buffer = audio; s.connect(A.voiceGain);
        const t = c.currentTime + 0.02;
        A.sfxGain.gain.setTargetAtTime(0.28, t, 0.05); A.sfxGain.gain.setTargetAtTime(0.55, t + audio.duration, 0.2);
        s.start(t); cur = s; A.played++; s.onended = () => { if (cur === s) cur = null; };
        return true;
      } catch { A.fails++; }
    }
    // fallback: the unlocked <audio> element
    try { el.src = url; await el.play(); A.played++; return true; } catch { A.fails++; return false; }
  };

  // ------------------------------------------------------------------ offline mix (render mode)
  A.mix = async (seconds, sampleRate = 44100) => {
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const ctx = new OAC(2, Math.ceil(seconds * sampleRate), sampleRate);
    const o = {}; wire(ctx, ctx.destination, o);
    const voices = A.cues.filter((c) => c.k === 'voice');
    const decoded = await Promise.all(voices.map((v) => fetch(v.url).then((r) => r.arrayBuffer()).then((b) => ctx.decodeAudioData(b)).catch(() => null)));
    for (const c of A.cues) if (c.k === 'sfx' && c.t < seconds) try { SFX[c.kind](ctx, o.sfxGain, c.t + 0.01, c.v); } catch {}
    voices.forEach((v, i) => {
      const b = decoded[i]; if (!b || v.t >= seconds) return;
      const s = ctx.createBufferSource(); s.buffer = b; s.connect(o.voiceGain); s.start(v.t + 0.02);
      o.sfxGain.gain.setTargetAtTime(0.28, v.t, 0.05); o.sfxGain.gain.setTargetAtTime(0.55, v.t + b.duration, 0.2);
    });
    const out = await ctx.startRendering();
    // 16-bit WAV -> base64
    const n = out.length, ch = [out.getChannelData(0), out.getChannelData(1)], buf = new DataView(new ArrayBuffer(44 + n * 4));
    const w = (o2, s) => { for (let i = 0; i < s.length; i++) buf.setUint8(o2 + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); buf.setUint32(4, 36 + n * 4, true); w(8, 'WAVEfmt '); buf.setUint32(16, 16, true); buf.setUint16(20, 1, true); buf.setUint16(22, 2, true);
    buf.setUint32(24, sampleRate, true); buf.setUint32(28, sampleRate * 4, true); buf.setUint16(32, 4, true); buf.setUint16(34, 16, true); w(36, 'data'); buf.setUint32(40, n * 4, true);
    let p = 44; for (let i = 0; i < n; i++) for (let c = 0; c < 2; c++) { const v = Math.max(-1, Math.min(1, ch[c][i])); buf.setInt16(p, v * 32767, true); p += 2; }
    const bytes = new Uint8Array(buf.buffer); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  };
  return A;
}
