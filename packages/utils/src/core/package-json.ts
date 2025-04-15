import type { VipSemverReleaseType } from '../pkgs'
import { createRequire } from 'node:module'
import { VipConsole, VipJSON, VipSemver } from '../pkgs'
import { VipExecutor } from './exec'
import { VipGit } from './git'
import { VipNodeJS } from './nodejs'

/**
 * 执行脚本
 */
async function runScript(scriptName: string, cwd?: string): Promise<void> {
  const pkgPath = getPackagePath(cwd)

  const pkgJSONStr = VipNodeJS.readFileToStrByUTF8(pkgPath)
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
function hasScript(packageJSON: PackageJSONMainFest, script: string) {
  const npmScripts = packageJSON.scripts as Record<string, string> | undefined

  if (npmScripts && typeof npmScripts === 'object')
    return Boolean(npmScripts[script])

  return false
}

/**
 * 读取package.json文件，获取version字段
 */
function getCurrentVersion(cwd?: string): string | null {
  const pkgPath = getPackagePath(cwd)

  const pkgJSONStr = VipNodeJS.readFileToStrByUTF8(pkgPath)

  const pkgJSON = VipJSON.parse(pkgJSONStr, {}) as PackageJSONMainFest

  return pkgJSON.version ?? null
}

/**
 * 获取仓库Version对应的tag
 * - 优先从package.json中获取version
 * - version对应的tag不存在时，再从git记录中获取最新tag
 */
function getVersionGitTag(): string | null {
  // 读取 package.json 文件中的 version 值
  const version = getCurrentVersion()

  const gitTags = VipGit.getTags()

  // 判断package.json中的version是否有对应的tag，没有则用最新的tag
  const filterTag = gitTags.find(tag => tag === `v${version}`)

  return filterTag ?? gitTags.length > 0 ? gitTags[0] : null
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
  const pkgPath = getPackagePath(cwd)

  const pkgJSONStr = VipNodeJS.readFileToStrByUTF8(pkgPath)

  const pkgJSON = VipJSON.parse(pkgJSONStr, {}) as PackageJSONMainFest

  // 遍历新增
  for (const [key, value] of Object.entries(json)) {
    pkgJSON[key] = value
  }

  // 写回
  VipNodeJS.writeFileByUTF8(pkgPath, VipJSON.stringify(pkgJSON))
}

function getPackageJSON<T>(cwd?: string): T & PackageJSONMainFest {
  const pkgPath = getPackagePath(cwd)
  const pkg = createRequire(import.meta.url)(pkgPath)
  return pkg as T & PackageJSONMainFest
}

/**
 * 获取package.json的路径
 */
function getPackagePath(cwd?: string): string {
  const isExist = isExistPackageJSON(cwd)
  if (!isExist) {
    VipConsole.log('package.json not found')
    VipNodeJS.exitProcess(1)
  }
  return VipNodeJS.pathJoin(cwd ?? VipNodeJS.getProcessCwd(), 'package.json')
}

/**
 * 判断package.json是否存在，存在则返回绝对路径
 */
function isExistPackageJSON(cwd?: string): boolean {
  return VipNodeJS.isExistFile('package.json', cwd)
}

/**
 * 判断package-lock.json是否存在
 */
function isExistPackageLock(cwd?: string): boolean {
  return VipNodeJS.isExistFile('package--lock.json', cwd)
}
function isExistPnpmLock(cwd?: string): boolean {
  return VipNodeJS.isExistFile('pnpm-lock.yaml', cwd)
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

export interface PackageJSON {
  name: string
  version: string
  private: boolean
}

export interface PackageJSONMainFest extends PackageJSON {
  [key: string]: unknown
}

/**
 * package.json处理
 */
export const VipPackageJSON = {
  runScript,
  hasScript,
  getCurrentVersion,
  getVersionGitTag,
  getReleaseVersion,
  promptChoiceReleaseVersion,
  getPackagePath,
  isExistPackageJSON,
  isPackageJSON,
  isExistPackageLock,
  isExistPnpmLock,
  replaceOrAddToJSON,
  getPackageJSON,
}
