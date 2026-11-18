// Mira's Haunted Tower: rooms, monsters, riddles, gift tiers and chat parsing. Pure data + functions, shared by the
// server, the overlay's local/demo mode and the tests.
import { matchKey } from './commands.js';

// trap: how the room hurts you; monster: who lives there. tint/fog drive the 3D look.
export const THEMES = [
  { id: 'library', name: 'The Whispering Library', trap: 'books', monster: 'mimic', mname: 'the Hungry Tome', fog: 0x2a1a3a, floor: 0x6b4a33, wall: 0x5a4a6a, light: 0xffb36b },
  { id: 'crypt', name: 'The Bone Crypt', trap: 'hands', monster: 'ghost', mname: 'the Restless Ghoul', fog: 0x16202a, floor: 0x5a5f66, wall: 0x4a5058, light: 0x9fe0ff },
  { id: 'mirror', name: 'The Hall of Mirrors', trap: 'shards', monster: 'ghost', mname: 'the Mirror Wraith', fog: 0x1f1a3a, floor: 0x8a84b0, wall: 0x6a6090, light: 0xd2b8ff },
  { id: 'clock', name: 'The Clockwork Room', trap: 'pendulum', monster: 'spider', mname: 'the Clockwork Spider', fog: 0x2a2014, floor: 0x7a5a2a, wall: 0x6a5030, light: 0xffc46b },
  { id: 'attic', name: 'The Spider Attic', trap: 'web', monster: 'spider', mname: 'the Giant Spider', fog: 0x221a14, floor: 0x5a4632, wall: 0x4a3a2c, light: 0xffa65a },
  { id: 'lab', name: "The Alchemist's Lab", trap: 'gas', monster: 'mimic', mname: 'the Greedy Mimic', fog: 0x10261c, floor: 0x3e5a4a, wall: 0x35503f, light: 0x8bff9a },
  { id: 'ballroom', name: 'The Ghostly Ballroom', trap: 'chandelier', monster: 'ghost', mname: 'the Dancing Banshee', fog: 0x2a1430, floor: 0x7a3a5a, wall: 0x5a2a4a, light: 0xff9ad5 },
];
export const BOSS_THEME = { id: 'belfry', name: 'The Bell Tower', trap: 'hands', monster: 'boss', fog: 0x140c26, floor: 0x4a4060, wall: 0x3a3050, light: 0xb08cff };
export const GATE_THEME = { id: 'gate', name: 'The Tower Gate', trap: 'hands', monster: 'ghost', fog: 0x1a1030, floor: 0x5a4a70, wall: 0x45385a, light: 0xffb36b };
export const BOSSES = ['The Hollow Bride', 'Count Cobweb', 'The Clockwork Wraith', 'The King of Crows', 'The Pale Organist', 'The Lantern Eater'];
export const KIND_ICON = { treasure: '💰', trap: '💀', monster: '👹', riddle: '❓' };

export const RIDDLES = [
  ["I'm tall when I'm young and short when I'm old. What am I?", ['candle']],
  ['What has hands but cannot clap?', ['clock', 'watch']],
  ['The more you take, the more you leave behind. What are they?', ['footsteps', 'steps', 'footprints']],
  ['I speak without a mouth and hear without ears. What am I?', ['echo']],
  ['What has keys but cannot open locks?', ['piano', 'keyboard']],
  ['What gets wetter the more it dries?', ['towel']],
  ['What has a neck but no head?', ['bottle', 'shirt']],
  ['I have cities but no houses, forests but no trees. What am I?', ['map']],
  ['What has one eye but cannot see?', ['needle', 'hurricane', 'storm']],
  ['What can fill a room but takes up no space?', ['light', 'air', 'sound', 'darkness']],
  ['What must be broken before you can use it?', ['egg']],
  ['The more of me there is, the less you see. What am I?', ['darkness', 'dark', 'fog']],
  ['What has a head and a tail but no body?', ['coin']],
  ['What has teeth but cannot bite?', ['comb', 'saw', 'zipper', 'gear']],
  ['What is full of holes but still holds water?', ['sponge']],
  ['What flies without wings and cries without eyes?', ['cloud', 'clouds', 'wind']],
  ['What has many rings but no fingers?', ['tree', 'phone', 'telephone', 'saturn']],
  ['What runs but never walks, has a bed but never sleeps?', ['river', 'water', 'stream']],
  ['What has legs but cannot walk?', ['table', 'chair', 'bed', 'desk']],
  ['What is black when clean and white when dirty?', ['chalkboard', 'blackboard']],
  ['What goes up but never comes down?', ['age', 'your age']],
  ['What belongs to you, but others use it more than you?', ['name', 'your name']],
  ['What can you catch but not throw?', ['cold', 'a cold', 'breath', 'feelings']],
  ['I follow you all day but vanish in the dark. What am I?', ['shadow']],
  ['What has a face and two hands, but no arms or legs?', ['clock', 'watch']],
  ['What kind of room has no doors or windows?', ['mushroom']],
  ['What can travel around the world while staying in a corner?', ['stamp']],
  ['What comes down but never goes up?', ['rain', 'snow']],
  ['I have a spine but no bones. What am I?', ['book']],
  ['What has a ring but no finger, and a bell but no church?', ['phone', 'telephone', 'doorbell']],
];
/** Does a comment answer the riddle? Whole words, so "map" does not match "mapping". */
export function answers(text, list) {
  const words = String(text || '').toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean);
  const joined = ' ' + words.join(' ') + ' ';
  for (const a of list) {
    const k = ' ' + a.toLowerCase() + ' ';
    if (joined.includes(k)) return a;
    if (!a.includes(' ') && words.some((w) => w === a + 's' || (w.length > 3 && w + 's' === a))) return a;   // plural slips
  }
  return null;
}

// gift tiers (coins of one gift event = coins x count), highest first
export const TOWER_GIFTS = [
  { id: 'boss', min: 500, label: 'GHOST BOSS', icon: '👻', desc: 'summon a boss fight: huge loot' },
  { id: 'skip', min: 100, label: 'SKIP FLOOR', icon: '🪄', desc: "Mira's lift: rise safely" },
  { id: 'rescue', min: 30, label: 'RESCUE', icon: '💖', desc: 'the fallen rise + lantern oil' },
  { id: 'shield', min: 5, label: 'SHIELD', icon: '🛡️', desc: 'blocks the next trap' },
  { id: 'prophecy', min: 1, label: 'PROPHECY', icon: '🔮', desc: 'Mira reveals the safe door' },
];
export const towerTier = (coins) => { const c = Number(coins) || 0; return TOWER_GIFTS.find((t) => c >= t.min) || TOWER_GIFTS[TOWER_GIFTS.length - 1]; };

const KEYCAP = { '1️⃣': 1, '2️⃣': 2, '3️⃣': 3, '①': 1, '②': 2, '③': 3 };
/** Chat -> { cmd: 'vote', door: 1|2|3|'L'|'M'|'R' } | { cmd: 'attack', strong } | { cmd: 'chat' } */
export function parseTower(text) {
  const t = String(text || '').trim().toLowerCase().replace(/[!.?]+$/, '').replace(/\s+/g, ' ');
  if (!t) return { cmd: 'none' };
  for (const [k, v] of Object.entries(KEYCAP)) if (t.replace(/\uFE0F/g, '') === k.replace(/\uFE0F/g, '')) return { cmd: 'vote', door: v };
  let m = t.match(/^(?:door|d|#|no\.?|number)?\s*([123])(?:\1)*$/);
  if (m) return { cmd: 'vote', door: Number(m[1]) };
  m = t.match(/^(?:door\s+)?(one|two|three)$/); if (m) return { cmd: 'vote', door: { one: 1, two: 2, three: 3 }[m[1]] };
  if (/^(?:go\s+)?(?:left|l|⬅️?|👈|lft)$/u.test(t)) return { cmd: 'vote', door: 'L' };
  if (/^(?:go\s+)?(?:right|r|➡️?|👉|rite)$/u.test(t)) return { cmd: 'vote', door: 'R' };
  if (/^(?:go\s+)?(?:middle|mid|center|centre|straight|m|⬆️?)$/u.test(t)) return { cmd: 'vote', door: 'M' };
  if (/^(?:attack|atk|hit|fight|punch|smash|kill|⚔️?|🗡️?|👊|🥊|💥|🔥)+/u.test(t)) return { cmd: 'attack', strong: true };
  return { cmd: 'chat', key: matchKey(t) };
}
/** Vote -> door index (0-based) for a room with n doors, or -1. */
export function doorIndex(v, n) {
  if (v === 'L') return 0;
  if (v === 'R') return n - 1;
  if (v === 'M') return n === 3 ? 1 : -1;
  const i = Number(v) - 1;
  return i >= 0 && i < n ? i : -1;
}
// room geometry shared by the sim (walking) and the view (drawing)
export const FH = 9;                    // floor height
export const DOOR_Z = -7.2;
export const doorX = (n) => (n === 2 ? [-2.9, 2.9] : [-4.3, 0, 4.3]);
export const STAIR = { x: 6.3, z: -2.2, r: 1.55 };
