import * as childProcess from 'node:child_process'
import { Buffer } from 'node:buffer'
import * as process from 'node:process'

type Command = string | string[]

interface CmdResult {
  code?: number | null
  stdout: string
  stderr: string
  error?: Error
  cmd: string
}

export interface FailedExec extends CmdResult {
  error: Error
}

export interface SuccessfulExec extends CmdResult {
  code: number | null
}

/**
 * 执行命令
 */
export async function execCommand(
  cmd: Command,
  opts?: Omit<childProcess.SpawnOptionsWithoutStdio, 'stdio' | 'cwd'>,
): Promise<CmdResult> {
  const executable = Array.isArray(cmd) ? cmd.join(';') : cmd
  const options: childProcess.SpawnOptionsWithoutStdio = {
    ...opts,
    stdio: 'pipe',
    cwd: process.cwd(),
  }

  const { platform } = process

  try {
    const cmd = platform === 'win32' ? 'cmd' : 'sh'
    const arg = platform === 'win32' ? '/C' : '-c'
    const child = childProcess.spawn(cmd, [arg, executable], options)

    return new Promise((resolve) => {
      const stdoutList: string[] = []
      const stderrList: string[] = []

      if (child.stdout != null) {
        child.stdout.on('data', (data: string) => {
          if (Buffer.isBuffer(data))
            return stdoutList.push(data.toString())
          stdoutList.push(data)
        })
      }

      if (child.stderr != null) {
        child.stderr.on('data', (data) => {
          if (Buffer.isBuffer(data))
            return stderrList.push(data.toString())
          stderrList.push(JSON.stringify(data))
        })
      }

      const getDefaultResult = () => {
        const stderr = stderrList.join('\n')
        const stdout = stdoutList.join('\n')
        return { stdout, stderr, cmd: executable }
      }

      child.on('error', error => resolve({ ...getDefaultResult(), error }))
      child.on('close', code => resolve({ ...getDefaultResult(), code }))
    })
  }
  catch (error) {
    return Promise.reject(error)
  }
}

/**
 * 执行子进程命令
 * @param command
 */
export function execChildProcess(command: string) {
  console.log()
  console.log(`执行的命令：${command}`)
  console.log()
  const child = childProcess.exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })

  // 监听子进程的数据输出
  child.stdout?.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  child.stderr?.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  // 当子进程退出时触发
  child.on('close', (code) => {
    process.exit(code ?? 1)
  })
}
