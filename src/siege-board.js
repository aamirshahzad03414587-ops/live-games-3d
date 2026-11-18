// All-time Dark Dimension Siege board: Earths saved / fallen, the most survivors ever saved, and top defenders.
// Same signed-copy trick as the other boards (Render's free disk is wiped on restart; the overlay hands back a copy).
import { Board } from './board.js';

export class SiegeBoard extends Board {
  constructor(file, secret) {
    super(file, secret);
    for (const k of ['saves', 'falls', 'bestSaved']) if (this.data[k] === undefined) this.data[k] = 0;
  }
  record(res) {
    if (!res) return;
    this.data.rounds++;
    if (res.saved) this.data.saves = (this.data.saves || 0) + 1; else this.data.falls = (this.data.falls || 0) + 1;
    const top = res.players.slice().sort((a, b) => b.pts - a.pts)[0];
    if (res.saved && res.survivors > (this.data.bestSaved || 0)) { this.data.bestSaved = res.survivors; this.data.bestAt = Date.now(); this.data.bestBy = top?.name || ''; }
    for (const p of res.players) {
      const r = this.data.players[p.uid] || (this.data.players[p.uid] = { name: p.name, pts: 0, kills: 0, saves: 0, runs: 0 });
      r.name = p.name; r.pts += p.pts; r.kills += p.kills || 0; r.saves += res.saved ? 1 : 0; r.runs++; r.at = Date.now();
    }
    const all = Object.entries(this.data.players);
    if (all.length > 600) { all.sort((a, b) => b[1].pts - a[1].pts); this.data.players = Object.fromEntries(all.slice(0, 500)); }
    this.save();
  }
  top(n = 10) { return Object.values(this.data.players).filter((p) => p.pts > 0).sort((a, b) => b.pts - a.pts).slice(0, n).map(({ name, pts, kills, saves, runs }) => ({ name, pts, kills, saves, runs })); }
  reset() { this.data = { rounds: 0, players: {}, saves: 0, falls: 0, bestSaved: 0 }; this.save(); }
}
