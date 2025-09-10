import type { VersionBumpOptions } from '../enums'

/**
 * bump工具，默认配置
 */
export const bumpConfigDefaults: VersionBumpOptions = {
  commit: true,
  push: true,
  tag: true,
  recursive: false,
  skipGitVerify: false,
  confirm: true,
  ignoreScripts: false,
  all: false,
}
/**
 * 配置文件，默认文件名
 */
export const CONFIG_DEFAULT_NAME = 'bump'

/**
 * bump工具，默认配置
 */
export const bumpDefaultConfig = bumpConfigDefaults

/**
 * 加载bump默认配置
 */
export function getBumpDefaultConfig() {
  return bumpDefaultConfig
}

/**
 * 自定义配置入口
 * - 配置可选
 */
export function defineBumpXConfig(config: Partial<VersionBumpOptions>): Partial<VersionBumpOptions> {
  return config
}
