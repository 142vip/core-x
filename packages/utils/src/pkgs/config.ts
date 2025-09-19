import type { OptionsSync } from 'cosmiconfig/dist/types'
import { cosmiconfigSync } from 'cosmiconfig'
import { vipLodash } from './lodash'

/**
 * 配置加载
 */
export class VipConfig {
  /**
   * 加载配置
   * - 本地配置，形如：xxx.config.ts
   * - 包配置，package.json中的xxx字段
   */
  public loadCliConfig<T>(configName: string, defaultValue: any, cosmiconfigOptions?: Partial<OptionsSync>): T {
    const cliConfig = this.loadConfig(configName, cosmiconfigOptions)
    if (cliConfig == null) {
      return defaultValue
    }
    return this.mergeConfig(defaultValue, cliConfig)
  }

  /**
   * 加载cli配置
   * @param configName
   * @param cosmiconfigOptions
   */
  public loadConfig<T>(configName: string, cosmiconfigOptions?: Partial<OptionsSync>): T | undefined {
    const explorerSync = cosmiconfigSync(configName, cosmiconfigOptions)

    const result = explorerSync.search()
    if (result == null || result.isEmpty) {
      return undefined
    }

    return result.config as T
  }

  /**
   * 合并配置
   * @param cliConfig cli自定义配置
   * @param commanderConfig 用户在cli终端输入的配置
   */
  public mergeCommanderConfig<T>(cliConfig: Partial<T>, commanderConfig: Partial<T>): T {
    return this.mergeConfig(cliConfig, commanderConfig)
  }

  /**
   * 合并配置，后面配置覆盖前面的
   * @private
   */
  private mergeConfig<T>(beforeConfig: Partial<T>, afterConfig: Partial<T>): T {
    return vipLodash.merge({}, beforeConfig, afterConfig) as T
  }
}

export const vipConfig = new VipConfig()
