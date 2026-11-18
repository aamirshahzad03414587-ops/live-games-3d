// Renders the vertical demo video (with sound) of Mira's Haunted Tower: the real overlay in local mode (?render=1) on
// a virtual clock, driven by a scripted LIVE (joins, door votes, likes, gifts, follows, a boss fight, a riddle answer),
// one screenshot per frame; Mira's voice comes from the server's free TTS, the sound effects are mixed offline.
// A few door contents are pinned so the 56 s show every mechanic (a trap, the boss, a riddle).
// Needs the server running on BASE (for /api/say). Usage: node tools/render-tower-demo.mjs [out.mp4] [seconds]
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const BASE = process.env.BASE || 'http://localhost:3940';
const OUT = process.argv[2] || 'screenshots/tower-demo.mp4', SECONDS = Number(process.argv[3] || 56), FPS = 30;
const TMP = '/tmp/towerdemo/'; fs.rmSync(TMP, { recursive: true, force: true }); fs.mkdirSync(TMP, { recursive: true });
const W = Number(process.env.W || 360), H = Number(process.env.H || 640), DPR = Number(process.env.DPR || 2);
const STILLS = (process.env.STILLS || '3,11,17.5,29,47,55').split(',').map(Number);

// ---- the scripted LIVE (virtual seconds)
const NAMES = ['Sara_m', 'Ali.official', 'Hina🌸', 'Omar_99', 'Zara', 'Bilal_pk', 'Noor.live', 'Ayan', 'Esha✨', 'Faraz22', 'Iman', 'Junaid_07', 'Kinza', 'Laiba', 'Moiz', 'Nimra'];
const uid = (n) => n.toLowerCase().replace(/[^\w.]/g, '');
const S = [];
const at = (t, type, name, extra = {}) => S.push({ t, ev: { type, uid: uid(name), name, ...extra } });
NAMES.forEach((n, i) => at(0.3 + i * 0.25, 'chat', n, { text: ['hi', 'join', 'lets go', 'me!', 'hello from dubai', 'spooky'][i % 6] }));
at(2.4, 'follow', 'Omar_99'); at(3.0, 'like', 'Hina🌸', { count: 20 }); at(3.8, 'share', 'Noor.live');
// floor 4 vote (7.5 – 13 s): Mira's prophecy says door 2… the chat goes for door 1 anyway (a trap)
at(8.6, 'gift', 'Zara', { giftName: 'Rose', coins: 1 });
NAMES.forEach((n, i) => at(8.0 + i * 0.28, 'chat', n, { text: i % 4 === 1 ? '2' : i % 7 === 3 ? '3' : '1' }));
at(12.2, 'like', 'Kinza', { count: 25 });
// after the trap: a rescue
at(18.6, 'gift', 'Ayan', { giftName: 'Doughnut', coins: 30 });
// floor 5: boss fight (≈ 24.3 s on): spam, likes, a Money Gun and a Corgi
for (let i = 0; i < 44; i++) at(25.0 + i * 0.2, 'chat', NAMES[(i * 7) % 16], { text: i % 5 === 0 ? 'attack' : ['⚔️', 'hit it', 'attack!', 'go go', '👊'][i % 5] });
for (let i = 0; i < 8; i++) at(25.4 + i * 1.1, 'like', NAMES[(i * 3) % 16], { count: 15 });
at(27.0, 'gift', 'Bilal_pk', { giftName: 'Money Gun', coins: 500 });
at(30.5, 'gift', 'Esha✨', { giftName: 'Corgi', coins: 100 });
at(31.5, 'gift', 'Iman', { giftName: 'Finger Heart', coins: 5 });
// floor 6 vote: door 2 → a riddle, answered by Laiba
NAMES.forEach((n, i) => at(42.6 + i * 0.25, 'chat', n, { text: i % 5 === 2 ? '3' : '2' }));
at(46.0, 'follow', 'Moiz');
at(51.4, 'chat', 'Omar_99', { text: 'a shadow?' });
at(52.6, 'chat', 'Laiba', { answer: true });
S.sort((a, b) => a.t - b.t);

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR })).newPage();
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
const url = `${BASE}/tower?render=1&mode=pc&q=0&seed=21&gatherSeconds=5&enterSeconds=2.5&voteSeconds=5.5&revealSeconds=2.4&trapSeconds=3.5&treasureSeconds=3&climbSeconds=3.4&victorySeconds=3&bossSeconds=16&riddleSeconds=14&startFloor=4&minParty=6`;
await page.goto(url);
await page.waitForFunction(() => window.__render && window.__towerUI.view);
// pin door contents on chosen floors (the sim still resolves everything itself)
const PIN = { 4: ['trap', 'treasure', 'riddle'], 6: ['trap', 'riddle', 'monster'] };
const pinned = new Set();
let si = 0; const t0 = Date.now(); let lastInfo = null;
for (let f = 0; f < SECONDS * FPS; f++) {
  const t = f / FPS;
  while (si < S.length && S[si].t <= t) {
    const ev = { ...S[si].ev };
    if (ev.answer) { delete ev.answer; ev.text = await page.evaluate(() => (window.__tower.riddle ? 'is it ' + window.__tower.riddle.a[0] : 'candle')); }
    await page.evaluate((e) => window.__input(e), ev); si++;
  }
  if (lastInfo && lastInfo.phase === 'vote' && PIN[lastInfo.floor] && !pinned.has(lastInfo.floor)) {
    pinned.add(lastInfo.floor);
    await page.evaluate((k) => { const s = window.__tower; s.kinds = k.slice(0, s.doors); if (s.prophecy >= 0) s.prophecy = s.safeDoor(); }, PIN[lastInfo.floor]);
  }
  // a stuck frame (crashed renderer / starved box) fails loudly instead of hanging forever
  lastInfo = await Promise.race([page.evaluate((dt) => window.__render.frame(dt), 1 / FPS), new Promise((_, rej) => setTimeout(() => rej(new Error(`frame ${f} (${t.toFixed(2)}s) timed out`)), 90000))]);
  const fn = `${TMP}f${String(f).padStart(5, '0')}.jpg`;
  await page.screenshot({ path: fn, type: 'jpeg', quality: 90 });
  if (f % 150 === 0) console.log(`${t.toFixed(1)}s ${JSON.stringify(lastInfo)}  (${((Date.now() - t0) / 1000).toFixed(0)} s real)`);
  for (const s of STILLS) if (Math.abs(t - s) < 0.5 / FPS) fs.copyFileSync(fn, `screenshots/tower-still-${String(s).replace('.', '_')}s.jpg`);
}
console.log('mixing audio…');
const wav = await page.evaluate((s) => window.__render.mix(s), SECONDS);
fs.writeFileSync(TMP + 'audio.wav', Buffer.from(wav, 'base64'));
await browser.close();
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', `${TMP}f%05d.jpg`, '-i', TMP + 'audio.wav', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-vf', 'scale=720:1280:flags=lanczos', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', OUT]);
console.log('wrote', OUT);
