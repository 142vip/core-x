export default {
  entryPoints: ['packages/*'],
  name: '靓仔',
  entryPointStrategy: 'packages',
  includeVersion: false,
  out: 'apis',
  theme: 'default',
  exclude: ['**/*.test.ts', '**/node_modules/**'],
  tsconfig: 'tsconfig.json',
  plugin: [
    'typedoc-plugin-markdown',
    // 'typedoc-vitepress-theme',
  ],
  readme: 'README.md',
  // sidebar: {
  //   autoConfiguration: true,
  //   format: 'vitepress',
  //   pretty: false,
  //   collapsed: true,
  // },
  cleanOutputDir: true,
  excludePrivate: true, // 导出不包含private声明内容
  excludeProtected: true, // 导出不包含protected声明内容
}
