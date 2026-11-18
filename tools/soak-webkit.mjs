// iPhone-profile WebKit soak for the Battle Royale overlay: a busy fake LIVE (200+ viewers, gifts, likes, follows,
// shares) runs on the server while WebKit (iPhone 13 profile) renders /br?mode=phone. Every 30 s it samples the
// WebKit web process memory (PSS), frames drawn, renderer stats, quality level and the JS heap. At LOSE_AT minutes it
// forces a WebGL context loss + restore to prove the recovery path.
// Usage: BASE=http://localhost:3940 MINUTES=10 OUT=screenshots/soak-webkit.json node tools/soak-webkit.mjs
// The server must run without ADMIN_KEY (localhost admin) or pass ADMIN_KEY=...
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const { webkit, devices } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const BASE = process.env.BASE || 'http://localhost:3940', MINUTES = Number(process.env.MINUTES || 10), OUT = process.env.OUT || 'screenshots/soak-webkit.json';
const LOSE_AT = Number(process.env.LOSE_AT || 3), KEY = process.env.ADMIN_KEY || '';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const post = (p, body) => fetch(BASE + '/api/admin' + p, { method: 'POST', headers: { 'content-type': 'application/json', ...(KEY ? { 'x-admin-key': KEY } : {}) }, body: JSON.stringify(body || {}) }).then((r) => r.json()).catch((e) => ({ err: e.message }));
// WebKitGTK on this Linux box has no media plugins: setting any <audio>.src crashes its web process (a test-machine
// limit, not an iPhone one; fortune-live's soak stubs it the same way). So <audio> is stubbed as "sound blocked".
const STUB = `Object.defineProperty(HTMLMediaElement.prototype, 'src', { configurable: true, set(v) { this.__s = v; }, get() { return this.__s || ''; } });
HTMLMediaElement.prototype.play = function () { return Promise.reject(new DOMException('stub', 'NotAllowedError')); };
HTMLMediaElement.prototype.load = function () {};`;
const browser = await webkit.launch();
const ctx = await browser.newContext({ ...devices['iPhone 13'] });
await ctx.addInitScript(STUB);
const page = await ctx.newPage();
let crashed = 0; const errs = [];
page.on('crash', () => { crashed++; console.log('PAGE CRASHED'); });
page.on('pageerror', (e) => errs.push(e.message.slice(0, 200)));
await post('/crowd', { mode: 'busy', minutes: MINUTES + 2 });
await page.goto(`${BASE}/br?mode=phone&diag=0`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__br && window.__br.view, null, { timeout: 60000 });
await sleep(3000);
await page.evaluate(() => { window.__raf = 0; const f = () => { window.__raf++; requestAnimationFrame(f); }; requestAnimationFrame(f); });
function pss() {
  const procs = [];
  for (const line of execSync('ps -eo pid=,ppid=,args=', { maxBuffer: 1 << 24 }).toString().split('\n')) { const m = line.trim().match(/^(\d+)\s+(\d+)\s+(.*)$/); if (m) procs.push({ pid: +m[1], ppid: +m[2], args: m[3] }); }
  const mine = new Set([process.pid]); let grew = true;
  while (grew) { grew = false; for (const p of procs) if (!mine.has(p.pid) && mine.has(p.ppid)) { mine.add(p.pid); grew = true; } }
  const get = (pid) => { try { return Number(fs.readFileSync(`/proc/${pid}/smaps_rollup`, 'utf8').match(/^Pss:\s+(\d+)/m)[1]); } catch { return 0; } };
  let web = 0; for (const p of procs) if (mine.has(p.pid) && /WebProcess/.test(p.args)) web += get(p.pid);
  return +(web / 1024).toFixed(1);
}
let lastRaf = 0, lastT = Date.now(), lostDone = false;
async function sample(tMin) {
  const p = await page.evaluate(() => { const b = window.__br; const st = b.stats() || {}; return { kind: b.view.kind, level: b.level, fps: +b.fps.toFixed(1), phase: b.world.phase, fighters: b.world.fighters.length, calls: st.calls, tris: st.tris, tex: st.tex, geo: st.geo, chars: st.chars, parts: st.parts, raf: window.__raf || 0, nodes: document.getElementsByTagName('*').length, snaps: b.N.snaps, ev: b.N.ev, errs: b.N.err, canvas: [document.getElementById('gl').width, document.getElementById('gl').height] }; });
  const now = Date.now(), rafFps = +((p.raf - lastRaf) / ((now - lastT) / 1000)).toFixed(1); lastRaf = p.raf; lastT = now;
  return { tMin: +tMin.toFixed(2), webProcessMB: pss(), rafFps, ...p, crashed };
}
const samples = []; const t0 = Date.now(); let next = 0, ctxTest = null;
while (Date.now() - t0 < MINUTES * 60e3) {
  const el = (Date.now() - t0) / 60e3;
  if (crashed || page.isClosed()) { samples.push({ tMin: +el.toFixed(2), crashed: 1 }); break; }
  if (el >= next) { const s = await sample(el).catch((e) => ({ tMin: +el.toFixed(2), error: e.message.slice(0, 120) })); samples.push(s); console.log(JSON.stringify(s)); next += 0.5; }
  if (!lostDone && el >= LOSE_AT) {
    lostDone = true;
    ctxTest = await page.evaluate(async () => {
      const c = document.getElementById('gl'); const gl = c.getContext('webgl2') || c.getContext('webgl'); const ext = gl && gl.getExtension('WEBGL_lose_context');
      if (!ext) return { skipped: 'no WEBGL_lose_context' };
      ext.loseContext(); await new Promise((r) => setTimeout(r, 1200)); ext.restoreContext(); await new Promise((r) => setTimeout(r, 2500));
      return { kindAfter: window.__br.view.kind, framesAfter: window.__br.fps, level: window.__br.level };
    }).catch((e) => ({ error: e.message }));
    console.log('context loss test', JSON.stringify(ctxTest));
  }
  await sleep(1000);
}
if (!page.isClosed() && !crashed) { await page.screenshot({ path: OUT.replace(/\.json$/, '.png') }); samples.push(await sample((Date.now() - t0) / 60e3).catch((e) => ({ error: e.message }))); }
await post('/crowd', { mode: 'off' });
const ok = samples.filter((s) => s.webProcessMB);
const peak = (k) => Math.max(0, ...ok.map((x) => x[k] || 0));
const firstMB = ok[2]?.webProcessMB, lastMB = ok.at(-1)?.webProcessMB;
const summary = { minutes: MINUTES, crashed, kind: ok[0]?.kind, canvas: ok[0]?.canvas, peakWebProcessMB: peak('webProcessMB'), webProcessMBat1min: firstMB, webProcessMBend: lastMB, driftMB: +(lastMB - firstMB).toFixed(1),
  maxFighters: peak('fighters'), maxCalls: peak('calls'), maxTris: peak('tris'), textures: ok.at(-1)?.tex, geometries: ok.at(-1)?.geo, avgRafFps: +(ok.slice(1).reduce((a, s) => a + (s.rafFps || 0), 0) / Math.max(1, ok.length - 1)).toFixed(1),
  levels: [...new Set(ok.map((s) => s.level))], contextLossTest: ctxTest, pageErrors: errs.slice(0, 10) };
console.log('SUMMARY', JSON.stringify(summary));
fs.mkdirSync(OUT.replace(/\/[^/]*$/, ''), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ summary, samples }, null, 1));
await browser.close();
