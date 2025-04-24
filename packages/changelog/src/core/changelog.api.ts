import type { ChangelogCliOptions, ChangelogGenerateOptions, GenerateChangelogResult } from '../enums'
import { parseCliOptions } from '@142vip/changelog'
import { VipColor, VipConsole, VipDayjs, VipGit, vipLogger, VipNodeJS } from '@142vip/utils'
import { GitCommitAPI } from './git-commit.api'
import { GithubAPI } from './github.api'

/**
 * 处理git changelog记录生成
 */
async function generateChangelogInfo(config: ChangelogGenerateOptions): Promise<GenerateChangelogResult> {
  const rawCommits = await GitCommitAPI.getGitCommitDiff({ from: config.from, to: config.to })

  // 解析commit信息 todo 这里的参数类型需要明确
  const commits = GitCommitAPI.parseGitCommits(rawCommits, config.scopeMap)

  // 添加贡献者
  if (config.contributors) {
    const token = VipNodeJS.getProcessEnv('GITHUB_TOKEN') || VipNodeJS.getProcessEnv('TOKEN')
    await GithubAPI.resolveAuthors(commits, {
      token,
      baseUrlApi: config.baseUrlApi,
      repo: config.repo,
    })
  }
  // 生成文档
  const markdown = await GitCommitAPI.parseCommitsToMarkdownStr(commits, config)

  // 生成发布链接
  const releaseUrl = GithubAPI.generateReleaseUrl(markdown, {
    baseUrl: config.baseUrl,
    name: config.name,
    repo: config.repo,
    to: config.to,
    prerelease: config.prerelease,
  })

  return { config, markdown, commits, releaseUrl }
}

/**
 * 创建或更新changelog文档
 */
async function upsertChangelogDoc(
  outputPath: string,
  markdown: string,
  releaseVersionName: string,
  markdownHeader: string,
): Promise<void> {
  let changelogMD: string

  if (VipNodeJS.existPath(outputPath)) {
    VipConsole.log(`Updating ${outputPath}`)
    changelogMD = VipNodeJS.readFileToStrByUTF8(outputPath)
  }
  else {
    VipConsole.log(`Creating  ${outputPath}`)
    changelogMD = markdownHeader
  }

  // 添加版本头部
  const newMd = `## ${releaseVersionName} (${VipDayjs.formatDateToYMD()})\n\n${markdown}`

  const lastEntry = changelogMD.match(/^##\s+(?:\S.*)?$/m)

  if (lastEntry) {
    changelogMD = `${changelogMD.slice(0, lastEntry.index)}${newMd}\n\n${changelogMD.slice(lastEntry.index)}`
  }
  else {
    changelogMD += `\n${newMd}`
  }

  // 写入文件
  VipNodeJS.writeFileByUTF8(outputPath, changelogMD)
}

/**
 * 处理changelog业务
 */
async function changelogCoreHandler(cliOptions: ChangelogCliOptions): Promise<void> {
  // 处理token
  cliOptions.token = cliOptions.token || VipNodeJS.getProcessEnv('GITHUB_TOKEN') || VipNodeJS.getProcessEnv('TOKEN')

  const releaseUrl = ''
  try {
    vipLogger.println()

    const changelogConfig = await parseCliOptions(cliOptions)

    VipConsole.trace('changelogConfig:', changelogConfig)
    const { markdown, commits, releaseUrl } = await generateChangelogInfo(changelogConfig)

    // 打印release信息
    if (changelogConfig.scopeName != null) {
      VipConsole.log(`release: <${VipColor.yellow(releaseUrl)}>`)
    }

    VipConsole.log(`${VipColor.cyan(changelogConfig.from)} ${VipColor.dim(' -> ')} ${VipColor.blue(changelogConfig.to)} ${VipColor.dim(` (${commits.length} commits)`)}`)
    vipLogger.println()
    VipConsole.log(VipColor.dim('--------------'))
    vipLogger.logByBlank(markdown.replace(/&nbsp;/g, ''))
    VipConsole.log(VipColor.dim('--------------'))

    // 试运行
    if (changelogConfig.dryRun) {
      if (changelogConfig.scopeName != null) {
        // 子模块，不触发github release发布地址
        vipLogger.logByBlank(VipColor.yellow('Monorepo模式的NPM包发布。不触发github release发布地址'))
      }
      else {
        VipConsole.log(VipColor.yellow('试运行。已跳过版本发布！！'))
        GithubAPI.printReleaseUrl(releaseUrl)
      }
      VipNodeJS.existSuccessProcess()
    }

    // 更新changelog文档
    if (typeof changelogConfig.output === 'string') {
      // todo这里的header要优化
      await upsertChangelogDoc(changelogConfig.output, markdown, changelogConfig.name, changelogConfig.header!)
    }

    // 带token上传，校验Token
    if (!cliOptions.token) {
      VipConsole.error(VipColor.red('未找到 GitHub 令牌，请通过 GITHUB_TOKEN 环境变量指定。已跳过版本发布。'))
      GithubAPI.printReleaseUrl(releaseUrl)
      VipNodeJS.existErrorProcess()
      return
    }

    // git记录很浅
    if (commits.length === 0 && VipGit.isRepoShallow()) {
      VipConsole.error(VipColor.yellow('存储库似乎克隆得很浅，这使得更改日志无法生成。您可能希望在 CI 配置中指定 \'fetch-depth： 0\'。'))
      GithubAPI.printReleaseUrl(releaseUrl)
      VipNodeJS.existErrorProcess()
    }

    // 调用api 直接发布
    await GithubAPI.createGithubRelease({
      token: cliOptions.token,
      repo: changelogConfig.repo,
      baseUrlApi: changelogConfig.baseUrlApi,
      name: changelogConfig.name || changelogConfig.to,
      tag: changelogConfig.to,
      content: markdown,
    })
  }
  catch (e: any) {
    VipConsole.error(VipColor.red(String(e)))
    if (e?.stack)
      VipConsole.error(VipColor.dim(e.stack?.split('\n').slice(1).join('\n')))

    // 手动执行，创建release
    GithubAPI.printReleaseUrl(releaseUrl, false)

    // 异常退出
    VipNodeJS.existErrorProcess()
  }
}

/**
 * changelog相关API
 */
export const ChangelogAPI = {
  generateChangelogInfo,
  upsertChangelogDoc,
  changelogCoreHandler,
}
