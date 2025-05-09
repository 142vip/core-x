import type { ThemeOptions } from 'vuepress-theme-hope'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { hopeTheme } from 'vuepress-theme-hope'
import { i18n } from './i18n'
import { baseThemePluginOptions } from './theme-plugins'

const baseThemeConfig: ThemeOptions = {
  locales: i18n,
  // navbarIcon: false,
  // 在深色模式和浅色模式之间切换
  darkmode: 'toggle',
  // 支持全屏
  // fullscreen: true,
  // 纯净模式
  // pure: true,
  // 博客配置
  // blog: {
  //     name: '测试',
  //     avatar: '',
  //     description: '',
  //     intro: '',
  //     roundAvatar: true,
  //     timeline: "时间轴的顶部文字",
  //     // articleInfo: "",
  //     medias: {
  //         "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
  //     }
  // },
  // 打印按钮
  print: false,
  hostname: 'https://142vip.cn',
  // author: {
  //   name: '',
  //   email: '',
  //   url: '',
  // },
  favicon: '/favicon.ico',
  logo: '/favicon.icon',

  // 导航栏布局
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Links', 'Language', 'Search', 'Outlook', 'Repo'],
  },
  pageInfo: [
    'Author',
    'Original',
    'Date',
    'Category',
    'Tag',
    'ReadingTime',
  ],
  docsDir: 'docs',
  docsBranch: 'next',
  // 主题布局选项
  // docsRepo: RepoAddress,
  // repo: '142vip/JavaScriptCollection',
  // repoLabel: 'GitHub',
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 主题色选择器
  themeColor: true,
  // 是否显示外部链接图标
  externalLinkIcon: false,
  // 设置页脚
  displayFooter: true,

  // footer: getFooterHtml({
  //   name: '',
  //   version: '',
  // }),
  // copyright: getCopyRightText(''),
  plugins: baseThemePluginOptions,
  markdown: {
    // 支持任务列表
    tasklist: true,
    playground: {
      presets: ['ts', 'vue'],
    },
    sub: true,
    sup: true,
    vPre: true,
    vuePlayground: true,
    // 文件导入配置别名
    include: true,
    // mermaid
    mermaid: true,
    // 自定义对齐
    align: true,
    tabs: true,
    codeTabs: true,
    highlighter: {
      // 参考：https://shiki.tmrs.site/languages
      langs: [
        'ts',
        'js',
        'vue',
        'json',
        'json5',
        'jsonc',
        'jsx',
        'lua',
        'shellscript',
        'diff',
        'c',
        'c++',
        'dockerfile',
        'nginx',
        'proto',
        'java',
        'javascript',
        'typescript',
        'yaml',
        'text',
        'graphql',
        'http',
        'python',
        'xml',
      ],
    },
  },
}

/**
 * 主题相关配置
 * 参考：https://theme-hope.vuejs.press/zh/config/intro.html
 */
export function getVipHopeTheme(userConfig: ThemeOptions) {
  return hopeTheme({
    ...baseThemeConfig,
    ...userConfig,
    plugins: {
      ...baseThemePluginOptions,
      ...userConfig.plugins,
    },
  })
}

/**
 * 引入代码文件时的路径替换
 * https://vuejs.press/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97
 * - 例如：引入的路径中包含@code，会替换为当前目录下的code目录
 * @param pathArray 路径规则，旧路径，新路径
 * @returns 新路径
 */
export function handleImportCodePath(pathArray: Array<[oldPath: string, newPath: string]>) {
  return (str: string): string => {
    // 当前目录名
    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    for (const [oldPath, newPath] of pathArray) {
      if (str.includes(oldPath)) {
        return str.replace(`/^${oldPath}/`, path.resolve(__dirname, newPath))
      }
    }

    // 原路径
    return str
  }
}
