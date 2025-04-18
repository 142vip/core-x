import type { VersionBumpOptions, VersionBumpResults } from '../types'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipSymbols,
} from '@142vip/utils'
import { updateChangelogDoc } from './changelog'
import { formatVersionString, gitCommit, gitPush, gitTag } from './git'
import { ReleaseOperation } from './operation'
import {
  getCurrentVersion,
  getNewVersion,
  runPostVersionScript,
  runPreVersionScript,
  runVersionScript,
  updateVersion,
} from './package-json'

/**
 * 版本发布
 */
export async function versionBump(arg: VersionBumpOptions): Promise<VersionBumpResults | null> {
  const operation = await ReleaseOperation.start(arg)

  await getCurrentVersion(operation, arg)

  await getNewVersion(operation, arg.preid ?? 'beta')
  // 弹出框，手动确认
  if (arg.confirm) {
    printSummary(operation)

    await promptConfirmRelease()
  }

  await runPreVersionScript(operation)

  updateVersion(operation)

  // 生成CHANGELOG.md文档
  await updateChangelogDoc(operation)

  console.log(2222, operation)
  VipNodeJS.existErrorProcess()

  // 执行命令
  if (operation.options.execute) {
    VipConsole.log(`${VipSymbols.info} Executing Script ${operation.options.execute}`)
    await VipExecutor.execShell({ command: operation.options.execute, description: '执行execute提供的命令' })
    VipConsole.log(`${VipSymbols.success} Script Finished`)
  }

  // 运行version钩子函数
  await runVersionScript(operation)

  // 提交变更
  await gitCommit(operation)

  // 打标记
  await gitTag(operation)

  // 运行钩子函数
  await runPostVersionScript(operation)

  // 推送git信息和标记到远程
  await gitPush(operation)

  return operation.results
}

/**
 * Bumps the version number in one or more files, prompting users if necessary.
 */
export async function versionBumpInfo(arg: VersionBumpOptions): Promise<ReleaseOperation> {
  const operation = await ReleaseOperation.start(arg)

  await getCurrentVersion(operation, arg)
  await getNewVersion(operation, arg.preid ?? 'beta')
  return operation
}

/**
 * 试运行
 */
export async function versionBumpDryRun(arg: VersionBumpOptions): Promise<ReleaseOperation> {
  const operation = await ReleaseOperation.start(arg)

  await getCurrentVersion(operation, arg)

  await getNewVersion(operation, arg.preid ?? 'beta')
  // 弹出框，手动确认
  if (arg.confirm) {
    printSummary(operation)

    const isRelease = await VipInquirer.promptConfirm(`是否执行 ${VipColor.redBright('Bumpx')}命令，升级版本？`, false)
    if (!isRelease) {
      vipLogger.logByBlank(VipColor.green('用户取消操作，安全退出，欢迎下次使用'))
      VipNodeJS.exitProcess(0)
    }
  }

  await runPreVersionScript(operation)

  updateVersion(operation)

  // 生成CHANGELOG.md文档
  await updateChangelogDoc(operation)

  return operation
}

/**
 * 打印参数
 */
function printSummary(operation: ReleaseOperation): void {
  vipLogger.println()

  // 生成CHANGELOG.md文档
  if (operation.options.changelog) {
    VipConsole.log(`  generate CHANGELOG.md`)
  }
  if (operation.options.commit)
    VipConsole.log(`  commit ${VipColor.bold(formatVersionString(operation.options.commit.message, operation.state.newVersion))}`)
  if (operation.options.tag)
    VipConsole.log(`     tag ${VipColor.bold(formatVersionString(operation.options.tag.name, operation.state.newVersion))}`)
  if (operation.options.execute)
    VipConsole.log(` execute ${VipColor.bold(operation.options.execute)}`)
  if (operation.options.push)
    VipConsole.log(`    push ${VipColor.cyan(VipColor.bold('yes'))}`)

  vipLogger.println()

  VipConsole.log(`    from ${VipColor.bold(operation.state.currentVersion)}`)
  VipConsole.log(`      to ${VipColor.green(VipColor.bold(operation.state.newVersion))}`)

  vipLogger.println()
}

/**
 * 确认发布弹出框，手动确认
 */
async function promptConfirmRelease(): Promise<void> {
  const isRelease = await VipInquirer.promptConfirm(`是否执行 ${VipColor.redBright('Bumpx')}命令，升级版本？`, false)
  if (!isRelease) {
    vipLogger.logByBlank(VipColor.green('用户取消操作，安全退出，欢迎下次使用'))
    VipNodeJS.exitProcess(0)
  }
}
