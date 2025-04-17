import type { VersionBumpOptions, VersionBumpResults } from '../types'
import path from 'node:path'
import process from 'node:process'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipSymbols,
} from '@142vip/utils'
import { NpmScript } from '../types'
import { getCurrentVersion } from './get-current-version'
import { getNewVersion } from './get-new-version'
import { formatVersionString, gitCommit, gitPush, gitTag } from './git'
import { runScript } from './npm-script'
import { Operation } from './operation'
import { updateFiles } from './update-files'

/**
 * 版本发布
 */
export async function versionBump(arg: (VersionBumpOptions) | string = {}): Promise<VersionBumpResults | undefined> {
  if (typeof arg === 'string')
    arg = { release: arg }

  const operation = await Operation.start(arg)

  // Get the old and new version numbers
  await getCurrentVersion(operation)
  await getNewVersion(operation)

  // 弹出框，手动确认
  if (arg.confirm) {
    printSummary(operation)

    const isRelease = await VipInquirer.promptConfirm(`是否执行 ${VipColor.redBright('Bumpx')}命令，升级版本？`, false)
    if (!isRelease) {
      vipLogger.logByBlank(VipColor.green('用户取消操作，安全退出，欢迎下次使用'))
      VipNodeJS.exitProcess(0)
    }
  }

  // 运行preversion钩子函数
  await runScript(NpmScript.PreVersion, operation)

  // 更新所有文件的版本号
  await updateFiles(operation)

  if (operation.options.changelog) {
    VipConsole.log(`${VipSymbols.info} Generate CHANGELOG.md By @142vip/changelog ${operation.options.execute}`)
    try {
      const filePath = path.join(operation.options.cwd, 'CHANGELOG.md')
      const baseCommand = `npx changelog --output "${filePath}" --name v${operation.state.newVersion}`
      // 支持monorepo子模块
      await VipExecutor.execShell(operation.options.scopeName != null
        ? { command: `${baseCommand} --scopeName ${operation.options.scopeName}`, description: `MonoRepo模式，生成${operation.options.scopeName}模块的CHANGELOG文档` }
        : { command: baseCommand, description: '普通模式，生成CHANGELOG文档' })
    }
    catch (e) {
      VipConsole.log(`${VipSymbols.error} Happen Error In Generate CHANGELOG!!!`)
      VipConsole.error(e)
      process.exit(1)
    }
    VipConsole.log(`${VipSymbols.success} Generate CHANGELOG.md Finished`)
  }

  // 执行命令
  if (operation.options.execute) {
    VipConsole.log(`${VipSymbols.info} Executing Script ${operation.options.execute}`)
    await VipExecutor.execShell({ command: operation.options.execute, description: '执行execute提供的命令' })
    VipConsole.log(`${VipSymbols.success} Script Finished`)
  }

  // 运行version钩子函数
  await runScript(NpmScript.Version, operation)

  // 提交变更
  await gitCommit(operation)

  // 打标记
  await gitTag(operation)

  // 运行钩子函数
  await runScript(NpmScript.PostVersion, operation)

  // 推送git信息和标记到远程
  await gitPush(operation)

  return operation.results
}

/**
 * Bumps the version number in one or more files, prompting users if necessary.
 */
export async function versionBumpInfo(arg: VersionBumpOptions | string = {}): Promise<Operation> {
  if (typeof arg === 'string')
    arg = { release: arg }

  const operation = await Operation.start(arg)

  // Get the old and new version numbers
  await getCurrentVersion(operation)

  await getNewVersion(operation)
  return operation
}

/**
 * 打印参数
 */
function printSummary(operation: Operation) {
  VipConsole.log()
  VipConsole.log(`   files ${operation.options.files.map(i => VipColor.bold(i)).join('\n         ')}`)

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
  VipConsole.log()
  VipConsole.log(`    from ${VipColor.bold(operation.state.currentVersion)}`)
  VipConsole.log(`      to ${VipColor.green(VipColor.bold(operation.state.newVersion))}`)
  VipConsole.log()
}
