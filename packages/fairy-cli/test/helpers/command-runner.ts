import type { VipPackageCliCommander } from '@142vip/utils'
import type { Command } from 'commander'

export function findCommand(program: VipPackageCliCommander, name: string): Command {
  const command = program.commands.find(item => item.name() === name.split(' ')[0])
  if (command == null) {
    throw new Error(`未注册子命令：${name}`)
  }
  return command
}

/** 在已注册子命令上解析 argv 并触发 action */
export async function runCliArgv(program: VipPackageCliCommander, argv: string[]): Promise<void> {
  const commandName = argv[0]
  if (commandName == null) {
    throw new Error('argv 须包含子命令名')
  }
  const command = findCommand(program, commandName)
  // 子命令 parse 时不应再带命令名，否则会被当成 positional 参数
  await command.parseAsync(argv.slice(1), { from: 'user' })
}
