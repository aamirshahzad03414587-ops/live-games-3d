// Dark Dimension Siege: shared data (classes, enemies, chapters, story choices, gifts, chat parsing, layout).
// Lore (Aamir's story): the Dark Dimension, a magic underworld, has clashed with Earth. A grieving scientist (denied
// the AIDS cure for his daughter by a greedy boss; his wife and journalist brother died) was corrupted by an ancient
// book and a dark teleport stone into the entity that opened the Dark Dimension at Earth's core. 5 billion souls were
// stolen by a hidden mastermind; the Lord of Earth sacrificed 1.5 billion to awaken the Ascension System. 1.5 billion
// survivors remain, and they vanish unless they beat the Dark Dimension.

export const SURVIVORS = 1_500_000_000;

// defender classes (auto-fight on the citadel wall; warriors hold the gate on the ground)
export const CLASSES = [
  { id: 'mage', icon: '🔮', label: 'MAGE', color: 0xb46bff, range: 22, every: 1.55, dmg: 8, aoe: 1.9, desc: 'fireballs (area)' },
  { id: 'warrior', icon: '⚔️', label: 'WARRIOR', color: 0xff5a4a, range: 2.6, every: 0.8, dmg: 9, aoe: 1.2, desc: 'holds the gate' },
  { id: 'archer', icon: '🏹', label: 'ARCHER', color: 0x4fe0ff, range: 25, every: 0.65, dmg: 5, aoe: 0, desc: 'fast arrows, hits fliers' },
  { id: 'healer', icon: '💚', label: 'HEALER', color: 0x5dff9a, range: 18, every: 1.3, dmg: 3, aoe: 0, desc: 'heals + barrier' },
];
export const CLS = Object.fromEntries(CLASSES.map((c, i) => [c.id, i]));

// creatures out of the rift (hp/speed are base values; waves scale them)
export const ENEMIES = [
  { id: 'imp', hp: 14, speed: 3.4, dmg: 1, r: 0.45, fly: false, pts: 2 },
  { id: 'brute', hp: 60, speed: 1.6, dmg: 3, r: 0.9, fly: false, pts: 6 },
  { id: 'wraith', hp: 22, speed: 2.6, dmg: 2, r: 0.55, fly: true, pts: 4 },
  { id: 'boss', hp: 560, speed: 0.9, dmg: 8, r: 2.0, fly: false, pts: 80 },
];
export const EK = Object.fromEntries(ENEMIES.map((e, i) => [e.id, i]));

// chapters: 3 waves + a boss each; a story vote after chapters 1 and 2 changes what comes next
// the anime cold-open: one card per line, timed for the narrator (sec = how long the card holds)
export const LORE = [
  { title: 'THE DARK DIMENSION', text: 'A magic underworld has clashed with Earth.', say: 'The Dark Dimension... a magic underworld... has clashed with Earth.', sec: 5.5, art: 'rift' },
  { title: 'A FATHER', text: 'A scientist, denied the cure for his daughter by a greedy boss. His wife and his brother — gone.', say: 'It began with a scientist. Denied the AIDS cure for his daughter by a greedy boss. His wife... and his brother... gone.', sec: 9, art: 'scientist' },
  { title: 'THE BOOK & THE STONE', text: 'An ancient book. A dark teleport stone. His grief tore the Dark Dimension open at Earth’s core.', say: 'An ancient book. A dark teleport stone. His grief tore the Dark Dimension open, at the core of the Earth.', sec: 8, art: 'book' },
  { title: '5,000,000,000 STOLEN', text: 'Five billion souls were stolen by a hidden Mastermind.', say: 'Five billion souls were stolen... by a hidden Mastermind.', sec: 5.5, art: 'souls' },
  { title: 'THE SACRIFICE', text: 'The Lord of Earth gave 1.5 billion more to awaken the Ascension System.', say: 'The Lord of Earth sacrificed one and a half billion more... to awaken the Ascension System.', sec: 7, art: 'lord' },
  { title: 'THE LAST CITADEL', text: '1.5 billion survivors remain. Beat the Dark Dimension — or they vanish forever.', say: 'One and a half billion survivors remain. Beat the Dark Dimension... or they vanish. Forever.', sec: 7, art: 'citadel' },
];
export const RECAP = [0, 5];   // later sessions: the short version
export const loreSeq = (run) => (run % 3 === 1 ? LORE.map((_, i) => i) : RECAP);
export const loreSeconds = (run) => loreSeq(run).reduce((s, i) => s + LORE[i].sec, 0) + 1;

export const CHAPTERS = [
  { n: 1, title: 'THE RIFT OPENS', boss: { id: 'scientist', name: 'The Corrupted Scientist', hp: 1 } },
  { n: 2, title: 'ASCENSION', boss: { id: 'scientist2', name: 'The Scientist, Unbound', hp: 1.5 } },
  { n: 3, title: 'THE MASTERMIND', boss: { id: 'mastermind', name: 'The Mastermind', hp: 2.4 } },
];
export const CHOICES = [
  { id: 'rift', q: 'THE RIFT IS UNSTABLE', a: { key: 'seal', label: 'SEAL THE RIFT', icon: '🌀', words: ['seal', 'rift'] }, b: { key: 'hunt', label: 'HUNT THE MASTERMIND', icon: '🗡️', words: ['hunt', 'mastermind', 'attack'] } },
  { id: 'save', q: 'THE CITY BURNS', a: { key: 'city', label: 'SAVE THE CITY', icon: '🏙️', words: ['city'] }, b: { key: 'army', label: 'SAVE THE ARMY', icon: '🛡️', words: ['army'] } },
];
// what the choices do (lasting for the session)
export const EFFECTS = {
  seal: { spawnMul: 0.75, finalHp: 1.3, text: 'Fewer creatures pour out… but the Mastermind grows stronger.' },
  hunt: { spawnMul: 1.3, finalHp: 0.7, text: 'The rift rages wider… but the Mastermind is wounded.' },
  city: { survivors: 120_000_000, guardians: 0, text: '120 million survivors pulled from the ruins.' },
  army: { survivors: 0, guardians: 2, text: 'Two guardian heroes join the wall for good.' },
};
export const ENDINGS = {
  'seal-city': 'The rift is sealed. The city stands. Dawn rises over {n} survivors.',
  'seal-army': 'The rift is sealed and the army marches home. {n} survivors live on.',
  'hunt-city': 'The Mastermind is gone. The city wakes to {n} survivors and a quiet sky.',
  'hunt-army': 'The army stormed the dark. The Mastermind is gone. {n} survivors live on.',
};

// gift tiers (coins of one gift event = coins x count), highest first
export const SIEGE_GIFTS = [
  { id: 'dragon', min: 500, label: 'DRAGON ALLY', icon: '🐉', desc: 'a dragon burns the field; on a boss: 25% of its life' },
  { id: 'awaken', min: 100, label: 'ASCENSION', icon: '⚡', desc: 'screen-wide ultimate + you ascend (×3 power)' },
  { id: 'guardian', min: 30, label: 'GUARDIAN HERO', icon: '🛡️', desc: 'summons a golden guardian to the gate' },
  { id: 'rune', min: 5, label: 'SHIELD RUNE', icon: '🔷', desc: '+12 barrier + a spell volley' },
  { id: 'volley', min: 1, label: 'SPELL VOLLEY', icon: '✨', desc: 'homing bolts from you (more coins, more bolts)' },
];
export const siegeTier = (coins) => { const c = Number(coins) || 0; return SIEGE_GIFTS.find((t) => c >= t.min) || SIEGE_GIFTS[SIEGE_GIFTS.length - 1]; };

const CLASS_WORDS = { mage: ['mage', 'wizard', 'magic', '🔮', '🪄'], warrior: ['warrior', 'knight', 'sword', 'tank', '⚔️', '🗡️'], archer: ['archer', 'bow', 'arrow', 'hunter', '🏹'], healer: ['healer', 'heal', 'priest', 'medic', '💚', '❤️‍🩹'] };
/** chat -> { cmd: 'class'|'vote'|'chat', cls, vote } */
export function parseSiege(text) {
  const s = String(text || '').toLowerCase().trim();
  if (!s) return { cmd: 'chat' };
  const words = s.split(/[^\p{L}\p{N}\p{Extended_Pictographic}\u200d\ufe0f]+/u).filter(Boolean);
  const has = (w) => (/\p{Extended_Pictographic}/u.test(w) ? s.includes(w) : words.includes(w));
  for (const [cls, list] of Object.entries(CLASS_WORDS)) if (list.some(has)) return { cmd: 'class', cls };
  const m = s.match(/^(?:vote\s*)?([12])(?:\ufe0f?\u20e3)?\b/u) || s.match(/^([12])\ufe0f?\u20e3/u);
  if (m) return { cmd: 'vote', vote: Number(m[1]) };
  if (/^(one|first)\b/.test(s)) return { cmd: 'vote', vote: 1 };
  if (/^(two|second)\b/.test(s)) return { cmd: 'vote', vote: 2 };
  for (const c of CHOICES) { if (c.a.words.some(has)) return { cmd: 'vote', vote: 1, choice: c.id }; if (c.b.words.some(has)) return { cmd: 'vote', vote: 2, choice: c.id }; }
  return { cmd: 'chat' };
}

// layout (world units): the citadel wall runs along x at WALL_Z; the rift is far ahead at RIFT_Z
export const WALL_Z = 4, WALL_Y = 2.6, WALL_W = 19, GATE_Z = 2.2, RIFT_Z = -34, FIELD_W = 15;
export const fmt = (n) => Math.max(0, Math.round(n)).toLocaleString('en-US');
