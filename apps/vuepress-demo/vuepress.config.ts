import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { GitGeneralBranch, vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipNavbarConfig,
  defineVipSidebarConfig,
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 导航栏
 */
export const navbarConfig = defineVipNavbarConfig([
  { text: '🔥 首页', link: '/' },
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
            text: '🤡 Core-X',
            link: OPEN_SOURCE_ADDRESS.SITE_DEPLOY_CORE_X_GITHUB,
          },
          {
            text: '📙 408CSFamily',
            link: OPEN_SOURCE_ADDRESS.SITE_DEPLOY_408CS_FAMILY_GITHUB,
          },
          {
            text: '📘 JavaScriptCollection',
            link: OPEN_SOURCE_ADDRESS.SITE_DEPLOY_JavaScriptCollection_GITHUB,
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

/**
 * 页脚
 */
const footerHtmlStr = `
<div>
    All Rights Reserved
    <a href="https://github.com/142vip" target="_blank">@142vip</a> .
    ${pkg.name}@v${pkg.version} 
    &nbsp;&nbsp;
</div>
<div style="margin-top: 5px">
  <a href="${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_NAME}</a> 
  <span style="margin: 0 5px;">|</span>
  <a href="${OPEN_SOURCE_ADDRESS.BEI_AN_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BEI_AN_NAME} </a>
</div>
`

/**
 * 版权信息
 */
const copyrightHtmlStr = `
<strong>MIT 协议</strong> | Copyrights © 2015-${new Date().getFullYear()} ${OPEN_SOURCE_AUTHOR.name}
`

/**
 * 站点配置
 */
export default defineVipVuepressConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  base: vipDocSite.getBase(''),
  title: pkg.name,
  description: pkg.description,
  port: 5200,
  // 默认会给
  // head: [
  //   ['link', { rel: 'icon', href: 'favicon.ico' }],
  // ],
  source: '',
  markdown: {
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
    footer: footerHtmlStr,
    // 版权
    copyright: copyrightHtmlStr,
    // 仓库
    repo: '142vip/core-x/tree/next/packages/vuepress',
    repoLabel: 'GitHub',

    // 文档路径，开启编辑功能
    docsDir: 'docs',
    docsBranch: GitGeneralBranch.NEXT,
    // // 主题布局选项
    // docsRepo: RepoAddress,

    changelog: true,
    contributors: true,

    plugins: {
      // 水印
      watermark: {
        enabled: false,
        watermarkOptions: {
          content: OPEN_SOURCE_AUTHOR.name,
        },
      },
    },
  }),
})
