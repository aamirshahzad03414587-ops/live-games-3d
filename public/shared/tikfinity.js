/* Fortune Live live events: the TikFinity desktop app on the SAME PC re-broadcasts
   TikTok LIVE events at ws://127.0.0.1:21213/ . This page only LISTENS to that local
   socket and forwards them to the Fortune Live server. Nothing here logs into TikTok,
   scrapes TikTok, or opens a server-side TikTok connection.
   Override the address with ?tikfinity=ws://host:port/ .
   Auto-reconnects with 1s → 15s backoff. Gift streaks are counted once when they end. */
(function (root) {
  'use strict';
  const TF = { url: 'ws://127.0.0.1:21213/', ws: null, wait: 1000, timer: 0, seen: new Map(), state: 'idle', lastMsg: 0, count: 0, sink: null };

  function tfUser(d) {
    const u = d.user || d.sender || {};
    const uid = String(d.uniqueId || d.unique_id || u.uniqueId || u.unique_id || u.displayId || u.userId || d.userId || '').trim();
    const nick = String(d.nickname || d.nickName || u.nickname || u.nickName || uid || '').trim();
    const pic = d.profilePictureUrl || u.profilePictureUrl || (u.profilePicture && (u.profilePicture.url || (u.profilePicture.urls || [])[0])) || '';
    return { id: uid || nick.toLowerCase().replace(/\s+/g, '_'), nick: nick || uid, avatar: typeof pic === 'string' ? pic : '' };
  }

  function tfFlags(d) {
    const id = d.userIdentity || d.user?.userIdentity || {};
    const followStatus = Number(d.user?.followInfo?.followStatus ?? d.followRole ?? d.follow_role ?? 0);
    const isFollower = !!(id.isFollowerOfAnchor || id.isMutualFollowingWithAnchor || d.isFollower || followStatus >= 1);
    const isGifter = !!(id.isGiftGiverOfAnchor || d.isGiftGiver || d.isGifter);
    return { isFollower, isGifter };
  }

  // TikFinity frame {event, data} -> Fortune Live event shape
  function tfNormalize(name, d) {
    if (!d || typeof d !== 'object') return null;
    if (name === 'roomUser') { const n = Number(d.viewerCount ?? d.viewer_count); return Number.isFinite(n) ? { type: 'viewers', count: n } : null; }
    const u = tfUser(d);
    if (!u.id) return null;
    switch (name) {
      case 'chat': case 'comment':
        return { type: 'chat', ...u, ...tfFlags(d), text: String(d.comment ?? d.text ?? d.message ?? '') };
      case 'like':
        return { type: 'like', ...u, count: Number(d.likeCount ?? d.like_count ?? 1) || 1 };
      case 'gift': {
        const g = d.gift || {};
        const gtype = g.type ?? d.giftType ?? g.giftType;
        const end = d.repeatEnd ?? d.repeat_end;
        if (gtype === 1 && !(end === 1 || end === true)) return null;   // streak still running: only the final frame counts
        const coins = Number(d.diamondCount ?? d.diamond_count ?? g.diamondCount ?? g.diamond_count ?? 1) || 1;
        const count = Number(d.repeatCount ?? d.repeat_count ?? d.comboCount ?? 1) || 1;
        return { type: 'gift', ...u, giftName: String(d.giftName ?? d.gift_name ?? g.name ?? 'Gift'), coins, count };
      }
      case 'follow': return { type: 'follow', ...u };
      case 'share': return { type: 'share', ...u };
      case 'member': return { type: 'join', ...u };
    }
    return null;
  }

  function tfDedupeKey(name, d, ev) {
    return d.msgId || d.msg_id || d.messageId || d.logId || (name === 'gift' ? 'g:' + ev.id + ':' + (d.groupId || '') + ':' + ev.giftName + ':' + ev.count : '');
  }

  function tfDuplicate(name, d, ev) {
    const key = tfDedupeKey(name, d, ev);
    if (!key) return false;
    const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    if (TF.seen.has(key)) return true;
    TF.seen.set(key, now);
    if (TF.seen.size > 600) for (const [k, t] of TF.seen) if (now - t > 60000) TF.seen.delete(k);
    return false;
  }

  function emit(ev) {
    if (typeof TF.sink === 'function') {
      try { TF.sink(ev); } catch (e) { console.warn('tikfinity sink', e); }
    }
  }

  function tfStatus(mode, message) {
    TF.state = mode === 'live' ? 'live' : (mode || TF.state);
    emit({ type: 'status', mode, message: message || '', username: '' });
  }

  function tfRetry() {
    clearTimeout(TF.timer);
    if (TF.stopped) { TF.timer = null; return; }
    TF.timer = setTimeout(() => { TF.timer = null; connectTikFinity(); }, TF.wait);
    TF.wait = Math.min(15000, Math.round(TF.wait * 1.7));   // 1s, 1.7s, 2.9s ... capped at 15s
  }

  function connectTikFinity() {
    if (typeof location !== 'undefined') {
      try { const q = new URLSearchParams(location.search).get('tikfinity'); if (q && /^wss?:\/\//.test(q)) TF.url = q; } catch (e) {}
    }
    TF.stopped = false;
    if (TF.ws || TF.timer) return;   // already connected or a retry is scheduled (no parallel sockets)
    let ws;
    TF.state = 'connecting';
    try { ws = new WebSocket(TF.url); } catch (e) { tfRetry(); return; }
    TF.ws = ws;
    ws.onopen = () => { TF.state = 'live'; TF.wait = 1000; tfStatus('live', 'TikFinity connected'); };
    ws.onmessage = (m) => {
      let msg; try { msg = JSON.parse(m.data); } catch (e) { return; }
      if (!msg) return;
      const name = String(msg.event || msg.type || msg.eventName || '');
      const data = msg.data || msg.payload || msg;
      const ev = tfNormalize(name, data);
      if (!ev || (ev.type !== 'viewers' && tfDuplicate(name, data, ev))) return;
      ev.dedupeKey = tfDedupeKey(name, data, ev) || '';
      TF.lastMsg = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      TF.count++;
      emit(ev);
    };
    ws.onerror = () => {};
    ws.onclose = () => { if (TF.ws !== ws) return; TF.ws = null; if (TF.stopped) return; if (TF.state !== 'connecting' || !TF.told) { TF.told = true; tfStatus('connecting', 'Waiting for TikFinity on ' + TF.url); } else TF.state = 'connecting'; tfRetry(); };
  }

  const api = {
    TF, tfNormalize, tfDuplicate, tfDedupeKey, tfUser, connect: connectTikFinity,
    setSink(fn) { TF.sink = fn; },
    /** Stop trying (direct-only mode): close the socket and cancel the retry timer. */
    stop() { TF.stopped = true; clearTimeout(TF.timer); TF.timer = null; const w = TF.ws; TF.ws = null; TF.state = 'off'; if (w) try { w.close(); } catch (e) {} },
    get state() { return TF.state; },
    get url() { return TF.url; },
    get count() { return TF.count; },
  };
  root.TikFinity = api;
  if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
