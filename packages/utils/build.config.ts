import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/browser',
    'src/index',
    'src/node',
    'src/enums/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    commonjs: {
      ignoreDynamicRequires: true,
    },
  },
})
