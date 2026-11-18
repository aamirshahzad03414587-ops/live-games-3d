// Mira's Haunted Tower on the server: shared simulation at 20 Hz, 10 snapshots a second to the overlays, Mira's
// voice lines (her own Edge voice), and the all-time board (highest floor + top climbers).
import { Tower } from '../../public/shared/tower-sim.js';
import { makeTowerLines } from '../../public/shared/tower-lines.js';
import { TOWER_GIFTS } from '../../public/shared/tower-data.js';
import { Announcer } from '../announcer.js';

export class TowerGame {
  constructor({ config, tts, board, broadcast, listeners, log = console.log }) {
    this.config = config; this.board = board; this.broadcast = broadcast; this.listeners = listeners; this.log = log;
    this.sim = new Tower(config.tower);
    this.lines = makeTowerLines({ nameOf: (id) => this.sim.byId.get(id)?.name || null });
    this.announcer = new Announcer({ tts, broadcast, listeners, voice: () => ({ voice: config.tower.voice, rate: config.tower.rate, pitch: config.tower.pitch }) });
    this.pendingEv = []; this.tick = 0; this.stats = { events: 0, runs: 0, tickMs: 0 };
  }
  start() {
    let last = performance.now();
    this.timer = setInterval(() => {
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      // nobody watching for a while: pause (saves the free instance's CPU; the climb resumes when an overlay opens)
      if (this.listeners() === 0 && this.sim.phase === 'gather') return;
      this.step(dt);
      this.stats.tickMs = this.stats.tickMs * 0.98 + (performance.now() - now) * 0.02;
    }, 50);
  }
  stop() { clearInterval(this.timer); }
  applySettings(o) { Object.assign(this.sim.o, o); }
  step(dt) {
    const sim = this.sim;
    sim.step(dt);
    const ev = sim.drain();
    for (const l of this.lines.lines(ev, sim.t)) this.announcer.push(l);
    for (const e of ev) if (e.k === 'end') this.onRunEnd();
    if (ev.length) this.pendingEv.push(...ev);
    if (++this.tick % 2) return;
    const roster = sim.drainRoster();
    if (!this.listeners()) { this.pendingEv = []; return; }
    if (roster.add.length || roster.del.length) this.broadcast({ t: 'roster', add: roster.add, del: roster.del });
    const snap = sim.snapshot();
    snap.t = 's'; snap.ev = this.pendingEv; this.pendingEv = [];
    this.broadcast(snap);
  }
  onRunEnd() {
    const res = this.sim.lastResult;
    this.stats.runs++;
    if (res && res.players.length) this.board.record(res);
    this.log(`[tower] run ${res?.run}: floor ${res?.floor} (${res?.reason}), ${res?.players.length} viewers`);
    setTimeout(() => this.broadcast(this.boardMsg()), 300);
  }
  boardMsg() { return { t: 'board', session: this.sim.board(8), all: this.board.top(8), bestFloor: this.board.data.bestFloor || 0, bestBy: this.board.data.bestBy || '', sessionBest: this.sim.sessionBest, signed: this.board.exportSigned() }; }
  input(ev) { this.stats.events++; return this.sim.input(ev); }
  hello() {
    const sim = this.sim;
    return { roster: [...sim.people.values()].map((m) => sim.rosterEntry(m)), snap: { ...sim.snapshot(), t: 's', ev: [] }, tiers: TOWER_GIFTS.map(({ id, min, label, icon, desc }) => ({ id, min, label, icon, desc })), ...this.boardMsg(), game: 'tower', t: 'hello' };
  }
  newStream() { this.log('[tower] new LIVE: session board reset'); this.sim = new Tower(this.sim.o); this.announcer.clear(); this.broadcast(this.hello()); }
  summary() { const s = this.sim; return { phase: s.phase, run: s.run, floor: s.floor, fuel: Math.round(s.fuel), alive: s.alive, humans: s.humans, people: s.people.size, ghosts: s.ghosts().length, best: s.sessionBest, ...this.stats, tickMs: +this.stats.tickMs.toFixed(3), announcer: this.announcer.stats }; }
}
