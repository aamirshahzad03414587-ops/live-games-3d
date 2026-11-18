// Mira's Haunted Tower: the whole chat climbs one tower together, floor by floor. Server-authoritative simulation
// (20 Hz on the server; also runs in the overlay for ?local=1 and demo renders). No DOM, no Node APIs.
//
// Run:   gather (comment to take a lantern) -> floor 1, 2, 3 ... until the lanterns go dark or everyone has fallen
// Floor: enter (Mira's prophecy) -> vote (comment 1/2/3 or left/right) -> reveal -> treasure | trap | monster | riddle
//        -> climb the spiral stairs. Every 5th floor: a ghost boss fight instead of doors.
// Lantern oil = team health: it burns down every second, traps and monsters take it, likes and treasure refill it.
import { cleanName, colorFor, BOT_NAMES } from './commands.js';
import { THEMES, BOSS_THEME, BOSSES, RIDDLES, answers, towerTier, parseTower, doorIndex, FH, DOOR_Z, doorX, STAIR } from './tower-data.js';

export const TFLAG = { alive: 1, ghost: 2, bot: 4, cmd: 8, shield: 16, crown: 32, life: 64, hit: 128, gift: 256 };
// flags bits 9-10 = voted door + 1, bit 11 = climbing
export const DOOR_SHIFT = 9;
export const PH = ['gather', 'enter', 'vote', 'reveal', 'treasure', 'trap', 'monster', 'riddle', 'boss', 'victory', 'climb', 'end'];
export const OUT = ['', 'treasure', 'trap', 'monster', 'riddle'];

export const TOWER_DEFAULTS = {
  gatherSeconds: 16, enterSeconds: 4.5, voteSeconds: 12, revealSeconds: 2.6, treasureSeconds: 4.5, trapSeconds: 4.5,
  monsterSeconds: 14, riddleSeconds: 22, bossSeconds: 32, victorySeconds: 4.5, climbSeconds: 4.2, endSeconds: 13,
  minParty: 6, bots: true, fuelDrain: 0.3, likeFuel: 0.12, likeRain: 300, bossEvery: 5, startFloor: 1, sendCap: 70, ghostCap: 16,
  botHitRate: 0.55, dmgMul: 1, monsterHpMul: 1, topFloor: 30,
};
const SPEED = 3.6;

export class Tower {
  constructor(opts = {}, rng = Math.random) {
    this.o = { ...TOWER_DEFAULTS, ...opts };
    this.rng = rng;
    this.t = 0; this.run = 0; this.floor = 0; this.theme = null; this.themeIdx = -1;
    this.people = new Map();    // uid -> member
    this.byId = new Map();
    this.nextId = 1;
    this.ev = []; this.rAdd = []; this.rDel = [];
    this.fuel = 100; this.hype = 0; this.likes = 0; this.shields = 0; this.bankProphecy = 0;
    this.doors = 3; this.kinds = []; this.voteCounts = [0, 0, 0]; this.prophecy = -1; this.chosen = -1; this.outcome = '';
    this.monster = null; this.riddle = null; this.predict = null; this.pendingSummon = null; this.lowWarned = false;
    this.sessionBest = 0; this.lastResult = null; this.liftFloor = -9; this.summonFloor = -9; this.recentRiddles = []; this.humanAt = -999; this.bossCount = 0;
    this.startRun();
  }
  r(n) { return Math.floor(this.rng() * n); }
  emit(e) { this.ev.push(e); }
  drain() { const e = this.ev; this.ev = []; return e; }
  drainRoster() { const r = { add: this.rAdd, del: this.rDel }; this.rAdd = []; this.rDel = []; return r; }
  rosterEntry(m) { return { id: m.id, name: m.name, color: m.color, bot: m.bot }; }
  get alive() { let n = 0; for (const m of this.people.values()) if (m.alive) n++; return n; }
  get humans() { let n = 0; for (const m of this.people.values()) if (m.alive && !m.bot) n++; return n; }
  aliveList() { return [...this.people.values()].filter((m) => m.alive); }
  ghosts() { return [...this.people.values()].filter((m) => m.inRun && !m.alive); }

  // ------------------------------------------------------------------ people
  member(uid, name, bot = false) {
    let m = this.people.get(uid);
    if (!m) {
      m = { id: this.nextId++, uid, name: cleanName(name), color: colorFor(uid), bot, alive: false, inRun: false, lives: 0, pts: 0, runPts: 0, floors: 0, riddles: 0, hits: 0,
        lastAct: this.t, cmdT: -9, hitT: -9, door: -1, x: 0, y: 0, z: 6, face: Math.PI, climb: null, giftT: -9, attackT: -9, fell: 0 };
      this.people.set(uid, m); this.byId.set(m.id, m); this.rAdd.push(this.rosterEntry(m));
    } else if (name && !bot) { const n = cleanName(name); if (n !== m.name) { m.name = n; this.rAdd.push(this.rosterEntry(m)); } }
    return m;
  }
  /** a comment / gift / like puts you in the party (if you have not fallen this run) */
  join(m) {
    m.lastAct = this.t;
    if (!m.bot) this.humanAt = this.t;
    if (m.alive || (m.inRun && this.phase !== 'gather')) return false;
    m.alive = true; m.inRun = true; m.door = -1; m.climb = null;
    // walk in from the stairs / the gate
    if (this.phase === 'gather') { m.x = (this.rng() - 0.5) * 6; m.z = 8.5; } else { m.x = STAIR.x - STAIR.r; m.z = STAIR.z; }
    m.y = 0;
    this.emit({ k: 'join', id: m.id, bot: m.bot });
    if (!m.bot) this.trimBots();
    return true;
  }
  trimBots() {
    // a real viewer takes a bot's lantern (bots only fill quiet rooms)
    if (this.humans + this.botsAlive() <= this.o.minParty) return;
    const b = [...this.people.values()].find((m) => m.bot && m.alive);
    if (b && this.phase === 'gather') { b.alive = false; b.inRun = false; this.emit({ k: 'leave', id: b.id }); }
  }
  botsAlive() { let n = 0; for (const m of this.people.values()) if (m.bot && m.alive) n++; return n; }
  fillBots() {
    if (!this.o.bots) return;
    let need = this.o.minParty - this.alive;
    for (let i = 0; i < BOT_NAMES.length && need > 0; i++) {
      const n = BOT_NAMES[(i + this.run * 5) % BOT_NAMES.length];
      const m = this.member('bot:' + n, 'Bot ' + n, true);
      if (m.alive) continue;
      m.inRun = false; this.join(m); need--;
    }
  }

  // ------------------------------------------------------------------ input
  input(ev) {
    if (!ev || !ev.uid) return { ok: false };
    const m = this.member(String(ev.uid), ev.name || ev.uid);
    switch (ev.type) {
      case 'chat': case 'comment': return this.chat(m, String(ev.text || ''));
      case 'like': return this.like(m, Math.max(1, Math.min(100, Number(ev.count) || 1)));
      case 'gift': return this.gift(m, (Number(ev.coins) || 1) * Math.max(1, Number(ev.count) || 1), ev.giftName || 'gift');
      case 'follow': this.join(m); m.lives = Math.min(2, m.lives + 1); this.emit({ k: 'follow', id: m.id }); return { ok: true };
      case 'share': this.join(m); m.lives = Math.min(2, m.lives + 1); this.addFuel(5); this.emit({ k: 'share', id: m.id }); return { ok: true };
      case 'join': this.join(m); return { ok: true };
    }
    return { ok: true };
  }
  chat(m, text) {
    const c = parseTower(text);
    const joined = this.join(m);
    m.cmdT = this.t;
    if (this.phase === 'vote' && c.cmd === 'vote') {
      const d = doorIndex(c.door, this.doors);
      if (d >= 0) { if (m.door !== d) { m.door = d; this.countVotes(); this.emit({ k: 'vote', id: m.id, d }); } return { ok: true, cmd: 'vote', door: d + 1 }; }
    }
    if (this.phase === 'riddle' && this.riddle && !this.riddle.solved) {
      const a = answers(text, this.riddle.a);
      if (a) { this.solveRiddle(m, a); return { ok: true, cmd: 'riddle' }; }
    }
    if ((this.phase === 'monster' || this.phase === 'boss') && this.monster && m.alive) { this.hit(m, c.cmd === 'attack' ? 1.5 : 1); return { ok: true, cmd: 'hit' }; }
    return { ok: true, cmd: joined ? 'join' : c.cmd };
  }
  like(m, n) {
    this.join(m);
    this.likes += n; this.hype += n;
    this.addFuel(n * this.o.likeFuel);
    if ((this.phase === 'monster' || this.phase === 'boss') && this.monster) this.damage(m, n * 0.25, false, true);
    if (this.hype >= this.o.likeRain) {
      this.hype -= this.o.likeRain; this.addFuel(15);
      const g = this.ghosts().sort((a, b) => b.fell - a.fell)[0];
      if (g) this.rise(g, 'likes');
      for (const a of this.aliveList()) a.runPts += 2;
      this.emit({ k: 'blaze', rescued: g ? g.id : 0 });
    }
    return { ok: true };
  }
  gift(m, coins, giftName) {
    this.join(m);
    const tier = towerTier(coins);
    m.giftT = this.t; m.runPts += Math.min(50, 3 + coins); m.pts += 0;
    const e = { k: 'gift', id: m.id, tier: tier.id, coins, giftName };
    switch (tier.id) {
      case 'prophecy': {
        this.addFuel(Math.min(12, 3 * coins));
        if (this.phase === 'vote' && this.prophecy < 0) { this.prophecy = this.safeDoor(); e.door = this.prophecy; }
        else if (this.prophecy < 0) { this.bankProphecy = 1; e.banked = true; }
        break;
      }
      case 'shield': this.shields = Math.min(3, this.shields + 1); this.addFuel(6); if (m.inRun && !m.alive) this.rise(m, 'gift'); e.shields = this.shields; break;
      case 'rescue': {
        this.addFuel(25);
        const list = this.ghosts().sort((a, b) => (b === m) - (a === m) || b.fell - a.fell).slice(0, 5);
        for (const g of list) this.rise(g, 'gift');
        e.n = list.length; break;
      }
      case 'skip': {
        this.addFuel(10);
        if (this.monster) { this.damage(m, this.monster.max * (this.monster.boss ? 0.3 : 1), true); e.hitBoss = true; }
        else if (this.liftFloor >= this.floor - 1 || this.skipBanked) { this.addFuel(15); for (const g of this.ghosts().slice(0, 2)) this.rise(g, 'gift'); e.blessing = true; }
        else if (['enter', 'vote', 'reveal', 'riddle', 'trap', 'treasure'].includes(this.phase)) { this.emit(e); this.startClimb(true); return { ok: true, tier: tier.id }; }
        else this.skipBanked = true;
        break;
      }
      case 'boss': {
        this.addFuel(20);
        if (this.monster && this.monster.boss) { this.damage(m, this.monster.max * 0.35, true); e.hitBoss = true; }
        else if (this.pendingSummon || this.floor - this.summonFloor < 3) { this.addFuel(30); for (const g of this.ghosts()) this.rise(g, 'gift'); e.blessing = true; }
        else { this.pendingSummon = { by: m.id }; this.summonFloor = this.floor; }
        break;
      }
    }
    this.emit(e);
    return { ok: true, tier: tier.id };
  }
  addFuel(v) { this.fuel = Math.max(0, Math.min(100, this.fuel + v)); if (this.fuel > 35) this.lowWarned = false; }

  // ------------------------------------------------------------------ run + floors
  setPhase(p, sec) { this.phase = p; this.phaseStart = this.t; this.phaseEnd = this.t + sec; }
  startRun() {
    this.run++; this.floor = this.o.startFloor - 1; this.fuel = 100; this.shields = 0; this.bankProphecy = 0; this.pendingSummon = null; this.skipBanked = false; this.liftFloor = -9; this.summonFloor = -9;
    this.monster = null; this.riddle = null; this.predict = null; this.kinds = []; this.chosen = -1; this.outcome = ''; this.lowWarned = false;
    this.themeIdx = -1; this.theme = { id: 'gate', name: 'The Tower Gate' }; this.liftPending = false; this.upcoming = null;
    // tidy: forget viewers gone for 20+ minutes
    for (const [uid, m] of this.people) if (!m.bot && this.t - m.lastAct > 1200) { this.people.delete(uid); this.byId.delete(m.id); this.rDel.push(m.id); }
    for (const m of this.people.values()) { m.alive = false; m.inRun = false; m.runPts = 0; m.door = -1; m.climb = null; m.lives = Math.min(m.lives, 1); m.z = 8; m.y = 0; }
    this.setPhase('gather', this.o.gatherSeconds);
    // everyone active in the last 3 minutes keeps their lantern for the next climb
    for (const m of this.people.values()) if (!m.bot && this.t - m.lastAct < 180) this.join(m);
    this.fillBots();
    this.emit({ k: 'gather', run: this.run });
  }
  nextFloor() {
    this.floor++;
    for (const m of this.people.values()) { m.door = -1; if (m.climb) { m.climb = null; m.y = 0; } }
    this.kinds = []; this.chosen = -1; this.outcome = ''; this.prophecy = -1; this.voteCounts = [0, 0, 0]; this.riddle = null; this.monster = null;
    if (this.liftPending) { this.liftPending = false; this.floor++; }
    const boss = this.floor % this.o.bossEvery === 0;
    const i = this.nextTheme(this.floor);
    this.themeIdx = i; this.theme = boss ? BOSS_THEME : THEMES[i]; this.upcoming = null;
    this.doors = boss ? 0 : this.floor % 3 === 2 ? 2 : 3;
    this.setPhase('enter', this.o.enterSeconds);
    this.predict = null;
    if (!boss) {
      const al = this.aliveList(), hum = al.filter((m) => !m.bot), pool = hum.length ? hum : al;
      if (pool.length) { const p = pool[this.r(pool.length)]; this.predict = { id: p.id, kind: this.rng() < 0.62 ? 'fall' : 'gold' }; }
    }
    this.emit({ k: 'floor', n: this.floor, th: this.themeIdx, boss, doors: this.doors, predict: this.predict });
  }
  /** theme of floor n (picked ahead so the overlay can build the room above while the party climbs) */
  nextTheme(n) {
    if (n % this.o.bossEvery === 0) return -2;
    if (this.upcoming && this.upcoming.n === n) return this.upcoming.th;
    let i; do { i = this.r(THEMES.length); } while (i === this.themeIdx && THEMES.length > 1);
    this.upcoming = { n, th: i }; return i;
  }
  startVote() {
    // door contents: at least one safe door (treasure or riddle), harder mixes higher up
    const n = this.doors, pool = [];
    const hard = Math.min(0.5, 0.15 + this.floor * 0.02);
    const kinds = ['treasure'];
    kinds.push(this.rng() < 0.55 ? 'trap' : 'monster');
    if (n === 3) kinds.push(this.rng() < 0.55 ? 'riddle' : this.rng() < hard ? 'trap' : this.rng() < 0.5 ? 'monster' : 'riddle');
    while (kinds.length) pool.push(kinds.splice(this.r(kinds.length), 1)[0]);
    this.kinds = pool;
    for (const m of this.people.values()) m.door = -1;
    this.voteCounts = [0, 0, 0];
    this.setPhase('vote', this.o.voteSeconds);
    if (this.bankProphecy) { this.bankProphecy = 0; this.prophecy = this.safeDoor(); this.emit({ k: 'prophecy', door: this.prophecy, banked: true }); }
    this.emit({ k: 'vote', start: true, doors: n });
  }
  safeDoor() { const i = this.kinds.indexOf('treasure'); return i >= 0 ? i : Math.max(0, this.kinds.indexOf('riddle')); }
  countVotes() { const c = [0, 0, 0]; for (const m of this.people.values()) if (m.door >= 0) c[m.door]++; this.voteCounts = c; }
  closeVote() {
    this.countVotes();
    const c = this.voteCounts.slice(0, this.doors), max = Math.max(...c);
    const ties = c.map((v, i) => (v === max ? i : -1)).filter((i) => i >= 0);
    this.chosen = ties[this.r(ties.length)];
    this.outcome = this.kinds[this.chosen];
    this.setPhase('reveal', this.o.revealSeconds);
    this.emit({ k: 'reveal', door: this.chosen, kinds: this.kinds.slice(), votes: c, none: max === 0 });
  }
  resolve() {
    const kind = this.outcome, voters = new Set([...this.people.values()].filter((m) => m.door === this.chosen).map((m) => m.id));
    if (kind === 'treasure') {
      this.addFuel(Math.max(8, 20 - this.floor * 0.6));
      for (const m of this.aliveList()) { m.runPts += voters.has(m.id) ? 15 : 10; }
      let lucky = null;
      if (this.predict && this.predict.kind === 'gold') { const p = this.byId.get(this.predict.id); if (p && p.alive) { p.runPts += 25; lucky = p.id; } }
      this.setPhase('treasure', this.o.treasureSeconds);
      this.emit({ k: 'treasure', door: this.chosen, lucky });
    } else if (kind === 'trap') {
      this.setPhase('trap', this.o.trapSeconds);
      const r = this.casualties(Math.min(0.4, 0.14 + this.floor * 0.015), voters);
      this.emit({ k: 'trap', trap: this.theme.trap, ...r });
    } else if (kind === 'monster') {
      this.spawnMonster(false);
    } else {
      let i; do { i = this.r(RIDDLES.length); } while (this.recentRiddles.includes(i) && this.recentRiddles.length < RIDDLES.length - 1);
      this.recentRiddles.push(i); if (this.recentRiddles.length > 12) this.recentRiddles.shift();
      this.riddle = { i, q: RIDDLES[i][0], a: RIDDLES[i][1], solved: null, botAt: this.t + 8 + this.rng() * 9 };
      this.setPhase('riddle', this.o.riddleSeconds);
      this.emit({ k: 'riddle', i });
    }
  }
  /** Some of the party fall. Shields block it; spare lives save you; Mira's prophecy victim goes first. */
  casualties(frac, weightIds = new Set(), minN = 1) {
    if (this.shields > 0) { this.shields--; return { blocked: true, fell: [], saved: [] }; }
    const al = this.aliveList();
    let n = Math.max(minN, Math.round(al.length * frac));
    if (al.length <= 1) n = this.rng() < 0.5 ? 1 : 0;
    else n = Math.min(n, al.length - 1);
    const fell = [], saved = [];
    const pick = [];
    if (this.predict && this.predict.kind === 'fall' && !this.predict.done) {
      const p = this.byId.get(this.predict.id);
      if (p && p.alive && this.rng() < 0.75 && n > 0) { pick.push(p); this.predict.done = true; }
    }
    const pool = al.filter((m) => !pick.includes(m)).map((m) => ({ m, w: (weightIds.has(m.id) ? 2 : 1) * (m.bot ? 1.4 : 1) * (this.t - m.giftT < 60 ? 0.5 : 1) }));
    while (pick.length < n && pool.length) {
      let tot = 0; for (const p of pool) tot += p.w;
      let x = this.rng() * tot, j = 0;
      for (; j < pool.length - 1; j++) { x -= pool[j].w; if (x <= 0) break; }
      pick.push(pool.splice(j, 1)[0].m);
    }
    for (const m of pick) {
      if (m.lives > 0) { m.lives--; saved.push(m.id); continue; }
      this.fall(m); fell.push(m.id);
    }
    return { blocked: false, fell, saved, foretold: this.predict && this.predict.done && pick[0] && pick[0].id === this.predict.id && fell.includes(this.predict.id) ? this.predict.id : 0 };
  }
  fall(m) { m.alive = false; m.fell = this.t; m.climb = null; m.door = -1; this.emit({ k: 'fall', id: m.id }); }
  rise(m, why) { if (m.alive) return; m.alive = true; m.inRun = true; m.climb = null; m.y = 0; this.emit({ k: 'rise', id: m.id, why }); }

  spawnMonster(boss, summoned = false) {
    const party = this.alive;
    const hpBase = boss ? (70 + 9 * party) * (1 + this.floor * 0.1) * (summoned ? 1.25 : 1) : (18 + 3 * party) * (1 + this.floor * 0.07);
    const hp = Math.round(hpBase * this.o.monsterHpMul);
    const name = boss ? BOSSES[(this.bossCount++) % BOSSES.length] : this.theme.mname || 'a monster';
    this.monster = { kind: boss ? 'boss' : this.theme.monster, name, hp, max: hp, boss, summoned, nextAtk: this.t + (boss ? 4.5 : 3.5), atkN: 0, hitters: new Map() };
    this.setPhase(boss ? 'boss' : 'monster', boss ? this.o.bossSeconds : this.o.monsterSeconds);
    this.emit({ k: 'monster', kind: this.monster.kind, name, hp, boss, summoned });
  }
  hit(m, mul) {
    if (this.t - m.attackT < 0.35) return;
    m.attackT = this.t;
    const crit = this.rng() < 0.15;
    this.damage(m, (2 + this.rng() * 2) * mul * (crit ? 2 : 1) * this.o.dmgMul, crit);
  }
  damage(m, d, crit, quiet = false) {
    const mo = this.monster; if (!mo || mo.hp <= 0) return;
    d = Math.max(0.1, d);
    mo.hp = Math.max(0, mo.hp - d);
    mo.hitters.set(m.id, (mo.hitters.get(m.id) || 0) + d);
    m.hits++; m.hitT = this.t;
    if (!quiet || d >= 1) this.emit({ k: 'hit', id: m.id, d: Math.round(d), c: crit ? 1 : 0 });
    if (mo.hp <= 0) this.monsterDown();
  }
  monsterDown() {
    const mo = this.monster;
    const top = [...mo.hitters.entries()].sort((a, b) => b[1] - a[1]);
    for (const [id, d] of top) { const m = this.byId.get(id); if (m) m.runPts += Math.min(40, 5 + Math.round(d / 3)); }
    const topId = top.length ? top[0][0] : 0;
    if (topId) this.byId.get(topId).runPts += mo.boss ? 40 : 15;
    if (mo.boss) {
      const g = this.ghosts(); for (const x of g) this.rise(x, 'boss');
      this.addFuel(mo.summoned ? 100 : 35);
      this.emit({ k: 'mwin', boss: true, name: mo.name, top: topId, rescued: g.length, summoned: mo.summoned });
      this.monster = null;
      this.setPhase('victory', this.o.victorySeconds);
      if (mo.summoned) this.skipBanked = true;
    } else {
      this.addFuel(10);
      this.emit({ k: 'mwin', boss: false, name: mo.name, top: topId });
      this.monster = null;
      this.setPhase('victory', this.o.victorySeconds * 0.8);
    }
  }
  monsterWins() {
    const mo = this.monster;
    const r = this.casualties(mo.boss ? 0.3 : 0.2);
    this.addFuel(mo.boss ? -28 : -12);
    this.emit({ k: 'mlose', boss: mo.boss, name: mo.name, ...r });
    this.monster = null;
    this.setPhase('trap', this.o.trapSeconds * 0.8);
  }
  solveRiddle(m, a) {
    this.riddle.solved = m.id;
    m.runPts += 40; m.riddles++; this.addFuel(12);
    this.emit({ k: 'rwin', id: m.id, a, bot: m.bot });
    this.phaseEnd = Math.min(this.phaseEnd, this.t + 4.5);
  }
  startClimb(lift = false) {
    if (this.pendingSummon && !this.monster) {
      const by = this.pendingSummon.by; this.pendingSummon = null;
      this.emit({ k: 'summon', id: by });
      this.spawnMonster(true, true); return;
    }
    this.monster = null; this.riddle = null;
    for (const m of this.aliveList()) { m.runPts += 10; m.floors++; }
    // queue at the stairs, nearest first
    const al = this.aliveList().sort((a, b) => Math.hypot(a.x - STAIR.x, a.z - STAIR.z) - Math.hypot(b.x - STAIR.x, b.z - STAIR.z));
    const cs = this.o.climbSeconds, step = Math.min(0.14, (cs * 0.5) / Math.max(1, al.length));
    al.forEach((m, i) => { m.climb = { delay: this.t + i * step, s: 0, on: false }; m.door = -1; });
    this.lift = lift || this.skipBanked; this.skipBanked = false;
    this.setPhase('climb', cs);
    this.emit({ k: 'climb', lift: this.lift, floor: this.floor });
    if (this.lift) { this.liftPending = true; this.addFuel(10); this.liftFloor = this.floor + 2; }
    this.nextTheme(this.floor + (this.lift ? 2 : 1));   // Mira's lift: rises past a floor safely
  }
  endRun(reason) {
    const hum = [...this.people.values()].filter((m) => m.inRun && !m.bot);
    const top = [...this.people.values()].filter((m) => m.inRun && !m.bot && m.runPts > 0).sort((a, b) => b.runPts - a.runPts).slice(0, 3);
    const all = [...this.people.values()].filter((m) => m.inRun).sort((a, b) => b.runPts - a.runPts);
    for (const m of hum) m.pts += m.runPts;
    const reached = this.floor;
    this.sessionBest = Math.max(this.sessionBest, reached);
    this.lastResult = { run: this.run, floor: reached, reason, players: hum.map((m) => ({ uid: m.uid, name: m.name, pts: m.runPts, floors: m.floors, riddles: m.riddles })), top: top.map((m) => m.id) };
    this.monster = null; this.riddle = null; this.kinds = [];
    for (const m of this.people.values()) m.climb = null;
    this.setPhase('end', this.o.endSeconds);
    this.emit({ k: 'end', floor: reached, reason, top: (top.length ? top : all.slice(0, 3)).map((m) => m.id), best: this.sessionBest });
  }

  // ------------------------------------------------------------------ simulation step
  step(dt) {
    this.t += dt;
    const ph = this.phase;
    if (ph !== 'gather' && ph !== 'end') {
      this.fuel = Math.max(0, this.fuel - this.o.fuelDrain * (1 + this.floor * 0.07) * dt * (ph === 'climb' || ph === 'enter' ? 0.5 : 1));
      if (this.fuel < 25 && !this.lowWarned) { this.lowWarned = true; this.emit({ k: 'lowfuel' }); }
    }
    this.bots(dt);
    if (this.monster && this.t >= this.monster.nextAtk) this.monsterAttack();
    if (this.riddle && !this.riddle.solved && this.o.bots && this.t > this.riddle.botAt && this.t - this.humanAt > 45) {
      this.riddle.botAt = 1e9;
      if (this.rng() < 0.7) { const b = this.aliveList().filter((m) => m.bot); if (b.length) this.solveRiddle(b[this.r(b.length)], this.riddle.a[0]); }
    }
    this.move(dt);
    if (ph !== 'gather' && ph !== 'end') {
      if (this.alive === 0) return this.endRun('fallen');
      if (this.fuel <= 0) return this.endRun('dark');
    }
    if (this.t < this.phaseEnd) return;
    switch (ph) {
      case 'gather': if (this.alive === 0) { this.fillBots(); if (!this.alive) { this.phaseEnd = this.t + 2; return; } } this.nextFloor(); break;
      case 'enter': if (this.doors === 0) this.spawnMonster(true); else this.startVote(); break;
      case 'vote': this.closeVote(); break;
      case 'reveal': this.resolve(); break;
      case 'monster': case 'boss': this.monsterWins(); break;
      case 'riddle':
        if (!this.riddle.solved) { this.addFuel(-10); this.emit({ k: 'rfail', a: this.riddle.a[0] }); this.riddle.solved = -1; this.phaseEnd = this.t + 3.5; return; }
        this.startClimb(); break;
      case 'treasure': case 'trap': case 'victory': this.startClimb(); break;
      case 'climb': if (this.floor >= this.o.topFloor) { this.floor = this.o.topFloor; this.endRun('top'); } else this.nextFloor(); break;
      case 'end': this.startRun(); break;
    }
  }
  monsterAttack() {
    const mo = this.monster;
    mo.atkN++; mo.nextAtk = this.t + (mo.boss ? 4 : 3.2);
    this.addFuel(mo.boss ? -4 : -3);
    let r = null;
    if (mo.boss && mo.atkN % 3 === 0) r = this.casualties(0.08, new Set(), 1);
    this.emit({ k: 'matk', boss: mo.boss, slam: !!r, ...(r || {}) });
  }
  bots(dt) {
    if (!this.o.bots) return;
    for (const m of this.people.values()) {
      if (!m.bot || !m.alive) continue;
      if (this.phase === 'vote' && m.door < 0 && this.rng() < dt * 0.25 && this.t - this.phaseStart < this.o.voteSeconds * 0.8) {
        // bots lean a little toward the prophecy door, otherwise random
        const d = this.prophecy >= 0 && this.rng() < 0.5 ? this.prophecy : this.r(this.doors);
        m.door = d; this.countVotes(); this.emit({ k: 'vote', id: m.id, d });
      }
      if (this.monster && this.rng() < dt * this.o.botHitRate) this.damage(m, (1.2 + this.rng() * 1.6) * this.o.dmgMul, false);
    }
  }
  /** formation targets per phase + walking; the climb follows the spiral stair */
  move(dt) {
    const al = [];
    for (const m of this.people.values()) if (m.alive) al.push(m);
    al.sort((a, b) => a.id - b.id);
    const dx = this.doors ? doorX(this.doors) : [];
    const perDoor = [[], [], []], idle = [];
    for (const m of al) (this.phase === 'vote' || this.phase === 'reveal') && m.door >= 0 ? perDoor[m.door].push(m) : idle.push(m);
    const flower = (list, cx, cz, sp, sq) => list.forEach((m, i) => { const r = sp * Math.sqrt(i + 0.5), a = i * 2.39996; m.tx = cx + Math.cos(a) * r; m.tz = cz + Math.sin(a) * r * sq; });
    const fight = this.phase === 'monster' || this.phase === 'boss';
    const sp = idle.length > 40 ? 0.52 : idle.length > 20 ? 0.6 : 0.7;
    flower(idle, 0, fight ? -0.6 : -1.9, sp, 0.55);
    perDoor.forEach((list, d) => { if (list.length) flower(list, dx[d], DOOR_Z + 3.0, 0.5, 0.7); });
    const climbing = this.phase === 'climb';
    const sx = STAIR.x - STAIR.r, sz = STAIR.z;
    for (const m of al) {
      if (climbing && m.climb) {
        const c = m.climb;
        if (this.t < c.delay) { m.tx = sx - 0.6; m.tz = sz + 1.2; }
        else if (!c.on) { m.tx = sx; m.tz = sz; if (Math.hypot(m.x - sx, m.z - sz) < 0.5 || this.t - c.delay > 1.6) { c.on = true; c.s = 0; } }
        if (c.on) {
          c.s = Math.min(1, c.s + dt / 1.7);
          const a = Math.PI - c.s * Math.PI * 2;   // one turn around the stair post
          const nx = STAIR.x + Math.cos(a) * STAIR.r, nz = STAIR.z + Math.sin(a) * STAIR.r;
          m.face = Math.atan2(nx - m.x, nz - m.z) || m.face;
          m.x = nx; m.z = nz; m.y = c.s * FH;
          continue;
        }
      }
      const ddx = m.tx - m.x, ddz = m.tz - m.z, d = Math.hypot(ddx, ddz);
      if (d > 0.05) { const s = Math.min(d, SPEED * dt * (d > 3 ? 1.4 : 1)); m.x += (ddx / d) * s; m.z += (ddz / d) * s; if (d > 0.3) m.face = Math.atan2(ddx, ddz); }
      else if (fight || this.phase === 'vote' || this.phase === 'enter') m.face = Math.PI;
    }
  }

  // ------------------------------------------------------------------ outputs
  snapshot() {
    const f = [];
    const al = [], gh = [];
    for (const m of this.people.values()) { if (m.alive) al.push(m); else if (m.inRun) gh.push(m); }
    let list = al;
    if (al.length > this.o.sendCap) list = al.slice().sort((a, b) => (b.bot ? 0 : 1) - (a.bot ? 0 : 1) || b.lastAct - a.lastAct).slice(0, this.o.sendCap);
    let crown = 0, best = 0; for (const m of al) if (!m.bot && m.runPts > best) { best = m.runPts; crown = m.id; }
    for (const m of list) {
      let fl = TFLAG.alive | (m.bot ? TFLAG.bot : 0) | (this.t - m.cmdT < 1.2 ? TFLAG.cmd : 0) | (m.lives ? TFLAG.life : 0) | (m.id === crown ? TFLAG.crown : 0) | (this.t - m.hitT < 0.3 ? TFLAG.hit : 0) | (this.t - m.giftT < 3 ? TFLAG.gift : 0);
      if ((this.phase === 'vote' || this.phase === 'reveal') && m.door >= 0) fl |= (m.door + 1) << DOOR_SHIFT;
      if (m.climb && m.climb.on) fl |= 1 << 11;
      f.push(m.id, Math.round(m.x * 100) / 100, Math.round(m.y * 100) / 100, Math.round(m.z * 100) / 100, Math.round(m.face * 100) / 100, fl);
    }
    gh.sort((a, b) => b.fell - a.fell);
    for (const m of gh.slice(0, this.o.ghostCap)) f.push(m.id, 0, 0, 0, 0, TFLAG.ghost | (m.bot ? TFLAG.bot : 0));
    const mo = this.monster;
    return {
      tm: Math.round(this.t * 1000) / 1000, ph: this.phase, tl: Math.max(0, Math.round((this.phaseEnd - this.t) * 10) / 10), pd: Math.round((this.phaseEnd - this.phaseStart) * 10) / 10,
      fl: this.floor, th: this.themeIdx, nd: this.doors, vc: this.voteCounts.slice(0, this.doors), pr: this.prophecy, ch: this.chosen,
      kinds: this.phase === 'vote' || this.phase === 'enter' ? null : this.kinds, fuel: Math.round(this.fuel * 10) / 10, sh: this.shields,
      n: al.length, gh: gh.length, hype: this.hype, run: this.run, best: this.sessionBest,
      mo: mo ? { k: mo.kind, n: mo.name, hp: Math.ceil(mo.hp), max: mo.max, b: mo.boss ? 1 : 0 } : null,
      ri: this.riddle ? this.riddle.i : -1, rs: this.riddle ? this.riddle.solved || 0 : 0, pdc: this.predict ? this.predict.id : 0, pk: this.predict ? this.predict.kind : '',
      lift: this.phase === 'climb' && this.lift ? 1 : 0, nth: this.phase === 'climb' && this.upcoming ? this.upcoming.th : -9, f,
    };
  }
  board(n = 8) {
    const live = new Map();
    for (const m of this.people.values()) if (!m.bot && (m.pts || m.runPts)) live.set(m.uid, { name: m.name, pts: m.pts + (m.inRun && this.phase !== 'end' ? m.runPts : 0), riddles: m.riddles, floors: m.floors });
    return [...live.values()].sort((a, b) => b.pts - a.pts).slice(0, n);
  }
}
