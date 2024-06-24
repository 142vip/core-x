/**
 * 脚本执行器，执行shell命令
 */
import { join } from 'node:path'
import { exec, exit } from 'shelljs'

const cwd = join(__dirname, '..')
process.env.PATH = `${join(cwd, 'node_modules', '.bin')}:${process.env.PATH}`

/**
 * 监听进程
 * - 退出进程
 */
process.on('exit', () => {
  exit()
})

/**
 * 执行shell指令
 */
export async function execShell(commands: string | string[]): Promise<void> {
  let runCommands: string[] = []
  if (typeof commands === 'string') {
    runCommands.push(commands)
  }

  // 批量执行
  if (Array.isArray(commands)) {
    runCommands = commands
  }

  for (let index = 0; index < runCommands.length; index++) {
    const command = runCommands[index]
    const count = index + 1
    console.log(`step${count}:\n${command} \nstep${count}(start):  === `)
    // await syncExec(command)
    const execResult = await exec(command)
    // 打印输出结果
    console.log(execResult.stdout)
    console.log(`step${count}(ending): === \n`)
    // 指令异常，不执行后续指令，非0退出
    if (execResult.code !== 0) {
      exit(1)
      break
    }
  }
}

exports.execShell = async (commands) => {

}
