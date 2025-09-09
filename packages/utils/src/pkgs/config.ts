import type { LoadConfigOptions } from 'c12'
import { createRequire } from 'node:module'
import { VipLodash } from './lodash'

/**
 * 加载配置
 * - 本地配置，形如：xxx.config.ts
 * - 包配置，package.json中的xxx字段
 */
async function loadCliConfig<T>(configName: string, defaultValue: any, c12Options?: LoadConfigOptions): Promise<T> {
  const nodeRequire = createRequire(import.meta.url)
  const { loadConfig } = nodeRequire('c12')

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
function mergeCommanderConfig<T>(cliConfig: Partial<T>, commanderConfig: Partial<T>): T {
  return VipLodash.merge({}, cliConfig, commanderConfig) as T
}

/**
 * 配置加载
 */
export const VipConfig = {
  loadCliConfig,
  mergeCommanderConfig,
}
