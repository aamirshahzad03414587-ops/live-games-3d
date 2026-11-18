// Server side of the announcer: lines from br-lines.js -> free TTS (Edge, Google fallback) -> broadcast to overlays.
// One line at a time; at most 3 waiting; stale low-priority lines are dropped so the voice keeps up with the action.
export class Announcer {
  constructor({ tts, broadcast, listeners = () => 1, now = () => Date.now() }) {
    this.tts = tts; this.broadcast = broadcast; this.listeners = listeners; this.now = now;
    this.pending = []; this.busyUntil = 0; this.timer = null; this.stats = { said: 0, dropped: 0, noVoice: 0 };
  }
  push(line) {
    if (!line || !line.text) return;
    const item = { ...line, at: this.now() };
    // banner words are shown right away, even when the voice is busy
    if (line.banner) this.broadcast({ t: 'banner', text: line.banner, pri: line.pri, gift: line.gift || null });
    this.pending.push(item);
    this.pending.sort((a, b) => b.pri - a.pri || a.at - b.at);
    while (this.pending.length > 3) { this.pending.pop(); this.stats.dropped++; }
    this.pump();
  }
  // voice is made lazily (only for the line about to play, plus one prefetch) so dropped lines never hit the TTS service
  audioFor(item) {
    if (!item.audio) item.audio = this.listeners() > 0 && this.tts ? this.tts.synth(item.text).catch(() => null) : Promise.resolve(null);
    return item.audio;
  }
  clear() { this.pending = []; }
  pump() {
    if (this.timer || this.making) return;
    const wait = Math.max(0, this.busyUntil - this.now());
    this.timer = setTimeout(() => this.next(), wait);
    this.timer.unref?.();
  }
  async next() {
    this.timer = null;
    const now = this.now();
    this.pending = this.pending.filter((p) => { const ok = p.win || now - p.at < (p.pri >= 7 ? 9000 : 6000); if (!ok) this.stats.dropped++; return ok; });
    const item = this.pending.shift();
    if (!item) return;
    this.making = true;
    const audio = this.audioFor(item);
    if (this.pending[0]) this.audioFor(this.pending[0]);
    const a = await Promise.race([audio, new Promise((r) => setTimeout(() => r(null), 3500))]);
    this.making = false;
    const dur = a ? a.duration : Math.min(4, 0.9 + item.text.length / 16);
    if (!a) this.stats.noVoice++;
    this.stats.said++;
    this.broadcast({ t: 'say', text: item.text, url: a ? a.url : null, dur: Math.round(dur * 100) / 100, pri: item.pri });
    this.busyUntil = this.now() + dur * 1000 + 250;
    if (this.pending.length) this.pump();
  }
}
