import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  // VuePress 生态由 dependencies 提供，构建产物仅包含本包封装逻辑
  externals: [
    'vue',
    'mermaid',
    'sass-embedded',
    /^@vuepress\//,
    /^vuepress/,
  ],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
