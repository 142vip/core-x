import type { VersionBumpOptions, VersionBumpResults } from '../enums'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipNpm,
  VipSymbols,
} from '@142vip/utils'
import { updateChangelogDoc } from './changelog'
import { gitCommit, gitPush, gitTag } from './git'
import {
  getCurrentVersion,
  getNewVersion,
  runPostVersionScript,
  runPreVersionScript,
  runVersionScript,
  updateVersion,
} from './package-json'
import { ReleaseOperation } from './version-operation'

/**
 * 版本发布
 */
export async function versionBump(options: VersionBumpOptions): Promise<VersionBumpResults | null> {
  const operation = await versionBumpDryRun(options)
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
 * 试运行
 */
export async function versionBumpDryRun(options: VersionBumpOptions): Promise<ReleaseOperation> {
  const operation = await versionBumpInfo(options)

  // 弹出框，手动确认
  if (options.confirm) {
    printSummary(operation)

    await promptConfirmRelease()
  }

  await runPreVersionScript(operation)

  updateVersion(operation)

  // 生成CHANGELOG.md文档
  await updateChangelogDoc(operation)

  // 执行命令
  await doExecute(operation)

  // 运行version钩子函数
  await runVersionScript(operation)

  return operation
}

/**
 * 升级版本号，获取操作的基本信息
 */
export async function versionBumpInfo(arg: VersionBumpOptions): Promise<ReleaseOperation> {
  const operation = await ReleaseOperation.start(arg)

  await getCurrentVersion(operation, arg)
  await getNewVersion(operation, arg.preid ?? 'beta')
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
    VipConsole.log(`  commit ${VipColor.bold(VipNpm.formatVersionStr(operation.options.commit.message, operation.state.newVersion))}`)
  if (operation.options.tag)
    VipConsole.log(`     tag ${VipColor.bold(VipNpm.formatVersionStr(operation.options.tag.name, operation.state.newVersion))}`)
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
  const isRelease = await VipInquirer.promptConfirm(`是否执行 ${VipColor.redBright('bumpx')}命令，升级版本？`, false)
  if (!isRelease) {
    vipLogger.logByBlank(VipColor.green('用户取消操作，安全退出，欢迎下次使用'))
    VipNodeJS.existSuccessProcess()
  }
}

async function doExecute(operation: ReleaseOperation): Promise<void> {
  if (operation.options.execute) {
    VipConsole.log(`${VipSymbols.info} Executing Script ${operation.options.execute}`)
    await VipExecutor.execShell({ command: operation.options.execute, description: '执行execute提供的命令' })
    VipConsole.log(`${VipSymbols.success} Script Finished`)
  }
}
