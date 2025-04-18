import type { VipSemverReleaseType } from '../pkgs'
import { createRequire } from 'node:module'
import { VipColor, VipConsole, VipInquirer, VipJSON, VipSemver } from '../pkgs'
import { VipExecutor } from './exec'
import { VipGit } from './git'
import { vipLogger } from './logger'
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
    VipNodeJS.existErrorProcess()
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
async function promptReleaseVersion(currentVersion: string, preid?: string): Promise<string> {
  const nextVersion = VipSemver.getNextVersions(currentVersion, preid)!
  const PADDING = 13

  let version = await VipInquirer.promptSelect(`Current version ${VipColor.green(currentVersion)}`, [
    { value: nextVersion.major, name: `${'major'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.major)}` },
    { value: nextVersion.minor, name: `${'minor'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.minor)}` },
    { value: nextVersion.patch, name: `${'patch'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.patch)}` },
    { value: nextVersion.next, name: `${'next'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.next)}` },
    { value: nextVersion.prePatch, name: `${'pre-patch'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.prePatch)}` },
    { value: nextVersion.preMinor, name: `${'pre-minor'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.preMinor)}` },
    { value: nextVersion.preMajor, name: `${'pre-major'.padStart(PADDING, ' ')} ${VipColor.bold(nextVersion.preMajor)}` },
    { value: currentVersion, name: `${'as-is'.padStart(PADDING, ' ')} ${VipColor.bold(currentVersion)}` },
    { value: 'custom', name: 'custom ...'.padStart(PADDING + 4, ' ') },
  ], { default: nextVersion.next, loop: false, pageSize: 20 })

  if (version === 'custom') {
    version = await VipInquirer.promptInputRequired('Enter the new version number:')
  }

  if (!VipSemver.valid(version)) {
    vipLogger.logByBlank(VipColor.red('That\'s not a valid version number'))
    VipNodeJS.existSuccessProcess()
  }

  return version
}

/**
 * 增加或替换JSON数据
 * - add      增加key、value
 * - replace  替换某个key的值
 */
function replaceOrAddToJSON(json: Record<string, unknown>, cwd?: string): void {
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

/**
 * 更新package.json中的version字段
 */
function updateVersion(newVersion: string, cwd?: string): void {
  const jsonFile = VipJSON.readFile('package.json', cwd ?? VipNodeJS.getProcessCwd())
  jsonFile.data = Object.assign(jsonFile.data, { version: newVersion })
  // 版本替换
  VipJSON.writeFile(jsonFile)
}

/**
 * 获取package.json信息
 */
function getPackageJSON<T>(cwd?: string): T & PackageJSONMainFest {
  const pkgPath = getPackagePath(cwd)
  const pkg = createRequire(import.meta.url)(pkgPath)
  return pkg as (T & PackageJSONMainFest)
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

/**
 * 判断是否存在pnpm-lock.yaml文件
 */
function isExistPnpmLock(cwd?: string): boolean {
  return VipNodeJS.isExistFile('pnpm-lock.yaml', cwd)
}

/**
 * 判断是否为package.json读取的JSON对象
 * - name|version | description  必须存在一个
 */
function isPackageJSON(packageJSON: PackageJSONMainFest): boolean {
  return packageJSON
    && typeof packageJSON === 'object'
    && (packageJSON.name != null || packageJSON.version != null || packageJSON.description != null)
}

function getPkgRedLabel(pkgName: string): string {
  return VipColor.red(`【${pkgName}】`)
}
function getPkgGreenLabel(pkgName: string): string {
  return VipColor.green(`【${pkgName}】`)
}

export interface PackageJSON {
  name: string
  version: string
  private: boolean
}

export interface PackageJSONWithPath extends PackageJSON {
  path: string
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
  promptReleaseVersion,
  getPackagePath,
  isExistPackageJSON,
  isPackageJSON,
  isExistPackageLock,
  isExistPnpmLock,
  replaceOrAddToJSON,
  getPackageJSON,
  getPkgRedLabel,
  getPkgGreenLabel,
  updateVersion,
}
