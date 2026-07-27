import type { MarkdownOptions, UserConfig } from 'vitepress'
import { parseVipMermaidFenceInfo } from './mermaid-theme'

/** 与 `markdown.config(md)` 回调参数类型保持一致，避免手写精简接口 */
type MarkdownIt = Parameters<NonNullable<MarkdownOptions['config']>>[0]

/**
 * Markdown-it 插件：```mermaid / ```mmd → <VipMermaid>
 * 需配合主题注册 VipMermaid（defineVipExtendsTheme 已内置）
 */
export function vipMermaidMarkdown(md: MarkdownIt): void {
  const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]!
    const parsed = parseVipMermaidFenceInfo(token.info)

    if (parsed.isMermaid) {
      const code = encodeURIComponent(token.content.trimEnd())
      const theme = parsed.theme != null ? ` theme="${parsed.theme}"` : ''
      return `<VipMermaid code="${code}"${theme}></VipMermaid>\n`
    }

    if (defaultFence != null) {
      return defaultFence(tokens, idx, options, env, self)
    }

    return self.renderToken(tokens, idx, options)
  }
}

const MERMAID_OPTIMIZE_DEPS = ['mermaid', '@braintree/sanitize-url', 'copy-to-clipboard'] as const

function mergeOptimizeDepsInclude(
  existing: string | string[] | undefined,
): string[] {
  const base = existing == null
    ? []
    : Array.isArray(existing)
      ? [...existing]
      : [existing]

  for (const dep of MERMAID_OPTIMIZE_DEPS) {
    if (!base.includes(dep)) {
      base.push(dep)
    }
  }
  return base
}

/** 启用 Mermaid 时合并 Vite 预构建配置，修复 sanitize-url 等依赖的 CJS/ESM 互操作问题 */
export function mergeVipMermaidViteConfig(
  vite: UserConfig['vite'] = {},
): NonNullable<UserConfig['vite']> {
  return {
    ...vite,
    optimizeDeps: {
      ...vite.optimizeDeps,
      include: mergeOptimizeDepsInclude(vite.optimizeDeps?.include),
    },
  }
}

export type { VipMermaidOptions, VipMermaidTheme } from './mermaid-theme'
export {
  configureVipMermaid,
  createVipMermaidConfig,
  getVipMermaidOptions,
  isVipMermaidTheme,
  parseVipMermaidFenceInfo,
  renderVipMermaidSvg,
  resolveVipMermaidTheme,
  VIP_MERMAID_THEMES,
} from './mermaid-theme'
