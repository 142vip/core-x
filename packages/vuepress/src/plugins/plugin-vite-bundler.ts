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

/** 默认 Vite bundler：大 chunk 阈值 + 锁定 @vueuse 解析。 */
export function getVuepressDefaultViteBundler(): Bundler {
  return viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 4096,
      },
      resolve: {
        alias: bundledVueUseAlias,
      },
      ssr: {
        noExternal: Object.keys(bundledVueUseAlias),
      },
    },
    vuePluginOptions: {},
  })
}
