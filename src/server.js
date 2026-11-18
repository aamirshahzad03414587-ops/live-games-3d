// Live Games 3D: one Render service for all the TikTok LIVE games (/br now; /tower and /siege later).
import express from 'express';
import compression from 'compression';
import http from 'node:http';
import path from 'node:path';
import crypto from 'node:crypto';
import { WebSocketServer } from 'ws';
import { loadConfig, saveConfig, ROOT, DATA_DIR } from './config.js';
import { TikTokBridge } from './tiktok.js';
import { TTS } from './tts.js';
import { diagRoute } from './diag.js';
import { Board } from './board.js';
import { BRGame } from './games/br.js';
import { TowerGame } from './games/tower.js';
import { TowerBoard } from './tower-board.js';
import { crowd } from '../public/shared/crowd.js';

const config = loadConfig();
const SECRET = config.adminKey ? crypto.createHmac('sha256', config.adminKey).update('board').digest('hex') : crypto.randomBytes(16).toString('hex');
const tts = new TTS(() => config.voice);
const clients = new Set();   // { ws, game, admin }
const listeners = (game) => () => { let n = 0; for (const c of clients) if (c.game === game) n++; return n; };
const broadcastTo = (game) => (msg) => { const s = JSON.stringify(msg); for (const c of clients) if (c.game === game && c.ws.readyState === 1 && c.ws.bufferedAmount < 2e6) c.ws.send(s); };
const games = {
  br: new BRGame({ config, tts, board: new Board(path.join(DATA_DIR, 'br-board.json'), SECRET), broadcast: broadcastTo('br'), listeners: listeners('br') }),
  tower: new TowerGame({ config, tts, board: new TowerBoard(path.join(DATA_DIR, 'tower-board.json'), SECRET), broadcast: broadcastTo('tower'), listeners: listeners('tower') }),
};
for (const g of Object.values(games)) g.start();

// LIVE events -> every game (one LIVE feeds whichever game is on screen)
const recentFeed = [];
const hub = {
  event(ev, source) {
    recentFeed.push({ at: Date.now(), type: ev.type, source }); if (recentFeed.length > 50) recentFeed.shift();
    let r = { ok: true };
    for (const g of Object.values(games)) r = g.input(ev) || r;
    return r;
  },
  newStream() { for (const g of Object.values(games)) g.newStream(); },
};
const tiktok = new TikTokBridge(hub);
tiktok.on('log', (m) => console.log(m));
tiktok.on('status', (s) => { for (const g of Object.keys(games)) broadcastTo(g)({ t: 'status', tiktok: { state: s.state, source: s.source, username: s.username } }); });
const configureTikTok = () => tiktok.configure({ liveSource: config.tiktok.liveSource, username: config.tiktok.username, signApiKey: config.tiktok.signApiKey, retrySeconds: config.tiktok.retrySeconds });
configureTikTok();

const app = express();
app.set('trust proxy', true);
app.disable('x-powered-by');
app.use(compression());
app.use(express.json({ limit: '50kb' }));

const isLocal = (req) => ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(req.socket.remoteAddress) && !req.headers['x-forwarded-for'];
const safeEq = (a, b) => { const x = Buffer.from(String(a || '')), y = Buffer.from(String(b || '')); return x.length === y.length && crypto.timingSafeEqual(x, y); };
function keyOk(req) { const k = req.query.key || req.headers['x-admin-key']; return config.adminKey ? safeEq(k, config.adminKey) : isLocal(req); }
function requireKey(req, res, next) { if (keyOk(req)) return next(); res.status(401).send('Admin key required: open /admin?key=YOUR_ADMIN_KEY'); }

const pub = path.join(ROOT, 'public');
const page = (f) => (req, res) => res.sendFile(path.join(pub, f));
app.get('/', page('index.html'));
app.get(['/br', '/br/'], page('br/index.html'));
app.get(['/tower', '/tower/'], page('tower/index.html'));
app.get('/admin', requireKey, page('admin.html'));
app.get(['/healthz', '/health'], (req, res) => res.json({ ok: true, tiktok: tiktok.status.state, overlays: clients.size, br: games.br.summary().phase, tower: games.tower.summary().phase, voice: tts.stats }));
app.post('/diag', express.text({ type: '*/*', limit: '8kb' }), diagRoute());
app.get('/tts/:id.mp3', (req, res) => {
  const buf = tts.get(req.params.id);
  if (!buf) return res.status(404).end();
  res.set({ 'content-type': 'audio/mpeg', 'cache-control': 'no-store', 'content-length': buf.length }); res.end(buf);
});
// the overlay's local/demo mode speaks through this (short lines only, rate-limited per address)
const ttsHits = new Map();
app.get('/api/say', async (req, res) => {
  const text = String(req.query.text || '').slice(0, 200);
  const ip = String(req.ip), now = Date.now(), h = ttsHits.get(ip) || { t: now, n: 0 };
  if (now - h.t > 60e3) { h.t = now; h.n = 0; } h.n++; ttsHits.set(ip, h); if (ttsHits.size > 5000) ttsHits.clear();
  if (!text || (h.n > 40 && !keyOk(req))) return res.status(429).json({ error: 'slow down' });
  const o = req.query.voice === 'mira' ? { voice: config.tower.voice, rate: config.tower.rate, pitch: config.tower.pitch } : {};
  const a = await tts.synth(text, o).catch(() => null);
  res.json(a ? { url: a.url, dur: a.duration } : { url: null });
});
app.get('/api/br/board', (req, res) => { const m = games.br.boardMsg(); delete m.signed; res.json(m); });
app.get('/api/tower/board', (req, res) => { const m = games.tower.boardMsg(); delete m.signed; res.json(m); });
app.use('/vendor/three', express.static(path.join(ROOT, 'node_modules', 'three', 'build'), { maxAge: '7d', immutable: true }));
app.use(express.static(pub, { index: false, maxAge: '5m' }));

// ---------- admin API
const admin = express.Router();
admin.use(requireKey);
let crowdRun = null;
admin.get('/status', (req, res) => res.json({
  tiktok: tiktok.status, br: games.br.summary(), tower: games.tower.summary(), overlays: [...clients].map((c) => ({ game: c.game, ios: c.ios, admin: c.admin, since: c.since })),
  settings: { br: config.br, tower: config.tower, voice: { enabled: config.voice.enabled, voice: config.voice.voice, rate: config.voice.rate }, tiktok: { username: config.tiktok.username, liveSource: tiktok.source } },
  tts: { ...tts.stats, lastError: tts.lastError, check: tts.check || null }, crowd: crowdRun ? { mode: crowdRun.mode, left: Math.round((crowdRun.until - Date.now()) / 1000) } : null, feed: recentFeed.slice(-12), publicUrl: config.publicUrl,
}));
admin.post('/sim/:type', (req, res) => {
  const b = req.body || {}, type = req.params.type;
  const name = String(b.name || b.nickname || 'Tester').slice(0, 40);
  const ev = { type, uid: String(b.uid || name.toLowerCase().replace(/[^\w.]/g, '') || 'tester'), name, text: b.text ?? b.comment ?? 'join', coins: Number(b.coins ?? b.diamonds ?? 1), count: Number(b.count || 1), giftName: b.giftName || 'Rose' };
  res.json(hub.event(ev, 'sim') || { ok: true });
});
admin.post('/crowd', (req, res) => {
  const mode = String(req.body?.mode || 'busy');
  if (crowdRun) { clearInterval(crowdRun.timer); crowdRun = null; }
  if (mode === 'off') return res.json({ ok: true, crowd: null });
  const c = crowd(mode), minutes = Math.min(60, Number(req.body?.minutes || 5));
  crowdRun = { mode, until: Date.now() + minutes * 60e3, timer: setInterval(() => {
    if (Date.now() > crowdRun.until) { clearInterval(crowdRun.timer); crowdRun = null; return; }
    for (const ev of c.tick(0.25)) hub.event(ev, 'sim');
  }, 250) };
  res.json({ ok: true, crowd: { mode, minutes } });
});
admin.post('/settings', (req, res) => {
  const b = req.body || {};
  if (b.br) { for (const k of ['lobbySeconds', 'arenaCap', 'minFighters']) if (b.br[k] !== undefined) config.br[k] = Math.max(0, Math.min(k === 'arenaCap' ? 120 : 120, Number(b.br[k]) || 0)); if (b.br.bots !== undefined) config.br.bots = !!b.br.bots; games.br.applySettings(config.br); }
  if (b.tower) { for (const k of ['gatherSeconds', 'voteSeconds', 'minParty', 'riddleSeconds', 'bossSeconds']) if (b.tower[k] !== undefined) config.tower[k] = Math.max(0, Math.min(120, Number(b.tower[k]) || 0)); if (b.tower.bots !== undefined) config.tower.bots = !!b.tower.bots; games.tower.applySettings(config.tower); }
  if (b.voice) { if (b.voice.enabled !== undefined) config.voice.enabled = !!b.voice.enabled; if (typeof b.voice.voice === 'string' && /^[a-z]{2}-[A-Z]{2}-\w+Neural$/.test(b.voice.voice)) config.voice.voice = b.voice.voice; }
  if (b.tiktok) { if (typeof b.tiktok.username === 'string') config.tiktok.username = b.tiktok.username.replace(/^@/, '').trim().slice(0, 40); if (['direct', 'tikfinity', 'both'].includes(b.tiktok.liveSource)) config.tiktok.liveSource = b.tiktok.liveSource; configureTikTok(); }
  saveConfig(config);
  res.json({ ok: true });
});
admin.post('/tiktok/connect', async (req, res) => { if (req.body?.username) { config.tiktok.username = String(req.body.username).replace(/^@/, '').trim(); configureTikTok(); saveConfig(config); } try { res.json({ ok: true, status: await tiktok.connect() }); } catch (e) { res.json({ ok: false, error: e.message, status: tiktok.status }); } });
admin.post('/tiktok/disconnect', async (req, res) => { await tiktok.disconnect(); res.json({ ok: true, status: tiktok.status }); });
admin.post('/new-stream', (req, res) => { hub.newStream(); res.json({ ok: true }); });
admin.post('/br/reset-board', (req, res) => { games.br.board.reset(); games.br.broadcast(games.br.boardMsg()); res.json({ ok: true }); });
admin.post('/br/skip', (req, res) => { const s = games.br.sim; s.phaseEnd = s.t; if (s.phase === 'battle') for (const f of s.aliveList().slice(1)) s.ko(f, null, { storm: true }); res.json({ ok: true }); });
admin.post('/tower/reset-board', (req, res) => { games.tower.board.reset(); games.tower.broadcast(games.tower.boardMsg()); res.json({ ok: true }); });
admin.post('/tower/skip', (req, res) => { const s = games.tower.sim; s.phaseEnd = s.t; if (s.monster) s.monster.hp = 0.01; res.json({ ok: true, phase: s.phase }); });
admin.post('/voice-check', async (req, res) => res.json(await tts.selfTest().catch((e) => ({ error: e.message }))));
app.use('/api/admin', admin);

// ---------- websocket: /ws?game=br  (overlays receive; a key-holding PC overlay may forward TikFinity events)
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 64 * 1024 });
wss.on('connection', (ws, req) => {
  const u = new URL(req.url, 'http://x');
  const game = games[u.searchParams.get('game')] ? u.searchParams.get('game') : 'br';
  const fake = { query: { key: u.searchParams.get('key') }, headers: {}, socket: req.socket };
  const c = { ws, game, admin: keyOk({ ...fake, headers: req.headers }), ios: /iPhone|iPad/.test(req.headers['user-agent'] || ''), since: new Date().toISOString() };
  clients.add(c);
  ws.send(JSON.stringify(games[game].hello()));
  ws.send(JSON.stringify({ t: 'status', tiktok: { state: tiktok.status.state, source: tiktok.source, username: tiktok.status.username } }));
  ws.isAlive = true; ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (m.t === 'tf' && c.admin && m.ev) tiktok.ingest(m.ev, 'tikfinity');
    else if (m.t === 'tf-status' && c.admin) tiktok.setStatus(m.state, m.message, { username: m.username });
    else if (m.t === 'restore' && games[game].board.restore(m.json, m.sig)) { console.log(`[${game}] all-time board restored from the overlay copy`); games[game].broadcast(games[game].boardMsg()); }
  });
  ws.on('close', () => clients.delete(c));
});
setInterval(() => { for (const c of clients) { if (!c.ws.isAlive) { c.ws.terminate(); clients.delete(c); continue; } c.ws.isAlive = false; try { c.ws.ping(); } catch {} } }, 30e3).unref();

const PORT = Number(process.env.PORT || 3940);
server.listen(PORT, () => {
  const base = config.publicUrl || `http://localhost:${PORT}`;
  console.log(`Live Games 3D on ${base}`);
  console.log(`  Battle Royale overlay (open on the iPhone): ${base}/br`);
  console.log(`  Haunted Tower overlay: ${base}/tower`);
  console.log(`  Admin: ${base}/admin?key=…  (ADMIN_KEY ${config.adminKey ? 'set' : 'not set: admin only from this computer'})`);
  if (tiktok.usesDirect && tiktok.username) tiktok.connect().catch((e) => console.log('[tiktok]', e.message));
  if (process.env.TTS_SELFTEST !== '0') setTimeout(() => tts.selfTest().catch(() => {}), 3000).unref();
});
// No keep-alive here on purpose: fortune-live already uses most of the 750 free hours. The overlay pings /healthz
// while it is open, so the service stays awake during a LIVE and sleeps the rest of the time.
