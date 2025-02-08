import process from 'node:process'
import type { PathLike } from 'node:fs'
import { existsSync, promises } from 'node:fs'
import type { FileHandle } from 'node:fs/promises'
import type { Stream } from 'node:stream'
import path from 'node:path'

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
 * 进程环境变量
 */
function getProcessEnv(key: string): string | undefined {
  const envs = process.env
  if (envs[key] != null)
    return envs[key]
  return undefined
}

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
  return path.join(...paths)
}

/**
 * 进程退出
 */
function exitProcess(exitCode?: number): void {
  process.exit(exitCode)
}

/**
 * 路径是否存在
 */
async function exitPath(path: PathLike): Promise<boolean> {
  return existsSync(path)
}

/**
 * 读文件
 */
async function readFileToStrByUTF8(filePath: PathLike | FileHandle): Promise<string> {
  return promises.readFile(filePath, 'utf-8')
}

/**
 * 写文件
 */
async function writeFileByUTF8(filePath: PathLike | FileHandle, data:
  | string
  | NodeJS.ArrayBufferView
  | Iterable<string | NodeJS.ArrayBufferView>
  | AsyncIterable<string | NodeJS.ArrayBufferView>
  | Stream): Promise<void> {
  return promises.writeFile(filePath, data, 'utf-8')
}

export const VipNodeJS = {
  getProcessFirstArgv,
  getProcessArgv,
  getCPUArch,
  setProcessEnv,
  getProcessEnv,
  getProcessPlatform,
  getProcessCwd,
  getProcessVersions,
  exitProcess,
  exitPath,
  readFileToStrByUTF8,
  writeFileByUTF8,
  pathJoin,
}
