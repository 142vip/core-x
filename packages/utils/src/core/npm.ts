import type { PackageJSONWithPath } from './package-json'
import { RegistryAddressEnum } from '../enums'
import { VipConsole, VipJSON } from '../pkgs'
import { VipExecutor } from './exec'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'
import { VipPackageJSON } from './package-json'

/**
 * 接受版本字符串模板（例如“release v”或“This is the %s release”）。
 * - 如果模板包含任何“%s”占位符，则它们将替换为版本号;
 * - 否则，版本号将追加到字符串
 */
function formatVersionStr(template: string, newVersion: string): string {
  return template.includes('%s') ? template.replace(/%s/g, newVersion) : `${template}${newVersion}`
}

/**
 * 获取npm版本
 */
async function getNpmVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('echo "v$(npm -v)"')
}

/**
 * 获取node版本
 */
async function getNodeVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('node -v')
}

async function getPnpmVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('echo "v$(pnpm -v)"')
}

async function isExistNodeJs(): Promise<boolean> {
  return !!await getNodeVersion()
}

async function isExistNpm(): Promise<boolean> {
  return !!await getNpmVersion()
}

async function isExistPnpm(): Promise<boolean> {
  return !!await getPnpmVersion()
}

async function isExistCorepack(): Promise<boolean> {
  return !!await VipExecutor.getCommandTrimResponse('corepack --version')
}

async function getCorepackVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('corepack --version')
}

/**
 * 本地 `fa i` 前输出工具链版本（Node / npm / corepack / pnpm）。
 */
async function logInstallToolchain(): Promise<void> {
  const nodeVersion = await getNodeVersion()
  const npmVersion = await getNpmVersion()
  const corepackVersion = await getCorepackVersion()
  const pnpmVersion = await getPnpmVersion()
  vipLogger.log(`Node: ${nodeVersion ?? '未检测到'}`)
  vipLogger.log(`npm: ${npmVersion ?? '未检测到'}`)
  vipLogger.log(`corepack: ${corepackVersion ?? '未检测到'}`)
  vipLogger.log(`pnpm: ${pnpmVersion ?? '未检测到'}`)
}

/** corepack 拉取 pnpm 时默认 npm 官方源，避免镜像 302（与 `fa ci` 一致） */
const COREPACK_NPM_REGISTRY_DEFAULT = RegistryAddressEnum.NPM

async function getTurboPackVersion(): Promise<string | null> {
  return await VipExecutor.getCommandTrimResponse('echo "v$(turbo --version)"')
}
async function isExistTurboPack(): Promise<boolean> {
  return !!await getTurboPackVersion()
}

interface TurboJSON {
  packageManager: string
  packages: {
    count: number
    items: {
      name: string
      path: string
    }[]
  }
}

/**
 * 获取TurboPack匹配到的所有apps
 */
async function getTurboPackApps(): Promise<string[]> {
  const command = 'npx turbo ls --output json'
  const turboJsonStr = await VipExecutor.getCommandTrimResponse(command)

  try {
    if (turboJsonStr == null) {
      return []
    }
    const turboJSON = VipJSON.parse(turboJsonStr, {}) as TurboJSON
    return turboJSON.packages?.items.map(item => item.name)
  }
  catch {
    return []
  }
}

/**
 * 获取pnpm ls命令执行后的结果，并返回一个PackageJSON
 * 参考：
 * - pnpm 命令： https://pnpm.io/cli/list
 * - filter参数： https://pnpm.io/filtering
 */
function getPackageJSONByPnpm(pnpmLsCommand: string): Array<PackageJSONWithPath> {
  try {
    const packageStr = VipExecutor.execCommandSync(pnpmLsCommand)
    return JSON.parse(packageStr) as Array<PackageJSONWithPath>
  }
  catch (error) {
    VipConsole.log('Failed to get the release package name, in function getPackageJSONByPnpm')
    VipConsole.error(error)
    return []
  }
}

/**
 * 基于npm安装依赖
 */
async function assertNodeAndNpmForInstall(): Promise<void> {
  const nodeExist = await isExistNodeJs()
  if (!nodeExist) {
    vipLogger.error('未安装 Node.js，无法安装依赖。')
    VipNodeJS.exitProcess(1)
  }
  const npmExist = await isExistNpm()
  if (!npmExist) {
    vipLogger.error('未检测到 npm（请确认 Node.js 安装完整）。')
    VipNodeJS.exitProcess(1)
  }
  const npmVersion = await getNpmVersion()
  vipLogger.log(`npm 已就绪，版本: ${npmVersion ?? 'unknown'}`)
}

/**
 * lock 策略：`fa i` / `fa ci` 共用。
 * - 默认：有 lock → `npm ci`；无 lock → `npm i` 生成 lock
 * - `-f`：`npm i --force` 更新 lock
 */
function buildNpmInstallCommand(args: {
  registry: string
  force?: boolean
  cwd?: string
  ignoreScripts?: boolean
}): string {
  const hasLock = VipPackageJSON.isExistPackageLock(args.cwd)
  const ignore = args.ignoreScripts === true ? ' --ignore-scripts' : ''
  if (args.force === true) {
    return `npm i --force --registry=${args.registry}${ignore}`
  }
  if (hasLock) {
    return `npm ci --registry=${args.registry}${ignore}`
  }
  return `npm i --registry=${args.registry}${ignore}`
}

async function installByNpm(args: {
  force?: boolean
  registry?: string
  cwd?: string
  ignoreScripts?: boolean
}): Promise<void> {
  await assertNodeAndNpmForInstall()
  const registry = args.registry ?? RegistryAddressEnum.NPM
  await VipExecutor.commandStandardExecutor(buildNpmInstallCommand({
    registry,
    force: args.force,
    cwd: args.cwd,
    ignoreScripts: args.ignoreScripts,
  }))
}

/**
 * `fa i` 的 lock 策略（`fa ci` 不走这里，见 {@link formatCiPnpmInstallCommand}）。
 * - 默认：有 lock → `--frozen-lockfile`；无 lock → 生成 lock
 * - `-f`：`--force` 更新 lock
 */
function buildPnpmInstallCommand(args: {
  registry: string
  force?: boolean
  cwd?: string
  extraArgs?: string
  ignoreScripts?: boolean
}): string {
  const hasLock = VipPackageJSON.isExistPnpmLock(args.cwd)
  const parts = ['pnpm i']
  if (args.force === true) {
    parts.push('--force')
  }
  else if (hasLock) {
    parts.push('--frozen-lockfile')
  }
  if (args.ignoreScripts === true) {
    parts.push('--ignore-scripts')
  }
  parts.push(`--registry ${args.registry}`)
  const extra = args.extraArgs?.trim()
  if (extra != null && extra !== '') {
    parts.push(extra)
  }
  return parts.join(' ')
}

async function installByPnpm(args: {
  force?: boolean
  registry?: string
  cwd?: string
  /** 无 pnpm 时经 corepack 启用 */
  corepackNpmRegistry?: string
  ignoreScripts?: boolean
}): Promise<void> {
  await assertNodeAndNpmForInstall()

  const corepackNpmRegistry = args.corepackNpmRegistry
    ?? VipNodeJS.getProcessEnv('COREPACK_REGISTRY')
    ?? COREPACK_NPM_REGISTRY_DEFAULT

  const pnpmExist = await isExistPnpm()
  if (!pnpmExist) {
    await ensureCorepackAndPnpm(corepackNpmRegistry)
  }

  const registry = args.registry ?? RegistryAddressEnum.NPM
  await VipExecutor.commandStandardExecutor(buildPnpmInstallCommand({
    registry,
    force: args.force,
    cwd: args.cwd,
    ignoreScripts: args.ignoreScripts,
  }))
}

export interface VipNpmCiInstallOptions {
  /** pnpm 安装源，默认 `NPM_REGISTRY` 环境变量或 npmmirror */
  registry?: string
  /** corepack 下载 pnpm 用的 npm 源，默认 `COREPACK_REGISTRY` 或 npm 官方 */
  corepackNpmRegistry?: string
  ignoreScripts?: boolean
  /** 追加到 `pnpm i` 末尾，对应 `fa ci` 的 `"$@"` */
  extraPnpmArgs?: string | readonly string[]
}

/** 传给 `sh -c` 时按 `"$@"` 逐项引用，避免空格和通配符被再展开 */
function quoteCiPassthroughArg(value: string): string {
  if (/^[\w@%+=:,./~-]+$/.test(value)) {
    return value
  }
  return `'${value.replaceAll('\'', `'\\''`)}'`
}

function formatCiPassthrough(extra?: string | readonly string[]): string | undefined {
  if (extra == null) {
    return undefined
  }
  if (typeof extra === 'string') {
    const trimmed = extra.trim()
    return trimmed === '' ? undefined : trimmed
  }
  const quoted = extra
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(quoteCiPassthroughArg)
  return quoted.length > 0 ? quoted.join(' ') : undefined
}

/**
 * `fa ci` 的安装命令：始终 `--frozen-lockfile --force`。
 * `pnpm i --registry <url> --frozen-lockfile --force [--ignore-scripts] [extra]`
 */
function formatCiPnpmInstallCommand(args: {
  registry: string
  extraArgs?: string | readonly string[]
  ignoreScripts?: boolean
}): string {
  const parts = ['pnpm i', `--registry ${args.registry}`, '--frozen-lockfile', '--force']
  if (args.ignoreScripts === true) {
    parts.push('--ignore-scripts')
  }
  const extra = formatCiPassthrough(args.extraArgs)
  if (extra != null) {
    parts.push(extra)
  }
  return parts.join(' ')
}

/**
 * 确保 corepack / pnpm 可用（对齐 `fa ci`）。
 */
async function ensureCorepackAndPnpm(corepackNpmRegistry: string): Promise<void> {
  const corepackExist = await isExistCorepack()
  if (!corepackExist) {
    vipLogger.log('未检测到 corepack，正在安装...')
    await VipExecutor.commandStandardExecutor('npm i -g corepack@latest')
  }
  else {
    const corepackVersion = await VipExecutor.getCommandTrimResponse('corepack --version')
    vipLogger.log(`corepack 已安装，版本: ${corepackVersion ?? 'unknown'}`)
  }

  const pnpmExist = await isExistPnpm()
  if (!pnpmExist) {
    vipLogger.log(`通过 corepack 启用 pnpm（COREPACK_NPM_REGISTRY=${corepackNpmRegistry}）`)
    await VipExecutor.commandStandardExecutor(
      `COREPACK_NPM_REGISTRY=${corepackNpmRegistry} corepack enable pnpm`,
    )
  }
  else {
    const pnpmVersion = await getPnpmVersion()
    vipLogger.log(`pnpm 已安装，版本: ${pnpmVersion ?? 'unknown'}`)
  }
}

/**
 * 对齐 `fa ci`：打印命令与 `COREPACK_REGISTRY`，确保 corepack / pnpm，再执行
 * `pnpm i --registry <url> --frozen-lockfile --force`。
 */
async function installForCi(options: VipNpmCiInstallOptions = {}): Promise<void> {
  await assertNodeAndNpmForInstall()

  const registry = options.registry
    ?? VipNodeJS.getProcessEnv('NPM_REGISTRY')
    ?? RegistryAddressEnum.NPM_ALIBABA
  const corepackNpmRegistry = options.corepackNpmRegistry
    ?? VipNodeJS.getProcessEnv('COREPACK_REGISTRY')
    ?? COREPACK_NPM_REGISTRY_DEFAULT

  const command = formatCiPnpmInstallCommand({
    registry,
    extraArgs: options.extraPnpmArgs,
    ignoreScripts: options.ignoreScripts,
  })
  vipLogger.log(`运行命令: ${command}`)
  vipLogger.log(`COREPACK_REGISTRY: ${corepackNpmRegistry}`)

  await ensureCorepackAndPnpm(corepackNpmRegistry)
  await VipExecutor.commandStandardExecutor(command)
}

async function userLogin(args: { registry: string }): Promise<void> {
  const command = `npm login --registry ${args.registry}`
  await VipExecutor.commandStandardExecutor(command)
}

export const VipNpm = {
  formatVersionStr,
  getNpmVersion,
  getNodeVersion,
  getCorepackVersion,
  getPnpmVersion,
  logInstallToolchain,
  getTurboPackVersion,
  isExistTurboPack,
  getTurboPackApps,
  isExistNodeJs,
  isExistNpm,
  isExistPnpm,
  installByNpm,
  installByPnpm,
  formatCiPnpmInstallCommand,
  installForCi,
  getPackageJSONByPnpm,
  userLogin,
}
