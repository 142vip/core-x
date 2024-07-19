import { i18n } from '@142vip/vitepress'
import { defineConfig } from 'vitepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'
import { footer } from './config/footer'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'zh-CN',
  title: '@142vip/core-x',
  titleTemplate: ':title - @142vip/core-x',
  description: 'x代表一切都有可能',
  srcDir: 'manuscripts',
  // 排除部分
  srcExclude: ['tutorial/**/description.md'],
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
    [
      'meta',
      {
        property: 'og:description',
        content: '@142vip/core-x - 系列封装',
      },
    ],
  ],
  themeConfig: {
    // 导航栏
    nav: navbar,
    sidebar,
    i18n,
    footer,
    lastUpdated: {
      text: '最近更新',
    },
    editLink: {
      pattern: 'https://github.com/142vip/core-x/edit/main/docs/:path',
      text: '在Github上编辑',
    },
    // 一些链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'npm', link: 'https://github.com/vuejs/vitepress' },
    ],
    search: {
      provider: 'local',
    },
    externalLinkIcon: true,
  },
})
