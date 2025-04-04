import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface ChangelogOptions {
  dryRun?: boolean
}

/**
 * 生成CHANGELOG文档
 * - 参考 @142vip/changelog模块
 */
async function generateChangelog(args: ChangelogOptions): Promise<void> {
  await VipExecutor.commandStandardExecutor(`npx changelog ${args.dryRun ? '--dry' : ''}`)
}

/**
 * changelog命令
 * - 生成CHANGELOG文档
 */
export async function changelogMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.CHANGELOG)
    .summary('生成CHANGELOG文档')
    .description('快速使用@142vip/changelog模块，生成CHANGELOG文档')
    .option('--dry-run', '试运行，生成`CHANGELOG`文档', false)
    .action(async (args: ChangelogOptions): Promise<void> => {
      await generateChangelog(args)
    })
}
