/**
 * 从非空列表中均匀随机取一项
 */
function pickRandom<T>(items: readonly T[]): T {
  if (items.length === 0) {
    throw new Error('pickRandom: items must not be empty')
  }
  return items[Math.floor(Math.random() * items.length)]!
}

/**
 * 常见浏览器 UA，轮换以降低固定爬虫指纹被限流概率
 */
export const USER_AGENTS = [
  // Chrome — desktop
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  // Edge — Chromium
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  // Firefox
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:135.0) Gecko/20100101 Firefox/135.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:134.0) Gecko/20100101 Firefox/134.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0',
  // Safari — desktop
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15',
  // Chrome / Safari — mobile
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Mobile/15E148 Safari/604.1',
] as const satisfies readonly string[]

/**
 * 常见浏览器 Accept-Language，轮换以降低固定爬虫指纹被限流概率
 */
export const ACCEPT_LANGUAGES = [
  'en-US,en;q=0.9',
  'en-US,en;q=0.9,zh-CN;q=0.8',
  'en-GB,en;q=0.9',
  'en-GB,en;q=0.9,en-US;q=0.8',
  'zh-CN,zh;q=0.9,en;q=0.8',
  'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
  'zh-TW,zh;q=0.9,en;q=0.8',
  'ja-JP,ja;q=0.9,en;q=0.8',
  'ko-KR,ko;q=0.9,en;q=0.8',
  'de-DE,de;q=0.9,en;q=0.8',
  'fr-FR,fr;q=0.9,en;q=0.8',
  'es-ES,es;q=0.9,en;q=0.8',
  'pt-BR,pt;q=0.9,en;q=0.8',
  'it-IT,it;q=0.9,en;q=0.8',
  'ru-RU,ru;q=0.9,en;q=0.8',
  'nl-NL,nl;q=0.9,en;q=0.8',
  'pl-PL,pl;q=0.9,en;q=0.8',
  'vi-VN,vi;q=0.9,en;q=0.8',
] as const satisfies readonly string[]

export function getRandomUserAgent(): string {
  return pickRandom(USER_AGENTS)
}

export function getRandomAcceptLanguage(): string {
  return pickRandom(ACCEPT_LANGUAGES)
}

/**
 * 随机 User-Agent 与 Accept-Language 请求头，便于在拦截器中注入
 */
export function getRandomSpiderHeaders(): Record<'User-Agent' | 'Accept-Language', string> {
  return {
    'User-Agent': getRandomUserAgent(),
    'Accept-Language': getRandomAcceptLanguage(),
  }
}
