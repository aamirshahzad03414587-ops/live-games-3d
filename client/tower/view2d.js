// 2D canvas fallback for the Haunted Tower (used when WebGL is missing or keeps crashing). Same API as view3d.
import { THEMES, BOSS_THEME, GATE_THEME, FH, DOOR_Z, doorX, STAIR, KIND_ICON } from '../../public/shared/tower-data.js';
import { TFLAG } from '../../public/shared/tower-sim.js';

const hex = (c) => '#' + (c >>> 0).toString(16).padStart(6, '0');
export function createTowerView2D(canvas, opts = {}) {
  const g = canvas.getContext('2d');
  let W = 390, H = 844, pr = 1, time = 0, shake = 0, lastW = null, flashT = -9;
  const drawn = [];
  const sx = (x) => W / 2 + x * W / 17;
  const sy = (y, z) => H * 0.5 + (z - 1) * H * 0.022 - y * H * 0.03;
  const project = (x, y, z) => ({ x: sx(x), y: sy(y - (lastW ? lastW.floor * FH : 0), z), vis: true });
  const mira = new Image(); mira.src = opts.miraUrl || '/assets/mira-tower.png';
  const theme = (w) => (w.th === -2 ? BOSS_THEME : w.th === -1 ? GATE_THEME : THEMES[w.th] || GATE_THEME);
  function frame(w, dt, now) {
    lastW = w; time = now; drawn.length = 0;
    const th = theme(w), fuel = Math.max(0.15, (w.fuel ?? 100) / 100);
    g.setTransform(pr, 0, 0, pr, 0, 0);
    const k = shake > 0 ? (shake -= dt, (Math.random() - 0.5) * 8 * shake) : 0;
    g.translate(k, 0);
    // back wall + floor
    g.fillStyle = hex(th.fog); g.fillRect(-10, 0, W + 20, H);
    g.fillStyle = hex(th.wall); g.fillRect(-10, H * 0.14, W + 20, sy(0, DOOR_Z) - H * 0.14);
    const fl = g.createLinearGradient(0, sy(0, DOOR_Z), 0, H * 0.8); fl.addColorStop(0, hex(th.floor)); fl.addColorStop(1, '#0a0612');
    g.fillStyle = fl; g.fillRect(-10, sy(0, DOOR_Z), W + 20, H);
    // doors
    const xs = w.nd ? doorX(w.nd) : [];
    xs.forEach((x, i) => {
      const dx = sx(x), dw = W * 0.17, top = sy(5.6, DOOR_Z), bot = sy(0, DOOR_Z);
      const open = w.ch === i && !['vote', 'enter', 'gather'].includes(w.phase);
      g.fillStyle = open ? '#ffe9a0' : '#3a2416'; g.beginPath(); g.moveTo(dx - dw / 2, bot); g.lineTo(dx - dw / 2, top + dw / 2); g.arc(dx, top + dw / 2, dw / 2, Math.PI, 0); g.lineTo(dx + dw / 2, bot); g.fill();
      g.strokeStyle = w.pr === i ? '#c07cff' : '#8a6a40'; g.lineWidth = 4; g.stroke();
      g.fillStyle = '#ffd36a'; g.font = `900 ${W * 0.07}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(w.kinds && w.kinds[i] ? KIND_ICON[w.kinds[i]] || '' : String(i + 1), dx, (top + bot) / 2);
    });
    // candle glow
    const rg = g.createRadialGradient(W / 2, H * 0.55, 10, W / 2, H * 0.55, W * 0.8 * fuel);
    rg.addColorStop(0, 'rgba(255,180,100,0.25)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, W, H);
    // Mira
    if (mira.complete && mira.naturalWidth) { const mh = H * 0.2, mw = mh * mira.naturalWidth / mira.naturalHeight; g.globalAlpha = 0.9; g.drawImage(mira, W * 0.02, H * 0.3 + Math.sin(now * 1.6) * 4, mw, mh); g.globalAlpha = 1; }
    // monster
    if (w.mo) { const big = w.mo.b ? 1.6 : 1, mx = sx(0), my = sy(1.8, -3.5); g.fillStyle = w.mo.k === 'spider' ? '#2a1a2a' : w.mo.k === 'mimic' ? '#7a4a20' : 'rgba(220,210,255,0.85)'; g.beginPath(); g.ellipse(mx, my, W * 0.12 * big, H * 0.07 * big, 0, 0, Math.PI * 2); g.fill(); g.fillStyle = '#ff3050'; g.fillRect(mx - 14 * big, my - 8, 8, 8); g.fillRect(mx + 6 * big, my - 8, 8, 8); }
    // climbers
    const base = w.floor * FH;
    for (const m of w.members) {
      const x = sx(m.x), y = sy(m.y, m.z), r = W * 0.022;
      g.fillStyle = hex(m.info?.color ?? 0xffffff); g.beginPath(); g.arc(x, y - r, r, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffd36a'; g.beginPath(); g.arc(x + r, y - r * 0.4, r * 0.4, 0, Math.PI * 2); g.fill();
      if (m.flags & TFLAG.shield) { g.strokeStyle = '#5ef0ff'; g.lineWidth = 2; g.beginPath(); g.arc(x, y - r, r * 1.6, 0, Math.PI * 2); g.stroke(); }
      drawn.push({ id: m.id, x: m.x, y: base + m.y + 1.6, z: m.z, info: m.info, flags: m.flags });
    }
    w.ghosts.forEach((gh, i) => { const x = sx(-5 + (i % 8) * 1.4), y = sy(3 + Math.sin(now * 2 + i) * 0.3 + Math.floor(i / 8), -5); g.fillStyle = 'rgba(200,220,255,0.45)'; g.beginPath(); g.arc(x, y, W * 0.02, 0, Math.PI * 2); g.fill(); });
    // darkness from low fuel
    g.fillStyle = `rgba(0,0,0,${(1 - fuel) * 0.55})`; g.fillRect(0, 0, W, H);
    if (now - flashT < 0.4) { g.fillStyle = `rgba(255,255,255,${0.6 * (1 - (now - flashT) / 0.4)})`; g.fillRect(0, 0, W, H); }
    g.setTransform(1, 0, 0, 1, 0, 0);
  }
  return {
    kind: '2d',
    resize(w, h, p) { W = w; H = h; pr = p; canvas.width = Math.round(w * p); canvas.height = Math.round(h * p); },
    setQuality() {}, frame, project,
    fx(e) { if (e.k === 'trap' || e.k === 'matk' || e.k === 'mlose') shake = 0.5; if (e.k === 'reveal' || e.k === 'floor') flashT = time; },
    speaking() {},
    doorTop(i) { if (!lastW) return null; const xs = lastW.nd ? doorX(lastW.nd) : []; return xs[i] === undefined ? null : { x: sx(xs[i]), y: sy(5.9, DOOR_Z), vis: true }; },
    monsterTop() { return lastW && lastW.mo ? { x: sx(0), y: sy(lastW.mo.b ? 4.5 : 3.4, -3.5), vis: true } : null; },
    miraTop() { return { x: W * 0.12, y: H * 0.3, vis: true }; },
    drawn: () => drawn,
    thunder: () => false,
    stats: () => ({ kind: '2d' }),
    dispose() {}, loseContext() {},
  };
}
