import * as td from 'typedoc'

async function testMain() {
  const app = await td.Application.bootstrapWithPlugins({
  // Note: This accepts globs, do not pass paths with backslash path separators!
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
    name: '@142vip/core-x',
    titleLink: 'https://github.com/142vip/core-x',
    includeVersion: true,
    out: 'dist/apis',
    theme: 'typedoc-github-theme',
    exclude: [
      '**/*.test.ts',
      '**/node_modules/**',
    ],
    // tsconfig: 'tsconfig.package.json',
    plugin: [
      'typedoc-github-theme',
    ],
    cleanOutputDir: true,
    excludeNotDocumented: false,
    excludeExternals: false,
    hideGenerator: true,
    categorizeByGroup: false,
    projectDocuments: ['CHANGELOG.md', 'README.md'],
    packageOptions: {
      includeVersion: false,
      projectDocuments: ['CHANGELOG.md', 'README.md'],
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
    githubPages: true,
    includeHierarchySummary: true,
    logLevel: 'Verbose',
  })

  const project = await app.convert()

  if (project) {
    await app.generateOutputs(project)
  }
}

void testMain()
