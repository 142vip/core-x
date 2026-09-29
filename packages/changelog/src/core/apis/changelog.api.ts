import type {
  ChangelogCliOptions,
  ChangelogGenerateOptions,
  GenerateChangelogResult,
} from '../changelog.interface'
import { VipColor, VipConsole, vipDayjs, VipGit, vipLogger, VipNodeJS } from '@142vip/utils'
import { parseCliOptions } from '../config'
import { gitCommitAPI } from './git-commit.api'
import { githubAPI } from './github.api'

/**
 * CHANGELOG 生成、写盘与 GitHub Release 流程。
 * 对外由 `changelogApi` 单例导出；`fa changelog` 与独立 bin 共用。
 */
export class ChangelogApi {
  /** 生成 CHANGELOG 正文与 Release 元数据（不写文件、不创建 GitHub Release） */
  async generateChangelogInfo(config: ChangelogGenerateOptions): Promise<GenerateChangelogResult> {
    const rawCommits = await gitCommitAPI.getGitCommitDiff({ from: config.from, to: config.to })
    const commits = gitCommitAPI.parseGitCommits(rawCommits, config.scopeMap)

    if (config.contributors) {
      const token = VipNodeJS.getProcessEnv('GITHUB_TOKEN') || VipNodeJS.getProcessEnv('TOKEN')
      await githubAPI.resolveAuthors(commits, {
        token,
        baseUrlApi: config.baseUrlApi,
        repo: config.repo,
      })
    }

    const markdown = await gitCommitAPI.parseCommitsToMarkdownStr(commits, config)
    const releaseUrl = githubAPI.generateReleaseUrl(markdown, {
      baseUrl: config.baseUrl,
      name: config.name,
      repo: config.repo,
      to: config.to,
      prerelease: config.prerelease,
    })

    return { config, markdown, commits, releaseUrl }
  }

  /** 在已有 CHANGELOG.md 顶部插入新版本节 */
  async upsertChangelogDoc(
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

    const newMd = `## ${releaseVersionName} (${vipDayjs.formatCurrentDateToYMD()})\n\n${markdown}`
    const lastEntry = changelogMD.match(/^##\s+(?:\S.*)?$/m)

    if (lastEntry) {
      changelogMD = `${changelogMD.slice(0, lastEntry.index)}${newMd}\n\n${changelogMD.slice(lastEntry.index)}`
    }
    else {
      changelogMD += `\n${newMd}`
    }

    VipNodeJS.writeFileByUTF8(outputPath, changelogMD)
  }

  /** CLI 主流程：生成内容 →（可选）写文件 →（可选）发布 GitHub Release */
  async changelogCoreHandler(cliOptions: ChangelogCliOptions): Promise<void> {
    cliOptions.token = cliOptions.token
      || VipNodeJS.getProcessEnv('GITHUB_TOKEN')
      || VipNodeJS.getProcessEnv('TOKEN')

    let releaseUrl = ''
    try {
      vipLogger.println()

      const changelogConfig = parseCliOptions(cliOptions)
      VipConsole.trace('changelogConfig:', changelogConfig)

      const { markdown, commits, releaseUrl: generatedReleaseUrl } = await this.generateChangelogInfo(changelogConfig)
      releaseUrl = generatedReleaseUrl

      this.printChangelogPreview(changelogConfig, markdown, commits, releaseUrl)

      if (changelogConfig.dryRun) {
        if (changelogConfig.scopeName != null) {
          vipLogger.logByBlank(VipColor.yellow('Monorepo 子包发版：不触发 GitHub Release'))
        }
        else {
          VipConsole.log(VipColor.yellow('试运行：已跳过 GitHub Release'))
          githubAPI.printReleaseUrl(releaseUrl)
        }
        VipNodeJS.existSuccessProcess()
      }

      if (typeof changelogConfig.output === 'string') {
        await this.upsertChangelogDoc(changelogConfig.output, markdown, changelogConfig.name, changelogConfig.header!)
      }

      if (!cliOptions.token) {
        VipConsole.error(VipColor.red('未找到 GitHub Token，请设置 GITHUB_TOKEN 或 TOKEN，已跳过 Release'))
        githubAPI.printReleaseUrl(releaseUrl)
        VipNodeJS.existErrorProcess()
        return
      }

      if (commits.length === 0 && VipGit.isRepoShallow()) {
        VipConsole.error(VipColor.yellow('仓库为浅克隆，无法生成 CHANGELOG。CI 请设置 fetch-depth: 0'))
        githubAPI.printReleaseUrl(releaseUrl)
        VipNodeJS.existErrorProcess()
      }

      await githubAPI.createGithubRelease({
        token: cliOptions.token,
        repo: changelogConfig.repo,
        baseUrlApi: changelogConfig.baseUrlApi,
        name: changelogConfig.name || changelogConfig.to,
        tag: changelogConfig.to,
        content: markdown,
        prerelease: changelogConfig.prerelease,
      })
    }
    catch (e: unknown) {
      VipConsole.error(VipColor.red(String(e)))
      if (e instanceof Error && e.stack) {
        VipConsole.error(VipColor.dim(e.stack.split('\n').slice(1).join('\n')))
      }
      githubAPI.printReleaseUrl(releaseUrl, false)
      VipNodeJS.existErrorProcess()
    }
  }

  /** 仅写入 CHANGELOG.md，不触发 GitHub Release（`fa release` / `release-version` 集成） */
  async writeChangelogFile(cliOptions: ChangelogCliOptions): Promise<GenerateChangelogResult> {
    const changelogConfig = parseCliOptions(cliOptions)
    const changelogPayload = await this.generateChangelogInfo(changelogConfig)

    if (typeof changelogConfig.output === 'string') {
      await this.upsertChangelogDoc(
        changelogConfig.output,
        changelogPayload.markdown,
        changelogConfig.name,
        changelogConfig.header!,
      )
    }

    return changelogPayload
  }

  private printChangelogPreview(
    config: ChangelogGenerateOptions,
    markdown: string,
    commits: GenerateChangelogResult['commits'],
    releaseUrl: string,
  ): void {
    if (config.scopeName != null) {
      VipConsole.log(`release: <${VipColor.yellow(releaseUrl)}>`)
    }

    VipConsole.log(`${VipColor.cyan(config.from)} ${VipColor.dim(' -> ')} ${VipColor.blue(config.to)} ${VipColor.dim(` (${commits.length} commits)`)}`)
    vipLogger.println()
    VipConsole.log(VipColor.dim('--------------'))
    vipLogger.logByBlank(markdown.replace(/&nbsp;/g, ''))
    VipConsole.log(VipColor.dim('--------------'))
  }
}

export const changelogApi = new ChangelogApi()
