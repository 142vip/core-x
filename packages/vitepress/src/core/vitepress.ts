import type { UserConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
/**
 * 定义Vitepress配置
 * @param userConfig 用户配置
 */
export function defineVipVitepressConfig(userConfig: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config> {
  return userConfig
}
