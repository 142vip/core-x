import type { MarkdownOptions, UserConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import type { VipMermaidOptions } from './mermaid-theme'
import type { NavbarConfig, SidebarConfig } from './types'
import { defaultVipMarkdown, defaultVipThemeConfig, mergeVipDefaultHead } from './config'
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

function mergeVipMarkdownConfig(markdown?: MarkdownOptions): MarkdownOptions {
  const defaultTheme = defaultVipMarkdown.theme
  const userTheme = markdown?.theme

  const mergedTheme = typeof defaultTheme === 'object' && defaultTheme != null
    ? typeof userTheme === 'object' && userTheme != null
      ? { ...defaultTheme, ...userTheme }
      : defaultTheme
    : userTheme ?? defaultTheme

  return {
    ...defaultVipMarkdown,
    ...markdown,
    theme: mergedTheme,
    attrs: {
      ...defaultVipMarkdown.attrs,
      ...markdown?.attrs,
    },
  }
}

/**
 * 定义 Vitepress 配置
 * - 自动合并 `defaultVipThemeConfig`、默认 favicon `head`、SSR Vite 配置
 * - favicon：在站点 `head` 配置；logo / socialLinks：在 `getVipThemeConfig` 配置
 *
 * @example
 * ```ts
 * defineVipVitepressConfig({
 *   title: 'Docs',
 *   themeConfig: getVipThemeConfig({ nav: [] }),
 * }, { mermaid: true })
 * ```
 */
export function defineVipVitepressConfig(
  userConfig: UserConfig<DefaultTheme.Config>,
  options?: DefineVipVitepressConfigOptions,
): UserConfig<DefaultTheme.Config> {
  const configWithDefaults = {
    ...defaultVipThemeConfig,
    ...userConfig,
    head: mergeVipDefaultHead(userConfig.head),
    markdown: mergeVipMarkdownConfig(userConfig.markdown),
    vite: mergeVipViteConfig(userConfig.vite),
  }

  if (options == null || options.mermaid == null || options.mermaid === false) {
    return configWithDefaults
  }

  if (options.mermaid !== true) {
    configureVipMermaid(options.mermaid)
  }
  else {
    configureVipMermaid()
  }

  return {
    ...configWithDefaults,
    markdown: defineVipMarkdownConfig(userConfig.markdown),
    vite: mergeVipMermaidViteConfig(mergeVipViteConfig(userConfig.vite, { sass: true })),
  }
}

/**
 * 合并 Markdown 配置并启用 Mermaid fence
 */
export function defineVipMarkdownConfig(markdown: MarkdownOptions = {}): MarkdownOptions {
  const userConfig = markdown.config

  return {
    ...mergeVipMarkdownConfig(markdown),
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
