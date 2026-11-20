import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import WebSocket from 'ws';
import { resolveGift, nextBeat, SONG, CATS, DEFAULTS, normGift } from '../public/shared/cats-data.js';
import { CatsGame } from '../src/games/cats.js';

test('gift mapping: cheap gifts pick a cat; Doughnut and big coins are the group dance; never a duel', () => {
  assert.deepEqual(resolveGift('Rose', 1), { kind: 'solo', cat: 'maine', reason: 'gift' });
  assert.deepEqual(resolveGift('rose', 1), { kind: 'solo', cat: 'maine', reason: 'gift' });
  assert.equal(resolveGift('TikTok', 1).cat, 'bengal');
  assert.equal(resolveGift('Ice Cream Cone', 1).cat, 'persian');
  assert.equal(resolveGift('ice-cream', 1).cat, 'persian');
  assert.equal(resolveGift('Finger Heart', 5).cat, 'siamese');
  assert.deepEqual(resolveGift('Doughnut', 30), { kind: 'group', reason: 'doughnut' });
  assert.equal(resolveGift('Donut', 30).kind, 'group');
  assert.equal(resolveGift('Money Gun', 500).kind, 'group');
  assert.equal(resolveGift('Perfume', 20).kind, 'none');
  assert.equal(resolveGift('unknown', 1).kind, 'none');
  assert.ok(!JSON.stringify(resolveGift('Rose', 1)).toLowerCase().includes('duel'));
  assert.equal(normGift('Ice Cream Cone'), 'icecreamcone');
});

test('nextBeat snaps forward onto the 114 BPM grid', () => {
  assert.equal(SONG.bpm, 114);
  const beat = 60 / 114;
  assert.ok(Math.abs(nextBeat(0) - beat) < 1e-9 || nextBeat(0) === 0 || nextBeat(0) >= beat);
  const t = nextBeat(1.00, 114, 0.05);
  assert.ok(t >= 1.05);
  assert.ok(Math.abs(t / beat - Math.round(t / beat)) < 1e-6);
});

test('likes: every N likes queues a short solo; a burst raises hearts; gifts queue and nothing is dropped', () => {
  const evs = [];
  const g = new CatsGame({ config: { cats: { likesPerDance: 50, voice: false } }, tts: { synth: async () => null }, broadcast: (m) => evs.push(m), listeners: () => 1 });
  g.input({ type: 'like', name: 'Aya', count: 20 });
  assert.equal(g.likes, 20);
  assert.equal(g.likesToward, 20);
  assert.equal(g.stats.dances, 0);
  g.input({ type: 'like', name: 'Aya', count: 30 });
  assert.equal(g.stats.dances, 1);
  assert.equal(g.likesToward, 0);
  const snap = g.snapshot();
  const dancing = CATS.filter((c) => snap.cats[c.id].clip !== 'idle');
  assert.equal(dancing.length, 1);

  g.input({ type: 'like', name: 'Burst', count: 30 });
  assert.equal(g.snapshot().hearts, true);

  g.input({ type: 'gift', name: 'Sam', giftName: 'Rose', coins: 1, count: 1 });
  g.input({ type: 'gift', name: 'Sam', giftName: 'Rose', coins: 1, count: 1 });
  g.input({ type: 'gift', name: 'Sam', giftName: 'Rose', coins: 1, count: 1 });
  const st = g.snapshot();
  assert.ok(st.cats.maine.clip !== 'idle' || st.cats.maine.queued >= 1, 'rose gifts reached the Maine Coon and were queued');
  const pending = st.cats.maine.queued + (st.cats.maine.clip !== 'idle' ? 1 : 0);
  assert.ok(pending >= 3, 'all three roses were kept');

  g.input({ type: 'gift', name: 'Big', giftName: 'Doughnut', coins: 30, count: 1 });
  const gsnap = g.snapshot();
  assert.equal(gsnap.group.on, true);
  assert.ok(['dabke-line', 'circle'].includes(gsnap.group.clip));
  assert.equal(gsnap.group.gifter, 'Big');
});

test('combo of three different cat gifts triggers the all-four dance', () => {
  const g = new CatsGame({ config: { cats: { voice: false } }, tts: { synth: async () => null }, broadcast: () => {}, listeners: () => 1 });
  g.input({ type: 'gift', name: 'Lina', giftName: 'Rose', coins: 1 });
  g.input({ type: 'gift', name: 'Lina', giftName: 'TikTok', coins: 1 });
  assert.equal(g.snapshot().group.on, false);
  g.input({ type: 'gift', name: 'Lina', giftName: 'Finger Heart', coins: 5 });
  assert.equal(g.snapshot().group.on, true);
});

test('server: /cats page, websocket hello, sim gift and likes (localhost only)', async (t) => {
  const port = 39000 + Math.floor(Math.random() * 900);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lg-'));
  const srv = spawn(process.execPath, ['src/server.js'], { cwd: path.resolve(''), env: { ...process.env, PORT: String(port), ADMIN_KEY: 'test-key-123', TTS: '0', TTS_SELFTEST: '0', DATA_DIR: dir, TIKTOK_USERNAME: '' }, stdio: 'pipe' });
  t.after(() => srv.kill());
  await new Promise((r) => srv.stdout.on('data', (d) => /Live Games 3D on/.test(d) && r()));
  const base = `http://127.0.0.1:${port}`;
  assert.equal((await fetch(base + '/cats')).status, 200);
  assert.equal((await fetch(base + '/cats/')).status, 200);
  assert.equal((await fetch(base + '/cats/app.js')).status, 200);
  assert.equal((await fetch(base + '/cats/cats.css')).status, 200);
  const hz = await fetch(base + '/healthz').then((r) => r.json());
  assert.ok(hz.cats);
  const ws = new WebSocket(`ws://127.0.0.1:${port}/ws?game=cats`);
  const msgs = [];
  ws.on('message', (m) => msgs.push(JSON.parse(m)));
  await new Promise((r) => ws.on('open', r));
  await new Promise((r) => setTimeout(r, 150));
  const hello = msgs.find((m) => m.t === 'hello');
  assert.equal(hello.game, 'cats');
  assert.equal(hello.song.bpm, 114);
  assert.equal(hello.lineup.length, 4);
  assert.equal(hello.song.bpm, 114);
  const post = (p, b) => fetch(base + '/api/admin' + p, { method: 'POST', headers: { 'content-type': 'application/json', 'x-admin-key': 'test-key-123' }, body: JSON.stringify(b || {}) }).then((r) => r.json());
  assert.equal((await post('/sim/gift', { name: 'Nora', giftName: 'Ice Cream Cone', coins: 1 })).ok, true);
  await new Promise((r) => setTimeout(r, 300));
  const snaps = msgs.filter((m) => m.t === 's' || (m.t === 'hello' && m.cats));
  const last = [...msgs].reverse().find((m) => m.cats && m.cats.persian);
  assert.ok(last, 'got a cats snapshot');
  assert.ok(last.cats.persian.clip !== 'idle' || last.cats.persian.queued >= 1);
  await post('/settings', { cats: { likesPerDance: 10 } });
  const st = await fetch(base + '/api/admin/status', { headers: { 'x-admin-key': 'test-key-123' } }).then((r) => r.json());
  assert.equal(st.settings.cats.likesPerDance, 10);
  ws.close();
});
