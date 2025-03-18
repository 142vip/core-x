import type { LoadConfigOptions } from 'c12'
import { loadConfig } from 'c12'
import { VipLodash } from './lodash'

/**
 * 加载配置
 * - 本地配置，形如：xxx.config.ts
 * - 包配置，package.json中的xxx字段
 */
async function loadCliConfig<T>(configName: string, defaultValue: T, c12Options?: LoadConfigOptions): Promise<T> {
  const { config } = await loadConfig({
    name: configName,
    packageJson: true,
    // c12 loadConfig的其他配置
    ...c12Options == null ? {} : c12Options,
  })

  return VipLodash.merge({}, defaultValue, config) as T
}

/**
 * 合并配置
 * @param cliConfig cli自定义配置
 * @param commanderConfig 用户在cli终端输入的配置
 */
async function mergeCommanderConfig<K, U>(cliConfig: K, commanderConfig: U): Promise<K & U> {
  return VipLodash.merge({}, cliConfig, commanderConfig)
}

/**
 * 配置加载
 */
export const VipConfig = {
  loadCliConfig,
  mergeCommanderConfig,
}
