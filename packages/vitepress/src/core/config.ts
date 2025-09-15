import type { ZhSearchConfig } from './types'

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

/**
 * 搜索-中文
 */
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

/**
 * 默认主题配置
 */
export const defaultVipThemeConfig = {
  lang: 'zh-CN',
  srcDir: 'manuscripts',
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认cache
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  themeConfig: {
    // 导航栏
    i18n,
    lastUpdated: {
      text: '最近更新时间',
    },
    editLink: {
      pattern: 'https://github.com/142vip/core-x/edit/main/docs/:path',
      text: '在Github上编辑',
    },
    // 一些链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/142vip/core-x',
      },
      { icon: 'npm', link: 'https://www.npmjs.com/search?q=%40142vip' },
    ],
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
  },
}

/**
 * 获取主题配置
 * todo 优化类型
 * - https://vitepress.dev/zh/reference/default-theme-config
 */
export function getVipThemeConfig(themeConfig: any) {
  return {
    // 单页右侧目录
    aside: true,

    // 最近更新
    lastUpdated: {
      text: '最后更新于',
    },
    notFound: {
      title: '页面找不到啦',
      quote: `但是，如果你不改变你的方向，如果你继续寻找，你最终可能会到达你要去的地方。`,
      linkText: '返回首页',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 单页标题
    outline: {
      label: '本页内容',
    },
    // 关闭外链图标
    externalLinkIcon: false,
    // 忽略死链接，参考：https://vitepress.dev/zh/reference/site-config#ignoredeadlinks
    ignoreDeadLinks: 'localhostLinks',
    ...themeConfig,
  }
}
