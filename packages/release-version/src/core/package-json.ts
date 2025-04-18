import type { VersionBumpOptions } from '@142vip/release-version'
import type { ReleaseOperation } from './operation'
import { VipColor, VipExecutor, vipLogger, VipNodeJS, VipNpm, VipPackageJSON } from '@142vip/utils'
import { NpmScript, ProgressEvent } from '../types'

/**
 * 提示用户输入新版本号，支持用户自定义版本
 */
export async function getNewVersion(operation: ReleaseOperation, preid: string): Promise<ReleaseOperation> {
  const { currentVersion } = operation.state

  const newVersion = await VipPackageJSON.promptReleaseVersion(currentVersion, preid)

  // 版本更新
  return operation.update({ newVersion })
}

export async function getCurrentVersion(operation: ReleaseOperation, arg: VersionBumpOptions) {
  if (arg.currentVersion == null) {
    const currentVersion = VipPackageJSON.getCurrentVersion(arg.cwd)
    const file = VipPackageJSON.getPackagePath(arg.cwd)
    if (currentVersion != null) {
      operation.update({ currentVersionSource: file, currentVersion })
    }
    else {
      vipLogger.logByBlank(`Unable to determine the current version number. Checked file: ${file}.`)
    }
  }
}

/**
 * 更新版本
 */
export function updateVersion(operation: ReleaseOperation) {
  VipPackageJSON.updateVersion(operation.state.newVersion, operation.options.cwd)
}

/**
 * 执行package.json文件中的scripts中配置的钩子函数
 */
export async function runScript(script: NpmScript, operation: ReleaseOperation): Promise<ReleaseOperation> {
  const { cwd, ignoreScripts } = operation.options

  if (!ignoreScripts) {
    const manifest = VipPackageJSON.getPackageJSON(cwd)

    if (VipPackageJSON.isPackageJSON(manifest) && VipPackageJSON.hasScript(manifest, script)) {
      const existNPM = await VipNpm.isExistNpm()
      if (!existNPM) {
        vipLogger.log(VipColor.red('未安装npm，请先安装node.js环境。'))
        VipNodeJS.existErrorProcess()
      }
      await VipExecutor.execShell({ command: `npm run ${script} --silent`, description: '运行脚本命令' })
      operation.update({ event: ProgressEvent.NpmScript, script })
    }
  }
  return operation
}

/**
 * 运行preversion钩子函数
 */
export async function runPreVersionScript(operation: ReleaseOperation): Promise<void> {
  await runScript(NpmScript.PreVersion, operation)
}

/**
 * 运行version钩子函数
 */
export async function runVersionScript(operation: ReleaseOperation): Promise<void> {
  await runScript(NpmScript.Version, operation)
}

/**
 * 运行postversion钩子函数
 */
export async function runPostVersionScript(operation: ReleaseOperation): Promise<void> {
  await runScript(NpmScript.PostVersion, operation)
}
