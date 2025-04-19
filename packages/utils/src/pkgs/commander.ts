import { Command } from 'commander'

/**
 * 终端交互
 * 参考：https://www.npmjs.com/package/commander
 */
export class VipCommander extends Command {
  constructor(name: string, version: string, description?: string) {
    super(name)
    // 查看版本
    this.version(version, '-v --version', 'VipCommander Version By @142vip')

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
    this.helpCommand(true)
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
