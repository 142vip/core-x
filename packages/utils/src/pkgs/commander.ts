import { Command } from 'commander'

export interface VipCommanderDetailOptions {
  command: string
  aliases: string[]
  summary: string
  description: string
}

export interface VipCommanderOptions {
  dryRun?: boolean
  trace?: boolean
  vip?: boolean
  help?: boolean
}
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

    /**
     * 增加默认的一些参数
     */
    // this
    //   .option('--dry-run', '试运行', false)
    //   .option('--vip', '@142vip组织专用功能', false)
    //   .option('--logger', '开启日志追踪模式', false)

    // 对命令增加help方法
    // this.helpCommand(true)
  }

  /**
   * 对命令初始化，增加aliases，summary，description等信息
   */
  public initCommand(options: VipCommanderDetailOptions, {
    dryRun = true,
    trace = true,
    vip = false,
    help = false,
  }: VipCommanderOptions): VipCommander {
    const vipCommander = this.command(options.command, options.description)
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
