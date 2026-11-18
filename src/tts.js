// Server-side text-to-speech for ANY text, live, free and keyless (reused from fortune-live): the announcer's lines
// always change (names!), so nothing is pre-recorded. Produces MP3 that the overlay plays, also on iPhone.
//
// 1. Microsoft Edge neural voices (msedge-tts, her real voice). Edge speaks at about real time, so a long line made in
//    one piece takes as long as it lasts (20 s of audio ~ 13 s). We split the line into sentences (long ones at commas)
//    and make all pieces in parallel on warm connections: a 20 s line is ready in ~3-6 s. Each piece is retried.
// 2. If an Edge piece fails or is slow (edgePieceMs), Google Translate's keyless voice (female, ~0.2-0.4 s) makes that
//    piece; two Google endpoints are tried. No key, no account.
// 3. Pieces are cached (common sentences, names, fillers are made once). MP3 pieces are joined frame by frame and the
//    real duration is read from the MP3 frame headers (pieces may have different bitrates).
import crypto from 'node:crypto';

const URDU_SCRIPT = /[\u0600-\u06FF]/, HINDI_SCRIPT = /[\u0900-\u097F]/;

const escapeXml = (s) => String(s).replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c]));
const sleep = (ms) => new Promise((r) => { const t = setTimeout(r, ms); t.unref?.(); });
const withTimeout = (p, ms, msg) => Promise.race([p, new Promise((_, bad) => { const t = setTimeout(() => bad(new Error(msg)), ms); t.unref?.(); })]);

export function speakableText(text) {
  return String(text || '')
    .replace(/[\p{Extended_Pictographic}\u200d\uFE0F]/gu, '')
    .replace(/@([\w.]+)/g, (_, h) => h.replace(/[_.]+/g, ' '))
    .replace(/#([A-Z]\d+)/gi, 'code $1')
    .replace(/\s+/g, ' ').trim();
}

/** Sentences (long ones cut at , ; : or a dash), short bits joined to the next; every piece <= max chars (Google: 200). */
export function splitSpeech(text, max = 180) {
  const sentences = String(text).match(/[^.!?。؟]+(?:[.!?。؟]+["')\]]*|$)/g) || [String(text)];
  const out = [];
  const cut = (s) => {
    s = s.trim(); if (!s) return;
    if (s.length <= max) return out.push(s);
    let at = -1;
    for (const re of [/[,;:]\s/g, /\s[-–—]\s/g, /\s/g]) { let m; re.lastIndex = 0; while ((m = re.exec(s)) && m.index < max) if (m.index > max * 0.35) at = m.index + 1; if (at > 0) break; }
    if (at <= 0) at = max;
    cut(s.slice(0, at)); cut(s.slice(at));
  };
  sentences.forEach(cut);
  const merged = [];
  for (const p of out) {
    const last = merged[merged.length - 1];
    if (last && (last.length < 28 || p.length < 12) && last.length + p.length + 1 <= max) merged[merged.length - 1] = last + ' ' + p; else merged.push(p);
  }
  return merged;
}

// ---------------------------------------------------------------- MP3 frames
const BR1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320], BR2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
const SR = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };
/** The audio frames of an MP3 (ID3 tags and Xing/Info headers dropped) and their duration in seconds. */
export function mp3Frames(buf) {
  let i = 0, dur = 0; const parts = [];
  if (buf.length > 10 && buf.toString('latin1', 0, 3) === 'ID3') i = 10 + ((buf[6] & 0x7f) << 21 | (buf[7] & 0x7f) << 14 | (buf[8] & 0x7f) << 7 | (buf[9] & 0x7f));
  let start = -1;
  while (i + 4 <= buf.length) {
    if (buf[i] !== 0xff || (buf[i + 1] & 0xe0) !== 0xe0) { if (start >= 0) { parts.push(buf.subarray(start, i)); start = -1; } i++; continue; }
    const ver = (buf[i + 1] >> 3) & 3, layer = (buf[i + 1] >> 1) & 3, bri = buf[i + 2] >> 4, sri = (buf[i + 2] >> 2) & 3, pad = (buf[i + 2] >> 1) & 1;
    if (ver === 1 || layer !== 1 || bri === 0 || bri === 15 || sri === 3) { if (start >= 0) { parts.push(buf.subarray(start, i)); start = -1; } i++; continue; }
    const sr = SR[ver][sri], kbps = (ver === 3 ? BR1 : BR2)[bri], spf = ver === 3 ? 1152 : 576;
    const len = Math.floor(((ver === 3 ? 144 : 72) * kbps * 1000) / sr) + pad;
    if (len < 24 || i + len > buf.length) break;
    // an empty "Xing"/"Info" header frame at the start carries no sound
    const tag = buf.toString('latin1', i + 4, i + len);
    if (dur === 0 && start < 0 && /Xing|Info/.test(tag.slice(0, 40))) { i += len; continue; }
    if (start < 0) start = i;
    dur += spf / sr; i += len;
  }
  if (start >= 0) parts.push(buf.subarray(start, i));
  return { buf: Buffer.concat(parts), duration: dur };
}

export class TTS {
  constructor(getConfig) {
    this.getConfig = getConfig;
    this.clips = new Map(); // id -> { buf, createdAt }
    this.pieces = new Map(); // voice|text -> Promise<{buf, duration, via}|null> (common sentences, names, fillers)
    this.pool = [];          // warm Edge connections (metadata sent), used once each
    this.busy = 0; this.waiters = [];
    this.lastError = '';
    this.stats = { lines: 0, edge: 0, google: 0, failed: 0, cached: 0 };
    setInterval(() => { const cut = Date.now() - 10 * 60e3; for (const [k, v] of this.clips) if (v.createdAt < cut) this.clips.delete(k); }, 60e3).unref();
  }

  voiceFor(text) {
    const c = this.getConfig();
    if (URDU_SCRIPT.test(text) && c.urduVoice) return c.urduVoice;
    if (HINDI_SCRIPT.test(text) && c.hindiVoice) return c.hindiVoice;
    return c.voice || 'en-US-AvaMultilingualNeural';
  }

  /** Returns { id, url, duration, voice, via, ms } or null when TTS is off / every voice failed. */
  // o: { voice, rate, pitch } per game (Mira speaks in her own voice in the Haunted Tower)
  async synth(text, o = {}) {
    const c0 = this.getConfig();
    const c = o.voice || o.rate || o.pitch ? { ...c0, ...Object.fromEntries(Object.entries(o).filter(([, v]) => v)) } : c0;
    if (!c.enabled) return null;
    const clean = speakableText(text);
    if (!clean) return null;
    const voice = o.voice || this.voiceFor(clean), t0 = Date.now();
    const parts = splitSpeech(clean, Math.min(190, c.pieceChars || 180));
    let done = await Promise.all(parts.map((p) => this.piece(p, voice, c)));
    // one voice per line: if some piece had to use the Google voice, the whole line uses it (it takes ~0.3 s)
    if (c.mixVoices !== true && done.some((d) => d?.via === 'google') && done.some((d) => d?.via === 'edge')) {
      done = await Promise.all(parts.map((p, i) => (done[i]?.via === 'google' ? done[i] : this.google(p, voice).catch(() => done[i]))));
    }
    const ms = Date.now() - t0;
    if (done.some((d) => !d)) {
      this.stats.failed++;
      this.lastError = this.lastError || 'no voice';
      console.log(`[diag] tts failed: every voice failed for ${done.filter((d) => !d).length}/${parts.length} piece(s) after ${ms} ms (${this.lastError}): "${clean.slice(0, 60)}"`);
      return null;
    }
    const buf = Buffer.concat(done.map((d) => d.buf)), duration = done.reduce((s, d) => s + d.duration, 0);
    const via = [...new Set(done.map((d) => d.via))].join('+');
    this.stats.lines++;
    const id = crypto.randomBytes(9).toString('base64url');
    this.clips.set(id, { buf, createdAt: Date.now() });
    this.lastError = '';
    if (c.logLatency !== false) console.log(`[tts] ${duration.toFixed(1)} s of voice in ${ms} ms (${parts.length} piece${parts.length > 1 ? 's' : ''}, ${via})`);
    return { id, url: `/tts/${id}.mp3`, duration, voice, via, ms };
  }

  /** One piece of a line: cache -> Edge (warm connection, retried) -> Google keyless voice if Edge is slow or fails. */
  piece(text, voice, c = this.getConfig()) {
    const key = voice + '|' + (c.rate || '') + '|' + (c.pitch || '') + '|' + text;
    const hit = this.pieces.get(key);
    if (hit) { this.stats.cached++; this.pieces.delete(key); this.pieces.set(key, hit); return hit; }
    const p = this.makePiece(text, voice, c).catch(() => null);
    this.pieces.set(key, p);
    p.then((r) => { if (!r || r.via !== 'edge') this.pieces.delete(key); });   // Google pieces are not kept: next time try her real voice
    while (this.pieces.size > (this.getConfig().cachePieces || 500)) this.pieces.delete(this.pieces.keys().next().value);
    return p;
  }

  async makePiece(text, voice, c = this.getConfig()) {
    const edge = (async () => {
      for (let i = 0; i < 2; i++) {
        try { const b = mp3Frames(await this.edge(text, voice, c)); if (b.duration > 0.15) { this.stats.edge++; return { ...b, via: 'edge' }; } throw new Error('empty audio'); }
        catch (e) { this.lastError = 'edge: ' + (e.message || e); if (i === 0) await sleep(150); }
      }
      return null;
    })();
    if (c.fallback === false) return edge;
    // Edge first; after edgePieceMs (or when it failed) the free Google voice makes this piece
    const slow = c.edgePieceMs ?? 6500;
    const first = await Promise.race([edge, sleep(slow).then(() => 'slow')]);
    if (first && first !== 'slow') return first;
    const g = await this.google(text, voice).catch((e) => { this.lastError = 'google: ' + (e.message || e); return null; });
    if (g) { this.stats.google++; return g; }
    return first === 'slow' ? withTimeout(edge, 15000, 'edge too slow').catch(() => null) : null;
  }

  /** Google Translate's keyless voice (female). Two endpoints; <= 200 characters per request. */
  async google(text, voice) {
    const v = String(voice || '');
    const tl = /^ur-/.test(v) || URDU_SCRIPT.test(text) ? 'ur' : /^hi-/.test(v) || HINDI_SCRIPT.test(text) ? 'hi' : /^ar-/.test(v) ? 'ar' : /^en-GB/.test(v) ? 'en-GB' : /^en-IN/.test(v) ? 'en-IN' : /^en-AU/.test(v) ? 'en-AU' : 'en';
    const q = encodeURIComponent(text.slice(0, 200));
    const urls = [`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${q}`, `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${tl}&q=${q}`];
    let err;
    for (const url of urls) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36', Referer: 'https://translate.google.com/' }, signal: AbortSignal.timeout(4000) });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const b = mp3Frames(Buffer.from(await r.arrayBuffer()));
        if (b.duration > 0.15) return { ...b, via: 'google' };
        throw new Error('empty audio');
      } catch (e) { err = e; }
    }
    throw err;
  }

  // ---- Edge: a few connections at a time, kept warm between lines
  async slot() { if (this.busy < (this.getConfig().edgeParallel || 6)) { this.busy++; return; } await new Promise((r) => this.waiters.push(r)); this.busy++; }
  release() { this.busy--; const w = this.waiters.shift(); if (w) w(); }

  async connect(voice) {
    const { MsEdgeTTS, OUTPUT_FORMAT } = await import('msedge-tts');
    const tts = new MsEdgeTTS({ connectionTimeoutMs: 5000, synthesisTimeoutMs: 15000 });
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    return { tts, voice, at: Date.now() };
  }
  /** A connection that is already open (saves the ~0.2-0.5 s handshake); refilled after use while she is talking. */
  async takeConnection(voice) {
    while (this.pool.length) {
      const w = this.pool.shift();
      if (w.voice === voice && Date.now() - w.at < 20e3) return w;
      try { w.tts.close(); } catch {}
    }
    return this.connect(voice);
  }
  warm(voice, n = 2) {
    if (this.getConfig().warmConnections === false) return;
    const want = n - this.pool.filter((w) => w.voice === voice).length - (this.warming || 0);
    for (let i = 0; i < want; i++) {
      this.warming = (this.warming || 0) + 1;
      this.connect(voice).then((w) => { this.pool.push(w); while (this.pool.length > 4) try { this.pool.shift().tts.close(); } catch {} }).catch(() => {}).finally(() => { this.warming--; });
    }
  }

  async edge(text, voice, c) {
    await this.slot();
    let w;
    try {
      w = await this.takeConnection(voice);
      const { audioStream } = w.tts.toStream(escapeXml(text), { rate: c.rate || '+0%', pitch: c.pitch || '+0Hz' });
      return await new Promise((resolve, reject) => {
        const chunks = [];
        const t = setTimeout(() => reject(new Error('TTS timeout')), 15000);
        audioStream.on('data', (d) => chunks.push(d));
        audioStream.on('error', (e) => { clearTimeout(t); reject(e); });
        audioStream.on('close', () => { clearTimeout(t); resolve(Buffer.concat(chunks)); });
      });
    } finally { try { w?.tts.close(); } catch {} this.release(); this.warm(voice); }
  }

  get(id) { return this.clips.get(id)?.buf || null; }

  /** MP3 bytes for a short, often repeated text (her "thinking" lines, viewers' names), made once and kept. */
  cachedClip(text) {
    const c = this.getConfig(); if (!c.enabled) return Promise.resolve(null);
    const clean = speakableText(text); if (!clean) return Promise.resolve(null);
    return this.piece(clean, this.voiceFor(clean)).then((r) => r?.buf || null);
  }
  /** Serve ready-made MP3 bytes (e.g. a name clip + a cached line, joined frame by frame). */
  register(buf) {
    const m = mp3Frames(buf);
    const id = crypto.randomBytes(9).toString('base64url');
    this.clips.set(id, { buf: m.buf, createdAt: Date.now() });
    return { id, url: `/tts/${id}.mp3`, duration: m.duration, voice: this.voiceFor('') };
  }

  /** Startup check of every free voice (logged, so it can be read in the Render logs). */
  async selfTest() {
    const c = this.getConfig(); if (!c.enabled) return null;
    const text = 'Welcome to the arena! Comment anything to drop into the battle.', voice = this.voiceFor(text), out = {};
    let t = Date.now();
    try { const b = mp3Frames(await this.edge(text, voice, c)); out.edge = `ok ${Date.now() - t} ms for ${b.duration.toFixed(1)} s`; } catch (e) { out.edge = 'FAILED ' + (e.message || e); }
    t = Date.now();
    try { const b = await this.google(text, voice); out.google = `ok ${Date.now() - t} ms for ${b.duration.toFixed(1)} s`; } catch (e) { out.google = 'FAILED ' + (e.message || e); }
    // a whole reading-sized line through the real pipeline (pieces in parallel, warm connections, fallback)
    t = Date.now();
    const line = await this.synth('Winner winner! Sara wins with seven kills! Huge shoutout to Sara! New round starting soon, comment anything to drop into the arena.').catch(() => null);
    out.line = line ? `ok ${Date.now() - t} ms for ${line.duration.toFixed(1)} s (${line.via})` : 'FAILED';
    out.at = new Date().toISOString();
    console.log(`[tts] voices: edge ${out.edge}; google (fallback) ${out.google}; announcer line ${out.line}`);
    return (this.check = out);
  }
}

export const VOICE_CHOICES = [
  // multilingual: the same voice speaks the viewer's language (Urdu, Hindi, Arabic, Spanish ...) - Mira's default
  'en-US-AvaMultilingualNeural', 'en-US-EmmaMultilingualNeural',
  'en-US-AvaNeural', 'en-US-EmmaNeural', 'en-US-JennyNeural', 'en-US-AriaNeural', 'en-US-MichelleNeural',
  'en-GB-SoniaNeural', 'en-AU-NatashaNeural', 'en-IN-NeerjaNeural', 'en-IN-NeerjaExpressiveNeural',
  'ur-PK-UzmaNeural', 'ur-IN-GulNeural', 'hi-IN-SwaraNeural', 'ar-AE-FatimaNeural',
];
