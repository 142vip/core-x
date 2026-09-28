import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import type { CommandEnum } from '../fairy.interface'
import { CLI_COMMAND_DETAIL } from '../fairy.interface'

/**
 * fairy-cli 子命令标准注册：业务参数 → dry-run / vip → action
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
  command.action(action)
}
