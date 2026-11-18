// Settings: environment variables (Render) + data/settings.json (changed from the admin page).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');
const FILE = path.join(DATA_DIR, 'settings.json');
const env = process.env;
const num = (v, d) => (v === undefined || v === '' || !Number.isFinite(Number(v)) ? d : Number(v));

export function defaults() {
  return {
    adminKey: env.ADMIN_KEY || '',
    publicUrl: (env.PUBLIC_URL || env.RENDER_EXTERNAL_URL || '').replace(/\/+$/, ''),
    tiktok: { username: (env.TIKTOK_USERNAME || '').replace(/^@/, ''), liveSource: env.LIVE_SOURCE || '', signApiKey: env.SIGN_API_KEY || '', retrySeconds: num(env.TIKTOK_RETRY_SECONDS, 45) },
    voice: {
      enabled: env.TTS !== '0', voice: env.TTS_VOICE || 'en-US-GuyNeural', rate: env.TTS_RATE || '+15%', pitch: '+0Hz',
      edgePieceMs: 4500, pieceChars: 180, cachePieces: 400, edgeParallel: 4,
    },
    br: {
      lobbySeconds: num(env.BR_LOBBY_SECONDS, 20), ceremonySeconds: 12, arenaCap: num(env.BR_ARENA_CAP, 50), minFighters: num(env.BR_MIN_FIGHTERS, 8),
      bots: env.BR_BOTS !== '0',
    },
    tower: {
      gatherSeconds: num(env.TOWER_GATHER_SECONDS, 16), voteSeconds: num(env.TOWER_VOTE_SECONDS, 12), minParty: num(env.TOWER_MIN_PARTY, 6), bots: env.TOWER_BOTS !== '0',
      riddleSeconds: 22, bossSeconds: 32,
      voice: env.MIRA_VOICE || 'en-US-AvaNeural', rate: env.MIRA_RATE || '+4%', pitch: env.MIRA_PITCH || '-2Hz',
    },
    siege: {
      gatherSeconds: num(env.SIEGE_GATHER_SECONDS, 14), voteSeconds: num(env.SIEGE_VOTE_SECONDS, 16), minDefenders: num(env.SIEGE_MIN_DEFENDERS, 6), bots: env.SIEGE_BOTS !== '0',
      introSeconds: num(env.SIEGE_INTRO, 1), spawnMul: num(env.SIEGE_SPAWN_MUL, 1), enemyHpMul: num(env.SIEGE_ENEMY_HP_MUL, 1), dmgMul: 1,
      voice: env.NARRATOR_VOICE || 'en-US-ChristopherNeural', rate: env.NARRATOR_RATE || '-6%', pitch: env.NARRATOR_PITCH || '-10Hz',
    },
  };
}

export function loadConfig() {
  const c = defaults();
  try {
    const saved = JSON.parse(fs.readFileSync(FILE, 'utf8'));
    for (const k of ['tiktok', 'voice', 'br', 'tower', 'siege']) if (saved[k]) Object.assign(c[k], saved[k]);
    if (env.TIKTOK_USERNAME) c.tiktok.username = env.TIKTOK_USERNAME.replace(/^@/, '');   // the env wins on Render
  } catch {}
  return c;
}

export function saveConfig(c) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const { tiktok, voice, br, tower, siege } = c;
    fs.writeFileSync(FILE, JSON.stringify({ tiktok: { ...tiktok, signApiKey: undefined }, voice, br, tower, siege }, null, 1));
  } catch (e) { console.log('[config] save failed:', e.message); }
}
