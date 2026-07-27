import type { UserConfig } from 'vitepress'

type ViteConfig = NonNullable<UserConfig['vite']>

/**
 * Sass 现代 API 常量（Vite 5.4+ 支持）。
 *
 * @see https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
 */
const VIP_SASS_MODERN_API = 'modern' as const

/**
 * 合并 Sass 相关 Vite 配置，消除 `legacy-js-api` 弃用告警。
 *
 * 仅在 `defineVipVitepressConfig(..., { mermaid: true })` 时由框架自动调用；
 * 用户已在 `css.preprocessorOptions` 中设置 `api` 时保留原值。
 */
export function mergeVipSassViteConfig(
  vite: UserConfig['vite'] = {},
): ViteConfig {
  const userScss = vite?.css?.preprocessorOptions?.scss
  const userSass = vite?.css?.preprocessorOptions?.sass

  return {
    ...vite,
    css: {
      ...vite?.css,
      preprocessorOptions: {
        ...vite?.css?.preprocessorOptions,
        scss: {
          ...userScss,
          api: userScss?.api ?? VIP_SASS_MODERN_API,
        },
        sass: {
          ...userSass,
          api: userSass?.api ?? VIP_SASS_MODERN_API,
        },
      },
    },
  }
}
