import type { NavbarConfig } from '@142vip/vitepress'
import { getDocSiteBase, OPEN_SOURCE_ADDRESS, VipNodeJS } from '@142vip/utils'
import { defineVipVitepressConfig, getVipFooter, getVipThemeConfig, zhSearch } from '@142vip/vitepress'
import typedocSidebar from '../docs/apis/typedoc-sidebar.json'
import { name as pkgName, version as pkgVersion } from '../package.json'
import { getChangelogsSidebar, sidebarConfig } from './sidebar'

/**
 * 导航栏
 */
const navbarConfig: NavbarConfig = [
  {
    text: '🔥 首页',
    link: '/docs/index.md',
  },
  {
    text: '💡 模块',
    link: '/packages/fairy-cli/',
  },
  {
    text: '✨ API',
    link: '/docs/apis/',
  },
  {
    text: '🏴 󠁬󠁯󠁧󠁿更新记录',
    link: '/changelogs/core-x/changelog.md',
  },
  {
    text: `⚡ ${pkgVersion}`,
    items: [
      {
        text: '🎉 历史版本',
        link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/releases`,
      },
      {
        text: '📄 更新日志',
        link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/blob/main/CHANGELOG.md`,
      },
      {
        text: '🎯 开发计划',
        link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnpwFKWmMu5zXE9WaxjuCYAg',
      },
    ],
  },
]

/**
 * 所有配置
 */
export default defineVipVitepressConfig({
  base: getDocSiteBase('core-x'),
  lang: 'zh-CN',
  title: '@142vip工程化',
  titleTemplate: ':title - 等等我呀，还在努力',
  description: 'X一切都有可能',
  srcDir: './',
  // 排除部分
  srcExclude: ['node_modules', 'scripts'],
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认cache
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  head: [
    // ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://github.com/142vip/core-x' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@142vip/core-x' }],
    ['meta', { property: 'og:description', content: `${pkgName} - 一切都有可能` }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  // markdown
  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

  },
  // 配置主题
  themeConfig: getVipThemeConfig({
    // 导航栏
    nav: navbarConfig,
    logo: '/logo.png',
    sidebar: {
      '/': sidebarConfig,
      '/docs/apis/': {
        text: 'API',
        items: typedocSidebar,
      },
      '/changelogs/': {
        base: '',
        items: [
          {
            text: '@142vip/core-x',
            link: '/changelogs/core-x/changelog.html',
          },
          {
            text: '🏴 更新记录',
            items: getChangelogsSidebar(),
          },
        ],
      },
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '左侧菜单',
    darkModeSwitchLabel: '切换主题',
    // 页脚
    footer: getVipFooter({
      license: OPEN_SOURCE_ADDRESS.LICENCE_CORE_X,
      pkgName,
      pkgVersion,
      orgLink: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
      ownerLink: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_MMDAPL,
    }),

    // 搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '69JA242WYX',
        apiKey: 'dec73bdf3277684a92aaa734e3b776c0',
        indexName: 'core-x',
        locales: {
          // 支持中文搜索
          ...zhSearch,
        },
      },
    },
    // 一些链接
    socialLinks: [
      { icon: 'github', link: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X },
      { icon: 'gitee', link: OPEN_SOURCE_ADDRESS.GITEE_REPO_CORE_X },
      { icon: 'npm', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL },
      { icon: 'csdn', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_CSDN },
      { icon: 'bilibili', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_BILIBILI },
      { icon: 'juejin', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_JUE_JIN },
    ],
    // 编辑链接
    editLink: {
      pattern: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/edit/next/:path`,
      text: '在 Github 上对本页提出修改建议',
    },
  }),
  // 路径重写
  rewrites: {
    ':packages/:pkg/README.md': ':packages/:pkg/index.md',
    ':packages/:pkg/CHANGELOG.md': 'changelogs/:pkg/changelog.md',
    ':apps/:pkg/README.md': ':apps/:pkg/index.md',
    ':apps/:pkg/CHANGELOG.md': 'changelogs/:pkg/changelog.md',
    'CHANGELOG.md': 'changelogs/core-x/changelog.md',
    'README.md': 'index.md',
  },
  // 编译时路径别名
  vite: {
    resolve: {
      alias: {
        '@packages': VipNodeJS.pathResolve(__dirname, '../packages'),
        '@apps': VipNodeJS.pathResolve(__dirname, '../apps'),
      },
    },
    // 配置静态资源目录
    // 参考：https://cn.vitejs.dev/config/shared-options.html#publicdir
    publicDir: VipNodeJS.pathResolve(__dirname, '../.vitepress/assets'),
    plugins: [
      // element-plus 自动导入，参考：https://element-plus.org/zh-CN/guide/quickstart.html
      // ElementPlus(),
    ],
  },
})
