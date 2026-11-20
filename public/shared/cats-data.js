// Shared Cat Dance Party rules: gift mapping, like thresholds, beat math.
// Pure functions so the server, the overlay and the tests use the same logic.

export const SONG = {
  title: 'رنّة الخلخال',
  titleEn: 'Rannat al-Khalkhal',
  url: '/cats/media/rannat-al-khalkhal.mp3',
  duration: 215.16,
  bpm: 114,
  beat: 60 / 114,
};

// Cheap common TikTok LIVE gifts (names + IDs as listed by Euler Stream / BeetGames, Nov 2026).
// Icons are our own stylized art, not TikTok's gift artwork.
export const CATS = [
  {
    id: 'maine', name: 'Maine Coon', gender: 'male', frame: 'gold-arch',
    giftName: 'Rose', giftId: 5655, coins: 1, icon: '/cats/gifts/icon-rose.png',
    portrait: '/cats/media/maine-portrait.jpg', idle: '/cats/media/maine-idle.mp4',
    moves: ['dabke-stomp', 'dabke-basic', 'cane-twirl', 'saidi'],
  },
  {
    id: 'bengal', name: 'Bengal', gender: 'male', frame: 'neon-pink',
    giftName: 'TikTok', giftId: 5269, coins: 1, icon: '/cats/gifts/icon-note.png',
    portrait: '/cats/media/bengal-portrait.jpg', idle: '/cats/media/bengal-idle.mp4',
    moves: ['cane-twirl', 'dabke-basic', 'dabke-stomp', 'saidi'],
  },
  {
    id: 'persian', name: 'Persian', gender: 'female', frame: 'emerald-mosaic',
    giftName: 'Ice Cream Cone', giftId: 5827, coins: 1, icon: '/cats/gifts/icon-icecream.png',
    portrait: '/cats/media/persian-portrait.jpg', idle: '/cats/media/persian-idle.mp4',
    moves: ['hipdrop', 'shimmy', 'figure8', 'snakearms'],
  },
  {
    id: 'siamese', name: 'Siamese', gender: 'female', frame: 'velvet-lantern',
    giftName: 'Finger Heart', giftId: 5487, coins: 5, icon: '/cats/gifts/icon-fingerheart.png',
    portrait: '/cats/media/siamese-portrait.jpg', idle: '/cats/media/siamese-idle.mp4',
    moves: ['shimmy', 'hipdrop', 'camel', 'figure8'],
  },
];

export const CAT_IDS = CATS.map((c) => c.id);

export const GROUP_GIFT = {
  giftName: 'Doughnut', giftId: 5879, coins: 30, icon: '/cats/gifts/icon-doughnut.png',
  moves: ['dabke-line', 'circle'],
  clips: { 'dabke-line': '/cats/media/group-dabke-line.mp4', circle: '/cats/media/group-circle.mp4' },
};

export const CLIP = {
  maine: {
    idle: '/cats/media/maine-idle.mp4',
    'dabke-stomp': '/cats/media/maine-dabke-stomp.mp4',
    'dabke-basic': '/cats/media/maine-dabke-basic.mp4',
    'cane-twirl': '/cats/media/maine-cane-twirl.mp4',
    saidi: '/cats/media/maine-saidi.mp4',
  },
  bengal: {
    idle: '/cats/media/bengal-idle.mp4',
    'cane-twirl': '/cats/media/bengal-cane-twirl.mp4',
    'dabke-basic': '/cats/media/bengal-dabke-basic.mp4',
    'dabke-stomp': '/cats/media/bengal-dabke-stomp.mp4',
    saidi: '/cats/media/bengal-saidi.mp4',
  },
  persian: {
    idle: '/cats/media/persian-idle.mp4',
    hipdrop: '/cats/media/persian-hipdrop.mp4',
    shimmy: '/cats/media/persian-shimmy.mp4',
    figure8: '/cats/media/persian-figure8.mp4',
    snakearms: '/cats/media/persian-snakearms.mp4',
  },
  siamese: {
    idle: '/cats/media/siamese-idle.mp4',
    shimmy: '/cats/media/siamese-shimmy.mp4',
    hipdrop: '/cats/media/siamese-hipdrop.mp4',
    camel: '/cats/media/siamese-camel.mp4',
    figure8: '/cats/media/siamese-figure8.mp4',
  },
};

export const DEFAULTS = {
  likesPerDance: 50,
  likeBurst: 25,
  likeBurstWindowMs: 2000,
  groupCoins: 30,
  comboCats: 3,
  comboWindowMs: 8000,
  voice: false,
  clipMs: 5200,
};

export const normGift = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

const GIFT_TO_TARGET = (() => {
  const m = new Map();
  for (const c of CATS) m.set(normGift(c.giftName), { kind: 'solo', cat: c.id });
  m.set('rose', { kind: 'solo', cat: 'maine' });
  m.set('tiktok', { kind: 'solo', cat: 'bengal' });
  m.set('icecreamcone', { kind: 'solo', cat: 'persian' });
  m.set('icecream', { kind: 'solo', cat: 'persian' });
  m.set('cone', { kind: 'solo', cat: 'persian' });
  m.set('fingerheart', { kind: 'solo', cat: 'siamese' });
  m.set('doughnut', { kind: 'group', reason: 'doughnut' });
  m.set('donut', { kind: 'group', reason: 'doughnut' });
  return m;
})();

export function giftCoins(ev) {
  const coins = Number(ev?.coins ?? ev?.diamonds ?? 0) || 0;
  const count = Number(ev?.count || 1) || 1;
  return coins * count;
}

/** Map a TikTok gift event to a solo cat, a group dance, or nothing. Never a duel. */
export function resolveGift(giftName, coins = 0, count = 1) {
  const key = normGift(giftName);
  const total = (Number(coins) || 0) * (Number(count) || 1);
  const hit = GIFT_TO_TARGET.get(key);
  if (hit) return hit.kind === 'group' ? { kind: 'group', reason: hit.reason || 'doughnut' } : { kind: 'solo', cat: hit.cat, reason: 'gift' };
  if (total >= DEFAULTS.groupCoins) return { kind: 'group', reason: 'coins' };
  return { kind: 'none' };
}

export function catById(id) { return CATS.find((c) => c.id === id) || null; }

export function clipFor(target, move) {
  if (target === 'group') return GROUP_GIFT.clips[move] || GROUP_GIFT.clips['dabke-line'];
  const bag = CLIP[target];
  return (bag && (bag[move] || bag.idle)) || '/cats/media/maine-idle.mp4';
}

export function nextBeat(audioTime, bpm = SONG.bpm, pad = 0.05) {
  const beat = 60 / bpm;
  const t = Math.max(0, Number(audioTime) || 0);
  return Math.ceil((t + pad) / beat) * beat;
}

export function publicCat(c) {
  return {
    id: c.id, name: c.name, gender: c.gender, frame: c.frame,
    giftName: c.giftName, giftId: c.giftId, coins: c.coins, icon: c.icon,
    portrait: c.portrait, idle: c.idle, moves: c.moves,
  };
}
