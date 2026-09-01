import type { HeadConfig } from 'vitepress'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { vipDocSite, VipPackageJSON } from '@142vip/utils'

// ============================================================
// SEO 站点信息（从 .vitepress/config.ts 拆分而来）
// ============================================================

/** 站点线上地址（GitHub Pages），用于 canonical / og:url 等绝对链接 */
export const SITE_URL = 'https://142vip.github.io/core-x'

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

/** 根 package.json 信息（名称、版本、描述），供 SEO 描述与结构化数据使用 */
const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/** 站点 SEO 描述（与根 package.json description 保持一致） */
export const SITE_DESCRIPTION = pkg.description

/** 站点的 base 路径（GitHub Pages 子路径部署时形如 /core-x/），favicon 等静态资源需带此前缀 */
export const siteBase = vipDocSite.getBase('core-x')

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

/**
 * 站点 head 标签：基础 SEO + 社交分享卡片（Open Graph / Twitter Card）+ 结构化数据
 * - config.ts 直接整体引入，无需再维护 head 数组
 * - 注意：vitepress renderHead 将元组第三元素作为标签 innerHTML 原样输出（type 非 javascript 时不走 esbuild）
 */
export const seoHead: HeadConfig[] = [
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
  ['script', { type: 'application/ld+json' }, SITE_JSON_LD],
  // 浏览器主题色（与 VitePress 默认品牌色 indigo 保持一致）
  ['meta', { name: 'theme-color', content: '#646cff' }],
]
