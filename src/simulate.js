// Fake LIVE audience against a running server: npm run simulate -- [busy|quiet|gifts|demo] [seconds]
//   BASE=http://localhost:3940 (default) or the Render URL; ADMIN_KEY=... for a server with a key.
//   The events go through the same path as real TikTok events (hub -> game).
import { crowd } from '../public/shared/crowd.js';
const mode = process.argv[2] || 'busy', seconds = Number(process.argv[3] || 120);
const BASE = (process.env.BASE || 'http://localhost:3940').replace(/\/+$/, ''), KEY = process.env.ADMIN_KEY || '';
const c = crowd(mode);
const post = (type, body) => fetch(`${BASE}/api/admin/sim/${type}`, { method: 'POST', headers: { 'content-type': 'application/json', ...(KEY ? { 'x-admin-key': KEY } : {}) }, body: JSON.stringify(body) }).then((r) => r.json()).catch((e) => ({ err: e.message }));
console.log(`simulating a ${mode} LIVE for ${seconds}s against ${BASE}  (open ${BASE}/br to watch)`);
const t0 = Date.now(); let n = 0; const counts = {};
while (Date.now() - t0 < seconds * 1000) {
  const evs = c.tick(0.25);
  await Promise.all(evs.map((ev) => { counts[ev.type] = (counts[ev.type] || 0) + 1; n++; return post(ev.type, { uid: ev.uid, name: ev.name, text: ev.text, coins: ev.coins, count: ev.count, giftName: ev.giftName }); }));
  if (n && n % 50 < evs.length) console.log(`${((Date.now() - t0) / 1000).toFixed(0)}s  ${n} events, ${c.people.length} viewers  ${JSON.stringify(counts)}`);
  await new Promise((r) => setTimeout(r, 250));
}
console.log(`done: ${n} events from ${c.people.length} viewers`, counts);
