// Cat Dance Party: likes and cheap gifts make the four cats dance. Dance only — no duels.
import { Announcer } from '../announcer.js';
import { CATS, CAT_IDS, GROUP_GIFT, SONG, DEFAULTS, resolveGift, publicCat, catById } from '../../public/shared/cats-data.js';

export class CatsGame {
  constructor({ config, tts, broadcast, listeners, log = console.log }) {
    this.config = config;
    this.broadcast = broadcast || (() => {});
    this.listeners = listeners || (() => 1);
    this.log = log;
    this.announcer = new Announcer({
      tts, broadcast, listeners,
      voice: () => ({ voice: config.cats?.voiceName || 'en-US-AvaNeural', rate: config.cats?.rate || '+8%', pitch: config.cats?.pitch || '+0Hz' }),
    });
    this.stats = { events: 0, gifts: 0, likes: 0, dances: 0, groups: 0, tickMs: 0 };
    this.reset();
  }

  settings() {
    const c = this.config.cats || {};
    return {
      likesPerDance: Math.max(5, Math.min(500, Number(c.likesPerDance ?? DEFAULTS.likesPerDance) || 50)),
      groupCoins: Math.max(10, Math.min(5000, Number(c.groupCoins ?? DEFAULTS.groupCoins) || 30)),
      voice: c.voice === true,
    };
  }

  applySettings() { /* read live from this.config.cats via settings() */ }

  reset() {
    const now = Date.now();
    this.likes = 0;
    this.likesToward = 0;
    this.likeBurst = [];
    this.heartsUntil = 0;
    this.queues = { maine: [], bengal: [], persian: [], siamese: [], group: [] };
    this.active = { maine: null, bengal: null, persian: null, siamese: null, group: null };
    this.moveIdx = { maine: 0, bengal: 0, persian: 0, siamese: 0, group: 0 };
    this.recentCatGifts = [];
    this.startedAt = now;
    this.announcer.clear?.();
  }

  start() {
    this.timer = setInterval(() => {
      const t0 = performance.now();
      if (this.listeners() === 0) return;
      this.maybeStart();
      this.broadcast(this.snapshot());
      this.stats.tickMs = this.stats.tickMs * 0.98 + (performance.now() - t0) * 0.02;
    }, 200);
  }
  stop() { clearInterval(this.timer); }

  newStream() {
    this.log('[cats] new LIVE: dance queues cleared');
    this.reset();
    this.broadcast(this.hello());
  }

  input(ev) {
    this.stats.events++;
    if (!ev || !ev.type) return { ok: true };
    if (ev.type === 'gift') this.onGift(ev);
    else if (ev.type === 'like') this.onLike(ev);
    this.maybeStart();
    this.broadcast(this.snapshot());
    return { ok: true };
  }

  onGift(ev) {
    this.stats.gifts++;
    const name = String(ev.name || ev.nickname || 'Viewer').slice(0, 24);
    const r = resolveGift(ev.giftName, ev.coins, ev.count);
    if (r.kind === 'solo') {
      const now = Date.now();
      this.recentCatGifts.push({ cat: r.cat, t: now });
      this.recentCatGifts = this.recentCatGifts.filter((x) => now - x.t < DEFAULTS.comboWindowMs);
      const unique = new Set(this.recentCatGifts.map((x) => x.cat));
      if (unique.size >= DEFAULTS.comboCats) {
        this.enqueue('group', { gifter: name, reason: 'combo' });
        this.recentCatGifts = [];
      } else {
        this.enqueue(r.cat, { gifter: name, reason: 'gift', giftName: ev.giftName });
      }
    } else if (r.kind === 'group') {
      this.enqueue('group', { gifter: name, reason: r.reason, giftName: ev.giftName });
    }
  }

  onLike(ev) {
    const n = Math.max(1, Number(ev.count) || 1);
    const name = String(ev.name || ev.nickname || '').slice(0, 24);
    const s = this.settings();
    const now = Date.now();
    this.likes += n;
    this.stats.likes += n;
    this.likesToward += n;
    this.likeBurst.push({ t: now, n });
    this.likeBurst = this.likeBurst.filter((x) => now - x.t < DEFAULTS.likeBurstWindowMs);
    const burst = this.likeBurst.reduce((a, x) => a + x.n, 0);
    if (burst >= DEFAULTS.likeBurst) {
      this.heartsUntil = now + 2800;
      this.likeBurst = [];
    }
    while (this.likesToward >= s.likesPerDance) {
      this.likesToward -= s.likesPerDance;
      this.enqueue(this.pickCat(), { gifter: name || null, reason: 'likes' });
    }
  }

  pickCat() {
    const now = Date.now();
    const idle = CAT_IDS.filter((id) => !this.active[id] || this.active[id].until <= now);
    const pool = idle.length ? idle : CAT_IDS;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  nextMove(target) {
    const list = target === 'group' ? GROUP_GIFT.moves : (catById(target)?.moves || ['idle']);
    const i = this.moveIdx[target] || 0;
    this.moveIdx[target] = (i + 1) % list.length;
    return list[i % list.length];
  }

  enqueue(target, meta) {
    if (target !== 'group' && !CAT_IDS.includes(target)) return;
    const item = { target, move: this.nextMove(target), gifter: meta.gifter || null, reason: meta.reason || 'gift', at: Date.now() };
    this.queues[target].push(item);
    this.stats.dances++;
    if (target === 'group') this.stats.groups++;
    if (this.settings().voice) this.say(item);
  }

  say(item) {
    const who = item.gifter ? String(item.gifter).slice(0, 16) : '';
    let line;
    if (item.target === 'group') line = who ? `${who}, all four!` : 'All four, together!';
    else {
      const cat = catById(item.target)?.name || 'the cat';
      line = who ? `${who}, ${cat}!` : `${cat} dances!`;
    }
    try { this.announcer.push({ text: line, pri: 4 }); } catch {}
  }

  maybeStart() {
    const now = Date.now();
    const ms = DEFAULTS.clipMs;
    if (!this.active.group || this.active.group.until <= now) {
      this.active.group = null;
      const g = this.queues.group.shift();
      if (g) this.active.group = { ...g, until: now + ms };
    }
    for (const id of CAT_IDS) {
      if (!this.active[id] || this.active[id].until <= now) {
        this.active[id] = null;
        const it = this.queues[id].shift();
        if (it) this.active[id] = { ...it, until: now + ms };
      }
    }
  }

  snapshot() {
    const now = Date.now();
    this.maybeStart();
    const cats = {};
    for (const c of CATS) {
      const a = this.active[c.id];
      const on = !!(a && a.until > now);
      cats[c.id] = { clip: on ? a.move : 'idle', gifter: on ? a.gifter : null, reason: on ? a.reason : null, until: on ? a.until : 0, queued: this.queues[c.id].length };
    }
    const g = this.active.group;
    const gon = !!(g && g.until > now);
    return {
      t: 's',
      cats,
      group: { on: gon, clip: gon ? g.move : null, gifter: gon ? g.gifter : null, reason: gon ? g.reason : null, until: gon ? g.until : 0, queued: this.queues.group.length },
      likes: this.likes,
      likesToward: this.likesToward,
      likesPerDance: this.settings().likesPerDance,
      groupCoins: this.settings().groupCoins,
      hearts: now < this.heartsUntil,
      voice: this.settings().voice,
    };
  }

  hello() {
    const snap = this.snapshot();
    return {
      ...snap,
      t: 'hello', game: 'cats', song: SONG,
      lineup: CATS.map(publicCat),
      groupGift: { giftName: GROUP_GIFT.giftName, giftId: GROUP_GIFT.giftId, coins: GROUP_GIFT.coins, icon: GROUP_GIFT.icon, moves: GROUP_GIFT.moves, clips: GROUP_GIFT.clips },
      settings: this.settings(),
    };
  }

  summary() {
    const q = CAT_IDS.reduce((n, id) => n + this.queues[id].length, 0) + this.queues.group.length;
    const dancing = CAT_IDS.filter((id) => this.active[id] && this.active[id].until > Date.now()).length + (this.active.group && this.active.group.until > Date.now() ? 1 : 0);
    return { likes: this.likes, likesToward: this.likesToward, likesPerDance: this.settings().likesPerDance, queued: q, dancing, hearts: Date.now() < this.heartsUntil, ...this.stats, tickMs: +this.stats.tickMs.toFixed(3) };
  }
}
