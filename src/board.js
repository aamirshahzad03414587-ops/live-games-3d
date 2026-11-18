// All-time Battle Royale leaderboard, kept light: a small JSON file. Render's free disk is wiped on every restart /
// redeploy, so the overlay also keeps a signed copy in the phone's localStorage and hands it back after a restart
// (HMAC with the server secret: nobody can post a made-up board).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

export class Board {
  constructor(file, secret) {
    this.file = file; this.secret = secret || 'dev';
    this.data = { rounds: 0, players: {} };   // uid -> { name, wins, kills, games, best, color }
    try { const d = JSON.parse(fs.readFileSync(file, 'utf8')); if (d && d.players) this.data = d; } catch {}
  }
  record(res) {
    if (!res) return;
    this.data.rounds++;
    for (const p of res.players) {
      if (p.bot) continue;
      const r = this.data.players[p.uid] || (this.data.players[p.uid] = { name: p.name, wins: 0, kills: 0, games: 0, best: 0 });
      r.name = p.name; r.games++; r.kills += p.kills; r.best = Math.max(r.best, p.kills); if (p.place === 1) r.wins++;
      r.at = Date.now();
    }
    // keep the file small: the 500 best
    const all = Object.entries(this.data.players);
    if (all.length > 600) { all.sort((a, b) => b[1].wins - a[1].wins || b[1].kills - a[1].kills); this.data.players = Object.fromEntries(all.slice(0, 500)); }
    this.save();
  }
  top(n = 10) { return Object.values(this.data.players).filter((p) => p.wins || p.kills).sort((a, b) => b.wins - a.wins || b.kills - a.kills).slice(0, n).map(({ name, wins, kills, games, best }) => ({ name, wins, kills, games, best })); }
  save() { try { fs.mkdirSync(path.dirname(this.file), { recursive: true }); fs.writeFileSync(this.file, JSON.stringify(this.data)); } catch (e) { console.log('[board] save failed:', e.message); } }
  sign(json) { return crypto.createHmac('sha256', this.secret).update(json).digest('base64url'); }
  /** { json, sig } for the overlay to keep. */
  exportSigned() { const json = JSON.stringify(this.data); return { json, sig: this.sign(json) }; }
  /** Restore from the overlay's copy when it is genuine and has more rounds than ours (after a restart). */
  restore(json, sig) {
    if (typeof json !== 'string' || json.length > 400000 || typeof sig !== 'string') return false;
    const want = this.sign(json);
    if (want.length !== sig.length || !crypto.timingSafeEqual(Buffer.from(want), Buffer.from(sig))) return false;
    let d; try { d = JSON.parse(json); } catch { return false; }
    if (!d || !d.players || (d.rounds || 0) <= this.data.rounds) return false;
    this.data = d; this.save(); return true;
  }
  reset() { this.data = { rounds: 0, players: {} }; this.save(); }
}
