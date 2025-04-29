/**
 * @type {Partial<import("typedoc").TypeDocOptions>}
 */
export default {
  entryPointStrategy: 'packages',
  entryPoints: [
    'packages/axios',
    'packages/changelog',
    'packages/commit-linter',
    'packages/copyright',
    'packages/eslint-config',
    'packages/fairy-cli',
    'packages/grpc',
    'packages/nest',
    'packages/nest-redis',
    'packages/nest-typeorm',
    'packages/oauth',
    'packages/redis',
    'packages/release-version',
    'packages/typeorm',
    'packages/utils',
  ],
  name: 'API 参考',
  out: 'docs/apis',
  exclude: [
    '**/*.test.ts',
    '**/node_modules/**',
  ],
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-vitepress-theme',
  ],
  cleanOutputDir: true,
  excludeNotDocumented: false,
  excludeExternals: false,
  hideGenerator: true,
  categorizeByGroup: false,
  // projectDocuments: ['CHANGELOG.md', 'README.md'],
  packageOptions: {
    includeVersion: true,
    // projectDocuments: ['CHANGELOG.md', 'README.md'],
    entryPoints: ['src/index.ts'],
    readme: 'none', // 不生成 README 页面
  },
  lang: 'zh',
  navigation: {
    includeFolders: false,
    includeCategories: true,
    includeGroups: false,
    compactFolders: true,
    excludeReferences: false,
  },
  sluggerConfiguration: {
    lowercase: true,
  },
  headings: {
    readme: true,
    document: true,
  },
  sidebar: {
    autoConfiguration: true,
    format: 'vitepress',
    pretty: false,
    collapsed: true,
  },
  locales: {
    zh: {
      theme_packages: '模块包',
    },
  },
  logLevel: 'Verbose',
}
