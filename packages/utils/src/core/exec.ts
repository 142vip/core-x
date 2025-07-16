import { Buffer } from 'node:buffer'
import * as childProcess from 'node:child_process'
import { execSync, spawn } from 'node:child_process'
import path from 'node:path'
import { name, version } from '../../package.json'
import { VipColor } from '../pkgs'
import { vipLogger, VipLogger } from './logger'
import { VipNodeJS } from './nodejs'

export type Command = string | string[]

/**
 * 标准执行器响应结果
 */
export interface StandardExecutorResponse {
  code: number | null
  stdout: string
  stderr: string
}

export interface CommandResponse extends StandardExecutorResponse {
  error?: Error
  command: string
}

/**
 * 异步执行命令，并返回结果
 */
async function execCommand(cmd: Command, opts?: Omit<childProcess.SpawnOptionsWithoutStdio, 'stdio' | 'cwd'>): Promise<CommandResponse> {
  const executable = Array.isArray(cmd) ? cmd.join(';') : cmd
  const options: childProcess.SpawnOptionsWithoutStdio = {
    ...opts,
    stdio: 'pipe',
    cwd: VipNodeJS.getProcessCwd(),
  }

  try {
    const cmd = VipNodeJS.getProcessPlatform() === 'win32' ? 'cmd' : 'sh'
    const arg = VipNodeJS.getProcessPlatform() === 'win32' ? '/C' : '-c'
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
        return { stdout, stderr, command: executable }
      }

      // 监听进程退出，发生错误，错误码110
      child.on('error', error => resolve({ ...getDefaultResult(), error, code: 110 }))
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
 */
async function commandStandardExecutor(cmd: Command): Promise<StandardExecutorResponse> {
  const commandStr = Array.isArray(cmd) ? cmd.join('&&') : cmd

  vipLogger.logByBlank(`执行命令：${VipColor.greenBright(commandStr)}`)

  let stdout = ''
  let stderr = ''
  return new Promise((resolve, reject) => {
    const cmd = VipNodeJS.getProcessPlatform() === 'win32' ? 'cmd' : 'sh'
    const arg = VipNodeJS.getProcessPlatform() === 'win32' ? '/C' : '-c'

    const child = spawn(cmd, [arg, commandStr], {
      stdio: 'inherit',
      cwd: VipNodeJS.getProcessCwd(),
      // 添加环境变量,避免命令找不到
      env: {
        ...VipNodeJS.getEnv(),
        // ...VipNodeJS.getProcessEnv(),
        PATH: `${path.join(VipNodeJS.getProcessCwd(), 'node_modules', '.bin')}${path.delimiter}${VipNodeJS.getProcessEnv('PATH')}`,
      },
    })

    if (child.stdout) {
      child.stdout.on('data', (data) => {
        stdout += data
      })
    }
    if (child.stderr) {
      child.stderr.on('data', (data) => {
        stderr += data
      })
    }

    // 考虑进程非0退出
    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, code })
      }
      else {
        const error = new Error(`标准命令执行器，非零退出。退出码：${code}`)
        Object.assign(error, { stdout, stderr, code })
        reject(error)
      }
    })

    // 出现错误
    child.on('error', (error: Error) => {
      Object.assign(error, { stdout, stderr, code: null })
      reject(error)
    })

    /**
     * 监听Ctrl+C信号
     */
    VipNodeJS.getProcess().on('SIGINT', () => {
      child.kill()
      VipNodeJS.existSuccessProcess()
    })

    /**
     * 监听kill命令
     */
    VipNodeJS.getProcess().on('SIGTERM', () => {
      VipNodeJS.existSuccessProcess()
    })

    /**
     * 监听进程退出
     */
    VipNodeJS.getProcess().on('exit', () => {
      vipLogger.logByBlank(VipColor.greenBright('进程已安全退出，欢迎下次使用👏🏻👏🏻👏🏻'))
      VipNodeJS.existSuccessProcess()
    })
  })
}

function execCommandSync(cmd: string, cwd?: string): string {
  return execSync(cmd, { encoding: 'utf8', cwd }).trim()
}

export interface ShellCommand {
  command: string
  description?: string
}

/**
 * 脚本执行器，执行shell命令
 */
async function execShell(commands: string | ShellCommand | ShellCommand[]): Promise<void> {
  // 全局日志
  const vipLog = VipLogger.getInstance()

  const projectName = VipColor.greenBright(`[${name}@${version}]`)

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

/**
 * 获取命令执行的trim操作后的结果
 */
async function getCommandTrimResponse(command: string): Promise<string | null> {
  const { code, stdout } = await execCommand(command)
  if (code !== 0) {
    return null
  }
  return stdout.trim()
}

/**
 * 执行器
 */
export const VipExecutor = {
  execCommandSync,
  execCommand,
  execShell,
  commandStandardExecutor,
  // commandStandardAsyncExecutor,
  getCommandTrimResponse,
}
