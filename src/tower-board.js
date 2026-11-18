// All-time Haunted Tower leaderboard: highest floor ever reached + top climbers. Same signed-copy trick as the
// Battle Royale board (Render's free disk is wiped on restart; the overlay hands back a signed copy).
import { Board } from './board.js';

export class TowerBoard extends Board {
  constructor(file, secret) {
    super(file, secret);
    if (this.data.bestFloor === undefined) this.data.bestFloor = 0;
  }
  record(res) {
    if (!res) return;
    this.data.rounds++;
    if (res.floor > (this.data.bestFloor || 0)) { this.data.bestFloor = res.floor; this.data.bestAt = Date.now(); this.data.bestBy = res.players.slice().sort((a, b) => b.pts - a.pts)[0]?.name || ''; }
    for (const p of res.players) {
      const r = this.data.players[p.uid] || (this.data.players[p.uid] = { name: p.name, pts: 0, best: 0, riddles: 0, runs: 0 });
      r.name = p.name; r.pts += p.pts; r.best = Math.max(r.best, p.floors ? res.floor : 0); r.riddles += p.riddles || 0; r.runs++; r.at = Date.now();
    }
    const all = Object.entries(this.data.players);
    if (all.length > 600) { all.sort((a, b) => b[1].pts - a[1].pts); this.data.players = Object.fromEntries(all.slice(0, 500)); }
    this.save();
  }
  top(n = 10) { return Object.values(this.data.players).filter((p) => p.pts > 0).sort((a, b) => b.pts - a.pts).slice(0, n).map(({ name, pts, best, riddles, runs }) => ({ name, pts, best, riddles, runs })); }
  reset() { this.data = { rounds: 0, players: {}, bestFloor: 0 }; this.save(); }
}
