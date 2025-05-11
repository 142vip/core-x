import type { PathLike } from 'node:fs'
import { Buffer } from 'node:buffer'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import * as fs from 'node:fs'
import * as nodePath from 'node:path'
import process from 'node:process'
import { ProcessExitCodeEnum } from '../enums'
import { VipColor, VipConsole, VipSymbols } from '../pkgs'
import { vipLogger } from './logger'
import { VipNpm } from './npm'

/**
 * 进程参数
 */
function getProcessArgv(): string[] {
  return process.argv
}

/**
 * 进程第一个参数
 */
function getProcessFirstArgv(): string {
  return process.argv0
}

/**
 * 根据索引获取进程参数
 * node process-args.js one two=three four
 * Would generate the output:
 * 0: /usr/local/bin/node
 * 1: /Users/xxx/work/node/process-args.js
 * 2: one
 * 3: two=three
 * 4: fou
 */
function getProcessArgvByIndex(index: number): string {
  return process.argv[index]
}

/**
 * 进程环境变量
 */
function getProcessEnv(key: string): string | undefined {
  const envs = process.env
  if (envs[key] != null)
    return envs[key]
  return undefined
}

/**
 * 设置当前京城环境变量
 * @param key 键
 * @param value 值
 */
function setProcessEnv(key: string, value: string): void {
  process.env[key] = value
}

/**
 * 进程平台
 */
function getProcessPlatform(): NodeJS.Platform {
  return process.platform
}

/**
 * 进程工作目录
 */
function getProcessCwd(): string {
  return process.cwd()
}

/**
 * 进程版本信息
 */
function getProcessVersions(): NodeJS.ProcessVersions {
  return process.versions
}

/**
 * CPU 架构
 */
function getCPUArch(): NodeJS.Architecture {
  return process.arch
}

/**
 * 路径拼接
 * - path.join()
 */
function pathJoin(...paths: string[]): string {
  return nodePath.join(...paths)
}

function pathDirname(dirPath: string): string {
  return nodePath.dirname(dirPath)
}

/**
 * 路径扩展名
 */
function pathExtname(path: string): string {
  return nodePath.extname(path)
}

/**
 * 进程退出
 */
function exitProcess(exitCode?: number): void {
  process.exit(exitCode)
}

/**
 * 正常退出进程，退出码为0，异常无法捕获
 */
function existSuccessProcess() {
  exitProcess(ProcessExitCodeEnum.SUCCESS)
}

/**
 * 异常退出进程，错误码为1
 */
function existErrorProcess() {
  exitProcess(ProcessExitCodeEnum.FatalError)
}

/**
 * 路径是否存在
 */
function existPath(path: PathLike): boolean {
  return existsSync(path)
}

/**
 * 是否存在文件
 */
function isExistFile(name: string, cwd?: string): boolean {
  const filePath = pathJoin(cwd ?? getProcessCwd(), name)
  return existPath(filePath)
}

/**
 * 目录是否存在
 */
function isExistDir(name: string, cwd?: string): boolean {
  const dirPath = pathJoin(cwd ?? getProcessCwd(), name)
  return existPath(dirPath) && isDirectory(dirPath)
}

/**
 * 是否为目录
 */
function isDirectory(path: PathLike): boolean {
  try {
    const stat = fs.statSync(path)
    return stat.isDirectory()
  }
  catch {
    return false
  }
}

/**
 * 读文件
 */
function readFileToStrByUTF8(filePath: PathLike): string {
  return readFileSync(filePath, 'utf-8')
}

/**
 * 读取目录
 * @param path
 * @param options
 */
function readdirSync(path: PathLike, options?: {
  encoding: BufferEncoding | null
  withFileTypes?: false | undefined
  recursive?: boolean | undefined
} | BufferEncoding | null): string[] {
  return fs.readdirSync(path, options)
}
/**
 * 写文件
 */
function writeFileByUTF8(filePath: PathLike, data:
  | string
  | NodeJS.ArrayBufferView): void {
  return writeFileSync(filePath, data, 'utf-8')
}

/**
 * 判断是否为Buffer类型
 * @param data 输入数据
 * @return boolean
 */
function isBuffer(data: object): boolean {
  return Buffer.isBuffer(data)
}

/**
 * 创建目录
 * @param path 目录路径
 */
function mkdirSync(path: PathLike): void {
  fs.mkdirSync(path)
}

/**
 * 打印标准的Node开发环境信息
 */
async function printStandardNodeDevEnv(): Promise<void> {
  const npm = await VipNpm.getNpmVersion()
  const pnpm = await VipNpm.getPnpmVersion()
  const node = await VipNpm.getNodeVersion()

  VipConsole.log(`Node.js开发环境，版本信息统计：`)
  vipLogger.println()

  if (npm != null) {
    VipConsole.log(VipColor.green(`${VipSymbols.success} npm版本：${npm}`))
  }
  else {
    VipConsole.error(VipColor.red(`${VipSymbols.error} 未安装npm环境`))
  }

  if (node != null) {
    VipConsole.log(VipColor.green(`${VipSymbols.success} node版本：${node}`))
  }
  else {
    VipConsole.error(VipColor.red(`${VipSymbols.error} 未安装node环境`))
  }

  if (pnpm != null) {
    VipConsole.log(VipColor.green(`${VipSymbols.success} pnpm版本：${pnpm}`))
  }
  else {
    VipConsole.error(VipColor.red(`${VipSymbols.error} 未安装pnpm环境，请全局安装pnpm命令。参考：npm i -g pnpm`))
  }

  vipLogger.println()
}

function pathResolve(...pathSegments: string[]): string {
  return nodePath.resolve(...pathSegments)
}

/**
 *
 */
function getProcessStdin(): NodeJS.ReadStream {
  return process.stdin
}

function getProcessStdout(): NodeJS.WriteStream {
  return process.stdout
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result: any = {}
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key]
    }
  }
  return result as Pick<T, K>
}

export const VipNodeJS = {
  getProcessFirstArgv,
  getProcessArgv,
  getProcessArgvByIndex,
  getCPUArch,
  setProcessEnv,
  getProcessEnv,
  getProcessPlatform,
  getProcessCwd,
  getProcessVersions,
  getProcessStdin,
  getProcessStdout,
  exitProcess,
  existSuccessProcess,
  existErrorProcess,
  existPath,
  isExistFile,
  isExistDir,
  isDirectory,
  readdirSync,
  readFileToStrByUTF8,
  writeFileByUTF8,
  mkdirSync,
  pathJoin,
  pathResolve,
  pathDirname,
  pathExtname,
  isBuffer,
  pick,
  printStandardNodeDevEnv,
}
