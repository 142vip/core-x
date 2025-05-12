// import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { searchProCNLocals } from './i18n'

/**
 * 主题中插件的一些配置
 */
export const baseThemePluginOptions = {
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
    // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
    locales: {
      '/': searchProCNLocals,
    },
  },
  nprogress: true,
}
