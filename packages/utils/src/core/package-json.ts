import type { VipSemverReleaseType } from '@142vip/utils'
import { createRequire } from 'node:module'
import {
  VipConsole,
  VipExecutor,
  VipJSON,
  VipNodeJS,
  VipSemver,
} from '@142vip/utils'

/**
 * 执行脚本
 */
async function runScript(scriptName: string, cwd?: string): Promise<void> {
  const pkgPath = isExistPackageJSON(cwd)

  const pkgJSONStr = await VipNodeJS.readFileToStrByUTF8(pkgPath)
  const data = JSON.parse(pkgJSONStr)

  if (!hasScript(data, scriptName)) {
    VipConsole.error(`script not found in package.json，scriptName: ${scriptName}`)
    VipNodeJS.exitProcess(1)
  }

  // 执行脚本
  VipExecutor.execCommandSync(`npm run ${scriptName} --silent`)
}

/**
 * 判断package.json文件中是否存在指定的脚本
 */
function hasScript(packageJSON: PackageJsonMainFest, script: string) {
  const npmScripts = packageJSON.scripts as Record<string, string> | undefined

  if (npmScripts && typeof npmScripts === 'object')
    return Boolean(npmScripts[script])

  return false
}

/**
 * 读取package.json文件，获取version字段
 */
async function getCurrentVersion(cwd?: string): Promise<string | null> {
  const pkgPath = isExistPackageJSON(cwd)

  const pkgJSONStr = await VipNodeJS.readFileToStrByUTF8(pkgPath)

  const pkgJSON = VipJSON.parse(pkgJSONStr, {}) as PackageJsonMainFest

  return pkgJSON.version ?? null
}

/**
 * 基于当前版本，生成新的version
 */
function getReleaseVersion(currentVersion: string, releaseType: VipSemverReleaseType): string | null {
  return VipSemver.inc(currentVersion, releaseType)
}

/**
 * 提供选择框，支持用户自动选择version
 */
function promptChoiceReleaseVersion(): void {

}

/**
 * 增加或替换JSON数据
 * - add      增加key、value
 * - replace  替换某个key的值
 */
async function replaceOrAddToJSON(json: Record<string, unknown>, cwd?: string) {
  const pkgPath = isExistPackageJSON(cwd)

  const pkgJSONStr = await VipNodeJS.readFileToStrByUTF8(pkgPath)

  const pkgJSON = VipJSON.parse(pkgJSONStr, {}) as PackageJsonMainFest

  // 遍历新增
  for (const [key, value] of Object.entries(json)) {
    pkgJSON[key] = value
  }

  // 写回
  await VipNodeJS.writeFileByUTF8(pkgPath, VipJSON.stringify(pkgJSON))
}

function getPackageJSON<T>(cwd?: string): T & PackageJsonMainFest {
  const pkgPath = isExistPackageJSON(cwd)
  const pkg = createRequire(import.meta.url)(pkgPath)
  return pkg as T & PackageJsonMainFest
}

/**
 * 判断package.json是否存在，存在则返回绝对路径
 */
function isExistPackageJSON(cwd?: string): string {
  if (cwd == null) {
    cwd = VipNodeJS.getProcessCwd()
  }
  const pkgPath = VipNodeJS.pathJoin(cwd, 'package.json')
  const isExist = VipNodeJS.exitPath(pkgPath)

  if (!isExist) {
    VipConsole.log('package.json not found')
    VipNodeJS.exitProcess(1)
  }

  return pkgPath
}

/**
 * 判断是否为package.json读取的JSON对象
 */
function isPackageJSON(packageJSON?: any): boolean {
  return packageJSON
    && typeof packageJSON === 'object'
    && packageJSON.name != null
    && packageJSON.version != null
    && packageJSON.description != null
}

export interface PackageJsonMainFest {
  name: string
  version: string
  description: string
  [key: string]: unknown
}

/**
 * package.json处理
 */
export const VipPackageJSON = {
  runScript,
  hasScript,
  getCurrentVersion,
  getReleaseVersion,
  promptChoiceReleaseVersion,
  isExistPackageJSON,
  isPackageJSON,
  replaceOrAddToJSON,
  getPackageJSON,
}
