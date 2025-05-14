import viteBundler from '@vuepress/bundler-vite'

/**
 * 获取vite编译
 */
export function getVipViteBundler() {
  return viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 4096,
      },
    },
    vuePluginOptions: {},
  })
}
