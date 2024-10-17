import { createRequire } from 'node:module'
import { defineUserConfig } from '@vuepress/cli'
import { getDirname, path } from '@vuepress/utils'
import { hopeTheme } from 'vuepress-theme-hope'
import viteBundler from '@vuepress/bundler-vite'
import {
  exampleHeaders,
  getCopyRightText,
  getFooterHtml,
  getThemeConfig,
  getViteBundler,
} from '@142vip/vuepress'
import { getDocSiteBase } from '@142vip/utils'

import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = createRequire(import.meta.url)('./package.json')

export default defineUserConfig({
  base: getDocSiteBase(''),
  title: pkg.name,
  description: pkg.description,
  port: 5200,
  head: exampleHeaders,
  source: '',
  markdown: {
    // todo 引入代码文件时的路径替换 https://vuejs.press/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97
    importCode: {
      handleImportPath: (str) => {
        // 当前目录名
        const __dirname = getDirname(import.meta.url)
        if (str.includes('@code')) {
          return str.replace(/^@code/, path.resolve(__dirname, 'code/'))
        }
        if (str.includes('~')) {
          return str.replace(/^~/, path.resolve(__dirname, ''))
        }
        return str
      },
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: hopeTheme(getThemeConfig({
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
    copyright: getCopyRightText(pkg.authorInfo.name),
    // 仓库
    repo: '142vip/core-x/tree/next/packages/vuepress',
    repoLabel: 'GitHub',

    // 文档路径，开启编辑功能
    // docsDir: 'docs',
    // docsBranch: 'next',
    // // 主题布局选项
    // docsRepo: RepoAddress,
  })),
  // // 插件配置
  // ...pluginConfig,
  // 编译
  bundler: viteBundler(getViteBundler()),
  shouldPrefetch: false,
})
