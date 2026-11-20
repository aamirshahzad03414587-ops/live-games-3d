// Record a 9:16 Cat Dance Party demo against a local server, then the caller muxes the song.
// BASE=http://localhost:3940 OUT=/tmp/cats-demo.webm node tools/render-cats-demo.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const BASE = (process.env.BASE || 'http://127.0.0.1:3940').replace(/\/+$/, '');
const OUTDIR = process.env.OUTDIR || '/tmp/cats-demo-frames';
const KEY = process.env.ADMIN_KEY || '';
const post = (p, body) => fetch(BASE + '/api/admin' + p, { method: 'POST', headers: { 'content-type': 'application/json', ...(KEY ? { 'x-admin-key': KEY } : {}) }, body: JSON.stringify(body || {}) }).then((r) => r.json()).catch((e) => ({ err: e.message }));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--disable-gpu'],
  headless: true,
});
const ctx = await browser.newContext({
  viewport: { width: 1080, height: 1920 },
  deviceScaleFactor: 1,
  recordVideo: { dir: OUTDIR, size: { width: 1080, height: 1920 } },
});
const page = await ctx.newPage();
await page.goto(`${BASE}/cats?mute=1`, { waitUntil: 'load', timeout: 30000 });
await page.waitForFunction(() => window.__catsUI && window.__catsUI.view, { timeout: 20000 });
await page.click('body');
await page.waitForFunction(() => [...document.querySelectorAll('#grid video')].filter((v) => v.videoWidth > 0).length >= 4, { timeout: 20000 });
await page.evaluate(() => { for (const v of document.querySelectorAll('video')) v.play().catch(() => {}); });
await sleep(2000);

const t0 = Date.now();
const at = (s) => sleep(Math.max(0, s * 1000 - (Date.now() - t0)));

await at(2.5);
await post('/sim/gift', { name: 'Aya', giftName: 'Rose', coins: 1 });
await at(8);
await post('/sim/gift', { name: 'Omar', giftName: 'TikTok', coins: 1 });
await at(13.5);
await post('/sim/gift', { name: 'Lina', giftName: 'Ice Cream Cone', coins: 1 });
await at(19);
await post('/sim/gift', { name: 'Noor', giftName: 'Finger Heart', coins: 5 });
await at(25);
await post('/sim/like', { name: 'Crowd', count: 50 });
await at(29);
await post('/sim/like', { name: 'Crowd', count: 30 });
await at(33);
await post('/sim/gift', { name: 'Sam', giftName: 'Doughnut', coins: 30 });
await at(42);
await page.screenshot({ path: OUTDIR + '/final.png' });
await ctx.close();
await browser.close();
console.log('recorded into', OUTDIR);
