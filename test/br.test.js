import test from 'node:test';
import assert from 'node:assert/strict';
import { BattleRoyale } from '../public/shared/br-sim.js';
import { parseCommand, giftTier, findByName, cleanName } from '../public/shared/commands.js';
import { makeAnnouncer } from '../public/shared/br-lines.js';
import { crowd } from '../public/shared/crowd.js';

const seeded = (s = 1) => () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
const run = (g, sec, onTick) => { for (let t = 0; t < sec; t += 0.05) { g.step(0.05); onTick && onTick(g); } };

test('commands', () => {
  assert.equal(parseCommand('attack Sara').cmd, 'attack');
  assert.equal(parseCommand('attack Sara').name, 'Sara');
  assert.equal(parseCommand('⚔️ omar').name, 'omar');
  assert.equal(parseCommand('@hina_22').cmd, 'attack');
  assert.equal(parseCommand('SHIELD!').cmd, 'shield');
  assert.equal(parseCommand('🛡️').cmd, 'shield');
  assert.equal(parseCommand('💨').cmd, 'dash');
  assert.equal(parseCommand('dance').cmd, 'dance');
  assert.equal(parseCommand('color pink').cmd, 'color');
  assert.equal(parseCommand('color banana').cmd, 'chat');
  assert.equal(parseCommand('join').cmd, 'join');
  assert.equal(parseCommand('hello everyone').cmd, 'chat');
  assert.equal(findByName('sara', [{ name: 'Sara_m 🌸', uid: 'sara_m' }, { name: 'Omar', uid: 'omar' }]).uid, 'sara_m');
  assert.equal(findByName('xyz', [{ name: 'Omar', uid: 'omar' }]), null);
  assert.equal(cleanName('a'.repeat(30)).length, 16);
});

test('gift tiers by coins', () => {
  assert.equal(giftTier(1).id, 'speed');
  assert.equal(giftTier(5).id, 'meteor');
  assert.equal(giftTier(29).id, 'meteor');
  assert.equal(giftTier(30).id, 'giant');
  assert.equal(giftTier(100).id, 'revive');
  assert.equal(giftTier(499).id, 'revive');
  assert.equal(giftTier(500).id, 'nuke');
  assert.equal(giftTier(29999).id, 'nuke');
});

test('3 viewers: bots fill the room, rounds finish with a winner and a ceremony', () => {
  const g = new BattleRoyale({ lobbySeconds: 3 }, seeded(3));
  for (const n of ['Sara', 'Ali', 'Hina']) g.input({ type: 'chat', uid: n.toLowerCase(), name: n, text: 'hi' });
  const phases = [];
  run(g, 200, (x) => { for (const e of x.drain()) if (e.k === 'phase' || e.k === 'win') phases.push(e.k === 'win' ? 'win' : e.ph); });
  assert.ok(phases.filter((p) => p === 'win').length >= 2, 'at least two rounds finished');
  assert.ok(g.results.every((r) => r.players.length >= 8), 'bots filled to 8');
  assert.ok(g.results.every((r) => r.players.filter((p) => !p.bot).length === 3), 'all 3 viewers played every round');
  assert.deepEqual(phases.slice(0, 4), ['lobby', 'battle', 'win', 'lobby']);
});

test('200+ viewers: arena capped, the rest queue and rotate in', () => {
  const g = new BattleRoyale({ lobbySeconds: 3, arenaCap: 50 }, seeded(5));
  for (let i = 0; i < 230; i++) g.input({ type: 'chat', uid: 'v' + i, name: 'Viewer' + i, text: 'join' });
  assert.equal(g.humans, 50);
  assert.equal(g.queue.length, 180);
  const played = new Set();
  let maxAlive = 0;
  // keep them "active" (likes) so the queue doesn't expire them
  run(g, 400, (x) => { if (Math.random() < 0.2) x.input({ type: 'like', uid: 'v' + Math.floor(Math.random() * 230), name: 'x', count: 1 }); maxAlive = Math.max(maxAlive, x.fighters.size); for (const f of x.fighters.values()) played.add(f.uid); x.drain(); x.drainRoster(); });
  assert.ok(maxAlive <= 50 + 10, 'never more than cap + VIP overflow');
  assert.ok(played.size > 120, `rotation: ${played.size} different viewers played`);
});

test('gifts: VIP entry, meteor damage, giant, revive, nuke, banked in the lobby', () => {
  const g = new BattleRoyale({ lobbySeconds: 2, arenaCap: 2 }, seeded(9));
  g.input({ type: 'chat', uid: 'a', name: 'A', text: 'hi' }); g.input({ type: 'chat', uid: 'b', name: 'B', text: 'hi' });
  g.input({ type: 'chat', uid: 'c', name: 'C', text: 'hi' });
  assert.ok(g.queue.includes('c'), 'arena full -> queued');
  g.input({ type: 'gift', uid: 'c', name: 'C', giftName: 'Rose', coins: 1 });
  assert.ok(g.byUid.has('c'), 'a gift skips the queue (VIP)');
  assert.deepEqual(g.people.get('c').bank, ['speed'], 'lobby gifts are banked');
  run(g, 3);
  assert.equal(g.phase, 'battle');
  const fa = g.fighters.get(g.byUid.get('a'));
  g.input({ type: 'gift', uid: 'a', name: 'A', giftName: 'Doughnut', coins: 30 });
  assert.ok(fa.giantUntil > g.t && fa.maxHp === 200, 'giant mode: +50 max HP');
  const ev = g.drain();
  g.input({ type: 'gift', uid: 'b', name: 'B', giftName: 'Finger Heart', coins: 5 });
  assert.equal(g.meteors.length, 3);
  run(g, 2);
  assert.ok(g.drain().some((e) => e.k === 'boom'), 'meteors land');
  // revive a dead viewer
  const fb = g.fighters.get(g.byUid.get('b'));
  if (fb.alive) g.ko(fb, null, { storm: true });
  g.input({ type: 'gift', uid: 'b', name: 'B', giftName: 'Hand Hearts', coins: 100 });
  assert.ok(fb.alive && fb.hp === fb.maxHp, 'revived with full HP');
  // nuke pushes the storm back out
  g.storm.r = 5; const before = g.storm.push;
  g.input({ type: 'gift', uid: 'a', name: 'A', giftName: 'Money Gun', coins: 500 });
  assert.ok(g.storm.push > before, 'storm pushed back');
  assert.ok(ev.length >= 0);
});

test('commands in battle: attack target, shield, dash, likes heal + charge, follow armor, share rage', () => {
  const g = new BattleRoyale({ lobbySeconds: 1, minFighters: 4 }, seeded(11));
  g.input({ type: 'chat', uid: 'sara', name: 'Sara', text: 'hi' }); g.input({ type: 'chat', uid: 'omar', name: 'Omar', text: 'hi' });
  run(g, 1.6);
  assert.equal(g.phase, 'battle');
  const s = g.fighters.get(g.byUid.get('sara')), o = g.fighters.get(g.byUid.get('omar'));
  g.input({ type: 'chat', uid: 'sara', name: 'Sara', text: 'attack omar' });
  assert.equal(s.cmdTgt, o.id);
  g.input({ type: 'chat', uid: 'omar', name: 'Omar', text: 'shield' });
  assert.ok(o.shieldUntil > g.t);
  g.input({ type: 'chat', uid: 'sara', name: 'Sara', text: 'dash' });
  assert.ok(s.dashUntil > g.t);
  s.hp = 50; g.input({ type: 'like', uid: 'sara', name: 'Sara', count: 15 });
  assert.equal(s.hp, 60); assert.equal(s.charge, 60);
  const hp0 = o.maxHp; g.input({ type: 'follow', uid: 'omar', name: 'Omar' });
  assert.equal(o.maxHp, hp0 + 30);
  g.input({ type: 'share', uid: 'sara', name: 'Sara' });
  assert.ok(s.rageUntil > g.t);
});

test('announcer lines: priorities, batched welcomes, winner shoutout', () => {
  const names = { 1: 'Sara', 2: 'Omar' };
  const a = makeAnnouncer({ nameOf: (id) => names[id], rng: seeded(2) });
  const l = a.lines([{ k: 'ko', a: 1, b: 2, first: 1, left: 9 }, { k: 'gift', n: 'Zed', g: 'Lion', tier: 'nuke' }, { k: 'win', a: 1, kills: 4 }], 10);
  assert.ok(l.find((x) => /First blood/.test(x.text)));
  assert.equal(l.find((x) => x.gift === 'nuke').pri, 9);
  assert.ok(l.find((x) => x.win && /Sara/.test(x.text)));
  const w = a.lines([{ k: 'join', n: 'A' }, { k: 'join', n: 'B' }, { k: 'join', n: 'C' }, { k: 'join', n: 'D' }], 20);
  assert.ok(w.find((x) => /Welcome A, B, C and 1 more/.test(x.text)));
});

test('busy crowd generator produces every event type', () => {
  const c = crowd('busy', seeded(4)); const seen = new Set();
  for (let i = 0; i < 400; i++) for (const e of c.tick(0.25)) seen.add(e.type);
  for (const k of ['chat', 'like', 'gift', 'follow', 'share']) assert.ok(seen.has(k), k);
  assert.ok(c.people.length > 150);
});

test('simulation stays cheap with 50 fighters', () => {
  const g = new BattleRoyale({ lobbySeconds: 1 }, seeded(8));
  for (let i = 0; i < 50; i++) g.input({ type: 'chat', uid: 'p' + i, name: 'P' + i, text: 'hi' });
  const t0 = performance.now(); run(g, 60, (x) => { x.drain(); x.snapshot(); }); const ms = performance.now() - t0;
  assert.ok(ms < 1500, `60 s of game in ${ms.toFixed(0)} ms`);
});
