import type { MermaidConfig } from 'mermaid'

/**
 * Mermaid 官方主题（可供选择）
 * @see https://mermaid.js.org/config/theming.html
 */
export type VipMermaidTheme = 'default' | 'dark' | 'forest' | 'neutral' | 'base'

/** 站点级配置：选一个主题即可，自动适配亮/暗 */
export interface VipMermaidOptions {
  /** 默认 default；暗黑模式下统一用官方 dark，保证可读 */
  theme?: VipMermaidTheme
}

export const VIP_MERMAID_THEMES = [
  'default',
  'dark',
  'forest',
  'neutral',
  'base',
] as const satisfies readonly VipMermaidTheme[]

const THEME_SET = new Set<string>(VIP_MERMAID_THEMES)

let siteTheme: VipMermaidTheme = 'default'

/** 站点级主题（在 defineVipVitepressConfig 里调用一次） */
export function configureVipMermaid(options: VipMermaidOptions = {}): void {
  siteTheme = options.theme != null && isVipMermaidTheme(options.theme)
    ? options.theme
    : 'default'
}

export function getVipMermaidOptions(): VipMermaidOptions {
  return { theme: siteTheme }
}

export function isVipMermaidTheme(value: string): value is VipMermaidTheme {
  return THEME_SET.has(value)
}

/**
 * 解析本次渲染用的官方主题
 *
 * 流程：
 * 1. 暗黑 → 固定 `dark`（所有主题都兼容暗黑展示）
 * 2. 亮色 → fence 指定 > 站点 theme > default；若选了 dark 则回退 default
 */
export function resolveVipMermaidTheme(
  isDark: boolean,
  fenceTheme?: string | null,
): VipMermaidTheme {
  if (isDark) {
    return 'dark'
  }

  if (fenceTheme != null && isVipMermaidTheme(fenceTheme) && fenceTheme !== 'dark') {
    return fenceTheme
  }

  return siteTheme === 'dark' ? 'default' : siteTheme
}

export function createVipMermaidConfig(theme?: VipMermaidTheme): MermaidConfig {
  return {
    startOnLoad: false,
    securityLevel: 'loose',
    fontFamily: 'inherit',
    ...(theme != null ? { theme } : {}),
  }
}

/** ---------- 运行时：单例 + 串行渲染（避免切主题时多图打架） ---------- */

interface MermaidApi {
  initialize: (config: MermaidConfig) => void
  render: (id: string, text: string) => Promise<{ svg: string }>
}

let mermaidApi: MermaidApi | null = null
let mermaidLoading: Promise<MermaidApi> | null = null
let renderQueue: Promise<void> = Promise.resolve()
let renderId = 0

async function loadMermaid(): Promise<MermaidApi> {
  if (mermaidApi != null) {
    return mermaidApi
  }
  if (mermaidLoading == null) {
    mermaidLoading = import('mermaid').then((mod) => {
      const api = mod.default as MermaidApi
      api.initialize(createVipMermaidConfig())
      mermaidApi = api
      return api
    })
  }
  return mermaidLoading
}

/**
 * 串行渲染 SVG：先 initialize 主题，再 render
 * 同页多图、快速切明暗时也不会互相覆盖
 */
export function renderVipMermaidSvg(
  code: string,
  theme: VipMermaidTheme,
  isStale?: () => boolean,
): Promise<string> {
  const run = renderQueue.then(async () => {
    if (isStale?.()) {
      return ''
    }
    const mermaid = await loadMermaid()
    if (isStale?.()) {
      return ''
    }
    mermaid.initialize(createVipMermaidConfig(theme))
    const id = `vip-mermaid-${++renderId}`
    const { svg } = await mermaid.render(id, code)
    return svg
  })

  // 队列不因单次失败中断
  renderQueue = run.then(() => undefined, () => undefined)
  return run
}

/** 解析 ```mermaid theme=forest */
export function parseVipMermaidFenceInfo(info: string): {
  isMermaid: boolean
  theme?: VipMermaidTheme
} {
  const parts = info.trim().split(/\s+/).filter(Boolean)
  const lang = parts[0]
  if (lang !== 'mermaid' && lang !== 'mmd') {
    return { isMermaid: false }
  }

  for (const part of parts.slice(1)) {
    const matched = part.match(/^theme=(.+)$/)
    const name = matched?.[1] ?? part
    if (name != null && isVipMermaidTheme(name)) {
      return { isMermaid: true, theme: name }
    }
  }

  return { isMermaid: true }
}
