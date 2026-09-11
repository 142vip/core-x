import type {
  VipFooterBadgeLink,
  VipFooterContent,
  VipFooterLink,
  VipFooterSocialLink,
  VipFooterLabels as VueVipFooterLabels,
} from '@142vip/vue/components'

export type { VipFooterBadgeLink, VipFooterLink, VipFooterSocialLink }

/**
 * 页脚参数（`getVipFooter` 生成 VitePress 默认单行 footer 文案）
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

/** 与 `@142vip/vue` `VipFooter` 文案对齐；`backTop` 仅用于 `VipBackTop` 无障碍文案 */
export type VipFooterLabels = VueVipFooterLabels & {
  backTop?: string
}

/**
 * VitePress `themeConfig.vipFooter` 配置。
 * - 设为 `false` 可关闭 `defineVipExtendsTheme` 注入的全局页脚
 * - 内容字段继承 `@142vip/vue` `VipFooterContent`，未传时由 `VipFooter` 内置默认提供
 */
export interface VipFooterConfig extends VipFooterContent {
  labels?: Partial<VipFooterLabels>
  /** 是否显示回到顶部（由 `defineVipExtendsTheme` 挂载 `@142vip/vue` `VipBackTop`） */
  showBackTop?: boolean
  /** 仅 `getVipFooter` 使用；全局页脚请用 `VipFooter` */
  license?: string
}

/** 剥离 VitePress 扩展字段，其余透传 `VipFooter`（`variant: admin` 为文档站约定） */
export function toVipFooterComponentProps(config: VipFooterConfig) {
  const { showBackTop: _showBackTop, license: _license, labels, ...rest } = config
  const { backTop: _backTop, ...footerLabels } = labels ?? {}

  return {
    variant: 'admin' as const,
    ...rest,
    ...(Object.keys(footerLabels).length > 0 ? { labels: footerLabels } : {}),
  }
}

/** `getVipThemeConfig` 可展开的页脚片段（`footer: false` + `vipFooter`） */
export interface VipThemeFooterSlice {
  footer: false
  vipFooter: VipFooterConfig
}

/**
 * 启用全局页脚并关闭 VitePress 默认单行 footer。
 * 与 `getVipThemeConfig` 搭配：`getVipThemeConfig({ ...enableVipFooter(params), nav })`
 *
 * @example
 * ```ts
 * enableVipFooter({
 *   showBackTop: true,
 *   showBadge: true,
 *   pkgName: pkg.name,
 *   pkgVersion: pkg.version,
 * })
 * ```
 */
export function enableVipFooter(
  params?: VipFooterConfig,
): VipThemeFooterSlice {
  return {
    footer: false,
    vipFooter: params ?? {},
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

/** `VipHomePage` 中单个 `VipProjectTable` 配置 */
export interface VipHomeTableConfig {
  title: string
  data: VipProject[]
  id?: string
}
