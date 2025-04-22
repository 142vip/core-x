import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface LintOptions {
  fix: boolean
}

/**
 * 执行eslint校验，格式化代码
 */
async function execLint(args: LintOptions): Promise<void> {
  const command = `npx eslint . ${args.fix ? '--fix' : ''}`
  await VipExecutor.commandStandardExecutor(command)
}

/**
 * 基于Eslint校验
 * - 参考：eslint-config模块
 */
export async function lintMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.LINT])
    .option('-c,--config', 'Eslint配置文件路径', false)
    .option('-f,--fix', '是否需要基于Eslint规则自动修复', false)
    .action(async (args: LintOptions) => {
      await execLint(args)
    })
}
