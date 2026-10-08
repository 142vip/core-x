import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import { VipColor, VipConsole, VipNodeJS } from '@142vip/utils'
import { CommandEnum, FairyCommandOptions } from '../constant'
import {
  formatFairyRunScriptsHelpSection,
  listFairyRunCommandNames,
  registerFairySubcommand,
  resolveFairyRunCommands,
  runFairyCommand,
  runOrDryRun,
} from '../utils'

interface RunCliOptions extends FairyCommandOptions {
  list?: boolean
}

/**
 * `fa run <name>`：fairy 默认 / `fairy.config` → `scripts` → `package.json` → `scripts`（后者优先）。
 */
export async function runMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand<[string | undefined, RunCliOptions, VipCommander?]>(
    program,
    CommandEnum.RUN,
    async (scriptName, args, command) => {
      if (args.list === true) {
        const names = listFairyRunCommandNames()
        for (const name of names) {
          VipConsole.log(`  ${VipColor.cyan(name)}`)
        }
        return
      }

      const commandName = scriptName?.trim()
      if (commandName == null || commandName === '') {
        VipConsole.error(`${VipColor.redBright('run:')} 请指定脚本名，例如 ${VipColor.cyan('fa run clean')}`)
        VipNodeJS.existErrorProcess()
        return
      }

      // `command.args` 含脚本名本身；只把其后的多余参数拼到 shell 末尾
      const positional = command?.args ?? []
      const extraTokens = positional[0] === commandName ? positional.slice(1) : positional
      const extraArgs = extraTokens.join(' ').trim()
      const preview = resolveFairyRunCommands(commandName)
      if (preview.length === 0) {
        VipConsole.error(
          `${VipColor.redBright('run:')} 未找到 ${VipColor.cyan(commandName)}（fa run --list 查看可用脚本）`,
        )
        VipNodeJS.existErrorProcess()
        return
      }

      await runOrDryRun(args.dryRun, `run ${commandName}`, preview, async () => {
        await runFairyCommand(commandName, VipNodeJS.getProcessCwd(), extraArgs)
      })
    },
    (cmd) => {
      cmd
        .argument('[name]', 'fa run 脚本名（见 -h 底部 Run scripts）')
        .option('-l, --list', '列出可用脚本名', false)
        .allowExcessArguments(true)
        .addHelpText('after', () => formatFairyRunScriptsHelpSection())
    },
  )
}
