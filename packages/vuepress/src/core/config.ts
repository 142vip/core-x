import type { UserConfig } from '@vuepress/cli'
import type { NavbarOptions, SidebarOptions } from 'vuepress-theme-hope'
import { navbar, sidebar } from 'vuepress-theme-hope'
import { getVipViteBundler } from './bundler'

/**
 * 定义 vuepress 配置
 * @param config 配置
 */
export function defineVipVuepressConfig(config: UserConfig): UserConfig {
  // 默认vite编译
  if (config.bundler == null) {
    config.bundler = getVipViteBundler()
  }
  return config
}

/**
 * 导航栏
 * @param options 配置
 */
export function defineVipNavbarConfig(options: NavbarOptions): NavbarOptions {
  return navbar(options)
}

/**
 * 侧边栏
 * @param options 配置
 */
export function defineVipSidebarConfig(options: SidebarOptions): SidebarOptions {
  return sidebar(options)
}
