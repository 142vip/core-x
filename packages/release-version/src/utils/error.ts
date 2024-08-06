import process from 'node:process'
import { ExitCodeEnum } from '../types'

/**
 * 错误处理
 * @param error
 */
export function errorHandler(error: Error): void {
  let message = error.message || String(error)

  if (process.env.DEBUG || process.env.NODE_ENV === 'development')
    message = error.stack || message

  console.error(message)
  process.exit(ExitCodeEnum.FatalError)
}
