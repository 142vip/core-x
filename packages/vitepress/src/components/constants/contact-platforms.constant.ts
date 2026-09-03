import bilibiliIcon from '@142vip/cdn/media/svg/bilibili.svg'
import csdnIcon from '@142vip/cdn/media/svg/csdn.svg'
import giteeIcon from '@142vip/cdn/media/svg/gitee.svg'
import githubIcon from '@142vip/cdn/media/svg/github.svg'
import juejinIcon from '@142vip/cdn/media/svg/juejin.svg'
import chuFanImage from '@142vip/cdn/media/wechat/chu-fan-443-450x450.jpg'
import chuFanCodeImage from '@142vip/cdn/media/wechat/chu-fan-code-450x450.webp'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'

/** 联系我们双二维码单项（图 + 无障碍文案 + 展示标题） */
export interface SiteContactQrItem {
  src: string
  alt: string
  caption: string
}

/**
 * 联系我们双二维码：联系作者区块、页脚、OAuth 宣传区等共用同一数据源。
 * 顺序：公众号 → 个人微信。
 */
export const SITE_CONTACT_QR_ITEMS: readonly SiteContactQrItem[] = [
  {
    src: chuFanCodeImage,
    alt: '关注公众号',
    caption: '关注公众号',
  },
  {
    src: chuFanImage,
    alt: '加微信好友',
    caption: '加微信好友',
  },
] as const

/** 联系作者 — 平台外链 */
export const VIP_CONTACT_PLATFORM_LINKS = [
  {
    href: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_MMDAPL,
    title: '点击跳转 Github 主页',
    alt: 'GitHub',
    icon: githubIcon,
  },
  {
    href: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_MMDAPL,
    title: '点击跳转码云主页',
    alt: 'Gitee',
    icon: giteeIcon,
  },
  {
    href: OPEN_SOURCE_ADDRESS.HOME_PAGE_JUE_JIN,
    title: '点击跳转掘金主页',
    alt: '掘金',
    icon: juejinIcon,
  },
  {
    href: OPEN_SOURCE_ADDRESS.HOME_PAGE_BILIBILI,
    title: '点击跳转 B 站主页',
    alt: 'Bilibili',
    icon: bilibiliIcon,
  },
  {
    href: OPEN_SOURCE_ADDRESS.HOME_PAGE_CSDN,
    title: '点击跳转 CSDN 博客主页',
    alt: 'CSDN',
    icon: csdnIcon,
  },
]
