import type { ProcessExitCodeEnum, registerVipCommanderExitOverrideTree, VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS, VIP_COMMANDER_EXIT_UNKNOWN_COMMAND, VipColor, type VipCommanderExitError, VipConsole, VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { formatFairyCliBinAliases, formatFairyCliExample } from '../fairy-cli.constants'
import { CLI_COMMAND_DETAIL } from '../fairy.interface'

const UNKNOWN_COMMAND_RE = /unknown command '([^']+)'/
const EXCESS_ARGS_RE = /too many arguments for '([^']+)'/

/** 根命令支持的子命令列表（用于未知命令提示） */
export function formatFairySupportedCommands(): string {
  return Object.values(CLI_COMMAND_DETAIL)
    .map((detail) => {
      const aliasText = detail.aliases.length > 0
        ? VipColor.dim(` (${detail.aliases.join(', ')})`)
        : ''
      return `  ${VipColor.cyan(detail.command)}${aliasText}  ${detail.summary}`
    })
    .join('\n')
}

function isAiArgv(): boolean {
  const argv = VipNodeJS.getProcessArgv()
  return argv.includes('ai') || argv.includes('a')
}

function printCliHeader(): void {
  VipConsole.error(`${formatFairyCliBinAliases()}  ${VipColor.dim('@142vip/fairy-cli')}`)
}

function printUnknownRootCommand(unknownName: string): void {
  printCliHeader()
  VipConsole.error(`  ${VipColor.redBright('未知子命令')} ${VipColor.yellow(unknownName)}`)
  printSupportedCommandsFooter()
}

function printExcessArgumentsHint(rawMessage: string): void {
  printCliHeader()
  const matched = EXCESS_ARGS_RE.exec(rawMessage)
  const sub = matched?.[1]
  const detail = sub != null
    ? `子命令 ${VipColor.cyan(sub)} 不接受多余参数`
    : rawMessage.replace(/^error:\s*/i, '').trim()
  VipConsole.error(`  ${VipColor.redBright(detail)}`)
  if (isAiArgv()) {
    VipConsole.log(
      `  ${VipColor.dim('提示：')}${formatFairyCliExample('ai --sync')} 或 ${formatFairyCliExample('ai --check')}；不再支持 ${VipColor.yellow('ai sync')} 等写法`,
    )
    VipConsole.log(`  查看帮助：${formatFairyCliExample('ai -h')}`)
    return
  }
  VipConsole.log(`  查看帮助：${formatFairyCliExample('-h')} · ${formatFairyCliExample('<子命令> -h')}`)
}

function printSupportedCommandsFooter(): void {
  VipConsole.log('')
  VipConsole.log(`  ${VipColor.bold('可用子命令：')}`)
  VipConsole.log(formatFairySupportedCommands())
  VipConsole.log('')
  VipConsole.log(`  ${VipColor.dim('入口等价：')}${formatFairyCliBinAliases()}`)
  VipConsole.log(`  查看帮助：${formatFairyCliExample('-h')} · ${formatFairyCliExample('<子命令> -h')}`)
}

function handleFairyCommanderError(error: VipCommanderExitError): void {
  const message = error.message

  if (error.code === VIP_COMMANDER_EXIT_UNKNOWN_COMMAND) {
    const matched = UNKNOWN_COMMAND_RE.exec(message)
    printUnknownRootCommand(matched?.[1] ?? message)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  if (error.code === VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS) {
    printExcessArgumentsHint(message)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  printCliHeader()
  VipConsole.error(`  ${message.replace(/^error:\s*/i, '').trim()}`)
  VipNodeJS.exitProcess(error.exitCode ?? ProcessExitCodeEnum.FatalError)
}

/** 注册 VipCommander 解析错误处理（根与子命令树），统一输出、不泄露裸 `error: unknown command`。 */
export function registerFairyCliErrorHandling(program: VipPackageCliCommander): void {
  registerVipCommanderExitOverrideTree(program, handleFairyCommanderError)
}
