import { getDocSiteBase, OPEN_SOURCE_AUTHOR, VipPackageJSON } from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipSidebarConfig,
  defineVipVuepressConfig,
  exampleHeaders,
  getCopyRightText,
  getFooterHtml,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 导航栏
 */
export const navbarConfig = defineVipNavbarConfig([
  { text: '🌐 首页', link: '/' },
  {
    text: '💻 示例文档',
    children: [
      { text: '👩🏻‍💻 示例文档-1', link: '/example/test-1.md' },
      { text: '👨🏻‍💻 示例文档-2', link: '/example/test-2.md' },
      { text: '👨🏻 示例文档-3', link: '/example/test-3.md' },
    ],
  },
  {
    text: '👉 了解更多',
    children: [
      { text: '📄 更新日志', link: '/changelog' },
      {
        text: '开源博客',
        children: [
          {
            text: '🤡 408CSFamily',
            link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d',
          },
          {
            text: '📘 JavaScriptCollection',
            link: 'https://142vip.github.io/JavaScriptCollection/',
          },
        ],
      },

    ],
  },
])

/**
 * 侧边栏
 */
export const sidebarConfig = defineVipSidebarConfig({
  '/example': [
    {
      text: '示例文档',
      // prefix: 'example',
      collapsible: false,
      children: [
        { text: '示例文档-1', link: 'test-1.md' },
        { text: '示例文档-2', link: 'test-2.md' },
        { text: '示例文档-3', link: 'test-3.md' },
      ],
    },
  ],
})

export default defineVipVuepressConfig({
  base: getDocSiteBase(''),
  title: pkg.name,
  description: pkg.description,
  port: 5200,
  head: exampleHeaders,
  source: '',
  markdown: {
    // todo 引入代码文件时的路径替换 https://vuejs.press/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code/'],
        ['~', ''],
      ]),
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: getVipHopeTheme({
    // 导航栏
    navbar: navbarConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    // 页脚
    footer: getFooterHtml({
      name: pkg.name,
      version: pkg.version,
    }),
    // 版权
    copyright: getCopyRightText(OPEN_SOURCE_AUTHOR.name),
    // 仓库
    repo: '142vip/core-x/tree/next/packages/vuepress',
    repoLabel: 'GitHub',

    // 文档路径，开启编辑功能
    // docsDir: 'docs',
    // docsBranch: 'next',
    // // 主题布局选项
    // docsRepo: RepoAddress,
  }),
  // // 插件配置
  // ...pluginConfig,
  shouldPrefetch: false,
})
