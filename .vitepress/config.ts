import type { DefaultTheme } from 'vitepress/theme'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { VipJSON, VipNodeJS, VipPackageJSON } from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipVitepressConfig,
  enableVipFooter,
  getVipBrandCdnUrl,
  getVipThemeConfig,
  zhSearch,
} from '@142vip/vitepress'

// 站点 SEO 与侧边栏配置已拆分至独立模块，本文件仅保留入口装配
import { seoHead, SITE_DESCRIPTION, siteBase } from './seo'
import { changelogSidebarConfig, createDocApiSidebarConfig, rootSidebarConfig } from './sidebar'

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

/** 根 package.json 信息（名称、版本、描述），供导航栏 / 页脚使用 */
const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * TypeDoc API 侧边栏数据
 * - 由 `pnpm typedoc:md`（.typedoc/md.config.js）生成到 `docs/apis/typedoc-sidebar.json`
 * - 用 `VipJSON.parse` 显式声明泛型，替代隐式 any 推断
 * - 仅 config.ts（Node 上下文）读取；sidebar.ts 保持纯数据，避免浏览器端打包 Node API
 */
const typedocSidebar = VipJSON.parse<DefaultTheme.SidebarItem[]>(
  VipNodeJS.readFileToStrByUTF8(resolveFromRoot('docs/apis/typedoc-sidebar.json')),
  [],
)

/** API 文档侧边栏（`/docs/apis/`）：备用站点 + typedoc 文档正文 */
const docApiSidebarConfig = createDocApiSidebarConfig(typedocSidebar)

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
 * - 通用项（lang / markdown / 目录等）由 `defaultVipThemeConfig` 合并，此处只写站点差异
 * - 品牌 favicon / og:image：见 `seo.ts`；导航 logo 见下方 `getVipBrandCdnUrl`
 */
export default defineVipVitepressConfig({
  base: siteBase,
  title: '@142vip工程化',
  titleTemplate: ':title - 等等我呀，还在努力',
  description: SITE_DESCRIPTION,
  // typedoc-github-wiki-theme 的 `../wiki/` 链专为 GitHub Wiki 设计，站内无对应页
  ignoreDeadLinks: [/\.\.\/wiki\//],
  head: seoHead,
  themeConfig: getVipThemeConfig({
    logo: getVipBrandCdnUrl('svg/x-logo.svg'),
    nav: navbarConfig,
    sidebar: {
      '/': rootSidebarConfig,
      '/docs/apis/': docApiSidebarConfig,
      '/changelogs/': changelogSidebarConfig,
    },
    // 仅补本仓库 github/gitee，其余 npm/csdn 等沿用包默认
    socialLinks: {
      github: OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X,
      gitee: OPEN_SOURCE_ADDRESS.GITEE_REPO_CORE_X,
    },
    ...enableVipFooter({
      showBackTop: true,
      showBadge: true,
      license: OPEN_SOURCE_ADDRESS.LICENCE_CORE_X,
      pkgName: pkg.name,
      pkgVersion: pkg.version,
    }),
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
