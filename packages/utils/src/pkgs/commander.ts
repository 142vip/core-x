import { Command } from 'commander'

export interface VipCommanderDetailOptions {
  command: string
  aliases: string[]
  summary: string
  description: string
}

export interface VipCommanderOptions {
  /**
   * 试运行
   */
  dryRun?: boolean

  /**
   * 142vip 组织专用功能，用户标记是否用于142vip组织的项目
   */
  vip?: boolean

  /**
   * 是否开启日志追踪模式，打印重要执行日志
   */
  trace?: boolean

  /**
   * 是否开启帮助模式，打印帮助信息
   */
  help?: boolean
}

export type VipCommanderDetailRecord<T extends string> = Record<T, VipCommanderDetailOptions>

/**
 * 终端交互
 * 参考：https://www.npmjs.com/package/commander
 */
export class VipCommander extends Command {
  constructor(name: string, version: string, description?: string) {
    super(name)
    // 查看版本
    this.version(version, '-v,--version', 'VipCommander Version By @142vip')

    // 添加描述
    if (description != null) {
      this.description(description)
    }
  }

  /**
   * 对命令初始化，增加aliases，summary，description等信息
   * - 增加默认的一些参数
   */
  public initCommand(options: VipCommanderDetailOptions, {
    dryRun = true,
    trace = true,
    vip = false,
    help = false,
  }: VipCommanderOptions = {}): Command {
    const vipCommander = this.command(options.command)
      .aliases(options.aliases)
      .summary(options.summary)
      .description(options.description)

    if (trace) {
      vipCommander.option('--trace', '开启日志追踪模式', false)
    }

    if (dryRun) {
      vipCommander.option('--dry-run', '试运行', false)
    }

    if (vip) {
      vipCommander.option('--vip', '@142vip组织专用功能', false)
    }

    // 对命令增加help方法
    if (help) {
      vipCommander.helpCommand(true)
    }

    return vipCommander
  }

  // 对description、summary方法重新，增加颜色处理
  // public descriptionByColor(str: string) {
  //   super.description(VipColor.green(str))
  // }
  //
  // public summaryByColor(str: string): this {
  //   return super.summary(str)
  // }
}
