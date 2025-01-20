import { getGitDiff, parseGitCommit } from 'changelogen'
import {
  VipColor,
  VipCommander,
  VipConsole,
  VipJSON,
  VipNodeJS,
} from '@142vip/utils'
import { name as packageName, version as packageVersion } from '../package.json'
import {
  generateMarkdown,
  generateWebUrl,
  getCurrentGitBranch,
  getFirstGitCommit,
  getGitHubRepo,
  getLastMatchingTag,
  isPrerelease,
  isRepoShallow,
  printUrl,
  resolveAuthors,
  sendRelease,
  updateChangelog,
} from './utils'
import type { ChangelogOptions, ResolvedChangelogOptions } from './types'
import { ChangelogDefaultConfig } from './config'

/**
 * 加载配置
 * 将用户自定义配置和默认配置合并
 */
async function resolveConfig(options: ChangelogOptions): Promise<ResolvedChangelogOptions> {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<ChangelogOptions>({
    // 配置文件名，eg: changelog.config.ts
    name: 'changelog',
    defaults: ChangelogDefaultConfig,
    overrides: options,
    // 在package.json中的配置关键字
    packageJson: packageName,
  }).then(r => r.config || ChangelogDefaultConfig)

  config.baseUrl = config.baseUrl ?? 'github.com'
  config.baseUrlApi = config.baseUrlApi ?? 'api.github.com'
  // 发布的版本
  config.to = config.to || await getCurrentGitBranch()
  // release name
  config.name = config.name ?? config.to
  config.from = config.from || await getLastMatchingTag(config.to) || await getFirstGitCommit()
  // @ts-expect-error backward compatibility
  config.repo = config.repo || config.github || await getGitHubRepo(config.baseUrl)

  // 是否是预览版本
  config.prerelease = config.prerelease ?? isPrerelease(config.to)

  // todo 支持多个scope生成
  config.scopeName = options.scopeName

  if (typeof config.repo !== 'string')
    throw new Error(`无效的 GitHub 存储库，需要一个字符串，但实际repo参数是： ${VipJSON.stringify(config.repo)}`)

  return config as ResolvedChangelogOptions
}

/**
 * 生成markdown文档信息
 */
async function generate(options: ChangelogOptions) {
  const config = await resolveConfig(options)

  const rawCommits = await getGitDiff(config.from, config.to)

  // 发布子模块时，需要考虑根模块迭代一个版本，子模块迭代多个版本但只需要记录一个版本
  let newRawCommits = []
  if (options.scopeName != null) {
    for (const rawCommit of rawCommits) {
      if (rawCommit.message.includes(`release(${options.scopeName})`)) {
        break
      }
      newRawCommits.push(rawCommit)
    }
  }
  else {
    // 根模块
    newRawCommits = rawCommits
  }

  // 解析commit信息
  const commits = newRawCommits
    .map(commit => parseGitCommit(commit, config))
    .filter(v => v != null)

  // 添加贡献者
  if (config.contributors) {
    await resolveAuthors(commits, config)
  }
  // 生成文档
  const markdown = await generateMarkdown(commits, config)

  return { config, markdown, commits }
}

/**
 * 处理changelog业务
 */
async function dealChangelog(args: ChangelogOptions): Promise<void> {
  args.token = args.token || VipNodeJS.getProcessEnv('GITHUB_TOKEN')

  let webUrl = ''

  try {
    VipConsole.log()
    VipConsole.log(VipColor.dim(`${VipColor.bold(packageName)} `) + VipColor.dim(`v${packageVersion}`))

    const { config, markdown, commits } = await generate(args)
    webUrl = generateWebUrl(config, markdown)

    VipConsole.log(VipColor.cyan(config.from) + VipColor.dim(' -> ') + VipColor.blue(config.to) + VipColor.dim(` (${commits.length} commits)`))
    VipConsole.log()
    VipConsole.log(VipColor.dim('--------------'))
    VipConsole.log()
    VipConsole.log(markdown.replace(/&nbsp;/g, ''))
    VipConsole.log()
    VipConsole.log(VipColor.dim('--------------'))

    if (config.dry) {
      VipConsole.log(VipColor.yellow('试运行。已跳过版本发布。'))
      printUrl(webUrl)
      return
    }

    // 更新changelog文档
    if (typeof config.output === 'string') {
      await updateChangelog(config.output, markdown, config.name)
      return
    }

    // 带token上传
    if (!config.tokens) {
      VipConsole.error(VipColor.red('未找到 GitHub 令牌，请通过 GITHUB_TOKEN 环境变量指定。已跳过版本发布。'))
      printUrl(webUrl)
      VipNodeJS.exitProcess(1)
      return
    }

    if (!commits.length && await isRepoShallow()) {
      VipConsole.error(VipColor.yellow('存储库似乎克隆得很浅，这使得更改日志无法生成。您可能希望在 CI 配置中指定 \'fetch-depth： 0\'。'))
      printUrl(webUrl)
      VipNodeJS.exitProcess(1)
      return
    }

    // 调用api 直接发布
    await sendRelease(config, markdown)
  }
  catch (e: any) {
    VipConsole.error(VipColor.red(String(e)))
    if (e?.stack)
      VipConsole.error(VipColor.dim(e.stack?.split('\n').slice(1).join('\n')))

    // 手动执行，创建release
    if (webUrl) {
      printUrl(webUrl, false)
    }
    VipNodeJS.exitProcess(1)
  }
}

/**
 * cli 入口
 */
export function changelogMain(): void {
  const program = new VipCommander(packageName, packageVersion)

  // cli参数
  program
    .option('-t, --tokens <path>', 'GitHub Token')
    .option('--from <ref>', 'From tag')
    .option('--to <ref>', 'To tag')
    .option('--github <path>', 'GitHub Repository, eg. @142vip/core-x')
    .option('--name <name>', 'Name of the release')
    .option('--prerelease', 'Mark release as prerelease')
    .option('--output <path>', 'Output to file instead of sending to GitHub')
    .option('--scopeName <scopeName>', 'Package name in Monorepo，Match the scope in the git commit information')
    .option('--dry', 'Dry run', false)
    .action(async (args: ChangelogOptions) => {
      await dealChangelog(args)
    })

  // 解析参数
  program.parse(VipNodeJS.getProcessArgv())
}

changelogMain()
