import * as td from 'typedoc'

async function testMain() {
// Application.bootstrap also exists, which will not load plugins
// Also accepts an array of option readers if you want to disable
// TypeDoc's tsconfig.json/package.json/typedoc.json option readers
  const app = await td.Application.bootstrapWithPlugins({
  // Note: This accepts globs, do not pass paths with backslash path separators!
    entryPoints: ['packages/*'],
    entryPointStrategy: 'packages',
    name: '靓仔',
    includeVersion: false,
    out: 'apis',
    theme: 'default',
    exclude: [
      '**/*.test.ts',
      '**/node_modules/**',
    ],
    tsconfig: 'tsconfig.json',
    plugin: [
      // 'typedoc-plugin-markdown',
      // 'typedoc-vitepress-theme',
    ],
    // readme: 'README.md',
    // sidebar: {
    //   autoConfiguration: true,
    //   format: 'vitepress',
    //   pretty: false,
    //   collapsed: true,
    // },
    cleanOutputDir: true,
    excludePrivate: true, // 导出不包含private声明内容
    excludeProtected: true, // 导出不包含protected声明内容
  })

  // May be undefined if errors are encountered.
  const project = await app.convert()

  if (project) {
  // Generate configured outputs
  //   await app.generateOutputs(project)

    // Alternatively...
    const outputDir = 'dist/static/apis'
    // Generate HTML rendered docs
    await app.generateDocs(project, outputDir)
    // Alternatively generate JSON output
    await app.generateJson(project, `${outputDir}/docs.json`)
  }
}

void testMain()
