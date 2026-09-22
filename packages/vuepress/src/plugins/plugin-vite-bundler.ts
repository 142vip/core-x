import type { VipAppBuildTimeResult } from '@142vip/vue/vite'
import type { Bundler } from '@vuepress/core'
import { createRequire } from 'node:module'
import path from 'node:path'
import viteBundler from '@vuepress/bundler-vite'

const require = createRequire(import.meta.url)

/** 解析本包 dependencies 中的模块目录，供 Vite alias 使用。 */
function resolveBundledPackage(name: string): string {
  return path.dirname(require.resolve(`${name}/package.json`))
}

/** 与 vuepress-theme-hope 对齐的 @vueuse 版本，避免 monorepo 被其他栈 hoist 到旧版。 */
const bundledVueUseAlias = {
  '@vueuse/core': resolveBundledPackage('@vueuse/core'),
  '@vueuse/shared': resolveBundledPackage('@vueuse/shared'),
} as const

/**
 * SSR 须内联打包 `@142vip/vue`、`@142vip/cdn`，避免 Node 直接加载 `.jpg`（`ERR_UNKNOWN_FILE_EXTENSION`）。
 */
export const VIP_VUEPRESS_SSR_NO_EXTERNAL_PACKAGES = ['@142vip/vue', '@142vip/cdn']

export interface VuepressViteBundlerOptions {
  /** `createVipAppBuildTime` 返回值；传入时注入 `BUILD_TIME` / `VIP_APP_VERSION` */
  appBuild?: VipAppBuildTimeResult | null
}

/** 默认 Vite bundler：大 chunk 阈值 + 锁定 @vueuse 解析 + SSR 打包 `@142vip/cdn` 静态资源。 */
export function getVuepressDefaultViteBundler(options: VuepressViteBundlerOptions = {}): Bundler {
  const appBuild = options.appBuild ?? null

  return viteBundler({
    viteOptions: {
      ...(appBuild != null
        ? {
            define: appBuild.define,
            plugins: [appBuild.plugin],
          }
        : {}),
      build: {
        chunkSizeWarningLimit: 4096,
      },
      css: {
        preprocessorOptions: {
          scss: {
            // 上游 theme-hope / sass-palette 仍使用旧版 Sass if() 语法
            silenceDeprecations: ['if-function'],
          },
        },
      },
      resolve: {
        alias: bundledVueUseAlias,
      },
      ssr: {
        noExternal: Object.keys(bundledVueUseAlias).concat(VIP_VUEPRESS_SSR_NO_EXTERNAL_PACKAGES),
      },
    },
    vuePluginOptions: {},
  })
}
