import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // 参考：https://github.com/wobsoriano/vue-sfc-unbuild/blob/main/build.config.ts
    {
      builder: 'mkdist',
      input: './src',
      pattern: ['**/*.vue'],
      loaders: ['vue'],
    },
    {
      builder: 'mkdist',
      input: './src',
      pattern: ['**/*.ts'],
      format: 'cjs',
      loaders: ['js'],
    },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'] },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  failOnWarn: false,
})
