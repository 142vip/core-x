/// <reference types="vite/client" />

/** 包内 TypeScript 模块声明（构建工具不生成，需在 types 目录统一维护） */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module '@142vip/cdn/media/svg/*.svg' {
  const src: string
  export default src
}

declare module '@142vip/cdn/media/wechat/*.jpg' {
  const src: string
  export default src
}

declare module '@142vip/cdn/media/wechat/*.webp' {
  const src: string
  export default src
}

/** @142vip/vue 子路径导出（package exports 指向源码，node 解析需显式声明） */
declare module '@142vip/vue/components' {
  import type { DefineComponent } from 'vue'

  export interface FooterLinkItem {
    label: string
    href: string
    title?: string
    subTitle?: string
  }

  export interface FooterIconLinkItem {
    href: string
    icon: string
    title: string
  }

  export const AppSiteFooter: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export const siteFooterSocialLinks: readonly FooterIconLinkItem[]
  export function getSiteFooterResourceLinks(variant: 'main' | 'admin'): FooterLinkItem[]
  export const SITE_FOOTER_OPEN_SOURCE_LINKS: readonly FooterLinkItem[]
  export const SITE_FOOTER_FRIEND_LINKS: readonly FooterLinkItem[]
}

declare module '@142vip/vue/constants' {
  export interface SiteContactQrItem {
    src: string
    alt: string
    caption: string
  }

  export const SITE_CONTACT_QR_ITEMS: readonly SiteContactQrItem[]
}
