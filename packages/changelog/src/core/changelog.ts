/* eslint-disable no-console */
import process from 'node:process'
import { getGitDiff, parseGitCommit } from 'changelogen'
import { VipCommander, vipColor } from '@142vip/utils'
import { name as packageName, version as packageVersion } from '../../package.json'
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
} from '../utils'
import type { ChangelogOptions, ResolvedChangelogOptions } from '../types'
import { ChangelogDefaultConfig } from './config'

/**
 * 加载配置
 * 将用户自定义配置和默认配置合并
 * @param options
 */
async function resolveConfig(options: ChangelogOptions) {
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
    throw new Error(`无效的 GitHub 存储库，需要一个字符串，但实际repo参数是： ${JSON.stringify(config.repo)}`)

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
    console.log(`chore(${options.scopeName})`, rawCommits)
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
async function dealChangelog(args: ChangelogOptions) {
  args.token = args.token || process.env.GITHUB_TOKEN

  let webUrl = ''

  try {
    console.log()
    console.log(vipColor.dim(`${vipColor.bold('@142vip/changelog')} `) + vipColor.dim(`v${packageVersion}`))

    const { config, markdown, commits } = await generate(args)
    webUrl = generateWebUrl(config, markdown)

    console.log(vipColor.cyan(config.from) + vipColor.dim(' -> ') + vipColor.blue(config.to) + vipColor.dim(` (${commits.length} commits)`))
    console.log(vipColor.dim('--------------'))
    console.log()
    console.log(markdown.replace(/&nbsp;/g, ''))
    console.log()
    console.log(vipColor.dim('--------------'))

    if (config.dry) {
      console.log(vipColor.yellow('试运行。已跳过版本发布。'))
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
      console.error(vipColor.red('未找到 GitHub 令牌，请通过 GITHUB_TOKEN 环境变量指定。已跳过版本发布。'))
      printUrl(webUrl)
      process.exitCode = 1
      return
    }

    if (!commits.length && await isRepoShallow()) {
      console.error(vipColor.yellow('存储库似乎克隆得很浅，这使得更改日志无法生成。您可能希望在 CI 配置中指定 \'fetch-depth： 0\'。'))
      printUrl(webUrl)
      process.exitCode = 1
      return
    }

    // 调用api 直接发布
    await sendRelease(config, markdown)
  }
  catch (e: any) {
    console.error(vipColor.red(String(e)))
    if (e?.stack)
      console.error(vipColor.dim(e.stack?.split('\n').slice(1).join('\n')))

    // 手动执行，创建release
    if (webUrl) {
      printUrl(webUrl, false)
    }
    process.exitCode = 1
  }
}

/**
 * cli 入口
 */
export function changelogMain() {
  const program = new VipCommander(packageName, packageVersion)

  // cli参数
  program
    .option('-t, --tokens <path>', 'GitHub Token')
    .option('--from <ref>', 'From tag')
    .option('--to <ref>', 'To tag')
    .option('--github <path>', 'GitHub Repository, e.g. @142vip/core-x')
    .option('--name <name>', 'Name of the release')
    .option('--prerelease', 'Mark release as prerelease')
    .option('--output <path>', 'Output to file instead of sending to GitHub')
    .option('--scopeName <scopeName>', 'Package name in Monorepo，Match the scope in the git commit information')
    .option('--dry', 'Dry run', false)
    .action(async (args: ChangelogOptions) => {
      await dealChangelog(args)
    })

  // 解析参数
  program.parse(process.argv)
}
