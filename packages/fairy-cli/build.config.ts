import { defineBuildConfig } from 'unbuild'

// 参考：https://github.com/unjs/unbuild
export default defineBuildConfig({
  entries: [
    'src/index',
    'src/fairy-cli',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  // 编排包在 devDependencies；构建时 external，避免内联 ESLint/TS 等重型依赖
  externals: [
    '@142vip/agent-skills',
    '@142vip/changelog',
    '@142vip/commit-linter',
    '@142vip/copyright',
    '@142vip/eslint-config',
    '@142vip/release-version',
    '@142vip/utils',
  ],
})
