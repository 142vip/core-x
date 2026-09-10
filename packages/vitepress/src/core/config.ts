import type { HeadConfig, MarkdownOptions, UserConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types/default-theme'
import type { ZhSearchConfig } from './types'
import { getProductionCdnUrl } from '@142vip/cdn'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'

// ============================================================
// 品牌资源（`@142vip/cdn` 生产 CDN）
// ============================================================

/** 默认 favicon（`media/icons/vip-favicon.ico`） */
export const VIP_DEFAULT_FAVICON = getProductionCdnUrl('media/icons/vip-favicon.ico')

/** 默认 Logo（`media/svg/vip-logo.svg`） */
export const VIP_DEFAULT_LOGO = getProductionCdnUrl('media/svg/vip-logo.svg')

/** 默认 favicon `head` 元组；站点在 `head` 配置 `rel="icon"` 时不注入 */
export const defaultVipFaviconHead: HeadConfig = [
  'link',
  { rel: 'icon', href: VIP_DEFAULT_FAVICON },
]

/**
 * 将 `@142vip/cdn` media 相对路径转为生产 CDN URL。
 * @param relativePath 如 `svg/x-logo.svg` 或 `media/svg/vip-logo.svg`
 * @example getVipBrandCdnUrl('icons/x-favicon.ico')
 */
export function getVipBrandCdnUrl(relativePath: string): string {
  const normalized = relativePath.startsWith('media/')
    ? relativePath
    : `media/${relativePath.replace(/^\//, '')}`

  return getProductionCdnUrl(normalized)
}

function headHasFavicon(head: HeadConfig[]): boolean {
  return head.some((item) => {
    if (!Array.isArray(item) || item[0] !== 'link') {
      return false
    }
    const attrs = item[1]
    return attrs != null && typeof attrs === 'object' && 'rel' in attrs && attrs.rel === 'icon'
  })
}

/**
 * 合并默认 favicon；`head` 已含 `rel="icon"` 时不注入（站点可覆盖 vip 默认）。
 */
export function mergeVipDefaultHead(head: HeadConfig[] = []): HeadConfig[] {
  if (headHasFavicon(head)) {
    return head
  }

  return [defaultVipFaviconHead, ...head]
}

// ============================================================
// 国际化与搜索
// ============================================================

/**
 * 中文语言包配置
 */
export const i18n = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '上一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。',
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。',
  },
  footerLicense: {
    before: '',
    after: '',
  },
  ariaAnnouncer: {
    before: '',
    after: '已经加载完毕',
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航',
}

/** 搜索-中文（Algolia DocSearch `locales`） */
export const zhSearch: ZhSearchConfig = {
  root: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索供应商',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}

// ============================================================
// 主题默认项
// ============================================================

/** 142vip 常用社交链接（可在 `themeConfig.socialLinks` 中覆盖或扩展） */
export const defaultVipSocialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X },
  { icon: 'gitee', link: OPEN_SOURCE_ADDRESS.GITEE_REPO_CORE_X },
  { icon: 'npm', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL },
  { icon: 'csdn', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_CSDN },
  { icon: 'bilibili', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_BILIBILI },
  { icon: 'juejin', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_JUE_JIN },
]

/** 默认 Markdown 配置（代码高亮主题、属性定界符） */
export const defaultVipMarkdown: MarkdownOptions = {
  theme: {
    dark: 'dracula-soft',
    light: 'vitesse-light',
  },
  attrs: {
    leftDelimiter: '%{',
    rightDelimiter: '}%',
  },
}

/**
 * 站点级默认配置（`defineVipVitepressConfig` 自动合并）
 * - favicon：经 `mergeVipDefaultHead` 注入；`head` 已配置 `rel="icon"` 时不覆盖
 * - logo / socialLinks：经 `getVipThemeConfig` 注入；传入字段可覆盖
 */
export const defaultVipThemeConfig: UserConfig<DefaultTheme.Config> = {
  lang: 'zh-CN',
  srcDir: './',
  srcExclude: ['node_modules', 'scripts'],
  outDir: './dist',
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  markdown: defaultVipMarkdown,
}

/**
 * 获取主题配置
 * - 默认 `logo` / `socialLinks` 为 vip 品牌；站点在 `themeConfig` 传入同名字段即可覆盖
 * - https://vitepress.dev/zh/reference/default-theme-config
 */
export function getVipThemeConfig(themeConfig: Partial<DefaultTheme.Config> = {}): DefaultTheme.Config {
  return {
    aside: true,
    lastUpdated: {
      text: '最后更新于',
    },
    notFound: {
      title: '页面找不到啦',
      quote: '但是，如果你不改变你的方向，如果你继续寻找，你最终可能会到达你要去的地方。',
      linkText: '返回首页',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outline: {
      label: '本页内容',
    },
    externalLinkIcon: false,
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '左侧菜单',
    darkModeSwitchLabel: '切换主题',
    logo: VIP_DEFAULT_LOGO,
    socialLinks: defaultVipSocialLinks,
    ...themeConfig,
  }
}
