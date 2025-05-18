import viteBundler from '@vuepress/bundler-vite'

/**
 * 获取默认的vite编译配置
 */
export function getVuepressDefaultViteBundler() {
  return viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 4096,
      },
    },
    vuePluginOptions: {},
  })
}
