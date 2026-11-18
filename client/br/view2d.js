// 2D fallback for the Battle Royale (no WebGL, or WebGL kept crashing): one canvas, a tilted top-down arena,
// the same events and HUD. Cheap and safe on any phone.
const FLAG = { alive: 1, shield: 2, speed: 4, giant: 8, rage: 16, dash: 32, dance: 64, air: 128, crown: 256, cmd: 512, low: 1024, bot: 2048 };
const hex = (c) => '#' + (c >>> 0).toString(16).padStart(6, '0').slice(-6);

export function createView2D(canvas, opts = {}) {
  const g = canvas.getContext('2d');
  const R = opts.platform || 20;
  let W = 390, H = 844, pr = 1, scale = 8, cx = 195, cy = 380, time = 0, shakeV = 0;
  const parts = [], rings = [], meteors = [], vis = new Map();
  let quality = { maxChars: 60, particles: 1 };
  const P = (x, y, z) => ({ x: cx + x * scale, y: cy + z * scale * 0.62 - (y || 0) * scale * 0.9 });
  function frame(world, dt, now) {
    time = now;
    shakeV = Math.max(0, shakeV - dt * 2);
    const sx = (Math.random() - 0.5) * shakeV * 14, sy = (Math.random() - 0.5) * shakeV * 14;
    g.setTransform(pr, 0, 0, pr, sx * pr, sy * pr);
    const bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, '#120a2a'); bg.addColorStop(0.45, '#4a1f6e'); bg.addColorStop(0.75, '#ff7a5c'); bg.addColorStop(1, '#2a1240');
    g.fillStyle = bg; g.fillRect(-20, -20, W + 40, H + 40);
    // platform
    g.save(); g.translate(cx, cy); g.scale(1, 0.62);
    g.fillStyle = '#241a3a'; g.beginPath(); g.arc(0, 18, R * scale, 0, 6.283); g.fill();
    const fl = g.createRadialGradient(0, 0, 0, 0, 0, R * scale); fl.addColorStop(0, '#6a5a9a'); fl.addColorStop(1, '#3a2f68');
    g.fillStyle = fl; g.beginPath(); g.arc(0, 0, R * scale, 0, 6.283); g.fill();
    g.strokeStyle = 'rgba(255,214,120,0.6)'; g.lineWidth = 2; for (const rr of [0.18, 0.62]) { g.beginPath(); g.arc(0, 0, R * scale * rr, 0, 6.283); g.stroke(); }
    g.strokeStyle = '#d9a441'; g.lineWidth = 5; g.beginPath(); g.arc(0, 0, R * scale, 0, 6.283); g.stroke();
    if (world.phase === 'battle') {
      g.fillStyle = 'rgba(120,20,170,0.5)'; g.beginPath(); g.arc(0, 0, R * scale + 2, 0, 6.283); g.arc(0, 0, world.r * scale, 0, 6.283, true); g.fill();
      g.strokeStyle = 'rgba(255,140,255,0.95)'; g.lineWidth = 4; g.beginPath(); g.arc(0, 0, world.r * scale, 0, 6.283); g.stroke();
      if (world.rt < world.r - 0.3) { g.setLineDash([8, 8]); g.strokeStyle = 'rgba(255,255,255,0.8)'; g.lineWidth = 2; g.beginPath(); g.arc(0, 0, world.rt * scale, 0, 6.283); g.stroke(); g.setLineDash([]); }
    }
    g.restore();
    // rings
    for (let i = rings.length - 1; i >= 0; i--) { const r = rings[i], k = (now - r.t0) / r.dur; if (k >= 1) { rings.splice(i, 1); continue; } const p = P(r.x, 0, r.z); g.strokeStyle = r.col; g.globalAlpha = r.warn ? 0.5 + 0.5 * Math.sin(now * 14) : 1 - k; g.lineWidth = 3; g.beginPath(); g.ellipse(p.x, p.y, (r.warn ? r.r1 : r.r0 + (r.r1 - r.r0) * k) * scale, (r.warn ? r.r1 : r.r0 + (r.r1 - r.r0) * k) * scale * 0.62, 0, 0, 6.283); g.stroke(); }
    g.globalAlpha = 1;
    // fighters, back to front
    const fs = world.fighters.slice(0, quality.maxChars).sort((a, b) => a.z - b.z);
    for (const f of fs) {
      let s = vis.get(f.id); if (!s) { s = { hit: -9, punch: -9 }; vis.set(f.id, s); }
      const gs = f.flags & FLAG.giant ? 2 : 1, col = hex(f.info?.color ?? 0xffffff), flash = now - s.hit < 0.12;
      const base = P(f.x, 0, f.z), p = P(f.x, f.y, f.z), u = scale * 0.5 * gs;
      g.fillStyle = 'rgba(0,0,0,0.3)'; g.beginPath(); g.ellipse(base.x, base.y, u * 1.1, u * 0.45, 0, 0, 6.283); g.fill();
      const bob = f.flags & FLAG.dance ? Math.abs(Math.sin(now * 9)) * u : 0;
      g.fillStyle = flash ? '#fff' : col; g.beginPath(); g.ellipse(p.x, p.y - u * 1.0 - bob, u * 0.75, u * 0.9, 0, 0, 6.283); g.fill();
      g.fillStyle = flash ? '#fff' : '#ffd9b8'; g.beginPath(); g.arc(p.x, p.y - u * 2.3 - bob, u * 0.95, 0, 6.283); g.fill();
      g.fillStyle = flash ? '#fff' : col; g.beginPath(); g.arc(p.x, p.y - u * 2.45 - bob, u * 1.0, Math.PI, 0); g.fill();
      g.fillStyle = '#1b1430'; const fx = Math.cos(f.face) * u * 0.3; g.fillRect(p.x - u * 0.38 + fx, p.y - u * 2.3 - bob, u * 0.18, u * 0.3); g.fillRect(p.x + u * 0.2 + fx, p.y - u * 2.3 - bob, u * 0.18, u * 0.3);
      if (f.flags & FLAG.shield) { g.strokeStyle = 'rgba(94,232,255,0.9)'; g.lineWidth = 2; g.beginPath(); g.arc(p.x, p.y - u * 1.6, u * 2.2, 0, 6.283); g.stroke(); }
      if (f.flags & FLAG.crown) { g.fillStyle = '#ffd34d'; g.fillRect(p.x - u * 0.6, p.y - u * 3.8 - bob, u * 1.2, u * 0.45); }
      if (now - s.punch < 0.2) { g.fillStyle = col; g.beginPath(); g.arc(p.x + Math.cos(f.face) * u * 1.6, p.y - u * 1.2 + Math.sin(f.face) * u, u * 0.45, 0, 6.283); g.fill(); }
    }
    // meteors
    for (let i = meteors.length - 1; i >= 0; i--) { const m = meteors[i], k = (now - m.t0) / m.d; if (k >= 1) { meteors.splice(i, 1); continue; } const p = P(m.x + (1 - k * k) * 6, (1 - k * k) * 24, m.z - (1 - k * k) * 6); g.fillStyle = '#ffb060'; g.beginPath(); g.arc(p.x, p.y, scale * 0.6, 0, 6.283); g.fill(); }
    // particles
    for (let i = parts.length - 1; i >= 0; i--) { const q = parts[i]; q.t += dt; if (q.t > q.life) { parts.splice(i, 1); continue; } q.vy -= q.gr * dt; q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt; const p = P(q.x, q.y, q.z); g.globalAlpha = 1 - q.t / q.life; g.fillStyle = q.col; g.fillRect(p.x - 2, p.y - 2, 4, 4); }
    g.globalAlpha = 1;
  }
  function burst(x, y, z, n, col, sp = 4) { n = Math.round(n * (quality.particles || 1)); for (let i = 0; i < n && parts.length < 400; i++) { const a = Math.random() * 6.283; parts.push({ x, y, z, vx: Math.cos(a) * sp * Math.random(), vy: Math.random() * sp, vz: Math.sin(a) * sp * Math.random(), gr: 8, t: 0, life: 0.6, col: Array.isArray(col) ? col[i % col.length] : col }); } }
  const find = (id, world) => world.fighters.find((f) => f.id === id);
  function fx(e, world) {
    const now = time;
    if (e.k === 'atk') { const s = vis.get(e.a); if (s) s.punch = now; }
    else if (e.k === 'hit') { const s = vis.get(e.b); if (s) s.hit = now; const f = find(e.b, world); if (f) burst(f.x, 0.8, f.z, e.c ? 10 : 4, ['#fff', '#ffe066']); if (e.c || e.m) shakeV = Math.min(1, shakeV + 0.15); }
    else if (e.k === 'ko') { const f = find(e.b, world); if (f) { burst(f.x, 0.8, f.z, 18, ['#fff', '#ffe066', '#ff6ad5', '#5ef0ff'], 6); rings.push({ x: f.x, z: f.z, t0: now, dur: 0.4, r0: 0.3, r1: 3, col: '#ffd6ff' }); } shakeV = Math.min(1, shakeV + 0.2); vis.delete(e.b); }
    else if (e.k === 'meteor') { meteors.push({ x: e.x, z: e.z, t0: now, d: Math.max(0.3, e.d) }); rings.push({ x: e.x, z: e.z, t0: now, dur: e.d, r1: 2.4, warn: 1, col: '#ff3b2f' }); }
    else if (e.k === 'boom') { burst(e.x, 0.5, e.z, 30, ['#fff', '#ffd36a', '#ff8a3d'], 9); rings.push({ x: e.x, z: e.z, t0: now, dur: 0.5, r0: 0.5, r1: e.r * 1.6, col: '#ffb060' }); shakeV = Math.min(1, shakeV + 0.5); }
    else if (e.k === 'win') { for (let i = 0; i < 6; i++) burst((Math.random() - 0.5) * 6, 6, (Math.random() - 0.5) * 3, 12, ['#ff4d5e', '#ffd23f', '#3ec7ff', '#9be564', '#ff6fb5'], 3); }
    else if (e.k === 'nuke') shakeV = 1;
  }
  return {
    kind: '2d',
    resize(w, h, p) { W = w; H = h; pr = p; canvas.width = Math.round(w * p); canvas.height = Math.round(h * p); scale = Math.min(w / (R * 2.3), 13); cx = w / 2; cy = h * 0.47; },
    setQuality(q) { quality = { ...quality, ...q }; },
    frame, fx,
    project(x, y, z) { const p = P(x, y, z); return { x: p.x, y: p.y - scale * 0.7, ok: true }; },
    drawn() { return null; },
    headY(f) { return (f.flags & FLAG.giant ? 2 : 1) * 2.2; },
    stats() { return { calls: 0, tris: 0, chars: 0, parts: parts.length }; },
    dispose() {},
  };
}
