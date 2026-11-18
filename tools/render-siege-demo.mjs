// Renders the vertical demo video (with sound) of Dark Dimension Siege: the real overlay in local mode (?render=1) on a
// virtual clock, driven by a scripted LIVE (joins with classes, likes, gifts of every tier, follows, shares, a boss
// fight, a story vote), one screenshot per frame. The narrator voice comes from the server's free TTS (/api/say),
// the sound effects are mixed offline. The cold open is the short 2-card lore (the real first session shows all 6).
// Needs the server running on BASE (for /api/say). Usage: node tools/render-siege-demo.mjs [out.mp4] [seconds]
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const BASE = process.env.BASE || 'http://localhost:3940';
const OUT = process.argv[2] || 'screenshots/siege-demo.mp4', SECONDS = Number(process.argv[3] || 56), FPS = 30;
const TMP = '/tmp/siegedemo/'; fs.rmSync(TMP, { recursive: true, force: true }); fs.mkdirSync(TMP, { recursive: true });
const W = Number(process.env.W || 360), H = Number(process.env.H || 640), DPR = Number(process.env.DPR || 2);
const STILLS = (process.env.STILLS || '4,11,22,30,36,47,54').split(',').map(Number);
const LORE = process.env.LORE || '0,5';

// ---- the scripted LIVE (virtual seconds)
const NAMES = ['Sara_m', 'Ali.official', 'Hina🌸', 'Omar_99', 'Zara', 'Bilal_pk', 'Noor.live', 'Ayan', 'Esha✨', 'Faraz22', 'Iman', 'Junaid_07', 'Kinza', 'Laiba', 'Moiz', 'Nimra', 'Rida', 'Taha', 'Usman', 'Wajiha'];
const CLS = ['mage', 'warrior', 'archer', 'healer', 'hi', 'lets go', '🔮', '🏹'];
const uid = (n) => n.toLowerCase().replace(/[^\w.]/g, '');
const S = [];
const at = (t, type, name, extra = {}) => S.push({ t, ev: { type, uid: uid(name), name, ...extra } });
// people arrive during the cold open and the gather
NAMES.forEach((n, i) => at(6 + i * 0.45, 'chat', n, { text: CLS[i % CLS.length] }));
at(9.5, 'follow', 'Omar_99'); at(12.0, 'like', 'Hina🌸', { count: 40 });
// wave 3 (≈ 19.5 s on): spam + gifts
for (let i = 0; i < 40; i++) at(19.5 + i * 0.2, 'chat', NAMES[(i * 7) % NAMES.length], { text: ['⚔️', 'fire!', 'go go', 'hold the wall', 'archer', '🔮'][i % 6] });
at(20.4, 'gift', 'Zara', { giftName: 'Rose', coins: 1 });
at(21.6, 'gift', 'Iman', { giftName: 'Finger Heart', coins: 5 });
at(23.0, 'gift', 'Ayan', { giftName: 'Doughnut', coins: 30 });
for (let i = 0; i < 6; i++) at(21 + i * 1.2, 'like', NAMES[(i * 3) % NAMES.length], { count: 60 });
at(25.5, 'share', 'Noor.live');
at(26.2, 'gift', 'Esha✨', { giftName: 'Hand Hearts', coins: 100 });
// the boss (≈ 28 s on)
for (let i = 0; i < 60; i++) at(28.5 + i * 0.17, 'chat', NAMES[(i * 11) % NAMES.length], { text: ['attack', 'hit him', '⚔️', 'for earth!', '💥'][i % 5] });
for (let i = 0; i < 6; i++) at(29 + i * 1.3, 'like', NAMES[(i * 5) % NAMES.length], { count: 60 });
at(31.5, 'gift', 'Bilal_pk', { giftName: 'Money Gun', coins: 500 });
at(34.0, 'gift', 'Kinza', { giftName: 'Rose', coins: 1 });
at(35.0, 'gift', 'Sara_m', { giftName: 'Money Gun', coins: 500 });
// the story vote: hunt the Mastermind wins
for (let i = 0; i < NAMES.length; i++) at(0, 'vote', NAMES[i], { text: i % 4 === 1 ? '1' : i % 3 ? '2' : 'hunt' });
S.sort((a, b) => a.t - b.t);
const votes = S.filter((s) => s.ev.type === 'vote'); const rest = S.filter((s) => s.ev.type !== 'vote');

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR })).newPage();
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
const url = `${BASE}/siege?render=1&mode=pc&q=0&seed=11&lore=${LORE}&gatherSeconds=4&chapterSeconds=2.6&startWave=2&waveCap=7&breakSeconds=1.2&victorySeconds=2.2&voteSeconds=5&choiceSeconds=3.4&minDefenders=6&enemyHpMul=${process.env.HPMUL || 0.5}`;
await page.goto(url);
await page.waitForFunction(() => window.__render && window.__siegeUI.view);
let si = 0, vi = -1; const t0 = Date.now(); let info = null;
for (let f = 0; f < SECONDS * FPS; f++) {
  const t = f / FPS;
  while (si < rest.length && rest[si].t <= t) { await page.evaluate((e) => window.__input(e), rest[si].ev); si++; }
  if (info && info.phase === 'vote') { if (vi < 0) vi = 0; if (vi < votes.length && f % 4 === 0) { const ev = { ...votes[vi].ev, type: 'chat' }; await page.evaluate((e) => window.__input(e), ev); vi++; } }
  // a stuck frame (crashed renderer / starved box) fails loudly instead of hanging forever
  info = await Promise.race([page.evaluate((dt) => window.__render.frame(dt), 1 / FPS), new Promise((_, rej) => setTimeout(() => rej(new Error('frame timed out')), 90000))]);
  const fn = `${TMP}f${String(f).padStart(5, '0')}.jpg`;
  await page.screenshot({ path: fn, type: 'jpeg', quality: 90 });
  if (f % 150 === 0) console.log(`${t.toFixed(1)}s ${JSON.stringify(info)}  (${((Date.now() - t0) / 1000).toFixed(0)} s real)`);
  for (const s of STILLS) if (Math.abs(t - s) < 0.5 / FPS) fs.copyFileSync(fn, `screenshots/siege-still-${String(s).replace('.', '_')}s.jpg`);
}
console.log('mixing audio…');
const wav = await page.evaluate((s) => window.__render.mix(s), SECONDS);
fs.writeFileSync(TMP + 'audio.wav', Buffer.from(wav, 'base64'));
await browser.close();
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', `${TMP}f%05d.jpg`, '-i', TMP + 'audio.wav', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-vf', 'scale=720:1280:flags=lanczos', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', OUT]);
console.log('wrote', OUT);
