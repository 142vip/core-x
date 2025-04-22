import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface ChangelogOptions {
  dryRun?: boolean
}

/**
 * 生成CHANGELOG文档
 * - 参考 @142vip/changelog模块
 */
async function generateChangelog(args: ChangelogOptions): Promise<void> {
  await VipExecutor.commandStandardExecutor(`npx changelog ${args.dryRun ? '--dry-run' : ''}`)
}

/**
 * changelog命令
 * - 生成CHANGELOG文档
 */
export async function changelogMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.CHANGELOG])
    .action(async (args: ChangelogOptions): Promise<void> => {
      await generateChangelog(args)
    })
}
