import { VipSymbols } from './color'

export enum VipConsoleLogLevel {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
}

/**
 * 普通日志
 */
function log(message?: string, level?: VipConsoleLogLevel): void {
  // 空行
  if (message == null)
    message = ''

  if (level === VipConsoleLogLevel.INFO) {
    console.log(`${VipSymbols.info} ${message}`)
  }
  else if (level === VipConsoleLogLevel.SUCCESS) {
    console.log(`${VipSymbols.success} ${message}`)
  }
  else if (level === VipConsoleLogLevel.ERROR) {
    console.log(`${VipSymbols.error} ${message}`)
  }
  else {
    console.log(message)
  }
}

/**
 * 追踪日志，按照标准日志输出
 */
function trace(...data: any): void {
  console.log(data)
}

/**
 * 错误日志
 */
function error(e: any): void {
  console.log(e)
}

/**
 * 日志
 */
export const VipConsole = {
  log,
  trace,
  error,
}
