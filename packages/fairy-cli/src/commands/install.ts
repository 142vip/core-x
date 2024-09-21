import type { Command } from 'commander'
import { commandStandardExecutor } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface InstallOptions {
  pnpm: boolean
  npm: boolean
  registry?: string
  update: boolean
}

/**
 * 依赖下载
 * - npm
 * - pnpm
 */
async function execInstall(args: InstallOptions) {
  console.log(111, args)
  // pnpm i --frozen-lockfile --registry https://registry.npmmirror.com
  // npm ci
  if (args.npm) {
    // 使用npm下载
    await commandStandardExecutor(`npm ${args.update ? 'i' : 'ci'} --registry  ${args.registry}`)
  }
  else {
    // pnpm下载
    await commandStandardExecutor(`pnpm i ${args.update ? '' : '--frozen-lockfile'} --registry ${args.registry}`)
  }
}

/**
 * install 命令入口
 * @param program
 */
export async function installMain(program: Command) {
  program
    .command(CliCommandEnum.INSTALL)
    .aliases(['i', 'add'])
    .description('pnpm ci dependencies')
    .option('--pnpm', 'use pnpm ', true)
    .option('--npm', 'use npm', false)
    .option('--update', 'update lockfile，not use --frozen-lockfile', false)
    .option('--registry', 'pnpm registry address，default ali cdn', 'https://registry.npmmirror.com')
    .action((args: InstallOptions) => {
      execInstall(args)
    })
}
