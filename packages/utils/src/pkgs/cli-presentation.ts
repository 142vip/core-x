import type { VipCommander, VipCommanderExitError } from './commander'
import { VipNodeJS } from '../core/nodejs'
import { ProcessExitCodeEnum } from '../enums/exit-code.enum'
import { VipColor, VipSymbols } from './color'
import {
  isVipConsoleTraceEnabled,
  registerVipCommanderExitOverrideTree,
  VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS,
  VIP_COMMANDER_EXIT_HELP,
  VIP_COMMANDER_EXIT_HELP_DISPLAYED,
  VIP_COMMANDER_EXIT_UNKNOWN_COMMAND,
  VIP_COMMANDER_EXIT_VERSION,
} from './commander'
import { VipConsole } from './console'

/** npm 包身份（`@scope/name` + `version`） */
export interface VipCliIdentity {
  name: string
  version: string
}

export interface VipCliCommandHelpRow {
  command: string
  aliases?: string[]
  summary: string
}

// eslint-disable-next-line no-control-regex -- 剥离终端 ANSI 色码以计算可见列宽
const ANSI_ESCAPE_RE = /\u001B\[[\d;]*m/g

/** 计算终端可见宽度（去掉 ANSI 转义） */
export function vipCliVisibleLength(text: string): number {
  return text.replace(ANSI_ESCAPE_RE, '').length
}

function buildCommandLeftPlain(row: VipCliCommandHelpRow): string {
  const aliasText = row.aliases != null && row.aliases.length > 0
    ? ` (${row.aliases.join(', ')})`
    : ''
  return `${row.command}${aliasText}`
}

function buildCommandLeftColored(row: VipCliCommandHelpRow): string {
  const aliasText = row.aliases != null && row.aliases.length > 0
    ? VipColor.dim(` (${row.aliases.join(', ')})`)
    : ''
  return `${VipColor.cyan(row.command)}${aliasText}`
}

/**
 * 子命令帮助列表：左列命令+别名对齐，右列说明对齐。
 */
export function formatVipCliAlignedCommands(
  rows: VipCliCommandHelpRow[],
  options?: { indent?: number, columnGap?: number },
): string {
  const indent = options?.indent ?? 2
  const columnGap = options?.columnGap ?? 2
  const prefix = ' '.repeat(indent)

  const leftPlainList = rows.map(buildCommandLeftPlain)
  const maxLeft = leftPlainList.reduce((max, left) => Math.max(max, vipCliVisibleLength(left)), 0)

  return rows.map((row, index) => {
    const leftColored = buildCommandLeftColored(row)
    const pad = ' '.repeat(maxLeft - vipCliVisibleLength(leftPlainList[index]))
    return `${prefix}${leftColored}${pad}${' '.repeat(columnGap)}${row.summary}`
  }).join('\n')
}

/** CLI 启动横幅（纯文本，含首尾空行） */
export function formatVipCliBanner(identity: VipCliIdentity, options?: { binAliases?: string }): string {
  const lines = [
    '',
    `  ${VipColor.cyan(identity.name)}  ${VipColor.dim(`v${identity.version}`)}`,
  ]
  if (options?.binAliases != null && options.binAliases.length > 0) {
    lines.push(`  ${VipColor.dim('别名')}  ${options.binAliases}`)
  }
  lines.push('')
  return lines.join('\n')
}

/** CLI 启动横幅：`@scope/pkg` + 版本，可选入口别名行 */
export function logVipCliBanner(identity: VipCliIdentity, options?: { binAliases?: string }): void {
  VipConsole.log(formatVipCliBanner(identity, options))
}

/** 键值元信息行（label 左对齐） */
export function logVipCliMetaLines(
  lines: ReadonlyArray<{ label: string, value: string }>,
  options?: { indent?: number },
): void {
  const indent = options?.indent ?? 2
  const prefix = ' '.repeat(indent)
  const maxLabel = lines.reduce((max, line) => Math.max(max, line.label.length), 0)

  for (const line of lines) {
    const pad = ' '.repeat(maxLabel - line.label.length)
    VipConsole.log(`${prefix}${VipColor.dim(line.label)}${pad}  ${line.value}`)
  }
  VipConsole.log('')
}

/** `--trace` 前缀（含包名与版本） */
export function formatVipCliTraceLabel(identity: VipCliIdentity, step: string): string {
  return `${VipColor.dim(`[trace ${identity.name} v${identity.version}]`)} ${step}`
}

/** 输出 trace 日志（未开启 `--trace` 时不打印） */
export function logVipCliTrace(
  identity: VipCliIdentity,
  step: string,
  detail?: Record<string, unknown>,
): void {
  if (!isVipConsoleTraceEnabled()) {
    return
  }
  const label = formatVipCliTraceLabel(identity, step)
  if (detail != null && Object.keys(detail).length > 0) {
    VipConsole.trace(label)
    VipConsole.trace(detail)
  }
  else {
    VipConsole.trace(label)
  }
}

const DRY_RUN_RULE = VipColor.dim('─'.repeat(52))

/**
 * 统一 dry-run 预览：横幅 + 编号步骤 + 脚注。
 */
export function logVipCliDryRun(
  identity: VipCliIdentity,
  subcommand: string,
  steps: string[],
  options?: { note?: string },
): void {
  VipConsole.log('')
  VipConsole.log(`  ${VipColor.cyan(identity.name)}  ${VipColor.dim(`v${identity.version}`)}`)
  VipConsole.log('')
  VipConsole.log(`  ${VipSymbols.warning} ${VipColor.yellow('dry-run')}  ${VipColor.cyan(subcommand)}`)
  VipConsole.log(`  ${DRY_RUN_RULE}`)

  steps.forEach((step, index) => {
    const no = VipColor.dim(String(index + 1).padStart(2, ' '))
    VipConsole.log(`  ${no}  ${VipColor.dim('→')}  ${step}`)
  })

  VipConsole.log(`  ${DRY_RUN_RULE}`)
  VipConsole.log(
    `  ${VipSymbols.info} ${options?.note ?? VipColor.dim('未写入磁盘，未执行副作用命令。')}`,
  )
  VipConsole.log('')
}

const UNKNOWN_COMMAND_RE = /unknown command '([^']+)'/
const EXCESS_ARGS_RE = /too many arguments for '([^']+)'/

/** 根程序解析失败时的展示配置（与 `fa` 未知子命令页同构） */
export interface VipPackageCliErrorPresentation {
  identity: VipCliIdentity
  /** `logVipCliBanner` 的别名行（彩色字符串） */
  binAliases?: string
  /**
   * 未知子命令时输出「可用子命令」对齐列表；多子命令 CLI（如 `fa`）传入。
   * standalone bin 可省略，仅展示横幅 + 错误 + 查看帮助。
   */
  renderSupportedCommands?: () => string
  /** 页脚「查看帮助：…」（可多行，含缩进） */
  renderHelpHintLine: () => string
  /**
   * 多余参数时的额外提示；返回 `true` 表示已完整输出，不再打印默认查看帮助行。
   */
  renderExcessArgumentsExtra?: (subcommand: string | undefined) => boolean
}

/** 示例命令行 + 等价说明（`（fan / ffr 相同）`） */
export function formatVipCliHelpExample(commandLine: string, equivalentNote?: string): string {
  const note = equivalentNote != null && equivalentNote.length > 0
    ? ` ${VipColor.dim(equivalentNote)}`
    : ''
  return `${VipColor.green(commandLine)}${note}`
}

function printCliHeader(presentation: VipPackageCliErrorPresentation): void {
  logVipCliBanner(presentation.identity, { binAliases: presentation.binAliases })
}

function printSupportedCommandsFooter(presentation: VipPackageCliErrorPresentation): void {
  const supported = presentation.renderSupportedCommands?.()
  if (supported != null && supported.length > 0) {
    VipConsole.log(`  ${VipColor.bold('可用子命令：')}`)
    VipConsole.log(supported)
    VipConsole.log('')
  }
  VipConsole.log(presentation.renderHelpHintLine())
}

function printUnknownRootCommand(
  presentation: VipPackageCliErrorPresentation,
  unknownName: string,
): void {
  printCliHeader(presentation)
  VipConsole.error(`  ${VipColor.redBright('未知子命令')} ${VipColor.yellow(unknownName)}`)
  printSupportedCommandsFooter(presentation)
}

function printExcessArgumentsHint(
  presentation: VipPackageCliErrorPresentation,
  rawMessage: string,
): void {
  printCliHeader(presentation)
  const matched = EXCESS_ARGS_RE.exec(rawMessage)
  const sub = matched?.[1]
  const detail = sub != null
    ? `子命令 ${VipColor.cyan(sub)} 不接受多余参数`
    : rawMessage.replace(/^error:\s*/i, '').trim()
  VipConsole.error(`  ${VipColor.redBright(detail)}`)
  if (presentation.renderExcessArgumentsExtra?.(sub) === true) {
    return
  }
  VipConsole.log(`  ${presentation.renderHelpHintLine().trimStart()}`)
}

function handleVipPackageCliCommanderError(
  presentation: VipPackageCliErrorPresentation,
  error: VipCommanderExitError,
): void {
  const message = error.message

  if (
    error.code === VIP_COMMANDER_EXIT_HELP
    || error.code === VIP_COMMANDER_EXIT_HELP_DISPLAYED
    || error.code === VIP_COMMANDER_EXIT_VERSION
  ) {
    VipNodeJS.exitProcess(ProcessExitCodeEnum.SUCCESS)
    return
  }

  if (error.code === VIP_COMMANDER_EXIT_UNKNOWN_COMMAND) {
    const matched = UNKNOWN_COMMAND_RE.exec(message)
    printUnknownRootCommand(presentation, matched?.[1] ?? message)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  if (error.code === VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS) {
    printExcessArgumentsHint(presentation, message)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  printCliHeader(presentation)
  VipConsole.error(`  ${message.replace(/^error:\s*/i, '').trim()}`)
  VipNodeJS.exitProcess(error.exitCode ?? ProcessExitCodeEnum.FatalError)
}

/**
 * 注册包 CLI 解析错误处理：屏蔽裸 `error: unknown command`，help / version 正常退出。
 * `-h` 仍走 Commander 默认 `formatHelp`，本函数只影响异常路径。
 */
export function registerVipPackageCliErrorHandling(
  root: VipCommander,
  presentation: VipPackageCliErrorPresentation,
): void {
  registerVipCommanderExitOverrideTree(root, error => handleVipPackageCliCommanderError(presentation, error))
}
