import { defineBuildConfig } from 'unbuild'

// 参考：https://github.com/unjs/unbuild
export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  // agent-skills 含 skills/ 静态资源，运行时 require/import，禁止内联打包
  externals: [
    '@142vip/agent-skills',
  ],
})
