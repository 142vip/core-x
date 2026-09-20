import type { UserConfig } from '@vuepress/cli'
import type { NavbarOptions, SidebarOptions } from 'vuepress-theme-hope'
import { createVipAppBuildTime } from '@142vip/vue/vite'
import { navbar, sidebar } from 'vuepress-theme-hope'
import { createVipAppBuildLogPlugin } from './plugins/plugin-app-build-log'
import { getVuepressDefaultViteBundler } from './plugins/plugin-vite-bundler'

/**
 * 用户配置
 */
export type VipVuepressUserConfig = UserConfig

export interface VipVuepressAppBuildLogOptions {
  version: string
  /** 默认当前构建时间 */
  buildTime?: string
}

export interface DefineVipVuepressConfigOptions {
  /** 浏览器控制台打印站点版本与更新时间 */
  appBuildLog?: VipVuepressAppBuildLogOptions
}

/**
 * 在原 config 上补全默认项后返回。
 *
 * 默认：
 * - `locales` / `lang` → 见 {@link resolveVipVuepressLocales}（可用户自定义，不覆盖已有字段）
 * - `bundler` → Vite
 * - 无 `head` 时补 favicon
 * - `shouldPrefetch: false`
 *
 * 可选第二参数 `appBuildLog`：注入 `buildTime` meta + 客户端 `setupVipAppBuildLog`
 *（客户端从 `@142vip/vue/utils` 导入，避免 SSR 拉主入口 constants 中的 `.jpg`）。
 */
export function defineVipVuepressConfig(
  config: VipVuepressUserConfig,
  options?: DefineVipVuepressConfigOptions,
): VipVuepressUserConfig {
  // 单语言中文默认；用户自定义 locales 优先，不整表替换
  // https://theme-hope.vuejs.press/zh/config/i18n.html
  config.locales = resolveVipVuepressLocales(config.locales)

  if (config.lang == null) {
    config.lang = 'zh-CN'
  }

  const appBuild = options?.appBuildLog != null
    ? createVipAppBuildTime({
        version: options.appBuildLog.version,
        buildTime: options.appBuildLog.buildTime,
        pluginName: 'vip-vuepress-html-build-time',
      })
    : null

  // 默认 vite 编译；可选注入构建时间 define
  if (config.bundler == null) {
    config.bundler = getVuepressDefaultViteBundler({
      appBuild,
    })
  }

  if (appBuild != null) {
    config.head = [
      ...(config.head ?? []),
      ['meta', {
        name: 'buildTime',
        content: appBuild.buildTime,
      }],
    ]
    config.plugins = [
      ...(config.plugins ?? []),
      createVipAppBuildLogPlugin(),
    ]
  }

  // 配置ico
  if (config.head == null) {
    config.head = [
      ['link', { rel: 'icon', href: 'favicon.ico' }],
    ]
  }

  if (config.shouldPrefetch == null) {
    config.shouldPrefetch = false
  }

  return config
}

/**
 * 解析站点 `locales`：未传则默认 `'/' → zh-CN`；已传则保留用户路径与字段，
 * 仅当存在 `'/'` 且未写 `lang` 时补全 `lang: 'zh-CN'`（不新增路径、不覆盖已有值）。
 */
export function resolveVipVuepressLocales(
  locales: VipVuepressUserConfig['locales'],
): NonNullable<VipVuepressUserConfig['locales']> {
  if (locales == null) {
    return {
      '/': { lang: 'zh-CN' },
    }
  }

  const rootLocale = locales['/']
  if (rootLocale != null && rootLocale.lang == null) {
    locales['/'] = {
      ...rootLocale,
      lang: 'zh-CN',
    }
  }

  return locales
}

/**
 * 导航栏
 */
export function defineVipNavbarConfig(options: NavbarOptions): NavbarOptions {
  return navbar(options)
}

/**
 * 侧边栏
 */
export function defineVipSidebarConfig(options: SidebarOptions): SidebarOptions {
  return sidebar(options)
}

/**
 * 默认的文档目录
 * - docs
 */
export const VUEPRESS_DEFAULT_DOCS_DIR: string = 'docs'
