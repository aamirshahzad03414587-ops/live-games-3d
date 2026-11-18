import test from 'node:test';
import assert from 'node:assert/strict';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs';
import { Siege, SFLAG, FSHIFT } from '../public/shared/siege-sim.js';
import { parseSiege, siegeTier, LORE, loreSeq, loreSeconds, CHAPTERS, CHOICES, EFFECTS } from '../public/shared/siege-data.js';
import { makeSiegeLines, spoken } from '../public/shared/siege-lines.js';
import { crowd } from '../public/shared/crowd.js';
import { SiegeBoard } from '../src/siege-board.js';

const seeded = (s = 1) => () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
const until = (g, pred, max = 900) => { for (let t = 0; t < max; t += 0.05) { if (pred(g)) return true; g.step(0.05); } return false; };
const say = (g, uid, text) => g.input({ type: 'chat', uid, name: uid, text });
const fast = { introSeconds: 0, gatherSeconds: 2, chapterSeconds: 1, breakSeconds: 1, voteSeconds: 3, choiceSeconds: 1, victorySeconds: 1, endingSeconds: 3 };

test('siege chat parsing: classes, emoji, votes, choice words', () => {
  assert.deepEqual(parseSiege('mage'), { cmd: 'class', cls: 'mage' });
  assert.equal(parseSiege('I want to be a WARRIOR!').cls, 'warrior');
  assert.equal(parseSiege('🏹🏹').cls, 'archer');
  assert.equal(parseSiege('healer pls').cls, 'healer');
  assert.equal(parseSiege('2').vote, 2);
  assert.equal(parseSiege('1️⃣').vote, 1);
  assert.equal(parseSiege('seal it').vote, 1);
  assert.equal(parseSiege('hunt the mastermind').vote, 2);
  assert.equal(parseSiege('save the army').vote, 2);
  assert.equal(parseSiege('hello from dubai').cmd, 'chat');
  assert.equal(parseSiege('').cmd, 'chat');
});

test('siege gift tiers by coins', () => {
  assert.equal(siegeTier(1).id, 'volley');
  assert.equal(siegeTier(5).id, 'rune');
  assert.equal(siegeTier(29).id, 'rune');
  assert.equal(siegeTier(30).id, 'guardian');
  assert.equal(siegeTier(100).id, 'awaken');
  assert.equal(siegeTier(499).id, 'awaken');
  assert.equal(siegeTier(500).id, 'dragon');
});

test('siege lore: 6 cards with art, full intro on run 1 and every 3rd, recap otherwise', () => {
  assert.equal(LORE.length, 6);
  for (const L of LORE) { assert.ok(L.title && L.text && L.say && L.sec > 0); assert.ok(fs.existsSync(`public/siege/lore-${L.art}.jpg`), L.art); }
  assert.equal(loreSeq(1).length, 6); assert.equal(loreSeq(4).length, 6); assert.ok(loreSeq(2).length < 6);
  assert.ok(loreSeconds(1) > loreSeconds(2));
  const g = new Siege({ introSeconds: 1 }, seeded(3)); const ev = [];
  until(g, (x) => { ev.push(...x.drain()); return x.phase === 'gather'; }, 120);
  assert.equal(ev.filter((e) => e.k === 'lore').length, 6, 'one timed lore event per card');
  assert.equal(CHAPTERS.length, 3); assert.equal(CHOICES.length, 2);
});

test('siege: comments join with a class, class switch, bots fill a quiet room and never top the board', () => {
  const g = new Siege(fast, seeded(1));
  say(g, 'sara', 'hello'); say(g, 'ali', 'archer');
  const sara = g.people.get('sara'), ali = g.people.get('ali');
  assert.ok(sara.on && sara.cls >= 0); assert.equal(ali.cls, 2);
  say(g, 'sara', 'healer'); assert.equal(sara.cls, 3);
  until(g, (x) => x.phase === 'wave', 60);
  assert.ok(g.alive >= 6, 'bots fill to minDefenders'); assert.ok(g.botsOn() >= 1);
  const s = g.snapshot(); assert.equal(s.f.length % 5, 0);
  const bots = []; for (let i = 0; i < s.f.length; i += 5) if ((s.f[i + 3] >> FSHIFT) & SFLAG.bot) bots.push(s.f[i]);
  assert.ok(bots.length >= 1);
  until(g, (x) => x.phase === 'ending', 1500);
  assert.ok(g.board().every((p) => !String(p.name).startsWith('Bot')));
});

test('siege: likes charge the barrier, 500 likes = Ascension pulse, follow/share bless', () => {
  const g = new Siege(fast, seeded(2)); const ev = [];
  say(g, 'sara', 'mage'); g.barrier = 10;
  g.input({ type: 'like', uid: 'sara', name: 'sara', count: 50 }); assert.ok(g.barrier > 10);
  for (let i = 0; i < 10; i++) g.input({ type: 'like', uid: 'u' + i, name: 'u' + i, count: 50 });
  ev.push(...g.drain()); assert.ok(ev.some((e) => e.k === 'pulse'));
  g.input({ type: 'follow', uid: 'kai', name: 'kai' }); assert.ok(g.people.get('kai').blessed);
  g.input({ type: 'share', uid: 'zoe', name: 'zoe' });
  const ev2 = g.drain(); assert.ok(ev2.some((e) => e.k === 'bless' && e.why === 'share'));
});

test('siege gifts: volley, rune, guardian, ascension, dragon judgment on a boss', () => {
  const g = new Siege({ ...fast, startChapter: 1 }, seeded(4));
  until(g, (x) => x.phase === 'wave', 60);
  const b0 = g.barrier; g.input({ type: 'gift', uid: 'r', name: 'r', coins: 5, giftName: 'Finger Heart' }); assert.ok(g.barrier > b0);
  g.input({ type: 'gift', uid: 'g', name: 'g', coins: 30, giftName: 'Doughnut' }); assert.ok(g.allies.some((a) => a.k === 0));
  g.input({ type: 'gift', uid: 'a', name: 'a', coins: 100, giftName: 'Hand Hearts' }); assert.ok(g.people.get('a').ascT > g.t);
  const ev = g.drain(); for (const t of ['rune', 'guardian', 'awaken']) assert.ok(ev.some((e) => e.k === 'gift' && e.tier === t), t);
  assert.ok(until(g, (x) => !!x.boss, 900), 'a boss arrives');
  const b = g.boss, hp = b.hp;
  g.input({ type: 'gift', uid: 'd', name: 'd', coins: 500, giftName: 'Money Gun' });
  assert.ok(b.hp <= hp - b.max * 0.2, 'dragon judgment takes a quarter');
  assert.ok(g.drain().some((e) => e.k === 'gift' && e.tier === 'dragon' && e.judgment));
});

test('siege story votes have lasting effects', () => {
  const g = new Siege(fast, seeded(5));
  until(g, (x) => x.phase === 'vote', 1500);
  for (let i = 0; i < 5; i++) say(g, 'v' + i, '2');
  say(g, 'w', '1');
  until(g, (x) => x.phase === 'choice', 60);
  assert.equal(g.choices[0], 'hunt'); assert.equal(g.fx.spawnMul, EFFECTS.hunt.spawnMul); assert.equal(g.fx.finalHp, EFFECTS.hunt.finalHp);
});

test('siege full sessions: busy room saves Earth with most survivors, the counter drops, chapters advance', () => {
  for (const seed of [1, 2]) {
    const g = new Siege({}, seeded(seed)); const c = crowd('busy', seeded(seed + 9)); let end = null; const chapters = new Set();
    for (let t = 0; t < 60 * 20 && !end; t += 0.05) { for (const ev of c.tick(0.05)) g.input(ev); g.step(0.05); for (const e of g.drain()) { if (e.k === 'end') end = e; if (e.k === 'chapter') chapters.add(e.n); } }
    assert.ok(end, 'session ends'); assert.equal(end.saved, true);
    assert.ok(end.survivors < 1_500_000_000 && end.survivors > 1_000_000_000, String(end.survivors));
    assert.deepEqual([...chapters].sort(), [1, 2, 3]);
    assert.equal(end.choices.length, 2);
  }
});

test('siege quiet room (bots only) still plays a full session and ends', () => {
  const g = new Siege({}, seeded(7)); let end = null;
  for (let t = 0; t < 60 * 20 && !end; t += 0.05) { g.step(0.05); for (const e of g.drain()) if (e.k === 'end') end = e; }
  assert.ok(end); assert.ok(end.survivors >= 0);
});

test('siege lines: narrator speaks numbers, batches joins, names the boss', () => {
  assert.match(spoken(1_500_000_000), /billion/);
  const g = new Siege(fast, seeded(8));
  const L = makeSiegeLines({ nameOf: (id) => g.byId.get(id)?.name || 'someone', rng: seeded(9), survivors: () => g.survivors });
  let out = [];
  for (let t = 0; t < 400; t += 0.05) { if (t < 3) say(g, 'p' + Math.floor(t * 10), 'hi'); g.step(0.05); out.push(...L.lines(g.drain(), g.t)); }
  const text = out.map((x) => x.text).join(' | ');
  assert.match(text, /Corrupted Scientist/);
  assert.ok(out.length > 5);
});

test('siege board: saves/falls, best saved, bots excluded, signed restore', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sg-'));
  const b = new SiegeBoard(path.join(dir, 'b.json'), 'sec');
  b.record({ saved: true, survivors: 1_400_000_000, players: [{ uid: 'sara', name: 'Sara', pts: 120, kills: 30 }] });
  b.record({ saved: false, survivors: 0, players: [{ uid: 'sara', name: 'Sara', pts: 20, kills: 3 }, { uid: 'ali', name: 'Ali', pts: 50, kills: 9 }] });
  assert.equal(b.data.saves, 1); assert.equal(b.data.falls, 1); assert.equal(b.data.bestSaved, 1_400_000_000);
  assert.equal(b.top()[0].name, 'Sara'); assert.equal(b.top()[0].saves, 1); assert.equal(b.top()[0].runs, 2);
  const { json, sig } = b.exportSigned();
  const c = new SiegeBoard(path.join(dir, 'c.json'), 'sec'); assert.equal(c.restore(json, sig), true); assert.equal(c.data.bestSaved, 1_400_000_000);
  assert.equal(new SiegeBoard(path.join(dir, 'd.json'), 'sec').restore(json.replace('1400000000', '1500000000'), sig), false);
});
