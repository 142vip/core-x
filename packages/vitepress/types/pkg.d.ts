/// <reference types="vite/client" />

/** 包内 ambient 模块声明与 VitePress 类型增强（构建工具不生成，统一在此维护） */

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

/**
 * VitePress `themeConfig` 扩展（原 `types/vitepress-theme.d.ts`）。
 * 须先 re-export 官方类型，再合并 `ThemeConfig`，避免覆盖 `useData` 等导出。
 */
declare module 'vitepress' {
  export * from 'vitepress/dist/client/index.js'
  export * from 'vitepress/dist/node/index.js'
  export * from 'vitepress/types/shared.js'

  interface ThemeConfig {
    /** 全局页脚；`false` 关闭 `defineVipExtendsTheme` 注入的 `VipFooter` */
    vipFooter?: false | import('../src/core/vip').VipFooterConfig
  }
}
