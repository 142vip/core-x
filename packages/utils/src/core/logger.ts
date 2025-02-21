import { VipColor } from '@142vip/utils'

export interface LoggerOptions {
  startLabel?: string
  endLabel?: string
}

/**
 * 日志对象构造参数
 */
export interface VipLoggerOptions {
  infoColor?: string
  logColor?: string
  errorColor?: string
}

/**
 * 日志输出
 * - 用于终端
 * - 用于基本日志定位
 */
export class VipLogger {
  private static logger: VipLogger
  constructor(_opts?: VipLoggerOptions) { }

  public static getInstance(opts?: VipLoggerOptions): VipLogger {
    if (this.logger == null) {
      this.logger = new VipLogger(opts)
    }
    return this.logger
  }

  public log(msg: string, opts?: LoggerOptions) {
    const logText = `${VipColor.green(opts?.startLabel ?? '')} ${VipColor.magenta(msg)} ${VipColor.yellow(opts?.endLabel ?? '')}`
    console.log(logText)
  }

  public error(msg: string, opts?: LoggerOptions) {
    const text = `${VipColor.red(opts?.startLabel ?? '')} ${VipColor.magenta(msg)} ${VipColor.yellow(opts?.endLabel ?? '')}`
    console.error(text)
  }
}

export const vipLogger = new VipLogger()
