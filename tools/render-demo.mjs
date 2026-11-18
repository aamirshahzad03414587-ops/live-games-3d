// Renders the vertical demo video (with sound) of the Battle Royale: the real overlay in local mode (?render=1) on a
// virtual clock, driven by a scripted busy LIVE (joins, commands, likes, gifts, follows, shares), one screenshot per
// frame; the announcer voice comes from the server's free TTS and the sound effects are mixed offline (Web Audio).
// Needs the server running on BASE (for /api/say). Usage: node tools/render-demo.mjs [out.mp4] [seconds]
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const BASE = process.env.BASE || 'http://localhost:3940';
const OUT = process.argv[2] || 'screenshots/br-demo.mp4', SECONDS = Number(process.argv[3] || 56), FPS = 30;
const TMP = '/tmp/brdemo/'; fs.rmSync(TMP, { recursive: true, force: true }); fs.mkdirSync(TMP, { recursive: true });
const W = Number(process.env.W || 360), H = Number(process.env.H || 640), DPR = Number(process.env.DPR || 2);

// ---- the scripted LIVE (virtual seconds)
const NAMES = ['Sara_m', 'Ali.official', 'Hina🌸', 'Omar_99', 'Zara', 'Bilal_pk', 'Noor.live', 'Ayan', 'Esha✨', 'Faraz22', 'Iman', 'Junaid_07', 'Kinza', 'Laiba', 'Moiz', 'Nimra'];
const uid = (n) => n.toLowerCase().replace(/[^\w.]/g, '');
const S = [];
const at = (t, type, name, extra = {}) => S.push({ t, ev: { type, uid: uid(name), name, ...extra } });
NAMES.forEach((n, i) => at(0.4 + i * 0.33, 'chat', n, { text: ['hi', 'join', 'lets go', 'me!', 'hello from dubai', 'play'][i % 6] }));
at(3.2, 'gift', 'Zara', { giftName: 'Rose', coins: 1 }); at(4.0, 'follow', 'Omar_99'); at(4.6, 'like', 'Hina🌸', { count: 15 });
at(5.4, 'chat', 'Laiba', { text: 'color gold' }); at(6.0, 'chat', 'Kinza', { text: 'dance' });
// battle starts at 9 s
at(10.5, 'chat', 'Sara_m', { text: 'attack omar' }); at(11.2, 'chat', 'Omar_99', { text: 'shield' }); at(12.0, 'chat', 'Bilal_pk', { text: 'dash' });
at(13.0, 'gift', 'Noor.live', { giftName: 'Finger Heart', coins: 5 });
for (let i = 0; i < 14; i++) at(13.5 + i * 0.9, 'like', NAMES[(i * 5) % 16], { count: 5 + (i % 10) });
at(16.0, 'share', 'Ali.official'); at(17.5, 'gift', 'Ayan', { giftName: 'Doughnut', coins: 30 });
at(19.0, 'chat', 'Esha✨', { text: '💨' }); at(20.0, 'chat', 'Faraz22', { text: 'attack ayan' }); at(21.0, 'chat', 'Iman', { text: '🛡️' });
at(22.5, 'gift', 'Hina🌸', { giftName: 'Rose', coins: 1, count: 5 });
at(23.5, 'chat', 'Maya_x', { text: 'join' }); at(24.0, 'follow', 'Kinza');
at(26.0, 'gift', 'Junaid_07', { giftName: 'Finger Heart', coins: 5 });
at(29.0, 'gift', 'Zara', { giftName: 'Money Gun', coins: 500 });
at(31.0, 'chat', 'Sara_m', { text: 'revenge' }); at(32.0, 'gift', 'Omar_99', { giftName: 'Hand Hearts', coins: 100 });
at(34.0, 'chat', 'Moiz', { text: 'dash' }); at(35.0, 'gift', 'Laiba', { giftName: 'Finger Heart', coins: 5 });
S.sort((a, b) => a.t - b.t);

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR })).newPage();
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
const url = `${BASE}/br?render=1&mode=pc&q=0&lobbySeconds=9&minFighters=20&ceremonySeconds=12&damageMul=2.1&shrinkSeconds=20&seed=11`;
await page.goto(url);
await page.waitForFunction(() => window.__render && window.__br.view);
let si = 0; const t0 = Date.now(); let lastInfo = null;
for (let f = 0; f < SECONDS * FPS; f++) {
  const t = f / FPS;
  while (si < S.length && S[si].t <= t) { await page.evaluate((ev) => window.__input(ev), S[si].ev); si++; }
  // a stuck frame (crashed renderer / starved box) fails loudly instead of hanging forever
  lastInfo = await Promise.race([page.evaluate((dt) => window.__render.frame(dt), 1 / FPS), new Promise((_, rej) => setTimeout(() => rej(new Error('frame timed out')), 90000))]);
  await page.screenshot({ path: `${TMP}f${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 90 });
  if (f % 150 === 0) console.log(`${t.toFixed(1)}s ${JSON.stringify(lastInfo)}  (${((Date.now() - t0) / 1000).toFixed(0)} s real)`);
  if ([4, 12, 18, 30, 36, 48].includes(Math.round(t * 1000) / 1000)) fs.copyFileSync(`${TMP}f${String(f).padStart(5, '0')}.jpg`, `${TMP}still-${t}.jpg`);
}
console.log('mixing audio…');
const wav = await page.evaluate((s) => window.__render.mix(s), SECONDS);
fs.writeFileSync(TMP + 'audio.wav', Buffer.from(wav, 'base64'));
await browser.close();
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', `${TMP}f%05d.jpg`, '-i', TMP + 'audio.wav', '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', '-vf', 'scale=720:1280:flags=lanczos', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', OUT]);
console.log('wrote', OUT);
