import type { EnhanceAppContext } from 'vitepress/dist/client'
import type { Awaitable } from 'vitepress/types/shared'
import type { Component } from 'vue'
import { ElBacktop, ElImage, ElTable, ElTableColumn, ElTag } from 'element-plus'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { VipBackTop } from '../components'

/**
 * vitepress默认主题
 * - 参考：https://vitepress.dev/zh/guide/custom-theme
 */
interface Theme {
  Layout?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => Awaitable<void>
  extends?: Theme
  /**
   * @deprecated can be replaced by wrapping layout component
   */
  setup?: () => void
  /**
   * @deprecated Render not found page by checking `useData().page.value.isNotFound` in Layout instead.
   */
  NotFound?: Component
}

/**
 * 集成vitepress的默认主题，自定义拓展
 * - 参考：https://vitepress.dev/guide/extending-default-theme#layout-slots
 */
export default function defineVipExtendsTheme(theme?: Theme) {
  return {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout, null, {
        // 增加返回顶部组件
        'doc-bottom': () => h(VipBackTop),
      })
    },
    enhanceApp: ({ app }: EnhanceAppContext) => {
      // 按需引入
      app.component(ElBacktop)
      app.component(ElImage)
      app.component(ElTable)
      app.component(ElTableColumn)
      app.component(ElTag)
    },
    // 自定义拓展，配置覆盖
    ...theme != null ? theme : {},
  }
}
