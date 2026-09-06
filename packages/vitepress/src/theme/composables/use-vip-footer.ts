import type { VipFooterConfig } from '../../core/vip'
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { computed } from 'vue'
import { toVipFooterComponentProps } from '../../core/vip'

/**
 * `themeConfig.vipFooter` 解析、显隐与 `@142vip/vue` `VipFooter` props。
 * 由 `defineVipExtendsTheme` 内 `LayoutFooter` 使用。
 *
 * 显示条件：
 * - `themeConfig.vipFooter !== false`
 * - 页面 frontmatter `footer !== false`
 * - `layout: home` 始终展示
 * - 其它页：无侧边栏时展示
 */
export function useVipFooter() {
  const { theme, frontmatter } = useData()
  const { hasSidebar } = useSidebar()

  const resolvedConfig = computed<VipFooterConfig>(() => {
    const fromTheme = theme.value.vipFooter
    if (fromTheme === false) {
      return {}
    }
    return fromTheme != null && typeof fromTheme === 'object' ? { ...fromTheme } : {}
  })

  const isVisible = computed(() => {
    if (theme.value.vipFooter === false) {
      return false
    }
    if (frontmatter.value.footer === false) {
      return false
    }
    if (frontmatter.value.layout === 'home') {
      return true
    }
    return !hasSidebar.value
  })

  const showBackTop = computed(() => resolvedConfig.value.showBackTop === true)
  const backTopLabel = computed(() => resolvedConfig.value.labels?.backTop ?? '回到顶部')
  const footerProps = computed(() => toVipFooterComponentProps(resolvedConfig.value))

  return {
    backTopLabel,
    footerProps,
    hasSidebar,
    isVisible,
    showBackTop,
  }
}
