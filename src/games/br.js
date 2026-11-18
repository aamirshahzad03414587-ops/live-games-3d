// Viewer Battle Royale on the server: runs the shared simulation at 20 Hz, streams 10 snapshots a second to the
// overlays, feeds the announcer and records the leaderboard. The overlay only renders (cheap for the iPhone) and the
// game keeps going if Safari is backgrounded or reconnects.
import { BattleRoyale } from '../../public/shared/br-sim.js';
import { makeAnnouncer } from '../../public/shared/br-lines.js';
import { GIFT_TIERS } from '../../public/shared/commands.js';
import { Announcer } from '../announcer.js';

export class BRGame {
  constructor({ config, tts, board, broadcast, listeners, log = console.log }) {
    this.config = config; this.board = board; this.broadcast = broadcast; this.listeners = listeners; this.log = log;
    this.sim = new BattleRoyale(config.br);
    this.lines = makeAnnouncer({ nameOf: (id) => this.sim.fighters.get(id)?.name || null });
    this.announcer = new Announcer({ tts, broadcast, listeners });
    this.pendingEv = []; this.tick = 0; this.stats = { events: 0, rounds: 0, tickMs: 0 };
  }
  start() {
    let last = performance.now();
    this.timer = setInterval(() => {
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      this.step(dt);
      this.stats.tickMs = this.stats.tickMs * 0.98 + (performance.now() - now) * 0.02;
    }, 50);
  }
  stop() { clearInterval(this.timer); }
  applySettings(br) { Object.assign(this.sim.o, br); }

  step(dt) {
    const sim = this.sim;
    sim.step(dt);
    const ev = sim.drain();
    if (ev.length) {
      for (const l of this.lines.lines(ev, sim.t)) this.announcer.push(l);
      for (const e of ev) if (e.k === 'win') this.onRoundEnd();
      this.pendingEv.push(...ev);
    } else for (const l of this.lines.lines([], sim.t)) this.announcer.push(l);   // batched welcomes + spoken tips
    if (++this.tick % 2) return;
    const roster = sim.drainRoster();
    const n = this.listeners();
    if (!n) { this.pendingEv = []; return; }
    if (roster.add.length || roster.del.length) this.broadcast({ t: 'roster', add: roster.add, del: roster.del });
    const snap = sim.snapshot();
    snap.t = 's'; snap.ev = this.pendingEv; this.pendingEv = [];
    this.broadcast(snap);
    if (this.tick % 600 === 0) sim.prune();
  }

  onRoundEnd() {
    const res = this.sim.lastResult;
    this.stats.rounds++;
    if (res && res.players.some((p) => !p.bot)) this.board.record(res);
    this.log(`[br] round ${res?.round}: winner ${res?.winner ? (res.winner.bot ? 'a bot' : 'a viewer') : 'none'}, ${res?.players.length} fighters, ${res?.players.filter((p) => !p.bot).length} viewers`);
    setTimeout(() => this.broadcast(this.boardMsg()), 300);
  }
  boardMsg() { return { t: 'board', session: this.sim.board(8), all: this.board.top(8), signed: this.board.exportSigned() }; }

  input(ev) { this.stats.events++; return this.sim.input(ev); }

  hello() {
    const sim = this.sim;
    return {
      t: 'hello', game: 'br', roster: [...sim.fighters.values()].map((f) => sim.rosterEntry(f)), snap: { ...sim.snapshot(), t: 's', ev: [] },
      tiers: GIFT_TIERS.map(({ id, min, label, icon }) => ({ id, min, label, icon })), platform: sim.o.platform, ...this.boardMsg(), t: 'hello',
    };
  }
  newStream() { this.log('[br] new LIVE: session leaderboard reset'); const o = this.sim.o; this.sim = new BattleRoyale(o); this.announcer.clear(); this.broadcast(this.hello()); }
  summary() { const s = this.sim; return { phase: s.phase, round: s.round, alive: s.alive, fighters: s.fighters.size, humans: s.humans, queue: s.queue.length, people: s.people.size, likes: s.likes, ...this.stats, tickMs: +this.stats.tickMs.toFixed(3), announcer: this.announcer.stats }; }
}
