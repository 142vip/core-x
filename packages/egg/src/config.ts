import { VipLodash } from '@142vip/utils'

/**
 * todo 类型待确定
 */
export type EggConfig = Record<string, unknown>

/**
 * 合并配置
 * @param defaultConfig
 * @param pluginConfig
 */
export function mergeConfig<T>(defaultConfig: T, pluginConfig: T): T {
  return VipLodash.merge(defaultConfig, pluginConfig)
}
