import type { ReleaseVersionCliOptions } from './releasex.interface'
import { isVipConsoleTraceEnabled, VipColor, VipCommander, VipConsole, VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { description, name, version } from '../package.json'
import { parseReleaseVersionCliOptions, releaseVersionDefaultConfig } from './config'
import { releaseApi } from './release.api'

/** 根据 `--dry-run` 选择预览或正式发版 */
async function runReleaseVersionCli(cliOptions: ReleaseVersionCliOptions): Promise<void> {
  if (isVipConsoleTraceEnabled() || cliOptions.trace) {
    VipConsole.trace('releasex:', cliOptions)
  }

  VipConsole.log(`${VipColor.dim(name)} ${VipColor.dim(`v${version}`)}`)

  const releaseOptions = parseReleaseVersionCliOptions(cliOptions)

  try {
    if (cliOptions.dryRun) {
      await releaseApi.releaseVersionDryRun(releaseOptions)
      VipNodeJS.existSuccessProcess()
      return
    }

    await releaseApi.releaseVersion(releaseOptions)
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(message)
    VipNodeJS.existErrorProcess()
  }
}

function registerReleaseVersionOptions(command: VipCommander): void {
  command
    .option('--preid <preid>', '预发布标识', 'alpha')
    .option('--all', 'git commit 包含全部文件', releaseVersionDefaultConfig.all)
    .option('-c, --commit [message]', '创建 git commit（默认开启）', releaseVersionDefaultConfig.commit as boolean)
    .option('-t, --tag [name]', '创建 git tag', releaseVersionDefaultConfig.tag as boolean)
    .option('-p, --push', '推送到远程', releaseVersionDefaultConfig.push)
    .option('-y, --yes', '跳过发版前确认')
    .option('-r, --recursive', '递归更新子 package.json 版本', releaseVersionDefaultConfig.recursive)
    .option('--skip-git-verify', 'git commit --no-verify')
    .option('--ignore-scripts', '忽略 preversion / version / postversion 脚本', releaseVersionDefaultConfig.ignoreScripts)
    .option('--changelog', '生成 CHANGELOG.md', false)
    .option('--current-version <version>', '指定当前版本')
    .option('-x, --execute <command>', '升版本后执行的命令')
    .option('--scopeName <scopeName>', 'Monorepo 子包 npm 名')
}

/** `releasex` / `release` bin 入口；与 `fa release` 共用 `releaseApi` */
export async function releaseXCliMain(): Promise<void> {
  const program = new VipPackageCliCommander(name, version, description)
  program.registerStandalone({
    summary: '版本迭代与发版',
    description: '更新 package.json 版本，可选 CHANGELOG、git commit / tag / push',
  }, {
    registerBusinessOptions: registerReleaseVersionOptions,
    action: runReleaseVersionCli,
  })
  await program.parseAsync(VipNodeJS.getProcessArgv())
}
