import { execShell } from '@142vip/common'
import type { Command } from 'commander'
import { CliCommandEnum } from '../shared'

export interface SyncOptions {

}

/**
 * 同步到cnpm仓库
 * @param packageNames
 */
async function execSync(packageNames: string[]) {
  await execShell(packageNames.map(packageName => ({
    command: `npx cpnm sync ${packageName}`,
    description: `同步模块${packageName}到cnpm仓库`,
  })))
}

/**
 * sync命令入口
 */
export async function syncMain(program: Command): Promise<void> {
  program
    .command(CliCommandEnum.SYNC)
    .description('同步npm仓库的模块包到cnpm仓库')
    .argument('[packageNames...]', '需要同步的模块包名称，支持多个，eg. @142vip/fairy-cli')
    .action(async (packageNames: string[]) => {
      await execSync(packageNames)
    })
}
