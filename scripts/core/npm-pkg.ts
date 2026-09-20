import type { PackageJSONMainFest } from '@142vip/utils'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipJSON,
  VipNodeJS,
} from '@142vip/utils'

const SCRIPT_FILE = VipNodeJS.getProcessArgvByIndex(1) ?? ''
const ROOT = VipNodeJS.pathResolve(VipNodeJS.pathDirname(SCRIPT_FILE), '../..')
const PACKAGES = VipNodeJS.pathJoin(ROOT, 'packages')
const SCAFFOLD = VipNodeJS.pathJoin(PACKAGES, '_example')

const SIDEBAR_MARKERS = {
  business: `💵 \${ProjectId.BUSINESS}`,
  tools: `🛠 \${ProjectId.TOOLS}`,
  egg: `🐣 \${ProjectId.EGG}`,
  nest: `🦅 \${ProjectId.NEST}`,
  blog: `💻 \${ProjectId.BLOG}`,
  infra: `🏆 \${ProjectId.INFRA}`,
} as const

type GroupKey = keyof typeof SIDEBAR_MARKERS

interface Options {
  pkgDir: string
  description: string
  group: GroupKey
}

function usage(): void {
  VipConsole.log(`
用法: ./scripts/npm-pkg <包目录名> [--description "描述"] [--group tools]

以 packages/_example 为母版复制，改写为可发布的 @142vip/* 包，并同步文档与 CI。

分组: business | tools | egg | nest | blog | infra（默认 tools）
`)
}

function parseArgs(argv: string[]): Options {
  if (argv.length === 0 || argv[0] === '-h' || argv[0] === '--help') {
    usage()
    VipNodeJS.exitProcess(argv.length === 0 ? 1 : 0)
  }

  let pkgDir = ''
  let description = ''
  let group: GroupKey = 'tools'

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--description') {
      description = argv[++i] ?? ''
    }
    else if (arg === '--group') {
      const value = argv[++i] as GroupKey
      if (value == null || !(value in SIDEBAR_MARKERS)) {
        throw new Error(`未知分组: ${value ?? '(空)'}`)
      }
      group = value
    }
    else if (arg.startsWith('--')) {
      throw new Error(`未知参数: ${arg}`)
    }
    else if (pkgDir.length === 0) {
      pkgDir = arg
    }
    else {
      throw new Error(`仅支持一个包目录名: ${arg}`)
    }
  }

  if (pkgDir.length === 0) {
    throw new Error('请指定包目录名')
  }
  if (!/^[a-z][a-z0-9-]*$/.test(pkgDir) || pkgDir.startsWith('_')) {
    throw new Error(`非法包目录名: ${pkgDir}`)
  }
  if (VipNodeJS.existPath(VipNodeJS.pathJoin(PACKAGES, pkgDir))) {
    throw new Error(`目录已存在: packages/${pkgDir}`)
  }

  return { pkgDir, description, group }
}

function toPascal(name: string): string {
  return name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

function copyDir(from: string, to: string): void {
  VipNodeJS.mkdirSync(to)
  for (const name of VipNodeJS.readdirSync(from)) {
    if (name === 'dist' || name === 'node_modules') {
      continue
    }
    const src = VipNodeJS.pathJoin(from, name)
    const dest = VipNodeJS.pathJoin(to, name)
    if (VipNodeJS.isDirectory(src)) {
      copyDir(src, dest)
      continue
    }
    VipNodeJS.writeFileByUTF8(dest, VipNodeJS.readFileToStrByUTF8(src))
  }
}

function walkReplace(dir: string, pairs: Array<[string, string]>): void {
  for (const name of VipNodeJS.readdirSync(dir)) {
    const full = VipNodeJS.pathJoin(dir, name)
    if (VipNodeJS.isDirectory(full)) {
      walkReplace(full, pairs)
      continue
    }
    if (!/\.(?:json|md|ts|js|mjs|cjs)$/.test(name)) {
      continue
    }
    let text = VipNodeJS.readFileToStrByUTF8(full)
    for (const [from, to] of pairs) {
      text = text.split(from).join(to)
    }
    VipNodeJS.writeFileByUTF8(full, text)
  }
}

function writeFeatures(dir: string, pkgDir: string, pkgName: string, exportFn: string, description: string): void {
  const summary = description.length > 0 ? description : `${pkgName} 模块`
  VipNodeJS.writeFileByUTF8(VipNodeJS.pathJoin(dir, 'FEATURES.md'), `# ${pkgName}

技术说明。不随 npm 发布。

## 定位

${summary}

## 功能

- \`${exportFn}\` — 主入口导出
- 子路径与更多符号见源码 \`src/\` 与 package.json \`exports\`

## 配置

无

## 最佳实践

1. 新建后先补全 README「功能 / 使用」；本文件用源码片段 + 列表写清签名与边界，勿堆无信息量的方法名清单。
2. 公开 API 变更时同步更新 README 与 FEATURES。
3. 发版走 \`pnpm release\`，勿手改 version / CHANGELOG 发版节。

## 构建

\`unbuild\` → \`cd packages/${pkgDir} && pnpm build\`

## 验证

\`cd packages/${pkgDir} && pnpm build && pnpm typecheck\`

## 演示

无
`)
}

function writeReadme(dir: string, pkgName: string, summary: string, exportFn: string): void {
  VipNodeJS.writeFileByUTF8(VipNodeJS.pathJoin(dir, 'README.md'), `# ${pkgName}

[![NPM version](https://img.shields.io/npm/v/${pkgName}?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/${pkgName})

${summary}

## 安装

\`\`\`shell
# npm
npm install ${pkgName}

# pnpm
pnpm add ${pkgName}
\`\`\`

## 功能

- [x] 待补充

## 配置

无

## 使用

\`\`\`ts
import { ${exportFn} } from '${pkgName}'

${exportFn}('core-x')
\`\`\`

## 升级

\`\`\`shell
# 依赖更新
pnpm upgrade ${pkgName}
\`\`\`

## 参考

- [${pkgName}](https://www.npmjs.com/package/${pkgName})

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
`)
}

function patchJson(dir: string, pkgDir: string, pkgName: string, description: string): void {
  const jsonFile = VipJSON.readFile('package.json', dir)
  const pkg = jsonFile.data as PackageJSONMainFest

  pkg.name = pkgName
  pkg.version = '0.0.1-alpha.0'
  pkg.private = false
  pkg.description = description.length > 0 ? description : `${pkgName} 模块`
  pkg.homepage = `https://142vip.github.io/core-x/packages/${pkgDir}/`
  pkg.repository = {
    type: 'git',
    url: 'git+https://github.com/142vip/core-x.git',
    directory: `packages/${pkgDir}`,
  }
  pkg.keywords = ['公众号搜：储凡', '142vip', '@142vip', pkgName]
  pkg.publishConfig = { access: 'public', registry: 'https://registry.npmjs.org' }

  VipJSON.writeFile(jsonFile)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function insertSorted(content: string, block: RegExp, line: string): string {
  const match = block.exec(content)
  if (match == null) {
    return content
  }
  const lines = match[1].split('\n').filter(row => row.trim().length > 0)
  if (lines.some(row => row.includes(line.trim()))) {
    return content
  }
  lines.push(line)
  lines.sort((a, b) => a.localeCompare(b))
  const nextBlock = `${lines.join('\n')}\n`
  return content.replace(match[0], match[0].replace(match[1], nextBlock))
}

function syncDocs(pkgName: string, pkgDir: string, group: GroupKey): void {
  const sidebarFile = VipNodeJS.pathJoin(ROOT, '.vitepress/sidebar.ts')
  const sidebar = VipNodeJS.readFileToStrByUTF8(sidebarFile)
  const marker = SIDEBAR_MARKERS[group]
  const entry = `      { text: '${pkgName}', link: '/packages/${pkgDir}/index.md' },`
  const nextSidebar = insertSorted(
    sidebar,
    new RegExp(`text: \`${escapeRegExp(marker)}\`,\\s*\\n\\s*items: \\[([\\s\\S]*?)\\n\\s*\\],`),
    entry,
  )
  if (nextSidebar !== sidebar) {
    VipNodeJS.writeFileByUTF8(sidebarFile, nextSidebar)
  }

  const readmeFile = VipNodeJS.pathJoin(ROOT, 'README.md')
  const pkgLine = `- [\`${pkgName}\`](https://www.npmjs.com/package/${pkgName})`
  let readme = VipNodeJS.readFileToStrByUTF8(readmeFile)
  const start = readme.indexOf('### 开源模块')
  const end = readme.indexOf('\n## ', start + 1)
  if (start !== -1 && !readme.includes(pkgLine)) {
    const section = readme.slice(start, end === -1 ? undefined : end)
    const lines = section.split('\n').filter(row => row.startsWith('- [`@142vip/'))
    lines.push(pkgLine)
    lines.sort((a, b) => a.localeCompare(b))
    readme = `${readme.slice(0, start)}### 开源模块\n\n${lines.join('\n')}${end === -1 ? '' : readme.slice(end)}`
    VipNodeJS.writeFileByUTF8(readmeFile, readme)
  }

  const cdFile = VipNodeJS.pathJoin(ROOT, '.github/workflows/CD.yaml')
  const cdLine = `          - '${pkgName}'`
  let cd = VipNodeJS.readFileToStrByUTF8(cdFile)
  if (!cd.includes(cdLine)) {
    cd = insertSorted(cd, /options:\n((?: {10}- '@142vip\/[^']+'\n)+)(?=#)/, cdLine)
    VipNodeJS.writeFileByUTF8(cdFile, cd)
  }

  const typedocFile = VipNodeJS.pathJoin(ROOT, '.typedoc/config.js')
  const typedocLine = `    path.join(repoRoot, 'packages/${pkgDir}'),`
  let typedoc = VipNodeJS.readFileToStrByUTF8(typedocFile)
  if (!typedoc.includes(`'packages/${pkgDir}'`)) {
    typedoc = insertSorted(typedoc, /entryPoints: \[([\s\S]*?)\n {2}\],/, typedocLine)
    VipNodeJS.writeFileByUTF8(typedocFile, typedoc)
  }
}

async function verify(dir: string, pkgDir: string): Promise<void> {
  for (const script of ['build', 'typecheck'] as const) {
    VipConsole.log(`自检: packages/${pkgDir} → pnpm ${script}`)
    await VipExecutor.commandStandardExecutor(`cd "${dir}" && pnpm ${script}`)
  }
}

async function createPackage({ pkgDir, description, group }: Options): Promise<void> {
  const pkgName = `@142vip/${pkgDir}`
  const target = VipNodeJS.pathJoin(PACKAGES, pkgDir)
  const exportFn = `create${toPascal(pkgDir)}Message`
  const summary = description.length > 0 ? description : `${pkgName} 模块`

  if (!VipNodeJS.existPath(SCAFFOLD) || !VipNodeJS.isDirectory(SCAFFOLD)) {
    throw new Error('未找到母版: packages/_example')
  }

  copyDir(SCAFFOLD, target)

  const exampleFile = VipNodeJS.pathJoin(target, 'src/core/example.ts')
  const moduleFile = VipNodeJS.pathJoin(target, 'src/core', `${pkgDir}.ts`)
  VipExecutor.execCommandSync(`mv "${exampleFile}" "${moduleFile}"`)
  VipNodeJS.writeFileByUTF8(VipNodeJS.pathJoin(target, 'src/core/index.ts'), `export * from './${pkgDir}'\n`)

  walkReplace(target, [
    ['@142vip/_example', pkgName],
    ['createExampleMessage', exportFn],
    ['packages/_example', `packages/${pkgDir}`],
  ])

  patchJson(target, pkgDir, pkgName, description)
  writeReadme(target, pkgName, summary, exportFn)
  writeFeatures(target, pkgDir, pkgName, exportFn, description)
  syncDocs(pkgName, pkgDir, group)
  await verify(target, pkgDir)

  VipConsole.log(`${VipColor.greenBright('完成:')} packages/${pkgDir} (${pkgName})`)
  VipConsole.log('发版: pnpm release → 选择上述包名')
}

void createPackage(parseArgs(VipNodeJS.getProcessArgv().slice(2))).catch((error: unknown) => {
  VipConsole.error(error instanceof Error ? error.message : String(error))
  VipNodeJS.existErrorProcess()
})
