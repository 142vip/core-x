import type { DefaultTheme } from 'vitepress/theme'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import {
  vipDayjs,
  vipDocSite,
  VipJSON,
  VipNodeJS,
  VipPackageJSON,
} from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipVitepressConfig,
  getVipFooter,
  getVipThemeConfig,
  zhSearch,
} from '@142vip/vitepress'

import {
  getDemoSideBarConfig,
  getOpenSourcePkgSideBarConfig,
  sidebarConfig,
} from './sidebar'

// ============================================================
// 站点基础信息（SEO）
// ============================================================

/** 站点线上地址（GitHub Pages），用于 og:url 等绝对链接 */
const SITE_URL = 'https://142vip.github.io/core-x'

/**
 * 站点 SEO 关键词
 * - 贴合仓库业务：TypeScript 工程化工具集、Monorepo、Egg.js/Nest.js 框架封装
 */
const SITE_KEYWORDS = [
  '142vip',
  'core-x',
  'TypeScript',
  'Node.js',
  'Egg.js',
  'Nest.js',
  '工程化',
  'Monorepo',
  '工具库',
  'axios',
  'grpc',
  'redis',
  'typeorm',
].join(', ')

// ============================================================
// 路径解析工具
// ============================================================

/**
 * vitepress 的 root 是仓库根目录（未配置 srcDir），docs/ 仅为内容目录，
 * 本文件位于 .vitepress/ 下，因此 __dirname 的上一级就是仓库根目录。
 */
const REPO_ROOT = VipNodeJS.pathResolve(__dirname, '..')

/**
 * 以仓库根目录为基准解析绝对路径
 * - 统一封装 `VipNodeJS.pathJoin(__dirname, ...)`，避免各处重复拼接
 * @param paths 相对仓库根目录的路径片段
 * @example resolveFromRoot('docs/apis/typedoc-sidebar.json')
 */
function resolveFromRoot(...paths: string[]): string {
  return VipNodeJS.pathJoin(REPO_ROOT, ...paths)
}

// ============================================================
// 数据读取
// ============================================================

/**
 * TypeDoc API 侧边栏数据
 * - 由 `pnpm typedoc:md`（.typedoc/md.config.js）生成到 `docs/apis/typedoc-sidebar.json`
 * - 用 `VipJSON.parse` 显式声明泛型，替代隐式 any 推断
 */
const typedocSidebar = VipJSON.parse<DefaultTheme.SidebarItem[]>(
  VipNodeJS.readFileToStrByUTF8(resolveFromRoot('docs/apis/typedoc-sidebar.json')),
  [],
)

/** 根 package.json 信息（名称、版本、描述），供导航栏 / 页脚 / SEO 使用 */
const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/** 站点 SEO 描述（与根 package.json description 保持一致） */
const SITE_DESCRIPTION = pkg.description

/**
 * 结构化数据（JSON-LD）：142vip 组织 + core-x 站点实体
 * - 帮助搜索引擎识别组织身份、官网域名与社交账号矩阵
 * - 通过 @graph 合并 Organization / WebSite 两种 schema，仅注入一个 script 标签
 * - JSON-LD 内的 `<` 需转义为 `\u003c`，避免破坏 HTML 解析
 * - 参考：https://schema.org/Organization
 */
const SITE_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      'name': OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME,
      'alternateName': pkg.name,
      'description': SITE_DESCRIPTION,
      'url': OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_VIP,
      'logo': `${SITE_URL}/logo.png`,
      // 组织/作者的公开主页矩阵：GitHub / Gitee / npm / 自媒体
      'sameAs': [
        SITE_URL,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_MMDAPL,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_CSDN,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_BILIBILI,
        OPEN_SOURCE_ADDRESS.HOME_PAGE_JUE_JIN,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      'name': pkg.name,
      'url': SITE_URL,
      'inLanguage': 'zh-CN',
      'publisher': { '@id': `${SITE_URL}/#organization` },
    },
  ],
}).replace(/</g, '\\u003c')

/** 站点的 base 路径（GitHub Pages 子路径部署时形如 /core-x/） */
const siteBase = vipDocSite.getBase('core-x')

// ============================================================
// 导航栏
// ============================================================

/**
 * 顶部导航栏
 * - 首页 / 模块 / API / 迭代 / 版本下拉
 */
const navbarConfig = defineVipNavbarConfig([
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
    text: '🏴 󠁬󠁯󠁧󠁿迭代',
    link: '/changelogs/core-x/changelog.md',
  },
  {
    text: `⚡ ${pkg.version}`,
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
])

// ============================================================
// 站点主配置
// ============================================================

/**
 * vitepress 站点配置
 * - 返回类型由 defineVipVitepressConfig 自动推断为 UserConfig<DefaultTheme.Config>，无需显式 any
 * - 第二参数启用 Mermaid 图表支持
 */
export default defineVipVitepressConfig({
  base: siteBase,
  lang: 'zh-CN',
  title: '@142vip工程化',
  titleTemplate: ':title - 等等我呀，还在努力',
  description: SITE_DESCRIPTION,
  srcDir: './',
  // 排除部分：不参与文档站构建
  srcExclude: ['node_modules', 'scripts'],
  // 忽略 wiki 产物的站内互链
  // - typedoc-github-wiki-theme 生成的 `../wiki/xxx` 相对链接专为 GitHub Wiki 站内互链设计
  // - vitepress 站内无对应页面，属于预期失效，故用正则精确忽略（不影响其它死链检测）
  ignoreDeadLinks: [/\.\.\/wiki\//],
  // 编译输出目录
  outDir: './dist',
  // dev 模式下的缓存目录，默认 cache
  cacheDir: './.vitepress/.vite',
  // 编译产物静态资源目录
  assetsDir: 'static',
  metaChunk: true,
  // 站点 head 标签：基础 SEO + 社交分享卡片（Open Graph / Twitter Card）
  head: [
    // 站点图标（需带 base 前缀，GitHub Pages 子路径部署时才能正确加载）
    ['link', { rel: 'icon', href: `${siteBase}favicon.ico` }],
    // canonical：声明站点权威地址，避免重复内容
    ['link', { rel: 'canonical', href: SITE_URL }],
    // 基础 SEO
    ['meta', { name: 'description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'keywords', content: SITE_KEYWORDS }],
    ['meta', { name: 'author', content: '142vip' }],
    // Open Graph：社交平台分享卡片
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: pkg.name }],
    ['meta', { property: 'og:title', content: `${pkg.name} - X一切都有可能` }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/logo.png` }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: pkg.name }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: `${SITE_URL}/logo.png` }],
    // 结构化数据（JSON-LD）：142vip 组织 + core-x 站点实体，增强搜索引擎对组织信息的识别
    // 注意：vitepress renderHead 将元组第三元素作为标签 innerHTML 原样输出（type 非 javascript 时不走 esbuild）
    ['script', { type: 'application/ld+json' }, SITE_JSON_LD],
    // 浏览器主题色（与 VitePress 默认品牌色 indigo 保持一致）
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],
  markdown: {
    // 代码高亮主题：暗色 dracula-soft / 亮色 vitesse-light
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
    // 自定义属性定界符（配合插件使用）
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
      // API 文档侧边栏：typedoc 生成的侧边栏数据
      '/docs/apis/': {
        text: 'API',
        items: [
          {
            text: '备用站点',
            items: [
              { text: 'API - wiki', link: 'https://github.com/142vip/core-x/wiki' },
              // 标记为外部链接
              { text: 'API - typedoc', link: '/apis/', target: '_self' },
            ],
          },
          { text: 'API - 文档', items: typedocSidebar },
        ],
      },
      // 变更日志侧边栏：各包 changelog + 最佳实践/开源模块快捷入口
      '/changelogs/': {
        base: '',
        items: [
          { text: '@142vip/core-x', link: '/changelogs/core-x/changelog.html' },
          { text: '✔️ 最佳实践', items: getDemoSideBarConfig() },
          { text: '🧰 开源模块', items: getOpenSourcePkgSideBarConfig() },
        ],
      },
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '左侧菜单',
    darkModeSwitchLabel: '切换主题',
    // 页脚：开源协议 + 仓库信息 + 动态版权年份
    footer: getVipFooter({
      license: OPEN_SOURCE_ADDRESS.LICENCE_CORE_X,
      pkgName: pkg.name,
      pkgVersion: pkg.version,
      orgLink: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
      ownerLink: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_MMDAPL,
      copyrightYear: vipDayjs.getYear(),
    }),

    // 搜索：Algolia DocSearch（支持中文）
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
    // 社交链接
    socialLinks: [
      { icon: 'github', link: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X },
      { icon: 'gitee', link: OPEN_SOURCE_ADDRESS.GITEE_REPO_CORE_X },
      { icon: 'npm', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL },
      { icon: 'csdn', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_CSDN },
      { icon: 'bilibili', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_BILIBILI },
      { icon: 'juejin', link: OPEN_SOURCE_ADDRESS.HOME_PAGE_JUE_JIN },
    ],
    // 编辑链接：跳转 GitHub 对应源码文件
    editLink: {
      pattern: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/edit/next/:path`,
      text: '在 Github 上对本页提出修改建议',
    },
  }),
  // 路径重写：README/CHANGELOG 统一映射
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
        '@packages': resolveFromRoot('packages'),
        '@apps': resolveFromRoot('apps'),
      },
    },
    // 配置静态资源目录（publicDir：favicon/logo 等原样拷贝到产物根目录）
    // 参考：https://cn.vitejs.dev/config/shared-options.html#publicdir
    publicDir: resolveFromRoot('.vitepress/assets'),
    plugins: [
      // element-plus 自动导入，参考：https://element-plus.org/zh-CN/guide/quickstart.html
      // ElementPlus(),
    ],
  },
}, {
  // 参考：https://www.npmjs.com/package/@142vip/vitepress
  // 启用 Mermaid 图表（使用默认主题，暗黑模式下自动切换官方 dark 主题）
  mermaid: true,
})
