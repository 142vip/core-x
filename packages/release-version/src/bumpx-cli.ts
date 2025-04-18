import { VipConsole, VipNodeJS } from '@142vip/utils'
import { versionBump } from './core/version-bump'
import { parseArgs, showProgress } from './utils'

/**
 * cli入口
 */
export async function bumpXMain(): Promise<void> {
  try {
    // 解析参数
    const { quiet, options } = await parseArgs()

    // 是否显示进度
    if (!quiet)
      options.progress = options.progress ?? showProgress

    // const vipCommander = new VipCommander(packageName, packageVersion, packageDescription)
    // vipCommander
    //   .usage('[...files]')
    //   .option('--preid <preid>', 'ID for prerelease', 'alpha')
    //   .option('--all', `Include all files`, bumpConfigDefaults.all)
    //   .option('-c, --commit [msg]', 'Commit message', true)
    //   .option('--no-commit', 'Skip commit', false)
    //   .option('-t, --tag [tag]', 'Tag name', true)
    //   .option('--no-tag', 'Skip tag', false)
    //   .option('-p, --push', `Push to remote`, bumpConfigDefaults.push)
    //   .option('-y, --yes', `Skip confirmation`, bumpConfigDefaults.confirm)
    //   .option('-r, --recursive', `Bump package.json files recursively`, bumpConfigDefaults.recursive)
    //   .option('--no-verify', 'Skip git verification')
    //   .option('--ignore-scripts', `Ignore scripts`, bumpConfigDefaults.ignoreScripts)
    //   .option('-q, --quiet', 'Quiet mode')
    //   .option('--current-version <version>', 'Current version')
    //   .option('-x, --execute <command>', 'Commands to execute after version bumps')
    //   .option('--changelog', 'generate CHANGELOG.md', false)
    //   .option('--scopeName <scopeName>', 'Package name in monorepo')
    //   .option('--dry-run', '试运行，软件版本更新', false)
    //   .action(async (options: any) => {
    //     console.log(111, options)
    //     // 执行版本升级
    //     await versionBump(options)
    //   })

    // vipCommander.parse(VipNodeJS.getProcessArgv())

    // 执行版本升级
    await versionBump(options)
  }
  catch (error) {
    console.log(error)
    const message = (error as Error).message || String(error)
    VipConsole.error(message)
    VipNodeJS.existErrorProcess()
  }
}

void bumpXMain()
