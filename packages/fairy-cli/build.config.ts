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
})
