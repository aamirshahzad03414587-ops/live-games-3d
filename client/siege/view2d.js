// 2D canvas fallback for Dark Dimension Siege (used when WebGL is missing or keeps crashing). Same API as view3d.
import { WALL_Y, GATE_Z, RIFT_Z, CLASSES } from '../../public/shared/siege-data.js';
import { SFLAG } from '../../public/shared/siege-sim.js';

const hex = (c) => '#' + (c >>> 0).toString(16).padStart(6, '0');
const ECOL = ['#d02a3a', '#6a4a8a', '#9a5aff'];
export function createSiegeView2D(canvas) {
  const g = canvas.getContext('2d');
  let W = 390, H = 844, pr = 1, time = 0, shake = 0, flashT = -9, endSaved = null, bossP = null;
  const drawn = [], epos = new Map(), pops = [];
  // simple perspective: z from the rift (-36) to the wall (6) maps to 20%..62% of the height
  const depth = (z) => Math.max(0, Math.min(1, (z - RIFT_Z + 2) / (6 - RIFT_Z + 2)));
  const sc = (z) => 0.35 + 0.65 * depth(z);
  const sx = (x, z) => W / 2 + x * (W / 24) * sc(z);
  const sy = (y, z) => H * 0.2 + depth(z) * H * 0.42 - y * H * 0.018 * sc(z);
  const project = (x, y, z) => ({ x: sx(x, z), y: sy(y, z), vis: true });
  function frame(w, dt, now) {
    time = now; drawn.length = 0; epos.clear(); bossP = null;
    g.setTransform(pr, 0, 0, pr, 0, 0);
    const k = shake > 0 ? (shake -= dt, (Math.random() - 0.5) * 10 * shake) : 0;
    g.translate(k, 0);
    const dawn = w.phase === 'ending' && endSaved === true, doom = w.phase === 'ending' && endSaved === false;
    const sky = g.createLinearGradient(0, 0, 0, H * 0.6); sky.addColorStop(0, dawn ? '#5a7ad8' : '#08051a'); sky.addColorStop(1, dawn ? '#ffb070' : doom ? '#5a0a14' : '#3a1240');
    g.fillStyle = sky; g.fillRect(-10, 0, W + 20, H);
    // rift
    if (!dawn) { const rx = sx(0, RIFT_Z), ry = sy(7.5, RIFT_Z), rr = W * 0.16 * (1 + 0.05 * Math.sin(now * 3));
      const rg = g.createRadialGradient(rx, ry, rr * 0.2, rx, ry, rr * 1.6); rg.addColorStop(0, '#1a0020'); rg.addColorStop(0.45, '#b040ff'); rg.addColorStop(0.7, 'rgba(255,40,90,0.5)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg; g.beginPath(); g.ellipse(rx, ry, rr * 1.6, rr * 2, 0, 0, Math.PI * 2); g.fill(); }
    // ground
    const gy = sy(0, RIFT_Z); const gr = g.createLinearGradient(0, gy, 0, H); gr.addColorStop(0, '#2a1a34'); gr.addColorStop(1, '#120a18'); g.fillStyle = gr; g.fillRect(-10, gy, W + 20, H);
    // ruins
    g.fillStyle = '#1a1424'; for (let i = 0; i < 10; i++) { const z = -40 + i * 4.2; for (const s of [-1, 1]) { const x = s * (11 + (i % 3) * 4), h = 5 + ((i * 7) % 9); g.fillRect(sx(x, z) - 14 * sc(z), sy(h, z), 28 * sc(z), sy(0, z) - sy(h, z)); } }
    // creatures
    const list = [...w.enemies].sort((a, b) => a.z - b.z);
    for (const e of list) {
      const s = sc(e.z), x = sx(e.x, e.z), y = sy(e.k === 2 ? 3.2 : 0, e.z);
      const r = (e.k === 1 ? 16 : e.k === 3 ? 44 : 9) * s;
      g.fillStyle = e.k === 3 ? (w.bo && w.bo.id === 'mastermind' ? '#2a1030' : '#e8e4ee') : ECOL[e.k];
      g.beginPath(); g.ellipse(x, y - r, r, r * 1.2, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = e.k === 3 ? '#ff2a4a' : '#ffe14a'; g.fillRect(x - r * 0.4, y - r * 1.3, r * 0.22, r * 0.15); g.fillRect(x + r * 0.2, y - r * 1.3, r * 0.22, r * 0.15);
      epos.set(e.id, { x, y: y - r * 2.2 }); if (e.k === 3) bossP = { x, y: y - r * 2.6, vis: true };
    }
    // wall
    const wy = sy(WALL_Y, GATE_Z), wb = sy(0, GATE_Z);
    g.fillStyle = '#5a5068'; g.fillRect(-10, wy, W + 20, wb - wy + H * 0.08);
    g.fillStyle = '#7a6e8a'; for (let i = 0; i < 14; i++) g.fillRect(i * W / 13 - 6, wy - 10, 16, 10);
    const bar = Math.max(0, Math.min(100, w.bar || 0)) / 100;
    if (bar > 0.02) { g.strokeStyle = `rgba(110,200,255,${0.25 + bar * 0.6})`; g.lineWidth = 4; g.beginPath(); g.ellipse(W / 2, wb, W * 0.52, H * 0.16, 0, Math.PI, 0); g.stroke(); }
    // defenders
    for (const m of w.members) {
      const x = sx(m.x, m.z), y = m.z < GATE_Z - 0.1 ? sy(0, m.z) : wy + 4;
      const s = 9 * sc(m.z);
      g.fillStyle = m.flags & SFLAG.down ? '#555' : hex(m.info?.color ?? 0xffffff); g.beginPath(); g.arc(x, y - s, s, 0, Math.PI * 2); g.fill();
      g.fillStyle = hex(CLASSES[m.cls]?.color ?? 0xffffff); g.fillRect(x - s * 0.5, y - s * 2.6, s, s * 0.6);
      if (m.flags & SFLAG.asc) { g.strokeStyle = '#ffd34d'; g.lineWidth = 2; g.beginPath(); g.arc(x, y - s, s * 1.6, 0, Math.PI * 2); g.stroke(); }
      drawn.push({ id: m.id, x: m.x, y: 0, z: m.z, sx: x, sy: y - s * 3, info: m.info, flags: m.flags, cls: m.cls, hp: m.hp });
    }
    for (const a of w.allies) { const x = sx(a.x, a.z), y = a.k ? H * 0.22 + Math.sin(now * 2) * 6 : sy(0, a.z); g.font = `${a.k ? 46 : 28}px sans-serif`; g.textAlign = 'center'; g.fillText(a.k ? '🐉' : '🛡️', x, y); }
    for (let i = pops.length - 1; i >= 0; i--) { const p = pops[i], kk = (now - p.t) / 0.4; if (kk > 1) { pops.splice(i, 1); continue; } g.fillStyle = `rgba(${p.c},${1 - kk})`; g.beginPath(); g.arc(p.x, p.y, 6 + kk * 18, 0, Math.PI * 2); g.fill(); }
    if (now - flashT < 0.2) { g.fillStyle = `rgba(255,255,255,${0.35 * (1 - (now - flashT) / 0.2)})`; g.fillRect(0, 0, W, H); }
  }
  function fx(e) {
    if (e.k === 'kill') { const p = project(e.x, 0.6, e.z); pops.push({ x: p.x, y: p.y, t: time, c: '200,90,255' }); }
    if (e.k === 'wallhit' || e.k === 'toll' || e.k === 'bossatk') shake = Math.max(shake, 0.5);
    if (e.k === 'ult' || e.k === 'bossdown' || e.k === 'end') { flashT = time; shake = Math.max(shake, 0.6); }
    if (e.k === 'end') endSaved = !!e.saved;
    if (e.k === 'intro' || e.k === 'gather') endSaved = null;
  }
  return {
    kind: '2d',
    resize(w, h, p) { W = w; H = h; pr = Math.min(p, 1.5); canvas.width = Math.round(w * pr); canvas.height = Math.round(h * pr); canvas.style.width = w + 'px'; canvas.style.height = h + 'px'; },
    setQuality() {}, frame, fx,
    project: (x, y, z) => { const d = drawn.find((o) => o.x === x && o.z === z); return d ? { x: d.sx, y: d.sy, vis: true } : project(x, y, z); },
    enemyTop(id) { const p = epos.get(id); return p ? { ...p, vis: true } : null; },
    bossTop: () => bossP,
    riftAt: () => project(0, 7.5, RIFT_Z),
    drawn: () => drawn, shake(v) { shake = Math.max(shake, v); },
    stats: () => ({ kind: '2d', chars: drawn.length, enemies: epos.size }),
    dispose() {},
  };
}
