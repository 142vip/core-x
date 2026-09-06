import type { EnhanceAppContext } from 'vitepress/dist/client'
import type { Awaitable } from 'vitepress/types/shared'
import type { Component, VNode } from 'vue'
import type { VipHomeTableConfig } from '../core/vip'
import { VipBackTop, VipFooter } from '@142vip/vue/components'
import { ElIcon, ElImage, ElLink, ElSpace, ElTable, ElTableColumn, ElTag } from 'element-plus'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { defineComponent, h } from 'vue'
import { VipMermaid } from '../components'
import VipHomePage from '../components/VipHomePage.vue'
import { useVipFooter } from './composables/use-vip-footer'
// VitePress 在 html 上切换 .dark；需一并加载 EP 暗黑变量，表格/链接等才会跟随主题
import 'element-plus/theme-chalk/dark/css-vars.css'
import '../vip-theme.css'

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

/** `defineVipExtendsTheme` 注入 `VipHomePage` 的配置（不含组件 props 以外的插槽） */
export interface VipHomePageThemeOptions {
  tables?: VipHomeTableConfig[]
  tableSectionId?: string
  showTeam?: boolean
  showOpenSource?: boolean
  /** `VipHomePage` 默认插槽（如联系作者区块） */
  defaultSlot?: () => VNode | VNode[] | null
}

/**
 * 扩展默认主题的选项。
 * - `layoutSlots`：透传 VitePress Layout 具名插槽
 * - `homePage`：仅在 `layout: home` 时，挂在首页 Markdown 正文之后、全局页脚之前
 *   （VitePress 无官方「正文后」插槽，故经 `layout-bottom` 组合注入）
 */
export interface VipExtendsThemeOptions {
  layoutSlots?: Record<string, () => VNode | VNode[] | null>
  /**
   * 首页正文下方区块
   * - 配置对象：挂载内置 `VipHomePage`
   * - 函数：完全自定义 VNode
   * - `false`：不注入
   */
  homePage?: false | VipHomePageThemeOptions | (() => VNode | VNode[] | null)
}

function resolveHomePageNodes(
  homePage: VipExtendsThemeOptions['homePage'],
): VNode[] {
  if (homePage === false || homePage == null) {
    return []
  }
  if (typeof homePage === 'function') {
    return flattenSlotNodes(homePage())
  }

  const { defaultSlot, ...props } = homePage
  const slots = defaultSlot != null
    ? { default: () => flattenSlotNodes(defaultSlot()) }
    : undefined

  return [h(VipHomePage, props, slots)]
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
 * - 全局页脚（`enableVipFooter` + `@142vip/vue` `VipFooter`；`showBackTop` 挂载 `VipBackTop`）
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
        return resolveHomePageNodes(options?.homePage)
      }
    },
  })

  const LayoutFooter = defineComponent({
    name: 'LayoutFooter',
    setup() {
      const { backTopLabel, footerProps, isVisible, showBackTop } = useVipFooter()

      return () => {
        if (!isVisible.value) {
          return null
        }

        const nodes = []

        // 回到顶部
        if (showBackTop.value) {
          nodes.push(
            h('div', { class: 'vip-footer-floating-dock vip-element-plus-vp-theme' }, [
              h(VipBackTop, {
                class: 'vip-footer-floating-dock__back-top',
                ariaLabel: backTopLabel.value,
              }),
            ]),
          )
        }

        nodes.push(
          h('footer', { class: 'global-footer vip-footer-host--dark' }, [
            h('div', { class: 'global-footer__surface' }, [
              h(VipFooter, footerProps.value),
            ]),
          ]),
        )

        return h('div', { class: 'vip-footer-host vip-element-plus-vp-theme' }, nodes)
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
          h(LayoutFooter),
        ],
      })
    },
    enhanceApp: ({ app }: EnhanceAppContext) => {
      // element-plus 2.13+ 的 component() 重载需显式传入组件名
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
