// Dark Dimension Siege: chat-powered siege defense. Server-authoritative simulation (20 Hz on the server; also runs in
// the overlay for ?local=1 and demo renders). No DOM, no Node APIs.
//
// Session: intro (anime lore cards) -> gather -> 3 chapters of [3 waves + a boss]; a story vote after chapters 1 and 2
// changes the next waves, the bosses and the ending -> "EARTH SAVED" or "EARTH FELL" ceremony -> a new session.
// Every commenter is a survivor awakened by the Ascension System: mage / warrior / archer / healer, auto-fighting from
// the citadel wall (warriors hold the gate). Creatures that reach the wall cost survivors (1.5 billion at the start).
// Likes charge the Ascension barrier (absorbs damage; every 500 likes = an Ascension pulse). Gifts: spell volley,
// shield rune, guardian hero, Ascension ultimate, dragon ally. Follow / share = blessings.
import { cleanName, colorFor, BOT_NAMES } from './commands.js';
import { CLASSES, CLS, ENEMIES, EK, CHAPTERS, CHOICES, EFFECTS, SURVIVORS, siegeTier, parseSiege, loreSeq, loreSeconds, LORE, WALL_Z, GATE_Z, RIFT_Z, FIELD_W } from './siege-data.js';

export const SFLAG = { bot: 1, cmd: 2, asc: 4, bless: 8, down: 16, crown: 32, gift: 64 };
export const FSHIFT = 2;   // f record: id, x, z, cls | flags << 2, hp
export const SPH = ['intro', 'gather', 'chapter', 'wave', 'break', 'boss', 'victory', 'vote', 'choice', 'ending'];

export const SIEGE_DEFAULTS = {
  introSeconds: 0, gatherSeconds: 8, chapterSeconds: 2, breakSeconds: 5, victorySeconds: 4.5, voteSeconds: 16, choiceSeconds: 5.5, endingSeconds: 16,
  minDefenders: 6, bots: true, waveCap: 70, bossCap: 100, sendCap: 70, enemySend: 90, enemyCap: 110,
  spawnMul: 1, enemyHpMul: 1, dmgMul: 1, lossPer: 950_000, likeBarrier: 0.06, likePulse: 500, startChapter: 1,
};
const WAVES_PER_CH = 4;   // 3 waves + boss

export class Siege {
  constructor(opts = {}, rng = Math.random) {
    this.o = { ...SIEGE_DEFAULTS, ...opts };
    this.rng = rng;
    this.t = 0; this.run = 0;
    this.people = new Map(); this.byId = new Map(); this.nextId = 1;
    this.enemies = []; this.eNext = 1; this.allies = []; this.aNext = 1; this.hits = [];
    this.ev = []; this.rAdd = []; this.rDel = [];
    this.hype = 0; this.likes = 0; this.humanAt = -999;
    this.sessionBest = 0; this.saves = 0; this.lastResult = null;
    this.shotBudget = 0; this.popBudget = 0; this.killBudget = 0;
    this.startSession(true);
  }
  r(n) { return Math.floor(this.rng() * n); }
  emit(e) { this.ev.push(e); }
  drain() { const e = this.ev; this.ev = []; return e; }
  drainRoster() { const r = { add: this.rAdd, del: this.rDel }; this.rAdd = []; this.rDel = []; return r; }
  rosterEntry(m) { return { id: m.id, name: m.name, color: m.color, bot: m.bot }; }
  get alive() { let n = 0; for (const m of this.people.values()) if (m.on) n++; return n; }
  get humans() { let n = 0; for (const m of this.people.values()) if (m.on && !m.bot) n++; return n; }
  defenders() { return [...this.people.values()].filter((m) => m.on); }
  get chapter() { return Math.max(1, Math.min(3, Math.floor(this.wave / WAVES_PER_CH) + (this.phase === 'chapter' || this.wave % WAVES_PER_CH ? 1 : 0))); }
  get boss() { return this.enemies.find((e) => e.k === EK.boss && e.hp > 0) || null; }

  // ------------------------------------------------------------------ people
  member(uid, name, bot = false) {
    let m = this.people.get(uid);
    if (!m) {
      m = { id: this.nextId++, uid, name: cleanName(name), color: colorFor(uid), bot, on: false, cls: -1, slot: -1, x: 0, z: WALL_Z, hp: 100, downT: 0, cd: this.rng(),
        lastAct: this.t, cmdT: -9, hasteT: -9, ascT: -9, blessed: false, giftT: -9, pts: 0, kills: 0, vote: 0, post: 0 };
      this.people.set(uid, m); this.byId.set(m.id, m); this.rAdd.push(this.rosterEntry(m));
    } else if (name && !bot) { const n = cleanName(name); if (n !== m.name) { m.name = n; this.rAdd.push(this.rosterEntry(m)); } }
    return m;
  }
  join(m, cls) {
    m.lastAct = this.t;
    if (!m.bot) this.humanAt = this.t;
    if (cls !== undefined && cls !== m.cls) { const was = m.cls; m.cls = cls; if (m.on) { this.place(m); this.emit({ k: 'class', id: m.id, c: cls, was }); } }
    if (m.on) return false;
    if (m.cls < 0) m.cls = this.autoClass();
    m.on = true; m.hp = 100; m.downT = 0;
    this.place(m);
    this.emit({ k: 'join', id: m.id, bot: m.bot, c: m.cls });
    if (!m.bot) this.trimBots();
    return true;
  }
  autoClass() {
    // balance the wall: the class with the fewest defenders (warriors capped at a quarter)
    const n = [0, 0, 0, 0]; for (const m of this.people.values()) if (m.on && m.cls >= 0) n[m.cls]++;
    const tot = n.reduce((a, b) => a + b, 0);
    let best = 0, bv = 1e9; for (let i = 0; i < 4; i++) { let v = n[i] + this.rng() * 0.8; if (i === CLS.warrior && n[i] > tot * 0.25) v += 99; if (i === CLS.healer) v += 0.6; if (v < bv) { bv = v; best = i; } }
    return best;
  }
  /** wall slots: two rows along the battlements; warriors get posts in front of the gate */
  place(m) {
    if (m.cls === CLS.warrior) {
      const k = this.post = (this.post || 0) + 1;
      const col = (k * 7) % 13; m.post = { x: -6 + col, z: GATE_Z - 1.6 - (k % 3) * 0.9 };
      m.x = m.post.x; m.z = WALL_Z - 0.2;
      return;
    }
    const k = this.slotN = (this.slotN || 0) + 1;
    const i = (k * 11) % 34, row = i % 2;
    m.post = null; m.x = -8.4 + (i >> 1) * 1.05 + row * 0.5; m.z = WALL_Z + row * 1.1 + (this.rng() - 0.5) * 0.15;
  }
  trimBots() {
    if (this.humans + this.botsOn() <= this.o.minDefenders) return;
    const b = [...this.people.values()].find((x) => x.bot && x.on);
    if (b) { b.on = false; this.emit({ k: 'leave', id: b.id }); }
  }
  botsOn() { let n = 0; for (const m of this.people.values()) if (m.bot && m.on) n++; return n; }
  fillBots() {
    if (!this.o.bots) return;
    let need = this.o.minDefenders - this.alive;
    const classes = [CLS.warrior, CLS.mage, CLS.archer, CLS.healer, CLS.archer, CLS.mage, CLS.warrior, CLS.mage];
    for (let i = 0; i < BOT_NAMES.length && need > 0; i++) {
      const n = BOT_NAMES[(i + this.run * 3) % BOT_NAMES.length];
      const m = this.member('bot:' + n, 'Bot ' + n, true);
      if (m.on) continue;
      m.cls = classes[i % classes.length]; this.join(m); need--;
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
      case 'follow': this.join(m); this.bless(m, 'follow'); return { ok: true };
      case 'share': this.join(m); this.bless(m, 'share'); return { ok: true };
      case 'join': this.join(m); return { ok: true };
    }
    return { ok: true };
  }
  chat(m, text) {
    const c = parseSiege(text);
    const joined = this.join(m, c.cmd === 'class' ? CLS[c.cls] : undefined);
    m.cmdT = this.t;
    if (this.phase === 'vote' && c.cmd === 'vote' && (!c.choice || c.choice === CHOICES[this.voteIdx].id)) {
      if (m.vote !== c.vote) { m.vote = c.vote; this.countVotes(); this.emit({ k: 'vote', id: m.id, v: c.vote }); }
      return { ok: true, cmd: 'vote', vote: c.vote };
    }
    // every comment in a fight = a 3 s power-up (haste) for your survivor
    if (this.fighting()) m.hasteT = this.t + 3;
    return { ok: true, cmd: joined ? 'join' : c.cmd, cls: c.cls };
  }
  fighting() { return this.phase === 'wave' || this.phase === 'boss' || this.phase === 'break'; }
  like(m, n) {
    this.join(m);
    this.likes += n; this.hype += n;
    this.barrier = Math.min(100, this.barrier + n * this.o.likeBarrier);
    if (this.hype >= this.o.likePulse) { this.hype -= this.o.likePulse; this.pulse(m); }
    return { ok: true };
  }
  bless(m, why) {
    if (why === 'follow') { m.blessed = true; this.revive(m); this.barrier = Math.min(100, this.barrier + 10); }
    else { this.barrier = Math.min(100, this.barrier + 15); for (const d of this.people.values()) if (d.on && d.downT > 0) this.revive(d); }
    this.emit({ k: 'bless', id: m.id, why });
  }
  revive(m) { if (m.downT > 0) { m.downT = 0; m.hp = 100; this.emit({ k: 'rise', id: m.id }); } m.hp = 100; }
  gift(m, coins, giftName) {
    this.join(m);
    const tier = siegeTier(coins);
    m.giftT = this.t; m.pts += Math.min(60, 4 + coins);
    const e = { k: 'gift', id: m.id, tier: tier.id, coins, giftName };
    switch (tier.id) {
      case 'volley': this.volley(m, Math.min(12, 5 + coins), 11); break;
      case 'rune': this.barrier = Math.min(100, this.barrier + 12); this.volley(m, 6, 12); break;
      case 'guardian': {
        const g = this.allies.filter((a) => a.k === 0);
        if (g.length >= 4) { const o = g.sort((a, b) => a.until - b.until)[0]; o.until = this.t + 35; o.hp = 100; e.extended = true; }
        else this.addAlly(0, m.id, 35);
        break;
      }
      case 'awaken': m.ascT = this.t + 20; if (this.t - (this.ultT || -99) > 8) { this.ultT = this.t; this.ultimate(m, 1); } else { this.volley(m, 10, 16); e.cool = true; } break;
      case 'dragon': {
        const b = this.boss;
        if (b) { this.damage(b, b.max * 0.25, m, true); e.judgment = true; }
        if (this.allies.some((a) => a.k === 1)) { const d = this.allies.find((a) => a.k === 1); d.until = Math.max(d.until, this.t + 25); if (!b) this.ultimate(m, 0.6); e.extended = true; }
        else this.addAlly(1, m.id, 25);
        break;
      }
    }
    this.emit(e);
    return { ok: true, tier: tier.id };
  }
  addAlly(k, by, sec) {
    const a = { id: this.aNext++, k, by, until: this.t + sec, x: k ? 0 : -5 + this.r(11), z: k ? -10 : GATE_Z - 2.6, hp: 100, cd: 0, a0: this.t };
    this.allies.push(a);
    this.emit({ k: 'ally', a: a.id, kind: k, by });
  }
  volley(m, n, dmg) {
    const live = this.enemies.filter((e) => e.hp > 0);
    if (!live.length) { this.barrier = Math.min(100, this.barrier + 4); return; }
    for (let i = 0; i < n; i++) { const e = live[this.r(live.length)]; this.queueHit(m, e, dmg * this.o.dmgMul, 0, 0.5 + i * 0.07, 'v'); }
    this.emit({ k: 'volley', id: m.id, n });
  }
  /** screen-wide ultimate (Ascension gift / like pulse) */
  ultimate(m, power) {
    let hit = 0;
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      const d = e.k === EK.boss ? e.max * 0.08 * power : (60 + this.wave * 6) * power;
      this.damage(e, d, m, false); if (e.k !== EK.boss) e.z -= 3 * power; hit++;
    }
    this.emit({ k: 'ult', id: m ? m.id : 0, hit, p: power });
  }
  pulse(m) { this.barrier = Math.min(100, this.barrier + 20); for (const d of this.people.values()) if (d.on && d.downT > 0) this.revive(d); this.ultimate(null, 0.5); this.emit({ k: 'pulse', id: m.id }); }

  // ------------------------------------------------------------------ session flow
  setPhase(p, sec) { this.phase = p; this.phaseStart = this.t; this.phaseEnd = this.t + sec; }
  startSession(first = false) {
    this.run++; this.wave = (this.o.startChapter - 1) * WAVES_PER_CH + (this.o.startWave || 0); this.survivors = SURVIVORS; this.barrier = 40; this.hype = 0;
    this.choices = []; this.fx = { spawnMul: 1, finalHp: 1, guardians: 0 }; this.voteIdx = -1; this.voteCounts = [0, 0];
    this.enemies = []; this.allies = []; this.hits = []; this.spawnLeft = 0; this.waveStart = 0; this.slotN = 0; this.post = 0; this.lost = 0;
    for (const [uid, m] of this.people) if (!m.bot && this.t - m.lastAct > 1200) { this.people.delete(uid); this.byId.delete(m.id); this.rDel.push(m.id); }
    for (const m of this.people.values()) { m.on = false; m.runPts = 0; m.vote = 0; m.ascT = -9; m.blessed = false; m.downT = 0; m.hp = 100; }
    for (const m of this.people.values()) if (!m.bot && this.t - m.lastAct < 180) this.join(m);
    // the anime cold-open (full lore on the first session and every third one; a short recap otherwise)
    this.lore = this.o.introSeconds > 0 ? (this.o.loreCards || loreSeq(this.run)).slice() : []; this.loreAt = this.t;
    this.setPhase('intro', this.lore.length ? this.lore.reduce((a, i) => a + LORE[i].sec, 0) + 1 : 0.5);
    this.emit({ k: 'intro', run: this.run, lore: this.lore.slice() });
  }
  startChapter() {
    this.setPhase('chapter', this.o.chapterSeconds);
    this.emit({ k: 'chapter', n: this.chapter, title: CHAPTERS[this.chapter - 1].title });
  }
  nextWave() {
    this.wave++;
    const ch = this.chapter, i = (this.wave - 1) % WAVES_PER_CH, party = Math.max(1, this.alive);
    const sq = Math.sqrt(Math.min(party, 220) / 6), crowd = 0.45 + 0.65 * sq;
    this.hpCrowd = 0.6 + 0.4 * sq;
    const count = Math.round((6 + 1.6 * this.wave) * crowd * this.fx.spawnMul * this.o.spawnMul);
    this.waveStart = this.t;
    if (i === WAVES_PER_CH - 1) {
      const B = CHAPTERS[ch - 1].boss;
      const hp = ENEMIES[EK.boss].hp * B.hp * (0.6 + 0.4 * sq) * (ch === 3 ? this.fx.finalHp : 1) * this.o.enemyHpMul;
      this.spawnLeft = Math.round(count * 0.5); this.spawnEvery = 22 / Math.max(1, this.spawnLeft);
      const b = this.spawn(EK.boss, hp); b.bossId = B.id; b.name = B.name; b.z = RIFT_Z + 4; b.x = 0;
      this.setPhase('boss', this.o.bossCap);
      this.emit({ k: 'boss', n: ch, id: B.id, name: B.name, hp: Math.round(hp) });
    } else {
      this.spawnLeft = count; this.spawnEvery = (16 + i * 3) / count;
      this.setPhase('wave', this.o.waveCap);
      this.emit({ k: 'wave', n: this.wave, ch, i: i + 1, count });
    }
    this.nextSpawn = this.t + 0.8;
    this.fillBots();
  }
  spawn(k, hpOverride) {
    const E = ENEMIES[k], ch = this.chapter;
    const hp = hpOverride || E.hp * (1 + 0.08 * (this.wave - 1)) * (1 + (ch - 1) * 0.1) * (this.hpCrowd || 1) * this.o.enemyHpMul;
    const e = { id: this.eNext++, k, x: (this.rng() - 0.5) * 5, z: RIFT_Z + 3 + this.rng() * 2, tx: (this.rng() - 0.5) * (FIELD_W - 3), hp, max: hp, speed: E.speed * (0.85 + this.rng() * 0.3), atkT: 0, slowT: 0, eng: 0, born: this.t };
    this.enemies.push(e);
    return e;
  }
  spawnTick() {
    if (this.spawnLeft <= 0 || this.t < this.nextSpawn) return;
    if (this.enemies.length >= this.o.enemyCap) { this.nextSpawn = this.t + 0.3; return; }
    const ch = this.chapter, x = this.rng();
    const mix = ch === 1 ? [0.7, 0.85] : ch === 2 ? [0.5, 0.75] : [0.42, 0.72];
    const k = x < mix[0] ? EK.imp : x < mix[1] ? EK.brute : EK.wraith;
    this.spawn(k); this.spawnLeft--; this.nextSpawn = this.t + this.spawnEvery * (0.6 + this.rng() * 0.8);
  }
  waveCleared() { return this.spawnLeft <= 0 && !this.enemies.some((e) => e.hp > 0); }
  startVote() {
    this.voteIdx = this.chapter - 1; this.voteCounts = [0, 0];
    for (const m of this.people.values()) m.vote = 0;
    this.setPhase('vote', this.o.voteSeconds);
    this.emit({ k: 'vote', start: true, i: this.voteIdx });
  }
  countVotes() { const c = [0, 0]; for (const m of this.people.values()) if (m.on && m.vote) c[m.vote - 1]++; this.voteCounts = c; }
  closeVote() {
    this.countVotes();
    const C = CHOICES[this.voteIdx], c = this.voteCounts;
    const pick = c[0] === c[1] ? (this.r(2) ? 'b' : 'a') : c[0] > c[1] ? 'a' : 'b';
    const key = C[pick].key, fx = EFFECTS[key];
    this.choices.push(key);
    if (fx.spawnMul) this.fx.spawnMul = fx.spawnMul;
    if (fx.finalHp) this.fx.finalHp = fx.finalHp;
    if (fx.survivors) this.survivors = Math.min(SURVIVORS, this.survivors + fx.survivors);
    if (fx.guardians) { this.fx.guardians = fx.guardians; for (let i = 0; i < fx.guardians; i++) this.addAlly(0, 0, 1e6); }
    this.setPhase('choice', this.o.choiceSeconds);
    this.emit({ k: 'choice', i: this.voteIdx, key, votes: c.slice(), none: c[0] + c[1] === 0 });
  }
  endSession(saved) {
    const hum = [...this.people.values()].filter((m) => m.on || m.runPts > 0).filter((m) => !m.bot && m.runPts > 0);
    const all = [...this.people.values()].filter((m) => m.runPts > 0 || m.on).sort((a, b) => b.runPts - a.runPts);
    const top = all.filter((m) => !m.bot).slice(0, 3);
    for (const m of hum) m.pts += 0;
    this.sessionBest = Math.max(this.sessionBest, this.wave);
    if (saved) this.saves++;
    this.lastResult = { run: this.run, saved, wave: this.wave, survivors: Math.round(this.survivors), choices: this.choices.slice(), players: hum.map((m) => ({ uid: m.uid, name: m.name, pts: Math.round(m.runPts), kills: m.runKills || 0 })) };
    this.enemies = []; this.hits = []; this.allies = this.allies.filter((a) => a.k === 1 && false);
    this.setPhase('ending', this.o.endingSeconds);
    this.emit({ k: 'end', saved, wave: this.wave, survivors: Math.round(this.survivors), choices: this.choices.slice(), top: (top.length ? top : all.slice(0, 3)).map((m) => m.id) });
    for (const m of this.people.values()) { m.runKills = 0; }
  }

  // ------------------------------------------------------------------ the main step
  step(dt) {
    this.t += dt;
    const ph = this.phase;
    this.shotBudget = Math.min(6, this.shotBudget + dt * 34); this.popBudget = Math.min(4, this.popBudget + dt * 12); this.killBudget = Math.min(6, this.killBudget + dt * 24);
    if (ph === 'wave' || ph === 'boss' || ph === 'break' || ph === 'victory') {
      this.spawnTick();
      this.combat(dt);
      if (this.survivors <= 0) { this.survivors = 0; return this.endSession(false); }
    }
    if (ph === 'vote') this.botsVote(dt);
    if (ph === 'intro' && this.lore.length && this.t >= this.loreAt) { const i = this.lore.shift(); this.loreAt = this.t + LORE[i].sec; this.emit({ k: 'lore', i, sec: LORE[i].sec }); }
    // the barrier slowly fades without likes (and healers top it up in combat)
    if (this.fighting()) this.barrier = Math.max(0, this.barrier - dt * 0.6);
    if (ph === 'wave' && this.waveCleared() && this.t - this.waveStart > 4) { this.setPhase('break', this.o.breakSeconds); this.emit({ k: 'clear', n: this.wave }); return; }
    if (ph === 'boss' && !this.boss) {
      this.setPhase('victory', this.o.victorySeconds);
      for (const e of this.enemies) if (e.hp > 0) { e.hp = 0; this.emit({ k: 'kill', e: e.id, by: 0, x: +e.x.toFixed(1), z: +e.z.toFixed(1), q: 1 }); }
      return;
    }
    if (this.t < this.phaseEnd) return;
    switch (ph) {
      case 'intro': this.setPhase('gather', this.o.gatherSeconds); this.fillBots(); this.emit({ k: 'gather' }); break;
      case 'gather': if (!this.alive) { this.fillBots(); if (!this.alive) { this.phaseEnd = this.t + 2; return; } } this.startChapter(); break;
      case 'chapter': this.nextWave(); break;
      case 'wave': this.nextWave(); break;        // time cap: the next wave pours in on top
      case 'break': if ((this.wave % WAVES_PER_CH) === WAVES_PER_CH - 1) this.nextWave(); else this.nextWave(); break;
      case 'boss': {   // the boss could not be beaten in time: it tears a toll and withdraws into the rift
        const b = this.boss; if (b) { this.loseSurvivors(150 / 1.15, true); b.hp = 0; this.emit({ k: 'retreat', name: b.name }); }
        this.setPhase('victory', 2.5); break;
      }
      case 'victory':
        if (this.chapter >= 3) return this.endSession(true);
        this.startVote(); break;
      case 'vote': this.closeVote(); break;
      case 'choice': this.wave = this.chapter * WAVES_PER_CH; this.startChapter(); break;
      case 'ending': this.startSession(); break;
    }
  }
  loseSurvivors(points, big = false) {
    const n = points * this.o.lossPer * (1 + 0.12 * (this.chapter - 1));
    this.survivors = Math.max(0, this.survivors - n); this.lost += n;
    if (big) this.emit({ k: 'toll', n: Math.round(n) });
  }
  queueHit(m, e, dmg, aoe, delay, c) { this.hits.push({ at: this.t + delay, by: m ? m.id : 0, e, dmg, aoe }); if (this.shotBudget >= 1) { this.shotBudget--; this.emit({ k: 'shot', s: m ? m.id : 0, e: e.id, c, d: +delay.toFixed(2) }); } }
  damage(e, d, m, big) {
    if (e.hp <= 0) return;
    const was = e.hp; e.hp -= d; e.hitT = this.t;
    if (m) { const g = Math.min(was, d); m.runPts = (m.runPts || 0) + g * 0.25; m.pts += g * 0.25; }
    if (big || (this.popBudget >= 1 && (e.k === EK.boss || d >= 14))) { this.popBudget = Math.max(0, this.popBudget - 1); this.emit({ k: 'dmg', e: e.id, d: Math.round(d), c: big ? 2 : d >= 20 ? 1 : 0 }); }
    if (e.hp <= 0) {
      const E = ENEMIES[e.k];
      if (m) { m.runPts += E.pts; m.pts += E.pts; m.kills++; m.runKills = (m.runKills || 0) + 1; }
      if (e.k === EK.boss) this.emit({ k: 'bossdown', id: e.bossId, name: e.name, by: m && !m.bot ? m.id : 0 });
      else if (this.killBudget >= 1) { this.killBudget--; this.emit({ k: 'kill', e: e.id, by: m ? m.id : 0, x: +e.x.toFixed(1), z: +e.z.toFixed(1), q: e.k }); }
    }
  }

  // ------------------------------------------------------------------ combat
  combat(dt) {
    const t = this.t;
    // projectiles land
    if (this.hits.length) {
      const keep = [];
      for (const h of this.hits) {
        if (h.at > t) { keep.push(h); continue; }
        const by = h.by ? this.byId.get(h.by) : null;
        if (h.e.hp > 0) this.damage(h.e, h.dmg, by, false);
        if (h.aoe) for (const o of this.enemies) if (o !== h.e && o.hp > 0 && o.k !== EK.boss && Math.abs(o.x - h.e.x) < h.aoe && Math.abs(o.z - h.e.z) < h.aoe) this.damage(o, h.dmg * 0.55, by, false);
      }
      this.hits = keep;
    }
    const live = this.enemies.filter((e) => e.hp > 0).sort((a, b) => b.z - a.z);
    const ground = live.filter((e) => !ENEMIES[e.k].fly);
    let healers = 0;
    const party = this.alive, crowdDmg = party > 24 ? Math.sqrt(24 / party) : 1;   // big rooms: more creatures, each survivor a bit weaker
    for (const m of this.people.values()) if (m.on && m.cls === CLS.healer && m.downT <= 0) healers++;
    // defenders
    for (const m of this.people.values()) {
      if (!m.on) continue;
      if (m.downT > 0) { m.downT -= dt * (1 + Math.min(2, healers * 0.25)); if (m.downT <= 0) { m.downT = 0; m.hp = 100; this.emit({ k: 'rise', id: m.id }); } continue; }
      const C = CLASSES[m.cls];
      if (m.cls === CLS.warrior) this.warriorMove(m, ground, dt);
      m.cd -= dt * (t < m.hasteT ? 1.6 : 1) * (t < m.ascT ? 1.5 : 1);
      if (m.cd > 0) continue;
      m.cd = C.every * (0.9 + this.rng() * 0.2);
      const crit = this.rng() < 0.12, mul = crowdDmg * (m.bot ? 0.7 : 1) * (m.blessed ? 1.2 : 1) * (t < m.ascT ? 3 : 1) * (crit ? 2 : 1) * this.o.dmgMul;
      if (m.cls === CLS.warrior) {
        const e = ground.find((o) => Math.abs(o.x - m.x) < C.range + ENEMIES[o.k].r && Math.abs(o.z - m.z) < C.range + ENEMIES[o.k].r);
        if (e) { this.damage(e, C.dmg * mul, m, crit && mul > 2.5); e.slowT = t + 0.6; if (this.shotBudget >= 1) { this.shotBudget--; this.emit({ k: 'shot', s: m.id, e: e.id, c: 'w', d: 0.1 }); } }
        else m.cd = 0.25;
        continue;
      }
      if (m.cls === CLS.healer) {
        this.barrier = Math.min(100, this.barrier + 0.25);
        let low = null; for (const o of this.people.values()) if (o.on && o.downT <= 0 && o.cls === CLS.warrior && o.hp < 80 && (!low || o.hp < low.hp)) low = o;
        if (low) { low.hp = Math.min(100, low.hp + 16); if (this.shotBudget >= 1) { this.shotBudget--; this.emit({ k: 'heal', s: m.id, t: low.id }); } continue; }
        for (const a of this.allies) if (a.k === 0 && a.hp < 90) { a.hp = Math.min(100, a.hp + 10); break; }
      }
      // ranged: one of the most advanced enemies in range (archers favour fliers)
      const inR = []; for (const e of live) { if (Math.hypot(e.x - m.x, e.z - m.z) <= C.range) { inR.push(e); if (inR.length >= 6) break; } }
      if (!inR.length) { m.cd = 0.3; continue; }
      let e = inR[this.r(Math.min(inR.length, m.cls === CLS.mage ? 6 : 3))];
      if (m.cls === CLS.archer) { const f = inR.find((o) => ENEMIES[o.k].fly); if (f && this.rng() < 0.6) e = f; }
      const dist = Math.hypot(e.x - m.x, e.z - m.z), speed = m.cls === CLS.mage ? 19 : m.cls === CLS.archer ? 36 : 26;
      this.queueHit(m, e, C.dmg * mul, C.aoe, dist / speed, m.cls === CLS.mage ? 'm' : m.cls === CLS.archer ? 'a' : 'h');
    }
    // the open rift drains souls while its creatures roam the field (kill them fast!)
    if (live.length) this.loseSurvivors(live.length * (0.004 + 0.008 * Math.min(1, this.alive / 60)) * dt);
    this.alliesStep(ground, live, dt);
    this.enemiesStep(dt);
    this.enemies = this.enemies.filter((e) => e.hp > 0);
  }
  warriorMove(m, ground, dt) {
    const p = m.post || { x: m.x, z: GATE_Z - 1.6 };
    let tx = p.x, tz = p.z;
    let best = null, bd = 6.5;
    for (const e of ground) { if (e.z < p.z - 7) break; const d = Math.hypot(e.x - p.x, e.z - p.z); if (d < bd) { bd = d; best = e; } }
    if (best) { tx = best.x; tz = Math.min(p.z + 0.5, best.z + ENEMIES[best.k].r + 0.6); }
    const dx = tx - m.x, dz = tz - m.z, d = Math.hypot(dx, dz);
    if (d > 0.08) { const s = Math.min(d, 4.2 * dt); m.x += (dx / d) * s; m.z += (dz / d) * s; }
  }
  alliesStep(ground, live, dt) {
    const t = this.t;
    for (const a of this.allies) {
      if (a.until < t) { a.gone = true; this.emit({ k: 'allyout', a: a.id }); continue; }
      a.cd -= dt;
      if (a.k === 0) {
        let best = null, bd = 9; for (const e of ground) { const d = Math.hypot(e.x - a.x, e.z - a.z); if (d < bd) { bd = d; best = e; } }
        const hx = best ? best.x : a.home ?? (a.home = a.x), hz = best ? best.z + ENEMIES[best.k].r + 0.9 : GATE_Z - 2.6;
        const dx = hx - a.x, dz = hz - a.z, d = Math.hypot(dx, dz); if (d > 0.1) { const s = Math.min(d, 3.6 * dt); a.x += (dx / d) * s; a.z += (dz / d) * s; }
        if (a.cd <= 0 && best && bd < 2.8) {
          a.cd = 0.85; const by = this.byId.get(a.by);
          for (const e of ground) if (Math.abs(e.x - a.x) < 2.4 && Math.abs(e.z - a.z) < 2.6) this.damage(e, (e.k === EK.boss ? 30 : 24) * this.o.dmgMul, by, false);
          if (this.shotBudget >= 1) { this.shotBudget--; this.emit({ k: 'shot', s: -a.id, e: best.id, c: 'g', d: 0.1 }); }
        }
      } else {
        const age = t - a.a0;
        a.x = Math.sin(age * 0.7) * 7; a.z = -15 + Math.cos(age * 0.5) * 9;
        if (a.cd <= 0) {
          a.cd = 0.45; const by = this.byId.get(a.by); const fx = a.x + Math.sin(age * 0.7 + 0.6) * 1.5, fz = a.z + 3;
          for (const e of live) if (Math.abs(e.x - fx) < 3.2 && Math.abs(e.z - fz) < 3.2) this.damage(e, (e.k === EK.boss ? 22 : 20) * this.o.dmgMul, by, false);
        }
      }
    }
    if (this.allies.some((a) => a.gone)) this.allies = this.allies.filter((a) => !a.gone);
  }
  enemiesStep(dt) {
    const t = this.t;
    const blockers = [];
    for (const m of this.people.values()) if (m.on && m.cls === CLS.warrior && m.downT <= 0) blockers.push(m);
    for (const a of this.allies) if (a.k === 0) blockers.push(a);
    for (const e of this.enemies) {
      if (e.hp <= 0) continue;
      const E = ENEMIES[e.k];
      if (e.k === EK.boss) { this.bossStep(e, dt); continue; }
      const wallZ = E.fly ? WALL_Z - 1.6 : GATE_Z - 0.4 - E.r;
      // blocked by a warrior / guardian on the ground
      let foe = null;
      if (!E.fly) for (const b of blockers) if (Math.abs(b.x - e.x) < E.r + 0.75 && Math.abs(b.z - e.z) < E.r + 0.85) { foe = b; break; }
      if (foe) {
        if (t > e.atkT) {
          e.atkT = t + 1.1;
          if (foe.uid) { foe.hp -= E.dmg * 5.5; if (foe.hp <= 0) { foe.hp = 0; foe.downT = 9; this.emit({ k: 'down', id: foe.id }); } }
          else foe.hp = Math.max(0, foe.hp - E.dmg * 1.5);
        }
        continue;
      }
      if (e.z < wallZ - 0.05) {
        const sp = e.speed * (t < e.slowT ? 0.35 : 1);
        const dx = e.tx - e.x, k = Math.min(1, dt * 0.6);
        e.x += dx * k * 0.5 + Math.sin(t * 2 + e.id) * dt * 0.4; e.z = Math.min(wallZ, e.z + sp * dt);
        continue;
      }
      // at the wall: every hit costs survivors (the Ascension barrier absorbs first)
      if (t > e.atkT) { e.atkT = t + 1.3; this.wallHit(E.dmg, e); }
    }
  }
  wallHit(d, e) {
    if (this.barrier >= d * 4) { this.barrier -= d * 4; if (this.popBudget >= 1 && this.rng() < 0.3) { this.popBudget--; this.emit({ k: 'block', x: +e.x.toFixed(1) }); } return; }
    this.barrier = 0;
    this.loseSurvivors(d);
    if (this.popBudget >= 1 && this.rng() < 0.5) { this.popBudget--; this.emit({ k: 'wallhit', x: +e.x.toFixed(1), d }); }
  }
  bossStep(b, dt) {
    const t = this.t;
    if (b.z < -9) { b.z += b.speed * dt; b.x += (0 - b.x) * dt; return; }
    if (!b.nextAtk) { b.nextAtk = t + 3; b.atkN = 0; }
    if (t < b.nextAtk) return;
    b.atkN++; b.nextAtk = t + (b.bossId === 'mastermind' ? 3.6 : 4.4);
    if (b.atkN % 3 === 0) {
      for (let i = 0; i < 5; i++) { const s = this.spawn(i % 2 ? EK.wraith : EK.imp); s.x = b.x + (this.rng() - 0.5) * 6; s.z = b.z + 1; }
      this.emit({ k: 'bossatk', kind: 'summon' });
      return;
    }
    // dark beam on the wall: survivors + some defenders knocked down (the barrier halves it)
    const shield = this.barrier >= 30;
    this.barrier = Math.max(0, this.barrier - 30);
    this.loseSurvivors(shield ? 3 : 7, false);
    const downed = [];
    const pool = this.defenders().filter((m) => m.downT <= 0);
    const n = shield ? 0 : Math.min(pool.length - 1, 1 + this.r(3));
    for (let i = 0; i < n; i++) { const m = pool.splice(this.r(pool.length), 1)[0]; m.downT = 7; m.hp = 0; downed.push(m.id); }
    this.emit({ k: 'bossatk', kind: b.atkN % 2 ? 'beam' : 'slam', blocked: shield, downed, x: +(b.x + (this.rng() - 0.5) * 8).toFixed(1) });
  }
  botsVote(dt) {
    for (const m of this.people.values()) {
      if (!m.bot || !m.on || m.vote) continue;
      if (this.rng() < dt * 0.3 && this.t - this.phaseStart < this.o.voteSeconds * 0.8) { m.vote = 1 + this.r(2); this.countVotes(); this.emit({ k: 'vote', id: m.id, v: m.vote }); }
    }
  }

  // ------------------------------------------------------------------ network snapshot (10 Hz)
  snapshot() {
    const f = [];
    const on = this.defenders();
    let list = on;
    if (on.length > this.o.sendCap) list = on.slice().sort((a, b) => (b.bot ? 0 : 1) - (a.bot ? 0 : 1) || b.lastAct - a.lastAct).slice(0, this.o.sendCap);
    let crown = 0, best = 0; for (const m of on) if (!m.bot && (m.runPts || 0) > best) { best = m.runPts; crown = m.id; }
    for (const m of list) {
      const fl = (m.bot ? SFLAG.bot : 0) | (this.t < m.hasteT ? SFLAG.cmd : 0) | (this.t < m.ascT ? SFLAG.asc : 0) | (m.blessed ? SFLAG.bless : 0) | (m.downT > 0 ? SFLAG.down : 0) | (m.id === crown ? SFLAG.crown : 0) | (this.t - m.giftT < 3 ? SFLAG.gift : 0);
      f.push(m.id, Math.round(m.x * 100) / 100, Math.round(m.z * 100) / 100, m.cls | (fl << FSHIFT), Math.round(m.hp));
    }
    const e = [];
    const live = this.enemies.filter((x) => x.hp > 0);
    const send = live.length > this.o.enemySend ? live.slice().sort((a, b) => (b.k === EK.boss) - (a.k === EK.boss) || b.z - a.z).slice(0, this.o.enemySend) : live;
    for (const x of send) e.push(x.id, x.k, Math.round(x.x * 100) / 100, Math.round(x.z * 100) / 100, Math.max(1, Math.round((x.hp / x.max) * 100)));
    const al = []; for (const a of this.allies) al.push(a.id, a.k, Math.round(a.x * 100) / 100, Math.round(a.z * 100) / 100);
    const b = this.boss;
    return {
      tm: Math.round(this.t * 1000) / 1000, ph: this.phase, tl: Math.max(0, Math.round((this.phaseEnd - this.t) * 10) / 10), pd: Math.round((this.phaseEnd - this.phaseStart) * 10) / 10,
      ch: this.chapter, wv: this.wave, wi: ((this.wave - 1) % WAVES_PER_CH) + 1, sv: Math.round(this.survivors), bar: Math.round(this.barrier * 10) / 10, hype: this.hype,
      vi: this.voteIdx, vc: this.voteCounts.slice(), cho: this.choices.slice(), left: this.spawnLeft + live.length, n: on.length, run: this.run,
      bo: b ? { id: b.bossId, n: b.name, hp: Math.ceil(b.hp), max: Math.round(b.max) } : null, best: this.sessionBest, saves: this.saves,
      f, e, al,
    };
  }
  board(n = 8) {
    const live = [];
    for (const m of this.people.values()) if (!m.bot && m.pts > 0) live.push({ name: m.name, pts: Math.round(m.pts), kills: m.kills, cls: m.cls });
    return live.sort((a, b) => b.pts - a.pts).slice(0, n);
  }
}
