import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import process from 'node:process'

export function findCommand(program: VipPackageCliCommander, name: string): VipCommander {
  const key = name.split(' ')[0]
  const command = program.commands.find((item) => {
    return item.name() === key || item.aliases().includes(key)
  }) as VipCommander | undefined
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
  const passthrough = argv.slice(1)
  const previousArgv = process.argv
  if (commandName === 'ci') {
    process.argv = ['node', 'fa', 'ci', ...passthrough]
  }
  try {
    await command.parseAsync(passthrough, { from: 'user' })
  }
  finally {
    process.argv = previousArgv
  }
}
