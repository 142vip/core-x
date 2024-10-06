import { name, version } from '../../package.json'
import { execCommand } from './exec'
import { VipLogger } from './logger'
import { vipColor } from './color'

export interface ShellCommand {
  command: string
  description?: string
}
// 全局日志
const vipLog = VipLogger.getInstance()

const projectName = vipColor.greenBright(`[${name}@${version}]`)

/**
 * 脚本执行器，执行shell命令
 */
export async function execShell(commands: ShellCommand[] | string | ShellCommand) {
  let runCommands: ShellCommand[] = []
  if (typeof commands === 'string') {
    runCommands.push({
      command: commands,
    })
  }

  if (typeof commands === 'object') {
    // 批量执行
    if (Array.isArray(commands)) {
      runCommands = commands
    }
    else {
      runCommands.push(commands)
    }
  }

  // 批量执行
  for (const { command, description = '脚本' } of runCommands) {
    // 脚本命令打印
    vipLog.log(`【${description}】${command}`, {
      startLabel: `${projectName}执行的命令:`,
      endLabel: '',
    })

    // 同步执行，标准命令执行器
    await execCommand(command)
  }
}
