import type { UserConfig } from 'vitepress'
import { createVipAppBuildTime } from '@142vip/vue/vite'

type ViteConfig = NonNullable<UserConfig['vite']>
type ViteSsrNoExternal = NonNullable<NonNullable<ViteConfig['ssr']>['noExternal']>

/** 浏览器控制台输出版本 / 更新时间（构建期 `define` + HTML meta） */
export interface VipAppBuildLogOptions {
  version: string
}

/** Sass 现代 API（Vite 5.4+），消除 `legacy-js-api` 弃用告警 */
const VIP_SASS_MODERN_API = 'modern' as const

/**
 * 静态 import `@142vip/cdn` 的 svg/图片须走 Vite 资产管道打包进站点，
 * SSR 阶段不可让 Node 直接加载 `.svg`（`ERR_UNKNOWN_FILE_EXTENSION`）。
 */
const VIP_SSR_NO_EXTERNAL_PACKAGES = ['@142vip/vue', '@142vip/cdn'] as const

export interface MergeVipViteConfigOptions {
  /** 合并 Sass modern API（启用 Mermaid 等 SCSS 主题样式时使用） */
  sass?: boolean
  /** 注入 `BUILD_TIME` / `VIP_APP_VERSION` 并在主题启动时打印控制台版本信息 */
  appBuildLog?: VipAppBuildLogOptions
}

function mergeSsrNoExternal(existing?: ViteSsrNoExternal): ViteSsrNoExternal {
  if (existing === true) {
    return true
  }

  const extra: (string | RegExp)[] = [...VIP_SSR_NO_EXTERNAL_PACKAGES]

  if (existing == null) {
    return extra
  }

  if (Array.isArray(existing)) {
    return [...existing, ...extra]
  }

  return [existing, ...extra]
}

function mergeSassModernApi(vite: ViteConfig): ViteConfig {
  const userScss = vite.css?.preprocessorOptions?.scss
  const userSass = vite.css?.preprocessorOptions?.sass

  return {
    ...vite,
    css: {
      ...vite.css,
      preprocessorOptions: {
        ...vite.css?.preprocessorOptions,
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

/**
 * 合并 `@142vip/vitepress` 站点的 Vite 增量配置（不覆盖用户已显式设置的项）。
 *
 * - 始终：`ssr.noExternal` 包含 `@142vip/vue`、`@142vip/cdn`，本地打包 cdn 静态资源
 * - `sass: true`：为 scss/sass 预处理器启用 modern API
 */
export function mergeVipViteConfig(
  vite: UserConfig['vite'] = {},
  options: MergeVipViteConfigOptions = {},
): ViteConfig {
  const withSsr: ViteConfig = {
    ...vite,
    ssr: {
      ...vite?.ssr,
      noExternal: mergeSsrNoExternal(vite?.ssr?.noExternal),
    },
  }

  let merged = withSsr

  if (options.appBuildLog != null) {
    const appBuild = createVipAppBuildTime({
      version: options.appBuildLog.version,
      pluginName: 'vip-vitepress-html-build-time',
    })
    merged = {
      ...merged,
      define: { ...merged.define, ...appBuild.define },
      plugins: [...(merged.plugins ?? []), appBuild.plugin],
    }
  }

  if (!options.sass) {
    return merged
  }

  return mergeSassModernApi(merged)
}
