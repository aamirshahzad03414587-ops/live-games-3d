// LIVE events for the games (adapted from fortune-live), from one or both sources:
//   "direct"    the server itself reads the LIVE with tiktok-live-connector (no PC app needed, works when the overlay runs on an iPhone);
//   "tikfinity" the overlay listens to the TikFinity desktop app (ws://127.0.0.1:21213/) and forwards events here;
//   "both"      both at once; the same comment/gift/join arriving twice is counted once.
// Direct mode auto-connects: it checks every retrySeconds while the account is offline and reconnects after a drop.
import { EventEmitter } from 'node:events';

export const SOURCES = ['direct', 'tikfinity', 'both'];
const TF_WAIT = 'Open the overlay on the streaming PC with TikFinity running (ws://127.0.0.1:21213/)';

export class TikTokBridge extends EventEmitter {
  constructor(hub, { connector = () => import('tiktok-live-connector'), now = () => Date.now() } = {}) {
    super();
    this.hub = hub;  // { event(ev), newStream() }
    this.connector = connector;
    this.now = now;
    this.seen = new Map();      // TikFinity's own event ids
    this.recent = new Map();    // content keys across sources -> { source, at }
    this.conn = null; this.retryTimer = null; this.wanted = false;
    this.source = 'tikfinity'; this.username = ''; this.signApiKey = ''; this.retrySeconds = 45;
    this.direct = { state: 'off', message: '' };
    this.tikfinity = { state: 'waiting', message: TF_WAIT };
    this.counts = { direct: 0, tikfinity: 0, duplicates: 0 }; this.tfUser = '';
  }

  /** { liveSource, username, signApiKey, retrySeconds } */
  configure({ liveSource, username, signApiKey, retrySeconds } = {}) {
    this.username = String(username || '').trim().replace(/^@/, '');
    this.source = SOURCES.includes(liveSource) ? liveSource : (this.username ? 'direct' : 'tikfinity');
    this.signApiKey = signApiKey || '';
    if (retrySeconds) this.retrySeconds = Math.max(15, Number(retrySeconds) || 45);
    this.publish();
  }

  get usesDirect() { return this.source === 'direct' || this.source === 'both'; }
  get usesTikFinity() { return this.source === 'tikfinity' || this.source === 'both'; }

  summary() {
    const d = this.direct, t = this.tikfinity;
    const main = this.usesDirect ? d : t;
    const state = main.state === 'connected' || (this.usesTikFinity && t.state === 'connected') || (this.usesDirect && d.state === 'connected') ? 'connected' : main.state;
    const parts = [];
    if (this.usesDirect) parts.push(`Direct: ${d.state}${d.message ? ' (' + d.message + ')' : ''}`);
    if (this.usesTikFinity) parts.push(`TikFinity: ${t.state}${t.message && t.state !== 'connected' ? ' (' + t.message + ')' : ''}`);
    return { state, source: this.source, username: this.username || this.tfUser || '', message: parts.join(' · '), direct: { ...d }, tikfinity: { ...t }, counts: { ...this.counts } };
  }
  get status() { return this.summary(); }
  publish() { this.emit('status', this.status); }
  log(m) { this.emit('log', `[tiktok] ${m}`); }

  /** Status reported by the overlay's TikFinity client (kept for compatibility: setStatus(state, message, extra)). */
  setStatus(state, message = '', extra = {}) {
    const changed = state !== this.tikfinity.state || message !== this.tikfinity.message;
    this.tikfinity = { state, message };
    if (extra.username) this.tfUser = extra.username;
    if (changed) this.publish();   // overlays retry TikFinity every few seconds; don't re-broadcast an unchanged status
  }
  setDirect(state, message = '') {
    const changed = state !== this.direct.state || message !== this.direct.message;
    this.direct = { state, message, at: new Date(this.now()).toISOString() };
    if (changed) { this.log(`direct @${this.username}: ${state}${message ? ' - ' + message : ''}`); this.publish(); }
  }

  // ------------------------------------------------------------------ direct connection
  /** Start (or restart) the direct connection loop. Resolves after the first attempt. */
  async connect(username) {
    if (username) this.username = String(username).trim().replace(/^@/, '');
    if (!this.usesDirect) {
      const msg = 'Live source is "tikfinity": events come from the TikFinity desktop app. Switch the live source to "direct" or "both" to read the LIVE from this server.';
      this.publish(); throw new Error(msg);
    }
    if (!this.username) { this.setDirect('error', 'Set the TikTok username first (TIKTOK_USERNAME)'); throw new Error(this.direct.message); }
    this.wanted = true;
    clearTimeout(this.retryTimer);
    await this.attempt();
    return this.status;
  }

  async disconnect() {
    this.wanted = false; clearTimeout(this.retryTimer); this.retryTimer = null;
    await this.closeConn();
    this.setDirect('off', 'stopped');
  }

  async closeConn() {
    if (this.conn) { const c = this.conn; this.conn = null; try { await c.disconnect(); } catch {} }
  }

  scheduleRetry(seconds = this.retrySeconds) {
    clearTimeout(this.retryTimer);
    if (!this.wanted) return;
    this.retryTimer = setTimeout(() => this.attempt(), seconds * 1000);
    this.retryTimer.unref?.();
  }

  async attempt() {
    if (!this.wanted || this.attempting) return;
    this.attempting = true;
    await this.closeConn();
    const username = this.username;
    this.setDirect('connecting', `@${username}`);
    try {
      const { TikTokLiveConnection, WebcastEvent, ControlEvent } = await this.connector();
      const opts = { enableExtendedGiftInfo: false, processInitialData: false }; // extended gift info needs a paid Euler sign plan; giftDetails already has the coin value
      if (this.signApiKey) opts.signApiKey = this.signApiKey; // Euler Stream key, for when TikTok blocks unsigned connections
      const conn = new TikTokLiveConnection(username, opts);
      this.conn = conn;
      // tiktok-live-connector 2.x sends proto-v3 objects: user.displayId (the @handle), user.nickname, chat `content`,
      // gift `gift.{name,diamondCount,type}`; older shapes (uniqueId, comment, giftDetails) are still accepted.
      const user = (d) => { const u = d?.user || {}; const id = String(u.uniqueId || u.displayId || u.userId || u.id || ''); return { id, nick: u.nickname || id || 'Viewer' }; };
      const send = (ev) => { if (this.conn === conn && ev.id) this.ingest(ev, 'direct'); };
      conn.on(WebcastEvent.CHAT, (d) => {
        const idn = d.userIdentity || {};
        send({ type: 'chat', ...user(d), text: String(d.content ?? d.comment ?? ''), isFollower: !!(idn.isFollowerOfAnchor || idn.isMutualFollowingWithAnchor || Number(d.user?.followInfo?.followStatus) >= 1), isGifter: !!idn.isGiftGiverOfAnchor });
      });
      conn.on(WebcastEvent.GIFT, (d) => {
        const g = d.gift || d.giftDetails || {}, ext = d.extendedGiftInfo || {};
        const type = g.type ?? g.giftType ?? ext.type;
        if (type === 1 && !d.repeatEnd) return; // streak still running; count it when it ends
        send({ type: 'gift', ...user(d), giftName: g.name || g.giftName || ext.name || `Gift ${d.giftId}`, coins: Number(g.diamondCount || ext.diamond_count || 0), count: Number(d.repeatCount || d.comboCount || 1) });
      });
      conn.on(WebcastEvent.LIKE, (d) => send({ type: 'like', ...user(d), count: Number(d.count ?? d.likeCount ?? 1) || 1 }));
      conn.on(WebcastEvent.FOLLOW, (d) => send({ type: 'follow', ...user(d) }));
      conn.on(WebcastEvent.MEMBER, (d) => send({ type: 'join', ...user(d) }));
      if (WebcastEvent.SHARE) conn.on(WebcastEvent.SHARE, (d) => send({ type: 'share', ...user(d) }));
      conn.on(WebcastEvent.STREAM_END, () => {
        if (this.conn !== conn) return;
        this.conn = null; this.setDirect('waiting', `The LIVE ended. Waiting for @${username} to go live again`); this.scheduleRetry();
      });
      conn.on(ControlEvent.DISCONNECTED, () => {
        if (this.conn !== conn) return;
        this.conn = null; this.setDirect('reconnecting', 'Connection dropped, reconnecting in 10 s'); this.scheduleRetry(10);
      });
      conn.on(ControlEvent.ERROR, (e) => this.log(`direct error: ${e?.info || e?.exception?.message || e?.message || e}`));
      const st = await conn.connect();
      if (this.conn !== conn) return;
      // a reconnect to the same LIVE (dropped connection) keeps the game, the queue and the session leaderboard;
      // only a new LIVE room starts a new stream
      const room = String(st?.roomId || '');
      if (!room || room !== this.lastRoomId) this.hub.newStream();
      this.lastRoomId = room || this.lastRoomId;
      this.setDirect('connected', `LIVE room ${room}`.trim());
    } catch (e) {
      this.conn = null;
      const raw = String(e?.message || e || 'unknown error').replace(/\s+/g, ' ').slice(0, 300);
      const offline = /offline|not.*live|isn't live|room ?id|LIVE has ended|UserOffline/i.test(raw + ' ' + (e?.constructor?.name || ''));
      const why = e?.constructor?.name === 'UserOfflineError' || /offline|not.*live/i.test(raw) ? 'is not live right now' : `has no LIVE room found (not live, or TikTok hid it: ${raw})`;
      if (offline) this.setDirect('waiting', `@${username} ${why}. Checking again every ${this.retrySeconds} s`);
      else this.setDirect('error', `${raw}${/sign|captcha|block|403|rate/i.test(raw) && !this.signApiKey ? ' (TikTok may be blocking unsigned connections: set SIGN_API_KEY from eulerstream.com)' : ''}. Retrying in ${this.retrySeconds} s`);
      this.scheduleRetry();
    } finally { this.attempting = false; }
  }

  ingest(ev, source = 'tikfinity') {
    if (!ev || typeof ev !== 'object') return { ok: false, reason: 'bad-event' };
    if (source === 'tikfinity' && !this.usesTikFinity) return { ok: false, reason: 'source-off' };
    if (source === 'tikfinity' && ev.type === 'like' && this.source === 'both' && this.direct.state === 'connected') return { ok: false, reason: 'duplicate' }; // likes can't be matched; take them from one source
    const ck = contentKey(ev);
    if (ck) {
      const now = this.now(), prev = this.recent.get(ck);
      if (prev && prev.source !== source && now - prev.at < 20e3) { this.counts.duplicates++; return { ok: false, reason: 'duplicate' }; }
      this.recent.set(ck, { source, at: now });
      if (this.recent.size > 800) for (const [k, v] of this.recent) if (now - v.at > 60e3) this.recent.delete(k);
    }
    this.counts[source] = (this.counts[source] || 0) + 1;
    // a one-line summary per minute (joins etc. are not logged one by one): proves the events really arrive
    const mk = this.minute || (this.minute = { at: this.now(), n: {} }); mk.n[ev.type] = (mk.n[ev.type] || 0) + 1;
    if (this.now() - mk.at >= 60e3) { this.log(`${source} events in the last ${Math.round((this.now() - mk.at) / 1000)} s: ${Object.entries(mk.n).map(([k, v]) => `${k} ${v}`).join(', ')}`); this.minute = { at: this.now(), n: {} }; }
    if (ev.type === 'chat') this.log(`${source} comment from @${ev.id || ev.uniqueId} (${String(ev.text || '').length} chars)`);
    else if (ev.type === 'gift') this.log(`${source} gift @${ev.id || ev.uniqueId}: ${ev.giftName} x${ev.count || 1}`);
    const key = String(ev.dedupeKey || '');
    if (key) {
      const now = Date.now();
      if (this.seen.has(key)) return { ok: false, reason: 'duplicate' };
      this.seen.set(key, now);
      if (this.seen.size > 600) for (const [k, t] of this.seen) if (now - t > 60e3) this.seen.delete(k);
    }
    const userId = String(ev.id || ev.userId || ev.uniqueId || '').slice(0, 80);
    const nickname = String(ev.nick || ev.nickname || ev.uniqueId || 'Viewer').slice(0, 80);
    if (!userId && ev.type !== 'viewers') return { ok: false, reason: 'no-user' };
    const out = { type: ev.type, uid: userId, name: nickname };
    switch (ev.type) {
      case 'chat': out.text = String(ev.text || ev.comment || '').slice(0, 300); out.isFollower = !!ev.isFollower; break;
      case 'gift': out.giftName = String(ev.giftName || 'Gift').slice(0, 60); out.coins = Number(ev.coins || ev.diamonds || 0) || 1; out.count = Number(ev.count || 1) || 1; break;
      case 'like': out.count = Number(ev.count || 1) || 1; break;
      case 'follow': case 'join': case 'share': break;
      case 'viewers': case 'status': return { ok: true, ignored: ev.type };
      default: return { ok: false, reason: 'unknown-type' };
    }
    return this.hub.event(out, source) || { ok: true };
  }
}

/** Same event from two sources -> same key (TikFinity and the direct connection both use the @handle as id). */
export function contentKey(ev) {
  const id = String(ev.id || ev.uniqueId || ev.userId || '').toLowerCase();
  if (!id) return '';
  switch (ev.type) {
    case 'chat': return `chat|${id}|${String(ev.text || ev.comment || '').trim().toLowerCase()}`;
    case 'gift': return `gift|${id}|${String(ev.giftName || '').toLowerCase()}|${ev.count || 1}`;
    case 'follow': case 'join': case 'share': return `${ev.type}|${id}`;
    default: return '';
  }
}
