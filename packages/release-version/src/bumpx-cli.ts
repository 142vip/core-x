import process from 'node:process'
import { version as packageVersion } from '../package.json'
import { errorHandler, parseArgs, showProgress } from './utils'
import { versionBump } from './core/version-bump'
import { ExitCodeEnum } from './types'

/**
 * cli入口
 */
export async function main() {
  try {
    process.on('uncaughtException', errorHandler)
    process.on('unhandledRejection', errorHandler)

    // 解析参数
    const { help, version, quiet, options } = await parseArgs()

    // 显示帮助信息
    if (help) {
      process.exit(ExitCodeEnum.Success)
    }

    // 查看版本
    if (version) {
      console.log(packageVersion)
      process.exit(ExitCodeEnum.Success)
    }

    // 是否显示进度
    if (!quiet)
      options.progress = options.progress ?? showProgress

    // 执行版本升级
    await versionBump(options)
  }
  catch (error) {
    errorHandler(error as Error)
  }
}

main()
