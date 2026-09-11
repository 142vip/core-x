import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipSidebarConfig,
  defineVipVitepressConfig,
  enableVipFooter,
  getVipBrandCdnUrl,
  getVipThemeConfig,
  zhSearch,
} from '@142vip/vitepress'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

// 站点的 base 路径
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
      { text: '📐 Mermaid 架构图', link: '/docs/example/mermaid.md' },
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
      { text: 'Mermaid 架构图', link: '/docs/example/mermaid.md' },
    ],
  },
])

/** Demo 站点配置：只写与包默认不同的品牌、导航与页脚 */
export default defineVipVitepressConfig({
  base: siteBase,
  title: '@142vip/vitepress-demo',
  titleTemplate: ':title - 等等我呀，还在努力',
  description: '@142vip/vitepress模块包的使用Demo演示',
  srcExclude: [],
  head: [
    ['link', { rel: 'icon', href: getVipBrandCdnUrl('icons/x-favicon.ico') }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://github.com/142vip/core-x' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '@142vip/core-x' }],
    ['meta', { property: 'og:description', content: `${pkg.name} - @142vip/vitepress-demo演示项目` }],
  ],
  themeConfig: getVipThemeConfig({
    logo: getVipBrandCdnUrl('svg/x-logo.svg'),
    nav: navbarConfig,
    sidebar: { '/': sidebarConfig },
    socialLinks: {
      github: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
      gitee: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP,
    },
    ...enableVipFooter({
      showBackTop: true,
      showBadge: true,
      license: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X,
      pkgName: pkg.name,
      pkgVersion: pkg.version,
    }),
    search: {
      provider: 'algolia',
      options: {
        appId: '69JA242WYX',
        apiKey: 'dec73bdf3277684a92aaa734e3b776c0',
        indexName: 'core-x',
        locales: { ...zhSearch },
      },
    },
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
}, {
  // 拓展启用 Mermaid（不传第二参数则保持 defineVipVitepressConfig 原行为）
  mermaid: {
    theme: 'default',
  },
})
