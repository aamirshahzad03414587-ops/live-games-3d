// Quick screenshots: node tools/shot.mjs URL out-prefix [times-in-seconds,...]   (chromium, iPhone-sized)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium, webkit, devices } = require(process.env.PLAYWRIGHT || '/tmp/shot/node_modules/playwright-core');
const [url, out = '/tmp/shot', times = '3'] = process.argv.slice(2);
const eng = process.env.ENGINE === 'webkit' ? webkit : chromium;
const browser = await eng.launch({ args: eng === chromium ? ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] : [] });
const ctx = await browser.newContext({ ...devices['iPhone 13'], ...(eng === chromium ? { isMobile: false, hasTouch: false, userAgent: devices['iPhone 13'].userAgent } : {}) });
const page = await ctx.newPage();
const logs = [];
page.on('console', (m) => logs.push(m.type() + ': ' + m.text()));
page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message));
await page.goto(url);
let t = 0;
for (const s of times.split(',').map(Number)) { await page.waitForTimeout((s - t) * 1000); t = s; await page.screenshot({ path: `${out}-${s}.png` }); console.log('shot', `${out}-${s}.png`, JSON.stringify(await page.evaluate(() => { const g = window.__br || window.__towerUI; return g && { fps: g.fps, level: g.level, stats: g.stats(), phase: g.world.phase, n: (g.world.fighters || g.world.members).length, floor: g.world.floor }; }))); }
console.log(logs.slice(0, 20).join('\n'));
await browser.close();
