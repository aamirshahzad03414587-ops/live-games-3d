// Viewer Battle Royale: the game rules and simulation. Pure JS (no DOM / Node APIs): the server runs it for the LIVE,
// the overlay can run it locally (?local=1, demo renders) and the tests drive it directly.
//
//   lobby (countdown, fighters drop in, bots fill a quiet room) -> battle (auto-fight, storm ring shrinks, commands,
//   likes, gifts) -> ceremony (podium, confetti, shoutout) -> lobby ...
//
// Everything visible is reported through compact events (this.events) + snapshots, so the renderer can add the juice.
import { parseCommand, findByName, giftTier, colorFor, cleanName, BOT_NAMES, matchKey } from './commands.js';

export const DEFAULTS = {
  lobbySeconds: 20,        // countdown before each battle
  ceremonySeconds: 12,     // podium + confetti
  arenaCap: 50,            // fighters in the arena at once (others wait for the next round / reinforcements)
  vipOverflow: 10,         // gifters may drop in even when the arena is full
  minFighters: 8,          // bots fill up to this many when the room is quiet (0 = no bots)
  bots: true,
  baseHp: 150,
  platform: 20,            // radius of the arena floor (the storm starts inside it)
  maxBattleSeconds: 150,   // then sudden death
  reinforceWindow: 0.4,    // queued viewers drop in during the first 40% of the storm
  botDamage: 0.85,         // bots hit a little softer, so real viewers win more often
  damageMul: 1,            // pace (demo renders use a faster round)
  shrinkSeconds: 0,        // 0 = automatic (38-95 s by fighter count)
};

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const MULTI = { 2: 'DOUBLE KILL', 3: 'TRIPLE KILL', 4: 'QUADRA KILL', 5: 'RAMPAGE' };
const STREAK = { 3: 'ON FIRE', 5: 'UNSTOPPABLE', 8: 'GODLIKE', 12: 'LEGENDARY' };
export const FLAG = { alive: 1, shield: 2, speed: 4, giant: 8, rage: 16, dash: 32, dance: 64, air: 128, crown: 256, cmd: 512, low: 1024, bot: 2048 };

export class BattleRoyale {
  constructor(opts = {}, rng = Math.random) {
    this.o = { ...DEFAULTS, ...opts };
    this.rng = rng;
    this.t = 0;
    this.people = new Map();    // uid -> session record { uid, name, color, bot, wins, kills, games, best, follower, sharer, gifter, bank[], lastKiller }
    this.fighters = new Map();  // fighter id -> fighter (this round)
    this.byUid = new Map();     // uid -> fighter id (this round)
    this.queue = [];            // uids waiting for a slot
    this.nextId = 1;
    this.events = [];
    this.rosterAdd = []; this.rosterDel = [];
    this.meteors = [];
    this.likes = 0; this.hype = 0; this.round = 0;
    this.results = [];          // finished rounds (for the server's leaderboard)
    this.botIdx = Math.floor(rng() * BOT_NAMES.length);
    this.enterLobby();
  }

  // ------------------------------------------------------------------ helpers
  r(a = 0, b = 1) { return a + (b - a) * this.rng(); }
  emit(e) { this.events.push(e); if (this.events.length > 400) this.events.splice(0, this.events.length - 400); }
  drain() { const e = this.events; this.events = []; return e; }
  drainRoster() { const r = { add: this.rosterAdd, del: this.rosterDel }; this.rosterAdd = []; this.rosterDel = []; return r; }
  get alive() { let n = 0; for (const f of this.fighters.values()) if (f.alive) n++; return n; }
  get humans() { let n = 0; for (const f of this.fighters.values()) if (!f.bot) n++; return n; }
  aliveList() { return [...this.fighters.values()].filter((f) => f.alive); }
  person(uid, name) {
    let p = this.people.get(uid);
    if (!p) { p = { uid, name: cleanName(name || uid), color: colorFor(uid), bot: uid.startsWith('bot:'), wins: 0, kills: 0, games: 0, best: 0, bank: [], lastSeen: this.t, joinedAt: this.t }; this.people.set(uid, p); }
    if (name && !p.bot) p.name = cleanName(name);
    p.lastSeen = this.t;
    return p;
  }
  rosterEntry(f) { return { id: f.id, name: f.name, color: f.color, bot: f.bot }; }

  // ------------------------------------------------------------------ phases
  enterLobby() {
    for (const f of this.fighters.values()) this.rosterDel.push(f.id);
    this.fighters.clear(); this.byUid.clear(); this.meteors = [];
    this.phase = 'lobby'; this.phaseT = this.t; this.phaseEnd = this.t + this.o.lobbySeconds;
    this.round++;
    this.storm = { r: this.o.platform * 0.9, target: this.o.platform * 0.9, R0: this.o.platform * 0.9, rf: 3, push: 0 };
    this.firstBlood = false; this.podium = null; this.winner = null;
    this.emit({ k: 'phase', ph: 'lobby', round: this.round });
    // everyone who played or waited recently gets a seat again (priority first), so a 200-viewer room rotates fairly
    // (viewers silent for 10+ minutes have probably left the LIVE: they rejoin with their next comment)
    const recent = this.queue.filter((uid) => { const p = this.people.get(uid); return p && this.t - p.lastSeen < 600; });
    this.queue = [];
    for (const uid of recent) this.seat(uid, { quiet: true });
  }

  startBattle() {
    this.fillBots(true);
    if (this.alive < 2) { this.phaseEnd = this.t + 5; return; }   // bots off and nobody to fight: wait
    const n = this.alive;
    this.phase = 'battle'; this.phaseT = this.t;
    const R0 = clamp(8 + Math.sqrt(n) * 1.7, 10, this.o.platform - 1);
    const shrink = this.o.shrinkSeconds || clamp(30 + n * 0.9, 38, 95);
    this.storm = { R0, r: R0, target: R0, rf: clamp(2.5 + Math.sqrt(n) * 0.25, 2.5, 5), hold: 6, shrink, push: 0 };
    this.phaseEnd = this.t + this.o.maxBattleSeconds;
    this.startN = n;
    // spread everyone inside the starting ring (lobby positions may be anywhere)
    let i = 0;
    for (const f of this.fighters.values()) {
      const a = (i++ / n) * Math.PI * 2 + this.r(-0.2, 0.2), d = R0 * this.r(0.35, 0.85);
      f.x = Math.cos(a) * d; f.z = Math.sin(a) * d; f.vx = f.vz = 0; f.hp = f.maxHp; f.danceUntil = 0;
      const p = this.people.get(f.uid); if (p) { p.games++; this.applyBank(f, p); }
    }
    this.emit({ k: 'phase', ph: 'battle', n });
  }

  endBattle(winner) {
    this.phase = 'ceremony'; this.phaseT = this.t; this.phaseEnd = this.t + this.o.ceremonySeconds;
    const ranked = [...this.fighters.values()].sort((a, b) => (a.place || 999) - (b.place || 999));
    if (winner) { winner.place = 1; }
    const top = ranked.filter((f) => f.place).slice(0, 3);
    const spots = [[0, 1.5, 0], [-2.1, 1.0, 0.5], [2.1, 0.6, 0.5]];
    this.podium = top.map((f) => f.id);
    for (const f of this.fighters.values()) {
      const k = this.podium.indexOf(f.id);
      if (k >= 0) { f.alive = true; f.x = spots[k][0]; f.y = spots[k][1]; f.z = spots[k][2]; f.face = Math.PI / 2; f.vx = f.vz = 0; f.hp = f.maxHp; f.danceUntil = this.t + 99; f.shieldUntil = 0; f.giantUntil = 0; f.state = 'podium'; }
      else f.alive = false;
    }
    const res = { round: this.round, at: this.t, players: [], winner: winner ? { uid: winner.uid, name: winner.name, bot: winner.bot, kills: winner.kills } : null };
    for (const f of this.fighters.values()) {
      const p = this.people.get(f.uid); if (!p) continue;
      p.kills += f.kills; p.best = Math.max(p.best, f.kills);
      if (f.place === 1) p.wins++;
      res.players.push({ uid: f.uid, name: f.name, bot: f.bot, kills: f.kills, place: f.place || 0 });
    }
    this.results.push(res); if (this.results.length > 20) this.results.shift();
    this.lastResult = res;
    this.emit({ k: 'win', a: winner ? winner.id : -1, top: this.podium, kills: winner ? winner.kills : 0, bot: winner && winner.bot ? 1 : 0 });
    // back of the queue: next round everyone who is still around plays again (seated in enterLobby)
    for (const f of this.fighters.values()) if (!f.bot && !this.queue.includes(f.uid)) this.queue.push(f.uid);
  }

  // ------------------------------------------------------------------ seats
  cap() { return this.o.arenaCap; }
  /** Put a viewer in the arena now (lobby, or battle reinforcement / VIP) or in the queue. */
  seat(uid, { vip = false, quiet = false, force = false } = {}) {
    const p = this.people.get(uid); if (!p) return 'none';
    if (this.byUid.has(uid)) { const f = this.fighters.get(this.byUid.get(uid)); return f && f.alive ? 'in' : 'dead'; }
    const humansIn = this.humans;
    const room = humansIn < this.cap() || (vip && humansIn < this.cap() + this.o.vipOverflow);
    const window = this.phase === 'lobby' || (this.phase === 'battle' && (force || vip || this.stormProgress() < this.o.reinforceWindow));
    if (!room || !window) {
      if (!this.queue.includes(uid)) { if (vip || p.follower || p.gifter) this.queue.unshift(uid); else this.queue.push(uid); }
      if (!quiet) this.emit({ k: 'queued', n: p.name, q: this.queue.length });
      return 'queued';
    }
    this.queue = this.queue.filter((u) => u !== uid);
    if (!p.bot) this.dropBot();
    this.spawn(p, { drop: true });
    return 'in';
  }

  spawn(p, { drop = false } = {}) {
    const id = this.nextId++;
    const s = this.phase === 'lobby' ? this.lobbyRadius() : this.storm.r * 0.8, a = this.r(0, Math.PI * 2), d = Math.sqrt(this.rng()) * s;
    const maxHp = this.o.baseHp + (p.follower ? 30 : 0);
    const f = {
      id, uid: p.uid, name: p.name, color: p.color, bot: p.bot,
      x: Math.cos(a) * d, y: drop ? 14 : 0, z: Math.sin(a) * d, vx: 0, vz: 0, kx: 0, kz: 0, face: this.r(0, 6.28),
      hp: maxHp, maxHp, alive: true, kills: 0, streak: 0, multi: 0, lastKillT: -99, place: 0,
      tgt: 0, cmdTgt: 0, cmdUntil: 0, retargetAt: 0, atkCd: this.r(0.3, 1), dashCd: 0, dashUntil: 0, shieldUntil: drop ? this.t + 2 : 0, shieldCd: 0,
      speedUntil: 0, giantUntil: 0, rageUntil: 0, danceUntil: 0, charge: 0, lastHitBy: 0, lastHitT: -99, dropUntil: drop ? this.t + 1.1 : 0, cmdT: -99,
      botActT: this.t + this.r(4, 10), wander: this.r(0, 6.28),
    };
    this.fighters.set(id, f); this.byUid.set(p.uid, id);
    this.rosterAdd.push(this.rosterEntry(f));
    this.emit({ k: 'drop', a: id, bot: p.bot ? 1 : 0 });
    return f;
  }

  fillBots(force = false) {
    if (!this.o.bots || this.o.minFighters <= 0) return;
    const want = this.o.minFighters;
    let n = this.fighters.size;
    while (n < want && (force || this.phase === 'lobby')) {
      const name = 'Bot ' + BOT_NAMES[this.botIdx++ % BOT_NAMES.length];
      const uid = 'bot:' + matchKey(name) + ':' + this.round + ':' + n;
      const p = this.person(uid, name); p.bot = true;
      this.spawn(p, { drop: true }); n++;
    }
  }
  /** A real viewer arrived: a bot (if any) leaves to make room - only in the lobby, never mid-fight. */
  dropBot() {
    if (this.phase !== 'lobby' || this.fighters.size < this.o.minFighters) return;
    for (const f of this.fighters.values()) if (f.bot) { this.fighters.delete(f.id); this.byUid.delete(f.uid); this.people.delete(f.uid); this.rosterDel.push(f.id); this.emit({ k: 'poof', a: f.id }); return; }
  }

  applyBank(f, p) {
    for (const tier of p.bank.splice(0)) this.applyGift(f, p, tier, true);
  }

  /** Lobby fighters mingle near the centre (a busy-looking crowd, all on screen). */
  lobbyRadius() { return Math.min(this.o.platform * 0.7, 4 + Math.sqrt(this.fighters.size + 1) * 0.9); }

  // ------------------------------------------------------------------ live input
  /** ev: { type: chat|gift|like|follow|share|join, uid, name, text, coins, count, giftName } */
  input(ev) {
    if (!ev || !ev.uid) return { ok: false, reason: 'no-user' };
    const uid = String(ev.uid).slice(0, 64);
    if (uid.startsWith('bot:')) return { ok: false, reason: 'reserved' };
    const p = this.person(uid, ev.name);
    switch (ev.type) {
      case 'chat': return this.onChat(p, String(ev.text || ''));
      case 'gift': return this.onGift(p, ev);
      case 'like': return this.onLike(p, Number(ev.count) || 1);
      case 'follow': p.follower = true; this.boostMaxHp(p, 30); this.emit({ k: 'perk', n: p.name, perk: 'follow' }); this.seat(uid); return { ok: true };
      case 'share': { p.sharer = true; const f = this.fighterOf(p); if (f && f.alive) f.rageUntil = this.t + 12; else p.bank.push('rage'); this.emit({ k: 'perk', n: p.name, perk: 'share', a: f ? f.id : 0 }); this.seat(uid); return { ok: true }; }
      case 'join': return { ok: true, ignored: 'join' }; // entering the LIVE is not joining the game: a comment is
      default: return { ok: false, reason: 'unknown-type' };
    }
  }
  fighterOf(p) { const id = this.byUid.get(p.uid); return id ? this.fighters.get(id) : null; }
  boostMaxHp(p, v) { const f = this.fighterOf(p); if (f && f.alive && !f.followBoost) { f.followBoost = true; f.maxHp += v; f.hp += v; } }

  onChat(p, text) {
    const c = parseCommand(text);
    let st = this.seat(p.uid);
    const joinedNow = st === 'in' && this.fighterOf(p)?.y > 1;
    if (joinedNow) this.emit({ k: 'join', n: p.name, a: this.fighterOf(p).id });
    const f = this.fighterOf(p);
    if (!f || !f.alive) return { ok: true, status: st, cmd: c.cmd };
    f.cmdT = this.t;
    switch (c.cmd) {
      case 'attack': {
        const cand = this.aliveList().filter((o) => o.id !== f.id).map((o) => ({ name: o.name, uid: o.uid, o }));
        const hit = findByName(c.name, cand);
        if (hit) { f.cmdTgt = hit.o.id; f.cmdUntil = this.t + 12; f.tgt = hit.o.id; this.emit({ k: 'cmd', c: 'attack', a: f.id, b: hit.o.id }); }
        else this.emit({ k: 'cmd', c: 'miss', a: f.id });
        break;
      }
      case 'revenge': {
        const kid = p.lastKiller ? this.byUid.get(p.lastKiller) : f.lastHitBy;
        const o = kid && this.fighters.get(kid);
        if (o && o.alive && o.id !== f.id) { f.cmdTgt = o.id; f.cmdUntil = this.t + 15; f.rageUntil = Math.max(f.rageUntil, this.t + 4); this.emit({ k: 'cmd', c: 'revenge', a: f.id, b: o.id }); }
        break;
      }
      case 'shield':
        if (this.t >= f.shieldCd) { f.shieldUntil = this.t + 3.5; f.shieldCd = this.t + 12; this.emit({ k: 'shield', a: f.id }); }
        break;
      case 'dash': this.dash(f); break;
      case 'dance': f.danceUntil = this.t + 2.2; this.emit({ k: 'dance', a: f.id }); break;
      case 'color': {
        p.color = c.color; f.color = c.color;
        this.rosterAdd.push(this.rosterEntry(f)); this.emit({ k: 'cmd', c: 'color', a: f.id });
        break;
      }
    }
    return { ok: true, status: st, cmd: c.cmd };
  }

  dash(f) {
    if (this.t < f.dashCd || f.dropUntil > this.t) return false;
    const o = this.fighters.get(f.cmdTgt || f.tgt);
    const a = o && o.alive ? Math.atan2(o.z - f.z, o.x - f.x) : f.face;
    f.face = a; f.dashUntil = this.t + 0.32; f.dashCd = this.t + 6; f.dashHit = false;
    f.kx = Math.cos(a) * 17; f.kz = Math.sin(a) * 17;
    this.emit({ k: 'dash', a: f.id });
    return true;
  }

  onLike(p, n) {
    n = clamp(n, 1, 50);
    this.likes += n; this.hype += n;
    const f = this.fighterOf(p);
    if (f && f.alive && this.phase === 'battle') {
      const heal = Math.min(n, 10);
      if (f.hp < f.maxHp) { f.hp = Math.min(f.maxHp, f.hp + heal); this.emit({ k: 'heal', a: f.id, v: heal }); }
      f.charge = Math.min(100, f.charge + n * 4);
    } else if (!f) this.seat(p.uid, { quiet: true });
    if (this.hype >= 300) {
      this.hype -= 300;
      let healed = 0;
      for (const o of this.fighters.values()) if (o.alive && !o.bot) { o.hp = Math.min(o.maxHp, o.hp + 20); healed++; }
      this.emit({ k: 'hype', likes: this.likes, healed });
    }
    return { ok: true };
  }

  onGift(p, ev) {
    const coins = (Number(ev.coins) || 1) * (Number(ev.count) || 1);
    const tier = giftTier(coins);
    p.gifter = true;
    p.coins = (p.coins || 0) + coins;
    let f = this.fighterOf(p);
    // a gift gets you in right away (VIP), even into a full arena or a battle that already started
    if (!f) { this.seat(p.uid, { vip: true }); f = this.fighterOf(p); if (f) this.emit({ k: 'join', n: p.name, a: f.id, vip: 1 }); }
    this.emit({ k: 'gift', n: p.name, g: String(ev.giftName || 'Gift').slice(0, 24), tier: tier.id, coins, a: f ? f.id : 0 });
    if (this.phase !== 'battle') {
      if (f && tier.id === 'speed') f.speedUntil = this.t + 8;
      if (f && tier.id === 'giant') f.giantUntil = this.t + 6;   // a taste in the lobby, the real one at the start
      p.bank.push(tier.id);
      this.emit({ k: 'bank', n: p.name, tier: tier.id });
      return { ok: true, tier: tier.id, banked: true };
    }
    this.applyGift(f, p, tier.id, false);
    return { ok: true, tier: tier.id };
  }

  applyGift(f, p, tier, fromBank) {
    const t = this.t;
    if (tier === 'rage') { if (f && f.alive) f.rageUntil = t + 12; return; }
    if (tier === 'revive' && f && !f.alive && this.phase === 'battle') {
      f.alive = true; f.hp = f.maxHp; f.place = 0; f.y = 14; f.dropUntil = t + 1.1; f.shieldUntil = t + 4;
      const a = this.r(0, 6.28), d = this.storm.r * 0.5 * Math.sqrt(this.rng()); f.x = Math.cos(a) * d; f.z = Math.sin(a) * d;
      this.emit({ k: 'revive', a: f.id });
      return;
    }
    if (!f || !f.alive) {
      // a dead viewer's meteor still falls (ghost power); the rest waits for the next round
      if (tier === 'meteor' || tier === 'nuke') this.meteorShower(null, tier === 'nuke' ? 8 : 3, p.uid);
      else p.bank.push(tier);
      return;
    }
    switch (tier) {
      case 'speed': f.speedUntil = t + 8; f.hp = Math.min(f.maxHp, f.hp + 10); break;
      case 'meteor': this.meteorShower(f, 3); break;
      case 'giant': f.giantUntil = t + 15; f.maxHp += 50; f.hp = f.maxHp; break;
      case 'revive': f.hp = f.maxHp; f.shieldUntil = t + 6; f.giantUntil = Math.max(f.giantUntil, t + 10); break;
      case 'nuke': {
        // blow the storm back out and rain meteors on everyone else
        const s = this.storm; s.push = Math.min(s.push + (s.R0 - s.r) * 0.6 + 2, s.R0);
        f.giantUntil = t + 15; f.shieldUntil = t + 5; f.hp = f.maxHp;
        this.emit({ k: 'nuke', a: f.id });
        this.meteorShower(f, 8);
        break;
      }
    }
    if (!fromBank || tier !== 'meteor') this.emit({ k: 'power', a: f.id, tier });
  }

  meteorShower(f, n, uid) {
    const foes = this.aliveList().filter((o) => !f || o.id !== f.id);
    if (!foes.length) return;
    // aim at the biggest clusters near the gifter
    foes.sort((a, b) => (f ? Math.hypot(a.x - f.x, a.z - f.z) - Math.hypot(b.x - f.x, b.z - f.z) : this.rng() - 0.5));
    for (let i = 0; i < n; i++) {
      const o = foes[i % Math.min(foes.length, Math.max(3, n))];
      const x = o.x + this.r(-0.8, 0.8), z = o.z + this.r(-0.8, 0.8);
      const m = { x, z, at: this.t + 1.1 + i * 0.22, by: f ? f.id : 0, byUid: f ? f.uid : uid, dmg: 34, r: 2.4 };
      this.meteors.push(m);
      this.emit({ k: 'meteor', x: +x.toFixed(2), z: +z.toFixed(2), d: +(m.at - this.t).toFixed(2), a: m.by });
    }
  }

  // ------------------------------------------------------------------ simulation
  stormProgress() {
    if (this.phase !== 'battle') return 0;
    const s = this.storm, el = this.t - this.phaseT - s.hold;
    return clamp(el / s.shrink, 0, 1);
  }

  step(dt) {
    dt = Math.min(dt, 0.1);
    this.t += dt;
    const t = this.t;
    if (this.phase === 'lobby') {
      this.fillBots();
      if (t >= this.phaseEnd) this.startBattle();
    } else if (this.phase === 'ceremony') {
      if (t >= this.phaseEnd) this.enterLobby();
    }
    if (this.phase === 'battle') this.updateStorm(dt);
    this.updateFighters(dt);
    if (this.phase === 'battle') {
      this.updateMeteors();
      this.reinforce();
      const alive = this.aliveList();
      if (alive.length <= 1) this.endBattle(alive[0] || null);
      else if (t >= this.phaseEnd && !this.suddenDeath) { this.suddenDeath = true; this.emit({ k: 'storm', msg: 'sudden' }); }
    }
  }

  updateStorm(dt) {
    const s = this.storm, el = this.t - this.phaseT;
    const p = this.stormProgress();
    s.push = Math.max(0, s.push - dt * 0.35);          // a nuke's push slowly closes again
    let target = lerp(s.R0, s.rf, smooth(p));
    if (el > s.hold + s.shrink) target = Math.max(0.6, s.rf - (el - s.hold - s.shrink) * 0.12);   // final squeeze
    if (this.suddenDeath) target = Math.max(0, target - (this.t - this.phaseEnd) * 0.4);
    s.target = target;
    s.r = Math.min(s.R0 + 0.01, target + s.push);
    if (!s.warned && el > s.hold - 0.1) { s.warned = true; this.emit({ k: 'storm', msg: 'closing' }); }
    if (!s.half && p > 0.5) { s.half = true; this.emit({ k: 'storm', msg: 'half' }); }
    s.dps = 5 + 11 * p + (this.suddenDeath ? 15 : 0);
  }

  reinforce() {
    if (!this.queue.length || this.stormProgress() >= this.o.reinforceWindow) return;
    if (this.humans >= this.cap()) return;
    const uid = this.queue.shift();
    if (this.people.has(uid)) { this.seat(uid, { quiet: true, force: true }); const f = this.fighterOf(this.people.get(uid)); if (f) this.emit({ k: 'join', n: f.name, a: f.id, late: 1 }); }
  }

  pickTarget(f, list) {
    if (f.cmdTgt && this.t < f.cmdUntil) { const o = this.fighters.get(f.cmdTgt); if (o && o.alive) return o.id; }
    f.cmdTgt = 0;
    let best = 0, bd = 1e9;
    const sr = this.storm.r;
    for (const o of list) {
      if (o.id === f.id || !o.alive || o.dropUntil > this.t) continue;
      let d = (o.x - f.x) ** 2 + (o.z - f.z) ** 2;
      if (o.x * o.x + o.z * o.z > sr * sr) d *= 1.6;      // prefer foes inside the safe zone
      if (o.id === f.tgt) d *= 0.7;                       // stick to the current fight
      if (o.giantUntil > this.t) d *= 1.3;
      if (d < bd) { bd = d; best = o.id; }
    }
    return best;
  }

  updateFighters(dt) {
    const t = this.t, battle = this.phase === 'battle', list = [...this.fighters.values()];
    const alive = list.filter((f) => f.alive);
    const sr = this.storm.r;
    // crown: most kills this round (2+)
    let crown = null; for (const f of alive) if (f.kills >= 2 && (!crown || f.kills > crown.kills)) crown = f;
    this.crownId = crown ? crown.id : 0;
    for (const f of alive) {
      if (f.state === 'podium') continue;
      if (f.y > 0) { f.y = Math.max(0, f.y - dt * 14 * Math.max(0.25, (f.dropUntil - t) < 0.4 ? 1 : 1)); if (f.y === 0) this.emit({ k: 'land', a: f.id }); }
      const giant = f.giantUntil > t, speedy = f.speedUntil > t;
      const radius = giant ? 0.75 : 0.42;
      let ax = 0, az = 0, sp = (speedy ? 5.6 : 3.4) * (giant ? 0.9 : 1);
      if (f.dropUntil > t) { f.vx = f.vz = 0; continue; }
      const dist2c = f.x * f.x + f.z * f.z;
      if (battle) {
        if (t >= f.retargetAt) { f.tgt = this.pickTarget(f, alive); f.retargetAt = t + 0.35 + this.r(0, 0.25); }
        const o = this.fighters.get(f.tgt);
        const outside = dist2c > (sr - 0.6) ** 2;
        if (outside) {
          const d = Math.sqrt(dist2c) || 1; ax = -f.x / d; az = -f.z / d; sp *= 1.1;
        } else if (o && o.alive) {
          const dx = o.x - f.x, dz = o.z - f.z, d = Math.hypot(dx, dz) || 0.001;
          const reach = (giant ? 1.9 : 1.1) + (o.giantUntil > t ? 0.5 : 0);
          f.face = Math.atan2(dz, dx);
          if (d > reach * 0.9) { ax = dx / d; az = dz / d; }
          else { ax = -dz / d * 0.25 * Math.sin(t * 2 + f.id); az = dx / d * 0.25 * Math.sin(t * 2 + f.id); sp *= 0.6; }   // strafe a little in melee
          f.atkCd -= dt;
          if (d <= reach && f.atkCd <= 0 && f.danceUntil < t) this.attack(f, o, d);
        }
        // dash contact damage
        if (f.dashUntil > t && !f.dashHit) for (const o2 of alive) {
          if (o2.id === f.id || o2.dropUntil > t) continue;
          if ((o2.x - f.x) ** 2 + (o2.z - f.z) ** 2 < (radius + 0.6) ** 2) { f.dashHit = true; this.damage(o2, 16, f, { kb: 9, crit: false, dash: true }); break; }
        }
        // liked to full charge: spin attack
        if (f.charge >= 100) { f.charge = 0; this.spin(f, alive); }
        // bots act like viewers sometimes (dash / shield), so a quiet room still looks alive
        if (f.bot && t > f.botActT) { f.botActT = t + this.r(6, 14); if (this.rng() < 0.5) this.dash(f); else if (t >= f.shieldCd) { f.shieldUntil = t + 2.5; f.shieldCd = t + 12; this.emit({ k: 'shield', a: f.id }); } }
        // storm damage
        if (dist2c > sr * sr) { f.stormAcc = (f.stormAcc || 0) + this.storm.dps * dt; if (f.stormAcc >= 3) { const d = Math.floor(f.stormAcc); f.stormAcc -= d; this.damage(f, d, null, { storm: true }); } }
      } else {
        // lobby / ceremony: wander, dance
        f.wander += this.r(-1, 1) * dt * 2;
        const lim = this.phase === 'lobby' ? this.lobbyRadius() : 4.5;
        if (dist2c > lim * lim) f.wander = Math.atan2(-f.z, -f.x);
        ax = Math.cos(f.wander) * 0.45; az = Math.sin(f.wander) * 0.45;
        if (f.danceUntil > t) { ax = az = 0; }
        if (ax || az) f.face = Math.atan2(az, ax);
      }
      // separation (cheap, n <= ~80)
      for (const o of alive) {
        if (o === f) continue;
        const dx = f.x - o.x, dz = f.z - o.z, d2 = dx * dx + dz * dz, min = radius + (o.giantUntil > t ? 0.75 : 0.42);
        if (d2 < min * min && d2 > 1e-6) { const d = Math.sqrt(d2), push = (min - d) / min; ax += (dx / d) * push * 2.2; az += (dz / d) * push * 2.2; }
      }
      const tvx = ax * sp, tvz = az * sp;
      const k = Math.min(1, dt * 8);
      f.vx += (tvx - f.vx) * k; f.vz += (tvz - f.vz) * k;
      f.x += (f.vx + f.kx) * dt; f.z += (f.vz + f.kz) * dt;
      const fr = Math.exp(-dt * (f.dashUntil > t ? 1 : 7)); f.kx *= fr; f.kz *= fr;
      // the floor ends at the platform edge
      const dd = Math.hypot(f.x, f.z), lim = this.o.platform - 0.5;
      if (dd > lim) { f.x *= lim / dd; f.z *= lim / dd; }
    }
  }

  attack(f, o, d) {
    const t = this.t;
    f.atkCd = this.r(0.95, 1.35) * (f.speedUntil > t ? 0.8 : 1);
    let dmg = this.r(5, 8);
    const crit = this.rng() < 0.14;
    if (crit) dmg *= 1.9;
    if (f.giantUntil > t) dmg *= 1.8;
    if (f.rageUntil > t) dmg *= 1.6;
    if (f.bot) dmg *= this.o.botDamage;
    dmg *= this.o.damageMul;
    this.emit({ k: 'atk', a: f.id, b: o.id });
    this.damage(o, Math.round(dmg), f, { crit, kb: (f.giantUntil > t ? 7 : 3.6) + (crit ? 2 : 0) });
  }

  spin(f, alive) {
    this.emit({ k: 'spin', a: f.id });
    for (const o of alive) if (o.id !== f.id && (o.x - f.x) ** 2 + (o.z - f.z) ** 2 < 2.8 * 2.8) this.damage(o, 22, f, { kb: 8 });
  }

  damage(o, dmg, by, { crit = false, kb = 0, storm = false, meteor = false, dash = false, x, z } = {}) {
    const t = this.t;
    if (!o.alive || this.phase !== 'battle' || o.dropUntil > t) return;
    if (o.shieldUntil > t && !storm) { dmg = Math.max(1, Math.round(dmg * 0.2)); this.emit({ k: 'block', a: o.id }); }
    o.hp -= dmg;
    if (by) { o.lastHitBy = by.id; o.lastHitT = t; }
    if (kb) {
      const sx = x ?? (by ? by.x : 0), sz = z ?? (by ? by.z : 0);
      const dx = o.x - sx, dz = o.z - sz, d = Math.hypot(dx, dz) || 1;
      const m = o.giantUntil > t ? 0.35 : 1;
      o.kx += (dx / d) * kb * m; o.kz += (dz / d) * kb * m;
    }
    if (!storm || dmg >= 3) this.emit({ k: 'hit', a: by ? by.id : 0, b: o.id, d: dmg, c: crit ? 1 : 0, s: storm ? 1 : 0, m: meteor ? 1 : 0 });
    if (o.hp <= 0) this.ko(o, by, { storm, meteor });
  }

  ko(o, by, { storm, meteor }) {
    const t = this.t;
    o.alive = false; o.hp = 0; o.place = this.alive + 1;
    let killer = by;
    if (!killer && o.lastHitBy && t - o.lastHitT < 4) killer = this.fighters.get(o.lastHitBy);
    const p = this.people.get(o.uid);
    const ev = { k: 'ko', a: killer ? killer.id : 0, b: o.id, s: storm ? 1 : 0, m: meteor ? 1 : 0, left: this.alive };
    if (killer && killer.id !== o.id) {
      killer.kills++; killer.streak++;
      killer.multi = t - killer.lastKillT < 4.5 ? killer.multi + 1 : 1; killer.lastKillT = t;
      killer.hp = Math.min(killer.maxHp, killer.hp + 12);   // a kill heals a bit (keeps fights going)
      if (p && !killer.bot) p.lastKiller = killer.uid; else if (p) p.lastKiller = killer.uid;
      if (!this.firstBlood) { this.firstBlood = true; ev.first = 1; }
      if (MULTI[Math.min(5, killer.multi)] && killer.multi >= 2) ev.multi = MULTI[Math.min(5, killer.multi)];
      if (STREAK[killer.streak]) ev.streak = STREAK[killer.streak];
      if (o.giantUntil > t) ev.giant = 1;
      ev.n = killer.kills;
    }
    this.emit(ev);
  }

  updateMeteors() {
    const t = this.t;
    if (!this.meteors.length) return;
    const now = this.meteors.filter((m) => m.at <= t);
    if (!now.length) return;
    this.meteors = this.meteors.filter((m) => m.at > t);
    for (const m of now) {
      this.emit({ k: 'boom', x: +m.x.toFixed(2), z: +m.z.toFixed(2), r: m.r });
      const by = m.by ? this.fighters.get(m.by) : null;
      for (const o of this.aliveList()) {
        if (by && o.id === by.id) continue;
        if (m.byUid && o.uid === m.byUid) continue;
        const d = Math.hypot(o.x - m.x, o.z - m.z);
        if (d < m.r) this.damage(o, Math.round(m.dmg * (1 - d / m.r * 0.5)), by && by.alive ? by : null, { kb: 9, meteor: true, x: m.x, z: m.z });
      }
    }
  }

  // ------------------------------------------------------------------ output
  /** Compact state for the overlay: 8 numbers per fighter. */
  snapshot() {
    const t = this.t, f = [];
    for (const x of this.fighters.values()) {
      if (!x.alive && x.state !== 'podium') continue;
      let fl = FLAG.alive;
      if (x.shieldUntil > t) fl |= FLAG.shield;
      if (x.speedUntil > t) fl |= FLAG.speed;
      if (x.giantUntil > t) fl |= FLAG.giant;
      if (x.rageUntil > t) fl |= FLAG.rage;
      if (x.dashUntil > t) fl |= FLAG.dash;
      if (x.danceUntil > t) fl |= FLAG.dance;
      if (x.y > 0.01) fl |= FLAG.air;
      if (x.id === this.crownId) fl |= FLAG.crown;
      if (t - x.cmdT < 6) fl |= FLAG.cmd;
      if (x.hp < x.maxHp * 0.3) fl |= FLAG.low;
      if (x.bot) fl |= FLAG.bot;
      f.push(x.id, Math.round(x.x * 100) / 100, Math.round(x.y * 100) / 100, Math.round(x.z * 100) / 100, Math.round(x.face * 100) / 100, Math.round((100 * x.hp) / x.maxHp), fl, Math.round(x.charge));
    }
    const left = this.phase === 'battle' ? Math.max(0, this.phaseT + this.storm.hold - t) : Math.max(0, this.phaseEnd - t);
    return { tm: Math.round(t * 1000) / 1000, ph: this.phase, tl: Math.round(left * 10) / 10, r: Math.round(this.storm.r * 100) / 100, rt: Math.round(this.storm.target * 100) / 100,
      n: this.alive, q: this.queue.length, h: this.humans, likes: this.likes, hype: this.hype, round: this.round, podium: this.podium, f };
  }

  /** Session leaderboard (real viewers only). */
  board(n = 10) {
    return [...this.people.values()].filter((p) => !p.bot && (p.wins || p.kills)).sort((a, b) => b.wins - a.wins || b.kills - a.kills).slice(0, n).map((p) => ({ name: p.name, wins: p.wins, kills: p.kills, games: p.games, color: p.color }));
  }

  /** Forget viewers not seen for a while (keeps memory flat over a long LIVE). */
  prune(maxAgeSec = 3600, keep = 2000) {
    if (this.people.size <= keep) return 0;
    let n = 0;
    for (const [uid, p] of this.people) if (!this.byUid.has(uid) && this.t - p.lastSeen > maxAgeSec && !p.wins) { this.people.delete(uid); n++; }
    return n;
  }
}
