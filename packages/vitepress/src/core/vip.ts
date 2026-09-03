import type { FooterIconLinkItem, FooterLinkItem } from '@142vip/vue/components'
import type { SiteContactQrItem } from '@142vip/vue/constants'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'

/**
 * 页脚参数
 */
interface FooterParams {
  license: string
  pkgName: string
  pkgVersion: string
  orgName?: string
  orgLink: string
  owner?: string
  ownerLink: string
  copyrightYear?: number
}

/**
 * VitePress 默认单行页脚（message / copyright）
 */
interface VipFooter {
  message: string
  copyright: string
}

/**
 * 获取通用型页脚内容
 */
export function getVipFooter(params: FooterParams): VipFooter {
  return {
    message: `The License <a href="${params.license}">📖 MIT </a>`,
    copyright: `
Release ${params.pkgName}@${params.pkgVersion} 😏<br> Copyright © 2019-${params.copyrightYear ?? 'present'}.&nbsp;
Repo <a href="${params.orgLink}" style="margin-right:5px;">${params.orgName ?? '@142vip'}</a>&nbsp;
Author <a href=${params.ownerLink}>👉${params.owner ?? '储凡'}</a>
`,
  }
}

/** 与 `@142vip/vue` `AppSiteFooter` 文案字段对齐 */
export interface VipFooterLabels {
  resources: string
  openSource: string
  friends: string
  contact: string
  baiduStats: string
  icp: string
  copyright: string
  backTop: string
}

/** 页脚 Release 行下方的徽章链接（shields.io 等） */
export interface VipFooterBadgeLink {
  href: string
  src: string
  alt: string
}

/**
 * VitePress `themeConfig.vipFooter` 配置。
 * - 设为 `false` 可关闭 `defineVipExtendsTheme` 注入的全局页脚
 * - 对象字段均可选；链接与文案未传时由 `AppSiteFooter` 内置默认提供
 */
export interface VipFooterConfig {
  labels?: Partial<VipFooterLabels>
  resourceLinks?: readonly FooterLinkItem[]
  openSourceLinks?: readonly FooterLinkItem[]
  friendLinks?: readonly FooterLinkItem[]
  contactQrItems?: readonly SiteContactQrItem[]
  socialLinks?: readonly FooterIconLinkItem[]
  /**
   * 是否显示回到顶部（由 `LayoutVipFooter` 挂载 `VipBackTop`）。
   * 默认 `false`；`enableVipFooter` 写入默认值，可显式传 `true` 开启。
   */
  showBackTop?: boolean
  /**
   * Release 行下方的徽章区：
   * - `true`：展示 {@link getVipFooterBadgeLinks} 默认集（GitHub / 官网 / npm）
   * - `false` 或未传：不展示
   * - `VipFooterBadgeLink[]`：完全自定义列表
   */
  showBadge?: boolean | readonly VipFooterBadgeLink[]
  /** 文档站 Release 行展示用（非 AppSiteFooter prop） */
  license?: string
  pkgName?: string
  pkgVersion?: string
  orgLink?: string
  ownerLink?: string
  copyrightYear?: number
}

/**
 * 默认页脚徽章：GitHub / 官网 / npm（`showBadge: true` 时使用）。
 */
export function getVipFooterBadgeLinks(): VipFooterBadgeLink[] {
  return [
    {
      href: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
      src: 'https://img.shields.io/badge/GitHub-142vip-181717?logo=github&logoColor=white',
      alt: 'GitHub',
    },
    {
      href: OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_VIP,
      src: 'https://img.shields.io/badge/Website-142vip.cn-0b3d52',
      alt: 'Website',
    },
    {
      href: OPEN_SOURCE_ADDRESS.HOME_PAGE_NPM_MMDAPL,
      src: 'https://img.shields.io/badge/NPM-%40142vip-CB3837?logo=npm&logoColor=white',
      alt: 'NPM',
    },
  ]
}

/**
 * 将 `showBadge` 规范为可渲染的徽章列表。
 * - `true` → 默认徽章；`false` / `undefined` → 空；数组 → 拷贝为普通对象并过滤无效项
 */
export function resolveVipFooterBadgeLinks(
  showBadge: VipFooterConfig['showBadge'],
): VipFooterBadgeLink[] {
  if (showBadge === true) {
    return getVipFooterBadgeLinks()
  }
  if (showBadge == null || showBadge === false || !Array.isArray(showBadge)) {
    return []
  }
  return showBadge
    .map(item => ({
      href: String(item.href ?? ''),
      src: String(item.src ?? ''),
      alt: String(item.alt ?? ''),
    }))
    .filter(item => item.href.length > 0 && item.src.length > 0)
}

/**
 * 启用全局页脚并关闭 VitePress 默认单行 footer。
 * 与 `getVipThemeConfig` 搭配：`getVipThemeConfig({ ...enableVipFooter(params), nav })`
 *
 * @example
 * ```ts
 * enableVipFooter({
 *   showBackTop: true,
 *   showBadge: true, // 或自定义 VipFooterBadgeLink[]
 *   pkgName: pkg.name,
 *   pkgVersion: pkg.version,
 * })
 * ```
 */
export function enableVipFooter(
  params?: VipFooterConfig,
): { footer: false, vipFooter: VipFooterConfig } {
  const showBadge = params?.showBadge
  // 数组入参归一化为普通对象，避免 themeConfig Proxy / 只读数组在渲染侧踩坑
  const normalizedShowBadge = Array.isArray(showBadge)
    ? resolveVipFooterBadgeLinks(showBadge)
    : showBadge

  return {
    footer: false,
    vipFooter: {
      showBackTop: false,
      ...params,
      ...(normalizedShowBadge !== undefined ? { showBadge: normalizedShowBadge } : {}),
    },
  }
}

/**
 * 团队成员
 */
export const vipTeamMembers = [
  {
    avatar: 'https://www.github.com/142vip.png',
    name: '142vip',
    title: '开源组织',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
  {
    avatar: 'https://www.github.com/mmdapl.png',
    name: '储凡',
    title: 'Creator',
    org: '142vip',
    orgLink: 'https://github.com/142vip',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
]

/**
 * 基本包结构。
 * `extends Record<string, unknown>` 便于在 `getPackageJSON<T>()` 等泛型场景下访问扩展字段。
 */
export interface VipPackageJSON extends Record<string, unknown> {
  name: string
  version: string
  description: string
  private?: boolean
}

/**
 * 模块项目结构
 */
export interface VipProject extends VipPackageJSON {
  id?: string
  npm?: string
  changelog: string
  readme: string
  sourceCode: string
}
