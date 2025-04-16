export interface CliCommandBaseOptions {
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
  logger?: boolean
}
