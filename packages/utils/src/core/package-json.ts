import type { VipSemverReleaseType } from '../pkgs'
import { createRequire } from 'node:module'
import { VipColor, VipConsole, VipInquirer, VipJSON, VipSemver } from '../pkgs'
import { VipExecutor } from './exec'
import { VipGit } from './git'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'

const PACKAGE_JSON_FILE = 'package.json'
const PACKAGE_LOCK_FILE = 'package-lock.json'
const PNPM_LOCK_FILE = 'pnpm-lock.yaml'

/**
 * 统一获取 package.json 所在目录，避免各处重复兜底 cwd。
 */
function resolvePackageCwd(cwd?: string): string {
  return cwd ?? VipNodeJS.getProcessCwd()
}

function isExistFileInCwd(name: string, cwd?: string): boolean {
  return VipNodeJS.isExistFile(name, resolvePackageCwd(cwd))
}

/**
 * 获取 package.json 路径。
 * - 找不到文件时直接退出，保持现有行为不变。
 */
function getPackagePath(cwd?: string): string {
  const packageCwd = resolvePackageCwd(cwd)

  if (!isExistFileInCwd(PACKAGE_JSON_FILE, packageCwd)) {
    VipConsole.log('package.json not found')
    VipNodeJS.exitProcess(1)
  }

  return VipNodeJS.pathJoin(packageCwd, PACKAGE_JSON_FILE)
}

/**
 * 读取 package.json 原始字符串。
 */
function readPackageJSONString(cwd?: string): string {
  return VipNodeJS.readFileToStrByUTF8(getPackagePath(cwd))
}

/**
 * 读取并解析 package.json。
 */
function readPackageJSON<T extends PackageJSONMainFest = PackageJSONMainFest>(cwd?: string): T {
  return VipJSON.parse(readPackageJSONString(cwd), {}) as T
}

/**
 * 读取 package.json 文件对象，保留缩进和换行风格。
 */
function readPackageJSONFile(cwd?: string) {
  return VipJSON.readFile(PACKAGE_JSON_FILE, resolvePackageCwd(cwd))
}

/**
 * 以“读取 -> 变更 -> 写回”的方式更新 package.json。
 * - 统一复用 VipJSON 的文件读写，保留原始格式。
 */
function mutatePackageJSON(
  updater: (packageJSON: PackageJSONMainFest) => PackageJSONMainFest | void,
  cwd?: string,
): void {
  const jsonFile = readPackageJSONFile(cwd)
  jsonFile.data = updater(jsonFile.data) ?? jsonFile.data
  VipJSON.writeFile(jsonFile)
}

/**
 * 执行脚本
 */
async function runScript(scriptName: string, cwd?: string): Promise<void> {
  const data = readPackageJSON(cwd)

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
  return readPackageJSON(cwd).version ?? null
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
  const versionTag = version == null ? undefined : gitTags.find(tag => tag === `v${version}`)

  // 判断package.json中的version是否有对应的tag，没有则用最新的tag
  return versionTag ?? (gitTags.length > 0 ? gitTags[0] : null)
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
  const releaseOptions = [
    ['major', nextVersion.major],
    ['minor', nextVersion.minor],
    ['patch', nextVersion.patch],
    ['next', nextVersion.next],
    ['pre-patch', nextVersion.prePatch],
    ['pre-minor', nextVersion.preMinor],
    ['pre-major', nextVersion.preMajor],
    ['as-is', currentVersion],
  ] as const

  let version = await VipInquirer.promptSelect(`Current version ${VipColor.green(currentVersion)}`, [
    ...releaseOptions.map(([label, value]) => ({
      value,
      name: `${label.padStart(PADDING, ' ')} ${VipColor.bold(value)}`,
    })),
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
  mutatePackageJSON(packageJSON => ({
    ...packageJSON,
    ...json,
  }), cwd)
}

/**
 * 更新package.json中的version字段
 */
function updateVersion(newVersion: string, cwd?: string): void {
  mutatePackageJSON(packageJSON => ({
    ...packageJSON,
    version: newVersion,
  }), cwd)
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
 * 判断package.json是否存在，存在则返回绝对路径
 */
function isExistPackageJSON(cwd?: string): boolean {
  return isExistFileInCwd(PACKAGE_JSON_FILE, cwd)
}

/**
 * 判断package-lock.json是否存在
 */
function isExistPackageLock(cwd?: string): boolean {
  return isExistFileInCwd(PACKAGE_LOCK_FILE, cwd)
}

/**
 * 判断是否存在pnpm-lock.yaml文件
 */
function isExistPnpmLock(cwd?: string): boolean {
  return isExistFileInCwd(PNPM_LOCK_FILE, cwd)
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

/**
 * 获取port字段，默认3000
 * @param cwd
 */
function getPort(cwd?: string): number {
  return getPackageJSON<{ port: number }>(cwd).port ?? 3000
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
  getPort,
}
