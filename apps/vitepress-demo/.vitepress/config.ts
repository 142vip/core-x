import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipSidebarConfig,
  defineVipVitepressConfig,
  getVipFooter,
  getVipThemeConfig,
  zhSearch,
} from '@142vip/vitepress'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

// 站点的base路径
const siteBase = vipDocSite.getBase('core-x')

/**
 * 导航栏
 */
const navbarConfig = defineVipNavbarConfig([
  { text: '🔥 首页', link: '/docs/index.md' },
  {
    text: '💻 示例文档',
    items: [
      { text: '👩🏻‍💻 示例文档-1', link: '/docs/example/test-1.md' },
      { text: '👨🏻‍💻 示例文档-2', link: '/docs/example/test-2.md' },
      { text: '👨🏻 示例文档-3', link: '/docs/example/test-3.md' },
    ],
  },
  {
    text: `⚡ ${pkg.version}`,
    items: [
      { text: '🎉 历史版本', link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/releases` },
      { text: '📄 更新日志', link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/blob/main/CHANGELOG.md` },
      {
        text: '开源博客',
        items: [
          { text: '🤡 408CSFamily', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d' },
          { text: '📘 JavaScriptCollection', link: 'https://142vip.github.io/JavaScriptCollection/' },
        ],
      },
    ],
  },
])

/**
 * 侧边栏
 */
const sidebarConfig = defineVipSidebarConfig([
  {
    text: '示例文档',
    collapsed: false,
    items: [
      { text: '示例文档-1', link: '/docs/example/test-1.md' },
      { text: '示例文档-2', link: '/docs/example/test-2.md' },
      { text: '示例文档-3', link: '/docs/example/test-3.md' },
    ],
  },
])

/**
 * 所有配置
 */
export default defineVipVitepressConfig({
  base: siteBase,
  lang: 'zh-CN',
  title: '@142vip/vitepress-demo',
  titleTemplate: ':title - 等等我呀，还在努力',
  description: '@142vip/vitepress模块包的使用Demo演示',
  srcDir: './',
  // 排除部分
  srcExclude: [],
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认cache
  cacheDir: './.vitepress/.vite',
  assetsDir: 'static',
  metaChunk: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://github.com/142vip/core-x' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@142vip/core-x' }],
    ['meta', { property: 'og:description', content: `${pkg.name} - @142vip/vitepress-demo演示项目` }],
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
    sidebar: {
      '/': sidebarConfig,
    },
    // 页脚
    footer: getVipFooter({
      license: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X,
      pkgName: pkg.name,
      pkgVersion: pkg.version,
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
      { icon: 'github', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP },
      { icon: 'gitee', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP },
      { icon: 'npm', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL },
    ],
    // 编辑链接
    editLink: {
      pattern: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/edit/next/:path`,
      text: '在 Github 上对本页提出修改建议',
    },
  }),
  // 路径重写
  rewrites: {
    'CHANGELOG.md': 'changelog.md',
    'README.md': 'index.md',
  },
})
