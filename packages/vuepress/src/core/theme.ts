import type { PluginsOptions, ThemeOptions } from 'vuepress-theme-hope'
import path from 'node:path'
import process from 'node:process'
import { OPEN_SOURCE_AUTHOR } from '@142vip/utils'
import { slimSearchCNLocals } from '@142vip/vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

/**
 * 主题中插件的一些配置
 */
export const baseThemePluginOptions: PluginsOptions = {

  // comment:{
  //   provider: "Artalk",
  //   server:"https://test.142vip.cn/",
  //   site:'JavaScriptCollection',
  // },

  // 公告 参考：https://theme-hope.vuejs.press/zh/guide/feature/notice.html
  // notice: [
  //   {
  //     path: '/',
  //     title: '在线浏览',
  //     content: '网站无法访问时，建议通过科学上网访问备用网络',
  //     actions: [
  //       {
  //         text: '尝鲜版',
  //         link: 'https://142vip.github.io/JavaScriptCollection',
  //         type: 'default',
  //       },
  //       {
  //         text: '稳定版',
  //         link: 'https://code.142vip.cn',
  //         type: 'primary',
  //       },
  //     ],
  //     fullscreen: false,
  //   },
  // ],

  // 阅读时间
  readingTime: {
    wordPerMinute: 100,
  },
  // 水印
  watermark: {
    enabled: false,
  },
  copyright: false,
  // 开启博客功能
  blog: false,
  // 图片增强，参考：https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html
  // markdownImage: markdownImagePlugin({
  //   // 启用 figure
  //   figure: true,
  //   // 启用图片懒加载
  //   lazyload: true,
  //   // 启用图片标记
  //   mark: true,
  //   // 启用图片大小
  //   size: true,
  // }),
  copyCode: {
    showInMobile: true,
  },
  // 不自动生成README目录
  catalog: false,
  // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
  // components: {
  //   components: [
  //     'Badge',
  //     'BiliBili',
  //     'CodePen',
  //     'PDF',
  //     'StackBlitz',
  //     'VidStack',
  //     'Share',
  //     'XiGua',
  //   ],
  // },
  slimsearch: {
    // 参考：https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html
    locales: {
      '/': slimSearchCNLocals,
    },
  },
  nprogress: true,
  // 开发环境，开启git记录
  git: true,
}

/**
 * 基础主题配置
 */
const baseThemeOptions: ThemeOptions = {
  // 多语言配置
  // locales: {
  //   '/': {
  //     lang: 'zh-CN',
  //   },
  // },
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
  // 默认作者，https://theme-hope.vuejs.press/zh/config/theme/basic.html#author
  author: OPEN_SOURCE_AUTHOR,
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

  // https://ecosystem.vuejs.press/zh/plugins/development/git.html#changelog
  changelog: true,
  contributors: 'content',

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

  // 插件配置
  plugins: baseThemePluginOptions,

  // 文档配置
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
    ...baseThemeOptions,
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
 * @param cwd 文件目录，默认当前目录
 * @returns 新路径
 */
export function handleImportCodePath(pathArray: Array<[oldPath: string, newPath: string]>, cwd?: string) {
  return (str: string): string => {
    // 当前目录名
    for (const [oldPath, newPath] of pathArray) {
      if (str.includes(oldPath)) {
        return str.replace(oldPath, path.resolve(cwd ?? process.cwd(), newPath))
      }
    }
    // 原路径
    return str
  }
}
