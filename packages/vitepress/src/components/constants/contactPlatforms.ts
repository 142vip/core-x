import bilibiliIcon from '@142vip/cdn/media/svg/bilibili.svg'
import csdnIcon from '@142vip/cdn/media/svg/csdn.svg'
import giteeIcon from '@142vip/cdn/media/svg/gitee.svg'
import githubIcon from '@142vip/cdn/media/svg/github.svg'
import juejinIcon from '@142vip/cdn/media/svg/juejin.svg'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'

/**
 * 联系作者 — 平台外链
 */
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

/**
 * 联系作者 — 微信二维码
 */
export const VIP_CONTACT_WECHAT_QR = 'https://cdn.statically.io/gh/142vip/cdn_service@main/apps/media/wechat/main-code.png'
