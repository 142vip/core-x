import type { ChangelogGenerateOptions } from '@142vip/changelog'
import type { CliCommandBaseOptions } from '@142vip/utils'
import type { VersionBumpOptions } from './enums'
import { VipCommander, VipConfig, VipConsole, VipNodeJS } from '@142vip/utils'
import { description, name, version } from '../package.json'
import { versionBump, versionBumpDryRun } from './core/version-bump'
import { bumpConfigDefaults } from './utils'

interface ReleaseVersionCliOptions extends CliCommandBaseOptions {
  all: boolean
  preid: string
  commit: string | boolean
  tag: string | boolean
  push: boolean
  confirm: boolean
  recursive: boolean
  changelog: boolean
  skipGitVerify: boolean
  ignoreScripts: boolean

  /**
   * 当前版本
   */
  currentVersion?: string
  execute?: string

  scopeName?: string
}

/**
 * 合并配置
 * @param cliOptions
 */
async function mergeConfig(cliOptions: ReleaseVersionCliOptions): Promise<VersionBumpOptions> {
  const releaseVersionConfig = await VipConfig.loadCliConfig<ChangelogGenerateOptions>('bumpx', bumpConfigDefaults, {
    packageJson: true,
  })

  const config = VipConfig.mergeCommanderConfig<VersionBumpOptions>(releaseVersionConfig, cliOptions)

  console.log('mergeConfig:', config)

  return config
}

function releaseVersionCliMain(): void {
  const vipCommander = new VipCommander(name, version, description)
  vipCommander
    .usage('[...files]')
    .option('--preid <preid>', '预发布标记', 'alpha')
    .option('--all', `Include all files`, bumpConfigDefaults.all)
    .option('-c, --commit', 'Commit message,also can skip commit', true)
    .option('-t, --tag', 'Tag name,also can skip tag', false)
    .option('-p, --push', `Push to remote`, bumpConfigDefaults.push)
    .option('-y, --confirm', `Skip confirmation`, bumpConfigDefaults.confirm)
    .option('-r, --recursive', `Bump package.json files recursively`, bumpConfigDefaults.recursive)
    .option('--skip-git-verify', 'Skip git verification')
    .option('--ignore-scripts', `Ignore scripts`, bumpConfigDefaults.ignoreScripts)
    .option('--changelog', 'generate CHANGELOG.md', false)
    .option('--current-version <version>', 'Current version')
    .option('-x, --execute <command>', 'Commands to execute after version bumps')
    .option('--scopeName <scopeName>', 'Package name in monorepo')
    .option('--dry-run', '试运行', false)
    .option('--vip', '@142vip组织专用功能', false)
    .option('--logger', '开启日志追踪模式', false)
    .action(async (cliOptions: ReleaseVersionCliOptions) => {
      const versionBumpOptions = await mergeConfig(cliOptions)
      console.log(111, cliOptions, versionBumpOptions)

      try {
        if (cliOptions.dryRun) {
          await versionBumpDryRun(versionBumpOptions)
          VipNodeJS.existSuccessProcess()
        }

        // 执行版本升级
        await versionBump(versionBumpOptions)
      }
      catch (error) {
        console.log(error)
        const message = (error as Error).message || String(error)
        VipConsole.error(message)
        VipNodeJS.existErrorProcess()
      }
    })

  vipCommander.parse(VipNodeJS.getProcessArgv())
}

releaseVersionCliMain()
