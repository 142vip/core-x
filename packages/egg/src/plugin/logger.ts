import type { EggApp, EggCoreLogger } from '../egg.interface'
import type { PluginConfig } from './plugin.interface'

/**
 * egg插件日志
 */
export class VipEggPluginLogger {
  public static instance: VipEggPluginLogger
  private readonly logger: EggCoreLogger
  private readonly pkgName: string

  constructor(pluginConfig: PluginConfig, app: EggApp) {
    this.logger = app.coreLogger
    this.pkgName = pluginConfig.pkgName
  }

  /**
   * 单例对象
   */
  public static getInstance(pluginConfig: PluginConfig, app: EggApp): VipEggPluginLogger {
    if (this.instance == null) {
      this.instance = new VipEggPluginLogger(pluginConfig, app)
    }
    return this.instance
  }

  public log(message: string) {
    this.logger.info(`[${this.pkgName}] ${message}`)
  }

  public warn(message: string) {
    this.logger.warn(`[${this.pkgName}] ${message}`)
  }

  public error(message: string) {
    this.logger.error(`[${this.pkgName}] ${message}`)
  }

  public debug(message: string) {
    this.logger.debug(`[${this.pkgName}] ${message}`)
  }
}
