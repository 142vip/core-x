import type { FairyCommandOptions } from '../constant'
import {
  RegistryAddressEnum,
  VipNodeJS,
  VipNpm,
  VipPackageJSON,
} from '@142vip/utils'
import { loadFairyConfig } from '../config'

/** CLI 源相关开关（npm 安装与 corepack 拉 pnpm 共用解析规则） */
export interface InstallRegistryCliFlags {
  /** `--*-registry [url]`：无 url 时表示 npm 官方；有 url 为自定义 */
  registry?: boolean | string
  aliRegistry?: boolean
  tencentRegistry?: boolean
}

const ENV_NPM_REGISTRY = 'NPM_REGISTRY'
const ENV_COREPACK_REGISTRY = 'COREPACK_REGISTRY'

/** 供帮助文案引用的预设源（与 `RegistryAddressEnum` 一致） */
export const INSTALL_REGISTRY_PRESETS = {
  npm: RegistryAddressEnum.NPM,
  alibaba: RegistryAddressEnum.NPM_ALIBABA,
  tencent: RegistryAddressEnum.NPM_TENCENT,
} as const

/**
 * 解析 registry URL（优先级：自定义 url → 腾讯 → 阿里 → 仅 `--*-registry` → 环境变量 → 默认值）。
 */
export function resolveInstallRegistryUrl(
  flags: InstallRegistryCliFlags,
  options: { envVar: string, defaultUrl: string },
): string {
  const custom = flags.registry
  if (typeof custom === 'string' && custom.trim() !== '') {
    return custom.trim()
  }
  if (flags.tencentRegistry === true) {
    return RegistryAddressEnum.NPM_TENCENT
  }
  if (flags.aliRegistry === true) {
    return RegistryAddressEnum.NPM_ALIBABA
  }
  if (custom === true) {
    return RegistryAddressEnum.NPM
  }
  const fromEnv = VipNodeJS.getProcessEnv(options.envVar)
  if (fromEnv != null && fromEnv.trim() !== '') {
    return fromEnv.trim()
  }
  return options.defaultUrl
}

/** `fa i`：pnpm / npm 安装源（未指定时默认 npm 官方） */
export function resolveLocalNpmInstallRegistry(flags: InstallRegistryCliFlags): string {
  return resolveInstallRegistryUrl(flags, {
    envVar: ENV_NPM_REGISTRY,
    defaultUrl: RegistryAddressEnum.NPM,
  })
}

/** `fa ci`：默认 npmmirror */
export function resolveCiNpmInstallRegistry(flags: InstallRegistryCliFlags): string {
  return resolveInstallRegistryUrl(flags, {
    envVar: ENV_NPM_REGISTRY,
    defaultUrl: RegistryAddressEnum.NPM_ALIBABA,
  })
}

/** corepack 拉取 pnpm（未指定时默认 npm 官方，避免镜像 302） */
export function resolveCorepackNpmRegistry(flags: InstallRegistryCliFlags): string {
  return resolveInstallRegistryUrl(flags, {
    envVar: ENV_COREPACK_REGISTRY,
    defaultUrl: RegistryAddressEnum.NPM,
  })
}

/** `fa install` / `fa ci` 共用 CLI 参数 */
export interface InstallCliOptions extends FairyCommandOptions {
  npmRegistry?: boolean | string
  npmAliRegistry?: boolean
  npmTencentRegistry?: boolean
  corepackRegistry?: boolean | string
  corepackAliRegistry?: boolean
  corepackTencentRegistry?: boolean
  /** `-f`：强制更新 lock（`pnpm i --force` / `npm i --force`） */
  force?: boolean
  /** CLI `--ignore-scripts` 或 `fairy.config` → `install.ignoreScripts` */
  ignoreScripts?: boolean
  /** 仅执行 `fairy.config` → `hooks.<name>`，不安装依赖 */
  hookOnly?: string
  npm?: boolean
}

/** 合并 CLI 与 `fairy.config` 的安装选项 */
export function mergeInstallCliOptions(args: InstallCliOptions): InstallCliOptions {
  const fromConfig = loadFairyConfig().install?.ignoreScripts === true
  return {
    ...args,
    ignoreScripts: args.ignoreScripts === true || fromConfig,
  }
}

function npmRegistryFlags(args: InstallCliOptions): InstallRegistryCliFlags {
  return {
    registry: args.npmRegistry,
    aliRegistry: args.npmAliRegistry,
    tencentRegistry: args.npmTencentRegistry,
  }
}

function corepackRegistryFlags(args: InstallCliOptions): InstallRegistryCliFlags {
  return {
    registry: args.corepackRegistry,
    aliRegistry: args.corepackAliRegistry,
    tencentRegistry: args.corepackTencentRegistry,
  }
}

/**
 * 是否走 CI 安装（仅 `fa ci` 别名）。
 */
export function isCiInstallMode(): boolean {
  const subcommand = VipNodeJS.getProcessArgv()[2]
  return subcommand === 'ci'
}

/** dry-run：`fa i` 的 pnpm 命令摘要（与 `VipNpm.installByPnpm` lock 策略一致） */
export function formatPnpmInstallPreview(
  registry: string,
  force?: boolean,
  extra?: string,
  ignoreScripts?: boolean,
): string {
  const hasLock = VipPackageJSON.isExistPnpmLock()
  const lockHint = force
    ? '--force'
    : (hasLock ? '--frozen-lockfile' : '生成 pnpm-lock.yaml')
  const scriptHint = ignoreScripts === true ? ' --ignore-scripts' : ''
  const tail = extra != null && extra.trim() !== '' ? ` ${extra.trim()}` : ''
  return `pnpm i ${lockHint}${scriptHint} --registry ${registry}${tail}`
}

/** dry-run：npm 安装命令摘要 */
export function formatNpmInstallPreview(registry: string, force?: boolean, ignoreScripts?: boolean): string {
  const hasLock = VipPackageJSON.isExistPackageLock()
  const scriptHint = ignoreScripts === true ? ' --ignore-scripts' : ''
  let base: string
  if (force === true) {
    base = 'npm i --force'
  }
  else if (hasLock) {
    base = 'npm ci'
  }
  else {
    base = 'npm i（生成 package-lock.json）'
  }
  return `${base} --registry=${registry}${scriptHint}`
}

export function buildCiInstallPreview(args: InstallCliOptions, extraPnpmArgs?: string | readonly string[]): string {
  const registry = resolveCiNpmInstallRegistry(npmRegistryFlags(args))
  const command = VipNpm.formatCiPnpmInstallCommand({
    registry,
    extraArgs: extraPnpmArgs,
    ignoreScripts: args.ignoreScripts,
  })
  return `corepack + ${command}`
}

export function buildLocalPnpmInstallPreview(args: InstallCliOptions): string {
  const registry = resolveLocalNpmInstallRegistry(npmRegistryFlags(args))
  return formatPnpmInstallPreview(registry, args.force, undefined, args.ignoreScripts)
}

export function buildLocalNpmInstallPreview(args: InstallCliOptions): string {
  const registry = resolveLocalNpmInstallRegistry(npmRegistryFlags(args))
  return formatNpmInstallPreview(registry, args.force, args.ignoreScripts)
}

export async function execCiInstall(args: InstallCliOptions, extraPnpmArgs?: string | readonly string[]): Promise<void> {
  await VipNpm.installForCi({
    registry: resolveCiNpmInstallRegistry(npmRegistryFlags(args)),
    corepackNpmRegistry: resolveCorepackNpmRegistry(corepackRegistryFlags(args)),
    ignoreScripts: args.ignoreScripts,
    extraPnpmArgs,
  })
}

export async function execLocalPnpmInstall(args: InstallCliOptions): Promise<void> {
  await VipNpm.logInstallToolchain()
  await VipNpm.installByPnpm({
    force: args.force,
    registry: resolveLocalNpmInstallRegistry(npmRegistryFlags(args)),
    corepackNpmRegistry: resolveCorepackNpmRegistry(corepackRegistryFlags(args)),
    ignoreScripts: args.ignoreScripts,
  })
}

export async function execLocalNpmInstall(args: InstallCliOptions): Promise<void> {
  await VipNpm.logInstallToolchain()
  await VipNpm.installByNpm({
    force: args.force,
    registry: resolveLocalNpmInstallRegistry(npmRegistryFlags(args)),
    ignoreScripts: args.ignoreScripts,
  })
}
