import type { OutputOptions } from 'rollup'
import type { UserConfig } from 'vitepress'

type ViteConfig = NonNullable<UserConfig['vite']>
type ManualChunksFn = NonNullable<OutputOptions['manualChunks']>

/** Element Plus 与图标单独分包（首页表格等异步组件引用） */
function isElementPlusVendor(id: string): boolean {
  return /node_modules\/(?:element-plus|@element-plus)/.test(id)
}

/** Vue 运行时与 VitePress 客户端 */
function isVueVendor(id: string): boolean {
  return /node_modules\/(?:vue|@vue|vitepress)/.test(id)
}

/**
 * VitePress 文档站 Rollup `manualChunks` 策略。
 * 目标：降低单 chunk 超过 500KB 的告警，并改善首屏仅阅读 Markdown 时的并行加载。
 */
export function resolveVipRollupManualChunk(id: string): string | undefined {
  if (!id.includes('node_modules')) {
    return undefined
  }
  if (isElementPlusVendor(id)) {
    return 'vendor-element-plus'
  }
  if (isVueVendor(id)) {
    return 'vendor-vue'
  }
  return undefined
}

function mergeManualChunks(existing?: ManualChunksFn): ManualChunksFn {
  const vipResolve = resolveVipRollupManualChunk
  if (existing == null) {
    return vipResolve
  }
  if (typeof existing === 'function') {
    return (id, api) => {
      const vip = vipResolve(id)
      if (vip != null) {
        return vip
      }
      return existing(id, api)
    }
  }
  return existing
}

function normalizeRollupOutput(
  output: OutputOptions | OutputOptions[] | undefined,
): OutputOptions | OutputOptions[] | undefined {
  if (output == null) {
    return { manualChunks: mergeManualChunks(undefined) }
  }
  if (Array.isArray(output)) {
    return output.map(item => ({
      ...item,
      manualChunks: mergeManualChunks(item.manualChunks),
    }))
  }
  return {
    ...output,
    manualChunks: mergeManualChunks(output.manualChunks),
  }
}

/**
 * 合并构建期分包配置（不覆盖用户已写的其它 `rollupOptions` 字段）。
 */
export function mergeVipBuildRollupOptions(vite: ViteConfig = {}): ViteConfig {
  const rollupOptions = vite.build?.rollupOptions ?? {}
  return {
    ...vite,
    build: {
      ...vite.build,
      // Mermaid / TypeDoc 大页等单 chunk 常超 500KB，文档站与 theme-hope 等同上调阈值
      chunkSizeWarningLimit: vite.build?.chunkSizeWarningLimit ?? 4096,
      rollupOptions: {
        ...rollupOptions,
        output: normalizeRollupOutput(rollupOptions.output as OutputOptions | OutputOptions[] | undefined),
      },
    },
  }
}
