import type { Plugin } from '@vuepress/core'
import { addViteConfig } from '@vuepress/helper'

export interface VipVuepressViteBuildPluginOptions {
  /**
   * Vite `build.chunkSizeWarningLimit`（KB）。
   * theme-hope 会通过 `extendsBundlerOptions` 设为 1024，文档站含 md-enhance / mermaid 等依赖时单 chunk 可达 4MB+。
   */
  chunkSizeWarningLimit?: number
}

/**
 * 通过 `extendsBundlerOptions` 合并 Vite 构建参数，覆盖 theme-hope 默认的 chunk 告警阈值。
 */
export function createVipViteBuildPlugin(
  options: VipVuepressViteBuildPluginOptions = {},
): Plugin {
  const chunkSizeWarningLimit = options.chunkSizeWarningLimit ?? 8192

  return {
    name: 'vip-vite-build',
    extendsBundlerOptions(bundlerOptions, app) {
      addViteConfig(bundlerOptions, app, {
        build: {
          chunkSizeWarningLimit,
        },
      })
    },
  }
}
