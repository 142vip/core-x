import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import {
  formatVipCliAlignedCommands,
  logVipCliTrace,
  registerVipPackageCliErrorHandling,
  VipColor,
  VipConsole,
  VipNodeJS,
} from '@142vip/utils'
import { name, version } from '../../package.json'
import {
  CLI_COMMAND_DETAIL,
  CommandEnum,
  formatFairyCliBinAliases,
  formatFairyCliExample,
} from '../constant'

const FAIRY_CLI_IDENTITY = { name, version }

function traceFairySubcommand(command: CommandEnum, options: unknown): void {
  if (options == null || typeof options !== 'object') {
    logVipCliTrace(FAIRY_CLI_IDENTITY, `${command}: 解析`)
    return
  }
  const record = options as Record<string, unknown>
  const { dryRun, vip, trace, ...rest } = record
  logVipCliTrace(FAIRY_CLI_IDENTITY, `${command}: 解析`, {
    dryRun,
    vip,
    trace,
    ...rest,
  })
}

/**
 * fairy-cli 子命令标准注册：业务参数 → dry-run / vip / trace → action
 */
export function registerFairySubcommand<TArgs extends unknown[]>(
  program: VipPackageCliCommander,
  commandKey: CommandEnum,
  action: (...args: TArgs) => void | Promise<void>,
  setup?: (command: VipCommander) => void,
): void {
  const command = program.initCommand(CLI_COMMAND_DETAIL[commandKey])
  setup?.(command)
  program.appendSubcommandOptions(command)
  // 配置可以把 dry-run / vip 写成 true；补上否定参数，命令行才能改回 false
  if (commandKey === CommandEnum.COMMIT || commandKey === CommandEnum.RELEASE || commandKey === CommandEnum.AI) {
    command.option('--no-dry-run', '关闭试运行')
  }
  if (commandKey === CommandEnum.COMMIT || commandKey === CommandEnum.RELEASE) {
    command.option('--no-vip', '关闭 vip 模式')
  }
  command.action(async (...args: TArgs) => {
    traceFairySubcommand(commandKey, args[0])
    await action(...args)
  })
}

/** 根命令支持的子命令列表（顺序同 `CLI_COMMAND_DETAIL` 声明） */
export function formatFairySupportedCommands(): string {
  const rows = Object.values(CLI_COMMAND_DETAIL).map(detail => ({
    command: detail.command,
    aliases: detail.aliases,
    summary: detail.summary,
  }))
  return formatVipCliAlignedCommands(rows)
}

/** 未知子命令页脚：入口等价 + 查看帮助（末尾留空行） */
export function formatFairyCliHelpFooter(): string {
  return [
    `  ${VipColor.dim('入口等价：')}${formatFairyCliBinAliases()}`,
    `  查看帮助：${formatFairyCliExample('-h')} · ${formatFairyCliExample('<子命令> -h')}`,
    '',
  ].join('\n')
}

/** 页脚「查看帮助」单行 */
export function formatFairyCliHelpHintLine(): string {
  return `  查看帮助：${formatFairyCliExample('-h')} · ${formatFairyCliExample('<子命令> -h')}`
}

/** 根 `fa -v`：横幅版本信息 */
export function registerFairyCliVersionBanner(program: VipPackageCliCommander): void {
  program.registerCliVersionBanner(FAIRY_CLI_IDENTITY, { binAliases: formatFairyCliBinAliases() })
}

function isAiArgv(): boolean {
  const argv = VipNodeJS.getProcessArgv()
  return argv.includes('ai') || argv.includes('a')
}

/** `fa` 解析错误：未知子命令 / 多余参数等与多包 CLI 共用 `@142vip/utils` 展示逻辑 */
export function registerFairyCliErrorHandling(program: VipPackageCliCommander): void {
  registerVipPackageCliErrorHandling(program, {
    identity: FAIRY_CLI_IDENTITY,
    binAliases: formatFairyCliBinAliases(),
    renderSupportedCommands: formatFairySupportedCommands,
    renderHelpHintLine: () => formatFairyCliHelpFooter().trimEnd(),
    renderExcessArgumentsExtra: () => {
      if (!isAiArgv()) {
        return false
      }
      VipConsole.log(
        `  ${VipColor.dim('提示：')}${formatFairyCliExample('ai')} 同步 · ${formatFairyCliExample('ai --check')} 仅校验；不再支持 ${VipColor.yellow('ai sync')} 等写法`,
      )
      VipConsole.log(`  查看帮助：${formatFairyCliExample('ai -h')}`)
      return true
    },
  })
}
