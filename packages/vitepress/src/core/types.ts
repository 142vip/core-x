import type { DefaultTheme } from 'vitepress/types/default-theme'

/**
 * 导航栏配置
 */
export type NavbarConfigItem = DefaultTheme.NavItem

/**
 * 导航栏
 */
export type NavbarConfig = NavbarConfigItem[]

/**
 * 侧边栏配置
 */
export type SidebarConfigItem = DefaultTheme.SidebarItem

/**
 * 侧边栏
 */
export type SidebarConfig = SidebarConfigItem[]

/**
 * 搜素-中文
 */
export type ZhSearchConfig = DefaultTheme.AlgoliaSearchOptions['locales']
