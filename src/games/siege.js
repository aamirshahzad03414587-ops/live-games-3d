// Dark Dimension Siege on the server: shared simulation at 20 Hz, 10 snapshots a second to the overlays, the
// Narrator's voice lines (a deep Edge voice of its own), and the all-time board (Earths saved + top defenders).
import { Siege } from '../../public/shared/siege-sim.js';
import { makeSiegeLines } from '../../public/shared/siege-lines.js';
import { SIEGE_GIFTS } from '../../public/shared/siege-data.js';
import { Announcer } from '../announcer.js';

export class SiegeGame {
  constructor({ config, tts, board, broadcast, listeners, log = console.log }) {
    this.config = config; this.board = board; this.broadcast = broadcast; this.listeners = listeners; this.log = log;
    this.sim = new Siege(config.siege);
    this.makeLines();
    this.announcer = new Announcer({ tts, broadcast, listeners, voice: () => ({ voice: config.siege.voice, rate: config.siege.rate, pitch: config.siege.pitch }) });
    this.pendingEv = []; this.tick = 0; this.stats = { events: 0, runs: 0, tickMs: 0 };
  }
  makeLines() { this.lines = makeSiegeLines({ nameOf: (id) => this.sim.byId.get(id)?.name || null, survivors: () => this.sim.survivors }); }
  start() {
    let last = performance.now();
    this.timer = setInterval(() => {
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      // nobody watching: hold the cold-open / muster (saves the free instance's CPU; the siege resumes when an overlay opens)
      if (this.listeners() === 0 && (this.sim.phase === 'gather' || this.sim.phase === 'intro')) return;
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
    this.log(`[siege] run ${res?.run}: ${res?.saved ? 'EARTH SAVED' : 'earth fell'} at wave ${res?.wave}, ${Math.round((res?.survivors || 0) / 1e6)}M survivors, ${res?.players.length} viewers`);
    setTimeout(() => this.broadcast(this.boardMsg()), 300);
  }
  boardMsg() { const d = this.board.data; return { t: 'board', session: this.sim.board(8), all: this.board.top(8), saves: d.saves || 0, falls: d.falls || 0, bestSaved: d.bestSaved || 0, bestBy: d.bestBy || '', sessionSaves: this.sim.saves, signed: this.board.exportSigned() }; }
  input(ev) { this.stats.events++; return this.sim.input(ev); }
  hello() {
    const sim = this.sim;
    return { roster: [...sim.people.values()].map((m) => sim.rosterEntry(m)), snap: { ...sim.snapshot(), t: 's', ev: [] }, tiers: SIEGE_GIFTS.map(({ id, min, label, icon, desc }) => ({ id, min, label, icon, desc })), ...this.boardMsg(), game: 'siege', t: 'hello' };
  }
  newStream() { this.log('[siege] new LIVE: session board reset'); this.sim = new Siege(this.sim.o); this.makeLines(); this.announcer.clear(); this.broadcast(this.hello()); }
  summary() { const s = this.sim; return { phase: s.phase, run: s.run, chapter: s.chapter, wave: s.wave, survivors: Math.round(s.survivors), barrier: Math.round(s.barrier), alive: s.alive, humans: s.humans, people: s.people.size, enemies: s.enemies.length, saves: s.saves, ...this.stats, tickMs: +this.stats.tickMs.toFixed(3), announcer: this.announcer.stats }; }
}
