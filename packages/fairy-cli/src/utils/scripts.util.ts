import {
  VipColor,
  VipExecutor,
  VipJSON,
  VipNodeJS,
} from '@142vip/utils'
import {
  fairyDefaultConfig,
  FairyHookCommand,
  FairyScriptsConfig,
  loadFairyConfig,
} from '../config'
import { normalizeHookCommands } from './hooks.util'

function readPackageJsonScripts(cwd: string = VipNodeJS.getProcessCwd()): Record<string, string> {
  try {
    const { data: pkg } = VipJSON.readFile('package.json', cwd)
    const scripts = pkg.scripts as Record<string, string> | undefined
    if (scripts == null) {
      return {}
    }
    const out: Record<string, string> = {}
    for (const [key, value] of Object.entries(scripts)) {
      const trimmed = value?.trim()
      if (trimmed != null && trimmed.length > 0) {
        out[key] = trimmed
      }
    }
    return out
  }
  catch {
    return {}
  }
}

/**
 * 聚合 `fa run` 可用脚本（仅合并，不执行）。
 *
 * 优先级从低到高：默认 `scripts` → `fairy.config` → `scripts`（同名整段覆盖）→ `package.json` → `scripts`。
 */
export function resolveFairyScriptsConfig(cwd: string = VipNodeJS.getProcessCwd()): FairyScriptsConfig {
  const fromFairy = loadFairyConfig().scripts ?? fairyDefaultConfig.scripts ?? {}
  const merged: FairyScriptsConfig = { ...fromFairy }
  const fromPackage = readPackageJsonScripts(cwd)
  for (const [key, value] of Object.entries(fromPackage)) {
    merged[key] = value
  }
  return merged
}

/** 解析 `fa run <name>` 将要执行的 shell 列表 */
export function resolveFairyRunCommands(commandName: string, cwd: string = VipNodeJS.getProcessCwd()): string[] {
  const merged = resolveFairyScriptsConfig(cwd)
  const command = merged[commandName] as FairyHookCommand | undefined
  return normalizeHookCommands(command)
}

export async function runFairyCommand(
  commandName: string,
  cwd: string = VipNodeJS.getProcessCwd(),
  extraArgs?: string,
): Promise<void> {
  const commands = resolveFairyRunCommands(commandName, cwd)
  if (commands.length === 0) {
    throw new Error(`未找到脚本「${commandName}」：请使用 fa run --list 查看，或在 fairy.config / package.json 中配置`)
  }
  const tail = extraArgs != null && extraArgs.trim() !== '' ? ` ${extraArgs.trim()}` : ''
  for (const command of commands) {
    await VipExecutor.commandStandardExecutor(`${command}${tail}`)
  }
}

export function listFairyRunCommandNames(cwd: string = VipNodeJS.getProcessCwd()): string[] {
  return Object.keys(resolveFairyScriptsConfig(cwd)).sort()
}

function formatRunScriptPreview(command: FairyHookCommand | undefined): string {
  const previewMax = 56
  const parts = normalizeHookCommands(command)
  if (parts.length === 0) {
    return ''
  }
  const joined = parts.length === 1 ? parts[0] : parts.join(' && ')
  if (joined.length <= previewMax) {
    return joined
  }
  return `${joined.slice(0, previewMax - 3)}...`
}

/** 根 `fa -h` / `fa run -h` 追加：可用 `fa run` 脚本表 */
export function formatFairyRunScriptsHelpSection(): string {
  const merged = resolveFairyScriptsConfig()
  const names = Object.keys(merged).sort()
  if (names.length === 0) {
    return ''
  }

  const nameWidth = Math.min(24, Math.max(...names.map(name => name.length), 'script'.length))
  const lines = names.map((name) => {
    const preview = formatRunScriptPreview(merged[name])
    const padded = name.padEnd(nameWidth)
    return `  ${VipColor.cyan(padded)}  ${VipColor.dim(preview)}`
  })

  return [
    '',
    VipColor.bold('Run scripts'),
    `  ${VipColor.dim('执行：')} ${VipColor.green('fa run <name>')}`,
    `  ${VipColor.dim('来源：')} fairy 默认 / fairy.config → scripts → package.json → scripts（后者优先）`,
    ...lines,
    '',
  ].join('\n')
}
