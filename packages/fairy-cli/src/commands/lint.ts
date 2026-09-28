import type { VipPackageCliCommander } from '@142vip/utils'
import type { FairyCommandOptions } from '../fairy.interface'
import { VipExecutor } from '@142vip/utils'
import { CommandEnum } from '../fairy.interface'
import { registerFairySubcommand, runOrDryRun } from '../utils'

interface LintOptions extends FairyCommandOptions {
  fix: boolean
}

function buildLintCommand(fix: boolean): string {
  return `npx eslint . ${fix ? '--fix' : ''}`.trim()
}

export async function lintMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.LINT, async (args: LintOptions) => {
    const command = buildLintCommand(args.fix)
    await runOrDryRun(args.dryRun, 'lint', [command], async () => {
      await VipExecutor.commandStandardExecutor(command)
    })
  }, (command) => {
    command
      .option('-c,--config', 'Eslint配置文件路径', false)
      .option('-f,--fix', '是否需要基于Eslint规则自动修复', false)
  })
}
