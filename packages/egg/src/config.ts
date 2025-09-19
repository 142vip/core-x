import type { PluginConfig } from './plugin'
import { vipLodash } from '@142vip/utils'

/**
 * 合并配置
 * @param defaultConfig
 * @param pluginConfig
 */
export function mergeConfig<T extends PluginConfig>(defaultConfig: T, pluginConfig: T): T {
  return vipLodash.merge(defaultConfig, pluginConfig)
}
