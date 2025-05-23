import { VipColor, VipConsole } from '../pkgs'

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

  /**
   * 打印空行
   */
  public println(): void {
    this.log('')
  }

  /**
   * 上下空行输出
   */
  public logByBlank(message: string) {
    this.println()
    VipConsole.log(message)
    this.println()
  }
}

export const vipLogger = new VipLogger()
