import type { ChangelogCliOptions } from './changelog.interface'
import { VipColor, VipCommander, VipConsole, VipGit, VipNodeJS } from '@142vip/utils'
import { name as packageName, version as packageVersion } from '../package.json'
import { changelogGenerate, changelogUpdate, sendGithubRelease } from './changelog'
import { mergeConfig } from './config'
import { GithubAPI } from './utils'

/**
 * 处理changelog业务
 */
async function changelogHandler(cliOptions: ChangelogCliOptions): Promise<void> {
  // 处理token
  cliOptions.token = cliOptions.token || VipNodeJS.getProcessEnv('GITHUB_TOKEN') || VipNodeJS.getProcessEnv('TOKEN')

  const releaseUrl = ''
  try {
    VipConsole.log()
    VipConsole.log(`${VipColor.dim(packageName)} ${VipColor.dim(`v${packageVersion}`)}`)

    const changelogConfig = await mergeConfig(cliOptions)

    console.log('changelogConfig:', changelogConfig)
    const { markdown, commits, releaseUrl } = await changelogGenerate(changelogConfig)

    VipConsole.log(`${VipColor.cyan(changelogConfig.from)} ${VipColor.dim(' -> ')} ${VipColor.blue(changelogConfig.to)} ${VipColor.dim(` (${commits.length} commits)`)}`)
    VipConsole.log('\n')
    VipConsole.log(VipColor.dim('--------------'))
    VipConsole.log(`\n${markdown.replace(/&nbsp;/g, '')}\n`)
    VipConsole.log(VipColor.dim('--------------'))

    // 试运行
    if (changelogConfig.dryRun) {
      if (changelogConfig.scopeName != null) {
        // 子模块，不触发github release发布地址
        VipConsole.log(VipColor.yellow('Monorepo模式的NPM包发布。不触发github release发布地址\n'))
      }
      else {
        VipConsole.log(VipColor.yellow('试运行。已跳过版本发布'))
        GithubAPI.printReleaseUrl(releaseUrl)
      }
      return
    }

    // 更新changelog文档
    if (typeof changelogConfig.output === 'string') {
      // todo这里的header要优化
      await changelogUpdate(changelogConfig.output, markdown, changelogConfig.name, changelogConfig.header!)
      return
    }

    // 带token上传，校验Token
    if (!cliOptions.token) {
      VipConsole.error(VipColor.red('未找到 GitHub 令牌，请通过 GITHUB_TOKEN 环境变量指定。已跳过版本发布。'))
      GithubAPI.printReleaseUrl(releaseUrl)
      VipNodeJS.exitProcess(1)
      return
    }

    // git记录很浅
    if (commits.length === 0 && VipGit.isRepoShallow()) {
      VipConsole.error(VipColor.yellow('存储库似乎克隆得很浅，这使得更改日志无法生成。您可能希望在 CI 配置中指定 \'fetch-depth： 0\'。'))
      GithubAPI.printReleaseUrl(releaseUrl)
      VipNodeJS.exitProcess(1)
      return
    }

    // 调用api 直接发布
    await sendGithubRelease({
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
    VipNodeJS.exitProcess(1)
  }
}

/**
 * cli 入口
 * - changelogen: https://www.npmjs.com/package/changelogen
 */
function changelogMain(): void {
  const program = new VipCommander(packageName, packageVersion)

  // cli参数
  program
    .option('--token <token>', 'GitHub Token')
    .option('--from <from>', 'From tag')
    .option('--to <to>', 'To tag')
    .option('--github <github>', 'GitHub Repository, eg. @142vip/core-x')
    .option('--name <name>', 'Name of the release')
    .option('--output <output>', 'Output to file instead of sending to GitHub')
    .option('--scopeName <scopeName>', 'Package name in Monorepo，Match the scope in the git commit information')
    .option('--prerelease', 'Mark release as prerelease', true)
    .option('--dry-run', 'Dry run', false)
    .action(async (options: ChangelogCliOptions) => {
      console.log('cli-->', options)
      await changelogHandler(options)
    })

  // 解析参数
  program.parse(VipNodeJS.getProcessArgv())
}

changelogMain()
