import type { MarkdownOptions, UserConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import type { VipMermaidOptions } from './mermaid-theme'
import type { NavbarConfig, SidebarConfig } from './types'
import { mergeVipMermaidViteConfig, vipMermaidMarkdown } from './mermaid'
import { configureVipMermaid } from './mermaid-theme'
import { mergeVipViteConfig } from './vite'

/**
 * defineVipVitepressConfig 可选拓展
 */
export interface DefineVipVitepressConfigOptions {
  /**
   * Mermaid 支持
   * - `true` / 对象：启用（对象可设默认主题）
   * - `false`：显式关闭
   * - 不传第二参数时：保持原行为，不改动 userConfig
   */
  mermaid?: boolean | VipMermaidOptions
}

/**
 * 定义 Vitepress 配置
 * - 原行为：`defineVipVitepressConfig(config)` 原样返回
 * - 拓展：第二参数可启用 Mermaid 等
 *
 * @example
 * ```ts
 * // 原用法（不变）
 * defineVipVitepressConfig({ title: 'Docs' })
 *
 * // 启用 Mermaid
 * defineVipVitepressConfig(config, { mermaid: true })
 * defineVipVitepressConfig(config, { mermaid: { theme: 'forest' } })
 * ```
 */
export function defineVipVitepressConfig(
  userConfig: UserConfig<DefaultTheme.Config>,
  options?: DefineVipVitepressConfigOptions,
): UserConfig<DefaultTheme.Config> {
  const viteWithDefaults = mergeVipViteConfig(userConfig.vite)

  // 无第二参数 / 未启用 mermaid 时，仅合并 SSR 与 cdn 资产打包所需 Vite 配置
  if (options == null || options.mermaid == null || options.mermaid === false) {
    return {
      ...userConfig,
      vite: viteWithDefaults,
    }
  }

  if (options.mermaid !== true) {
    configureVipMermaid(options.mermaid)
  }
  else {
    configureVipMermaid()
  }

  return {
    ...userConfig,
    markdown: defineVipMarkdownConfig(userConfig.markdown),
    // 增量合并 Vite 配置：cdn SSR 打包 + Sass modern API + Mermaid 预构建
    vite: mergeVipMermaidViteConfig(mergeVipViteConfig(userConfig.vite, { sass: true })),
  }
}

/**
 * 合并 Markdown 配置并启用 Mermaid fence
 */
export function defineVipMarkdownConfig(markdown: MarkdownOptions = {}): MarkdownOptions {
  const userConfig = markdown.config

  return {
    ...markdown,
    config(md) {
      vipMermaidMarkdown(md)
      userConfig?.(md)
    },
  }
}

/**
 * 导航栏
 * @param options 配置
 */
export function defineVipNavbarConfig(options: NavbarConfig): NavbarConfig {
  return options
}

/**
 * 侧边栏
 * @param options 配置
 */
export function defineVipSidebarConfig(options: SidebarConfig): SidebarConfig {
  return options
}

export {
  configureVipMermaid,
  resolveVipMermaidTheme,
  VIP_MERMAID_THEMES,
  vipMermaidMarkdown,
} from './mermaid'
export type { VipMermaidOptions, VipMermaidTheme } from './mermaid-theme'
