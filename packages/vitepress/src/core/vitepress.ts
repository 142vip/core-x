import type { UserConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import type { NavbarConfig, SidebarConfig } from './types'
/**
 * 定义Vitepress配置
 * @param userConfig 用户配置
 */
export function defineVipVitepressConfig(userConfig: UserConfig<DefaultTheme.Config>): UserConfig<DefaultTheme.Config> {
  return userConfig
}

/**
 * 导航栏
 * @param options 配置
 */
export function defineVipNavbarConfig(options: NavbarConfig): NavbarConfig {
  return options
}

/**
 * 侧边栏
 * @param options 配置
 */
export function defineVipSidebarConfig(options: SidebarConfig): SidebarConfig {
  return options
}
