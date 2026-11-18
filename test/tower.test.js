import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import { Tower, TFLAG } from '../public/shared/tower-sim.js';
import { parseTower, doorIndex, answers, towerTier, RIDDLES, THEMES } from '../public/shared/tower-data.js';
import { makeTowerLines } from '../public/shared/tower-lines.js';
import { crowd } from '../public/shared/crowd.js';
import { TowerBoard } from '../src/tower-board.js';

const seeded = (s = 1) => () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
const run = (g, sec, onTick) => { for (let t = 0; t < sec; t += 0.05) { g.step(0.05); if (onTick && onTick(g) === false) return; } };
const until = (g, pred, max = 600) => { for (let t = 0; t < max; t += 0.05) { if (pred(g)) return true; g.step(0.05); } return false; };
const say = (g, uid, text) => g.input({ type: 'chat', uid, name: uid, text });

test('tower chat parsing: doors, keycaps, words, left/right, riddle answers', () => {
  assert.equal(parseTower('2').door, 2);
  assert.equal(parseTower('door 3').door, 3);
  assert.equal(parseTower('3️⃣').door, 3);
  assert.equal(parseTower('two!').door, 2);
  assert.equal(doorIndex(parseTower('left').door, 2), 0);
  assert.equal(doorIndex(parseTower('right').door, 2), 1);
  assert.equal(doorIndex(parseTower('right').door, 3), 2);
  assert.equal(doorIndex(3, 2), -1, 'no door 3 on a two-door floor');
  assert.equal(parseTower('hello there').cmd, 'chat');
  assert.ok(answers('its a CANDLE!', ['candle']));
  assert.ok(!answers('candlestick', ['candle']), 'whole words only');
  assert.ok(answers('an echo', ['echo']));
  for (const r of RIDDLES) { assert.equal(typeof r[0], 'string'); assert.ok(r[1].length >= 1); }
  assert.ok(RIDDLES.length >= 25 && THEMES.length >= 6);
});

test('tower gift tiers by coins', () => {
  assert.equal(towerTier(1).id, 'prophecy');
  assert.equal(towerTier(5).id, 'shield');
  assert.equal(towerTier(29).id, 'shield');
  assert.equal(towerTier(30).id, 'rescue');
  assert.equal(towerTier(100).id, 'skip');
  assert.equal(towerTier(500).id, 'boss');
});

test('quiet room: bots fill the party, the run climbs and ends, then a new climb gathers', () => {
  const g = new Tower({}, seeded(3));
  run(g, 1);
  assert.ok(g.alive >= 6, 'bots fill a quiet room');
  let ended = null, floors = 0, runs = 0;
  run(g, 60 * 25, (s) => { for (const e of s.drain()) { if (e.k === 'floor') floors++; if (e.k === 'end') { ended = e; } if (e.k === 'gather') runs++; } return !(ended && runs >= 2); });
  assert.ok(ended, 'the run ends');
  assert.ok(['dark', 'fallen', 'top'].includes(ended.reason));
  assert.ok(ended.floor >= 2, 'bots climb a few floors');
  assert.ok(runs >= 2, 'a new climb starts after the end card');
});

test('busy room: 200+ viewers, snapshots stay capped, the sim stays fast', () => {
  const g = new Tower({}, seeded(5));
  const c = crowd('busy', seeded(9));
  const t0 = process.hrtime.bigint();
  let maxF = 0, maxAlive = 0;
  run(g, 60 * 6, (s) => { for (const ev of c.tick(0.05)) s.input(ev); for (let i = 0; i < 4; i++) s.input({ type: 'chat', uid: 'v' + Math.floor(Math.random() * 260), name: 'Viewer', text: String(1 + (i % 3)) }); s.drain(); if (Math.round(s.t * 20) % 10 === 0) { const sn = s.snapshot(); maxF = Math.max(maxF, sn.f.length / 6); maxAlive = Math.max(maxAlive, sn.n); } });
  const ms = Number(process.hrtime.bigint() - t0) / 1e6;
  assert.ok(maxAlive >= 150, 'a big party: ' + maxAlive);
  assert.ok(maxF <= 70 + 16, 'snapshot capped: ' + maxF);
  assert.ok(ms < 8000, 'six simulated minutes in ' + Math.round(ms) + ' ms');
});

test('vote: the majority door opens, a prophecy reveals the safe door', () => {
  const g = new Tower({ bots: false, minParty: 1, gatherSeconds: 2 }, seeded(7));
  for (let i = 0; i < 5; i++) say(g, 'u' + i, 'hi');
  assert.ok(until(g, (s) => s.phase === 'vote'));
  g.drain();
  g.input({ type: 'gift', uid: 'gifter', name: 'Gifter', coins: 1, giftName: 'Rose' });
  const ev = g.drain();
  assert.ok(ev.some((e) => e.k === 'gift' && e.tier === 'prophecy' && e.door >= 0));
  assert.ok(['treasure', 'riddle'].includes(g.kinds[g.prophecy]), 'the prophecy points at a safe door');
  const target = g.doors === 2 ? 2 : 3;
  for (let i = 0; i < 5; i++) say(g, 'u' + i, String(target));
  say(g, 'gifter', '1');
  assert.equal(g.voteCounts[target - 1], 5);
  const sn = g.snapshot();
  const voted = [];
  for (let i = 0; i < sn.f.length; i += 6) voted.push((sn.f[i + 5] >> 9) & 3);
  assert.ok(voted.includes(target), 'votes ride in the snapshot flags');
  assert.ok(until(g, (s) => s.phase === 'reveal'));
  assert.equal(g.chosen, target - 1);
});

test('riddle: first right answer wins points, the board records it', () => {
  const g = new Tower({ bots: false, minParty: 1, gatherSeconds: 1 }, seeded(11));
  say(g, 'sara', 'hi'); say(g, 'omar', 'hi');
  assert.ok(until(g, (s) => s.phase === 'vote'));
  g.kinds = g.doors === 2 ? ['riddle', 'trap'] : ['riddle', 'trap', 'monster'];
  say(g, 'sara', '1'); say(g, 'omar', '1');
  assert.ok(until(g, (s) => s.phase === 'riddle'));
  const ans = g.riddle.a[0];
  g.drain();
  say(g, 'omar', 'no idea');
  say(g, 'sara', 'it is ' + ans);
  say(g, 'omar', ans);
  const ev = g.drain();
  const wins = ev.filter((e) => e.k === 'rwin');
  assert.equal(wins.length, 1, 'only the first answer wins');
  assert.equal(g.byId.get(wins[0].id).uid, 'sara');
  assert.ok(g.people.get('sara').riddles === 1);
});

test('trap: a shield blocks it; without one some of the party fall and spare lives save', () => {
  const g = new Tower({ bots: false, minParty: 1, gatherSeconds: 1, startFloor: 8 }, seeded(13));
  for (let i = 0; i < 20; i++) say(g, 'p' + i, 'hi');
  assert.ok(until(g, (s) => s.phase === 'vote'));
  g.input({ type: 'gift', uid: 'p0', name: 'p0', coins: 5, giftName: 'Finger Heart' });
  assert.equal(g.shields, 1);
  g.kinds = g.doors === 2 ? ['trap', 'treasure'] : ['trap', 'treasure', 'riddle'];
  for (let i = 0; i < 20; i++) say(g, 'p' + i, '1');
  g.drain();
  assert.ok(until(g, (s) => s.phase === 'trap'));
  let tr = g.drain().find((e) => e.k === 'trap');
  assert.ok(tr.blocked, 'shield blocks the trap'); assert.equal(g.shields, 0);
  assert.equal(g.alive, 20);
  // next floor: no shield now
  assert.ok(until(g, (s) => s.phase === 'vote'));
  g.kinds = g.doors === 2 ? ['trap', 'treasure'] : ['trap', 'treasure', 'riddle'];
  g.input({ type: 'follow', uid: 'p1', name: 'p1' });
  for (let i = 0; i < 20; i++) say(g, 'p' + i, '1');
  g.drain();
  assert.ok(until(g, (s) => s.phase === 'trap'));
  tr = g.drain().find((e) => e.k === 'trap');
  assert.ok(!tr.blocked && tr.fell.length >= 1, 'some fall: ' + tr.fell.length);
  assert.ok(g.alive < 20);
  // a rescue gift brings the fallen back
  const before = g.alive;
  g.input({ type: 'gift', uid: 'r', name: 'Rescuer', coins: 30, giftName: 'Doughnut' });
  assert.ok(g.alive > before, 'rescue lifts the fallen');
});

test('boss every 5th floor: chat spam and likes beat it; a ghost boss gift summons one', () => {
  const g = new Tower({ bots: false, minParty: 1, gatherSeconds: 1, startFloor: 5 }, seeded(17));
  for (let i = 0; i < 12; i++) say(g, 'b' + i, 'hi');
  assert.ok(until(g, (s) => s.phase === 'boss'), 'floor 5 is a boss');
  assert.ok(g.monster && g.monster.boss);
  let won = false;
  run(g, 40, (s) => { for (let i = 0; i < 6; i++) say(s, 'b' + (i % 12), 'attack'); s.input({ type: 'like', uid: 'b1', name: 'b1', count: 15 }); if (s.drain().some((e) => e.k === 'mwin')) { won = true; return false; } });
  assert.ok(won, 'a busy chat beats the boss');
  // summon on a normal floor
  assert.ok(until(g, (s) => s.phase === 'vote'));
  g.input({ type: 'gift', uid: 'whale', name: 'Whale', coins: 500, giftName: 'Rocket' });
  assert.ok(g.pendingSummon, 'boss queued');
  assert.ok(until(g, (s) => s.phase === 'boss', 120), 'the summoned boss arrives');
});

test('skip gift lifts the party a floor (once per floor), likes refill the lanterns', () => {
  const g = new Tower({ bots: false, minParty: 1, gatherSeconds: 1, startFloor: 2 }, seeded(19));
  say(g, 'a', 'hi');
  assert.ok(until(g, (s) => s.phase === 'vote'));
  const f0 = g.floor;
  g.input({ type: 'gift', uid: 'a', name: 'a', coins: 100, giftName: 'Corgi' });
  assert.equal(g.phase, 'climb');
  assert.ok(until(g, (s) => s.phase === 'enter'));
  assert.equal(g.floor, f0 + 2, 'lift skips one floor');
  g.fuel = 40;
  g.input({ type: 'like', uid: 'a', name: 'a', count: 50 });
  assert.ok(g.fuel > 44);
});

test('lines: Mira has something to say for every event, with banners and predictions', () => {
  const g = new Tower({}, seeded(23));
  const L = makeTowerLines({ nameOf: (id) => g.byId.get(id)?.name || null, rng: seeded(2) });
  const c = crowd('busy', seeded(4));
  const kinds = new Set(); let lines = 0, foresee = 0;
  run(g, 60 * 8, (s) => { for (const ev of c.tick(0.05)) s.input(ev); const ev = s.drain(); for (const l of L.lines(ev, s.t)) { lines++; assert.ok(l.text.length > 3 && l.pri >= 1); if (/I foresee/.test(l.text)) foresee++; } for (const e of ev) kinds.add(e.k); });
  assert.ok(lines > 40, 'lines: ' + lines);
  assert.ok(foresee >= 2, 'eerie predictions');
  for (const k of ['floor', 'vote', 'reveal', 'gift', 'climb']) assert.ok(kinds.has(k), 'event ' + k);
});

test('tower board: highest floor + climbers persist, signed copy restores, bots never listed', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lgt-'));
  const a = new TowerBoard(path.join(dir, 'a.json'), 'sec');
  a.record({ run: 1, floor: 7, reason: 'dark', players: [{ uid: 'sara', name: 'Sara', pts: 120, floors: 6, riddles: 1 }, { uid: 'omar', name: 'Omar', pts: 40, floors: 2, riddles: 0 }] });
  a.record({ run: 2, floor: 4, reason: 'fallen', players: [{ uid: 'omar', name: 'Omar', pts: 100, floors: 3, riddles: 2 }] });
  assert.equal(a.data.bestFloor, 7); assert.equal(a.data.bestBy, 'Sara');
  assert.equal(a.top()[0].name, 'Omar'); assert.equal(a.top()[0].pts, 140);
  const { json, sig } = a.exportSigned();
  const b = new TowerBoard(path.join(dir, 'b.json'), 'sec');
  assert.ok(b.restore(json, sig)); assert.equal(b.data.bestFloor, 7);
  assert.equal(new TowerBoard(path.join(dir, 'c.json'), 'sec').restore(json.replace('"bestFloor":7', '"bestFloor":70'), sig), false);
  const g = new Tower({}, seeded(1)); run(g, 400);
  assert.ok(!g.board().some((p) => /^Bot /.test(p.name)));
});

test('snapshot: fixed 6-number records, ghosts flagged, door votes in flags', () => {
  const g = new Tower({ minParty: 6 }, seeded(29));
  run(g, 30);
  const s = g.snapshot();
  assert.equal(s.f.length % 6, 0);
  for (let i = 0; i < s.f.length; i += 6) assert.ok(s.f[i + 5] & (TFLAG.alive | TFLAG.ghost));
  assert.ok(JSON.stringify(s).length < 4000, 'small snapshot');
});
