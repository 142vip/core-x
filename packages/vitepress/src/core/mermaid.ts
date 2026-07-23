import { parseVipMermaidFenceInfo } from './mermaid-theme'

interface MarkdownItLike {
  renderer: {
    rules: {
      fence?: (
        tokens: Array<{ info: string, content: string }>,
        idx: number,
        options: unknown,
        env: unknown,
        self: { renderToken: (tokens: unknown, idx: number, options: unknown) => string },
      ) => string
    }
  }
}

/**
 * Markdown-it 插件：```mermaid / ```mmd → <VipMermaid>
 * 需配合主题注册 VipMermaid（defineVipExtendsTheme 已内置）
 */
export function vipMermaidMarkdown(md: MarkdownItLike): void {
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
