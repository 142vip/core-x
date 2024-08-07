import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // entries: [
  //   'src/index',
  //   'src/changelog.ts',
  // ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
