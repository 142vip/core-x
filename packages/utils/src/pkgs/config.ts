import type { OptionsSync } from 'cosmiconfig'
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
    const result = this.searchConfigResult(configName, cosmiconfigOptions)
    if (result == null) {
      return undefined
    }

    return result.config as T
  }

  /** 从指定配置文件路径加载（`fa lint -f` / `fa commit -f` 等 CLI 显式 `-f`） */
  public loadConfigAtPath<T>(configName: string, filepath: string): T | undefined {
    const explorerSync = cosmiconfigSync(configName)
    const loaded = explorerSync.load(filepath)
    if (loaded == null || loaded.isEmpty) {
      return undefined
    }
    return loaded.config as T
  }

  /** 已发现的配置文件绝对路径（供 ESLint 等需要 `--config` 路径的 CLI） */
  public searchConfigFilePath(configName: string, cosmiconfigOptions?: Partial<OptionsSync>): string | undefined {
    const result = this.searchConfigResult(configName, cosmiconfigOptions)
    return result?.filepath
  }

  private searchConfigResult(configName: string, cosmiconfigOptions?: Partial<OptionsSync>) {
    const explorerSync = cosmiconfigSync(configName, cosmiconfigOptions)
    const result = explorerSync.search()
    if (result == null || result.isEmpty) {
      return undefined
    }
    return result
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
