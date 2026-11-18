// Viewer input shared by the server and the overlay: chat commands, gift tiers, colours, name helpers.
// Pure functions (no DOM, no Node APIs) so the server, the overlay's local/demo mode and the tests use the same rules.

export const PALETTE = [
  ['red', 0xff4d5e], ['orange', 0xff9f1c], ['gold', 0xffd23f], ['lime', 0x9be564], ['green', 0x2ec27e],
  ['teal', 0x1fd1c1], ['cyan', 0x3ec7ff], ['blue', 0x4d7cff], ['purple', 0x9b5de5], ['pink', 0xff6fb5],
  ['white', 0xf2f2f2], ['black', 0x3a3a48], ['brown', 0xa86b3c], ['silver', 0xb8c4d6], ['rose', 0xff8fa3],
];
const COLOR_BY_NAME = new Map(PALETTE.map(([n, c]) => [n, c]));
COLOR_BY_NAME.set('yellow', 0xffd23f); COLOR_BY_NAME.set('violet', 0x9b5de5); COLOR_BY_NAME.set('grey', 0xb8c4d6); COLOR_BY_NAME.set('gray', 0xb8c4d6);

export function hashStr(s) { let h = 2166136261; for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
/** A stable avatar colour per viewer (from the @handle), unless they picked one with "color pink". */
export const colorFor = (id) => PALETTE[hashStr(id) % 10][1];

/** Display name: emojis/control chars trimmed, max 16 visible chars. */
export function cleanName(s) {
  const t = String(s || '').replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g, '').replace(/\s+/g, ' ').trim();
  const chars = [...t];
  return (chars.length > 16 ? chars.slice(0, 15).join('') + '…' : t) || 'Viewer';
}
/** Lower-case letters/digits only, for matching "attack sara" to "Sara_m 🌸". */
export const matchKey = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}]/gu, '');

// Gift tiers by the total coins of one gift event (coins x count). Order matters (highest first).
export const GIFT_TIERS = [
  { id: 'nuke', min: 500, label: 'STORM NUKE', icon: '☢️', desc: 'blows the storm back + meteor rain' },
  { id: 'revive', min: 100, label: 'REVIVE', icon: '💖', desc: 'back from the dead / full heal + shield' },
  { id: 'giant', min: 30, label: 'GIANT MODE', icon: '🦖', desc: '2x size, +HP, huge hits' },
  { id: 'meteor', min: 5, label: 'METEOR STRIKE', icon: '☄️', desc: 'meteors smash your enemies' },
  { id: 'speed', min: 1, label: 'SPEED BOOST', icon: '🌹', desc: 'fast feet + small heal' },
];
export function giftTier(coins) { const c = Number(coins) || 0; return GIFT_TIERS.find((t) => c >= t.min) || GIFT_TIERS[GIFT_TIERS.length - 1]; }

const RE = {
  attack: /^(?:[⚔🗡🔪👊🥊]\uFE0F?\s*|(?:attack|atk|hit|kill|fight|punch|target|beat|smash)\s+)@?(.{1,40})$/iu,
  shield: /^(?:shield|block|defend|protect|🛡\uFE0F?)$/iu,
  dash: /^(?:dash|charge|rush|zoom|💨|⚡\uFE0F?)$/iu,
  dance: /^(?:dance|taunt|emote|gg|lol|💃|🕺|😂|🤣)$/iu,
  revenge: /^(?:revenge|payback|😡|🤬)$/iu,
  color: /^(?:colou?r|skin|paint)\s+([a-z]+)$/i,
  join: /^(?:join|play|me|in|i'?m in|let me in|go|🙋\u200d?[♀♂]?\uFE0F?|✋|🙋)$/iu,
};

/** One comment -> a command. Every comment also joins the game (handled by the caller). */
export function parseCommand(text) {
  const t = String(text || '').trim().replace(/\s+/g, ' ');
  if (!t) return { cmd: 'none' };
  const low = t.toLowerCase().replace(/[!.?]+$/, '');
  if (RE.shield.test(low)) return { cmd: 'shield' };
  if (RE.dash.test(low)) return { cmd: 'dash' };
  if (RE.dance.test(low)) return { cmd: 'dance' };
  if (RE.revenge.test(low)) return { cmd: 'revenge' };
  if (RE.join.test(low)) return { cmd: 'join' };
  let m = low.match(RE.color);
  if (m && COLOR_BY_NAME.has(m[1])) return { cmd: 'color', color: COLOR_BY_NAME.get(m[1]), colorName: m[1] };
  m = t.match(RE.attack);
  if (m) { const name = m[1].replace(/^@/, '').trim(); if (matchKey(name)) return { cmd: 'attack', name }; }
  if (/^@[\w.]{2,}/.test(t)) return { cmd: 'attack', name: t.slice(1).split(' ')[0] };
  return { cmd: 'chat' };
}

/** Best match for a typed name among candidates [{name, uid}] (exact > prefix > contains), or null. */
export function findByName(typed, list) {
  const k = matchKey(typed); if (!k) return null;
  let best = null, score = 0;
  for (const p of list) {
    const a = matchKey(p.name), b = matchKey(p.uid || '');
    let s = 0;
    if (a === k || b === k) s = 3; else if (a.startsWith(k) || b.startsWith(k)) s = 2; else if (k.length >= 3 && (a.includes(k) || b.includes(k))) s = 1;
    if (s > score) { score = s; best = p; }
  }
  return best;
}

export const BOT_NAMES = ['Pixel', 'Mochi', 'Bolt', 'Nugget', 'Waffles', 'Ziggy', 'Pebble', 'Turbo', 'Biscuit', 'Gizmo', 'Noodle', 'Sprocket', 'Muffin', 'Rocket', 'Tofu', 'Dumpling', 'Jelly', 'Comet', 'Pickle', 'Bean', 'Sushi', 'Taco', 'Nacho', 'Boba'];
