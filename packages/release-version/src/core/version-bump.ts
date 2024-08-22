import process from 'node:process'
import path from 'node:path'
import symbols from 'log-symbols'
import prompts from 'prompts'
import { bold, cyan, green } from 'kolorist'
import { execShell } from '@142vip/common'
import type { VersionBumpOptions, VersionBumpResults } from '../types'
import { NpmScript } from '../types'
import { getNewVersion } from './get-new-version'
import { getCurrentVersion } from './get-current-version'
import { formatVersionString, gitCommit, gitPush, gitTag } from './git'
import { Operation } from './operation'
import { runScript } from './npm-script'
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

    if (!await prompts({
      name: 'yes',
      type: 'confirm',
      message: '是否执行Bumpx命令，升级版本？',
      initial: true,
    }).then(r => r.yes)) {
      process.exit(1)
    }
  }

  // 运行preversion钩子函数
  await runScript(NpmScript.PreVersion, operation)

  // 更新所有文件的版本号
  await updateFiles(operation)

  if (operation.options.changelog) {
    console.log(symbols.info, 'Generate CHANGELOG.md By @142vip/changelog', operation.options.execute)
    try {
      const filePath = path.join(operation.options.cwd, 'CHANGELOG.md')
      const baseCommand = `changelog --output "${filePath}" --name v${operation.state.newVersion}`
      // 支持monorepo子模块
      await execShell(operation.options.scopeName != null
        ? { command: `${baseCommand} --scopeName ${operation.options.scopeName}`, description: `MonoRepo模式，生成${operation.options.scopeName}模块的CHANGELOG文档` }
        : { command: baseCommand, description: '普通模式，生成CHANGELOG文档' })
    }
    catch (e) {
      console.log(symbols.error, 'Happen Error In Generate CHANGELOG!!!')
      console.log(e)
      process.exit(1)
    }
    console.log(symbols.success, 'Generate CHANGELOG.md Finished')
  }

  // 执行命令
  if (operation.options.execute) {
    console.log(symbols.info, 'Executing Script', operation.options.execute)
    await execShell({ command: operation.options.execute, description: '执行execute提供的命令' })
    console.log(symbols.success, 'Script Finished')
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
  console.log()
  console.log(`   files ${operation.options.files.map(i => bold(i)).join('\n         ')}`)

  // 生成CHANGELOG.md文档
  if (operation.options.changelog) {
    console.log(`  generate CHANGELOG.md`)
  }
  if (operation.options.commit)
    console.log(`  commit ${bold(formatVersionString(operation.options.commit.message, operation.state.newVersion))}`)
  if (operation.options.tag)
    console.log(`     tag ${bold(formatVersionString(operation.options.tag.name, operation.state.newVersion))}`)
  if (operation.options.execute)
    console.log(` execute ${bold(operation.options.execute)}`)
  if (operation.options.push)
    console.log(`    push ${cyan(bold('yes'))}`)
  console.log()
  console.log(`    from ${bold(operation.state.currentVersion)}`)
  console.log(`      to ${green(bold(operation.state.newVersion))}`)
  console.log()
}
