import type { EnhanceAppContext } from 'vitepress/dist/client'
import type { Awaitable } from 'vitepress/types/shared'
import type { Component, VNode } from 'vue'
import { ElBacktop, ElIcon, ElImage, ElLink, ElSpace, ElTable, ElTableColumn, ElTag } from 'element-plus'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { defineComponent, h } from 'vue'
import { VipMermaid } from '../components'
import { LayoutVipFooter } from './layout-footer'
// VitePress 在 html 上切换 .dark；需一并加载 EP 暗黑变量，表格/链接等才会跟随主题
import 'element-plus/theme-chalk/dark/css-vars.css'
import '../vip-components.css'

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
 * 扩展默认主题的选项。
 * - `layoutSlots`：透传 VitePress Layout 具名插槽
 * - `homePage`：仅在 `layout: home` 时，挂在首页 Markdown 正文之后、全局页脚之前
 *   （VitePress 无官方「正文后」插槽，故经 `layout-bottom` 组合注入）
 */
export interface VipExtendsThemeOptions {
  layoutSlots?: Record<string, () => VNode | VNode[] | null>
  /** 首页正文下方的自定义区块（如站点 HomePage） */
  homePage?: () => VNode | VNode[] | null
}

function flattenSlotNodes(nodes: VNode | VNode[] | null | undefined): VNode[] {
  if (nodes == null) {
    return []
  }
  return Array.isArray(nodes) ? nodes.filter(Boolean) : [nodes]
}

/**
 * 集成vitepress的默认主题，自定义拓展
 * - Element Plus 基础组件 + 暗黑变量
 * - 全局页脚（themeConfig.footer 请设为 false，见 enableVipFooter；回到顶部由 showBackTop 控制）
 * - Mermaid（需在 defineVipVitepressConfig 第二参数启用）
 * - 参考：https://vitepress.dev/guide/extending-default-theme#layout-slots
 */
export default function defineVipExtendsTheme(
  theme?: Theme,
  options?: VipExtendsThemeOptions,
) {
  const LayoutHomePage = defineComponent({
    name: 'LayoutHomePage',
    setup() {
      const { frontmatter } = useData()
      return () => {
        if (frontmatter.value.layout !== 'home') {
          return null
        }
        return flattenSlotNodes(options?.homePage?.() ?? null)
      }
    },
  })

  return {
    extends: DefaultTheme,
    Layout: () => {
      const userSlots = { ...(options?.layoutSlots ?? {}) }
      const userLayoutBottom = userSlots['layout-bottom']
      delete userSlots['layout-bottom']

      return h(DefaultTheme.Layout, null, {
        ...userSlots,
        // 顺序：首页扩展块（正文后）→ 用户 layout-bottom → 全局页脚
        'layout-bottom': () => [
          h(LayoutHomePage),
          ...flattenSlotNodes(userLayoutBottom?.() ?? null),
          h(LayoutVipFooter),
        ],
      })
    },
    enhanceApp: ({ app }: EnhanceAppContext) => {
      // element-plus 2.13+ 的 component() 重载需显式传入组件名
      app.component('ElBacktop', ElBacktop)
      app.component('ElIcon', ElIcon)
      app.component('ElImage', ElImage)
      app.component('ElLink', ElLink)
      app.component('ElSpace', ElSpace)
      app.component('ElTable', ElTable)
      app.component('ElTableColumn', ElTableColumn)
      app.component('ElTag', ElTag)
      // Mermaid 组件（配合 defineVipVitepressConfig(..., { mermaid: true })）
      app.component('VipMermaid', VipMermaid)
    },
    // 自定义拓展，配置覆盖
    ...theme != null ? theme : {},
  }
}
