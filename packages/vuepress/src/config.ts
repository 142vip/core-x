import type { UserConfig } from '@vuepress/cli'
import type { NavbarOptions, SidebarOptions } from 'vuepress-theme-hope'
import { navbar, sidebar } from 'vuepress-theme-hope'
import { getVuepressDefaultViteBundler } from './core/plugin-vite-bundler'

/**
 * 用户配置
 */
export type VipVuepressUserConfig = UserConfig

/**
 * 定义 vuepress 配置
 * @param config 配置
 */
export function defineVipVuepressConfig(config: VipVuepressUserConfig): VipVuepressUserConfig {
  // 支持汉语，单语言：https://theme-hope.vuejs.press/zh/config/i18n.html
  if (config.lang == null) {
    config.lang = 'zh-CN'
  }

  // 默认vite编译
  if (config.bundler == null) {
    config.bundler = getVuepressDefaultViteBundler()
  }

  // 配置ico
  if (config.head == null) {
    config.head = [
      ['link', { rel: 'icon', href: 'favicon.ico' }],
    ]
  }

  // todo 给该模块预留初始化值
  // else {
  //   config.head = [
  //     ...config.head,
  //     ['meta', { property: 'og:url', content: 'https://github.com/142vip/core-x' }],
  //     ['meta', { property: 'og:type', content: 'website' }],
  //     ['meta', { property: 'og:title', content: '@142vip/core-x' }],
  //     ['meta', { property: 'og:description', content: `${pkgName} - 一切都有可能` }],
  //   ]
  // }

  if (config.shouldPrefetch == null) {
    config.shouldPrefetch = false
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
