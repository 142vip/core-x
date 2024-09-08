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
 * 同步执行命令，并返回结果
 * @param cmd
 * @param opts
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
 * 标准Linux命令执行器
 * - 支持打印结果
 * - 异步
 * @param cmd
 */
export function commandStandardExecutor(cmd: Command) {
  const executable = Array.isArray(cmd) ? cmd.join(';') : cmd
  const options: childProcess.SpawnOptionsWithoutStdio = {
    stdio: 'pipe',
    cwd: process.cwd(),
  }

  const { platform } = process

  try {
    const cmd = platform === 'win32' ? 'cmd' : 'sh'
    const arg = platform === 'win32' ? '/C' : '-c'
    const child = childProcess.spawn(cmd, [arg, executable], options)

    child.stdout.on('data', (data: string) => {
      if (Buffer.isBuffer(data)) {
        console.log(data.toString())
      }
    })

    child.stderr.on('data', (_data) => {
      // if (Buffer.isBuffer(data)) {
      //   console.log(data.toString())
      // }
    })

    // 出现错误
    child.on('error', (_error) => {
      console.log('error-->', _error)
    })

    // 进程退出
    child.on('close', (_code) => {
      console.log('close-->', _code)
    })
  }
  catch {
  }
}
