import type { VipFooterConfig } from '../src/core/vip'

declare module 'vitepress' {
  interface ThemeConfig {
    /** 全局页脚；`false` 关闭 defineVipExtendsTheme 注入的 LayoutVipFooter */
    vipFooter?: false | VipFooterConfig
  }
}

export {}
