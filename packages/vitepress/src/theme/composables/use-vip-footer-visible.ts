import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import { computed } from 'vue'

/**
 * 全局页脚显示条件：
 * - `themeConfig.vipFooter !== false`
 * - 页面 frontmatter `footer !== false`
 * - `layout: home` 始终展示
 * - 其它页：无侧边栏时展示
 */
export function useVipFooterVisible() {
  const { theme, frontmatter } = useData()
  const { hasSidebar } = useSidebar()

  const isEnabled = computed(() => theme.value.vipFooter !== false)

  const isVisible = computed(() => {
    if (!isEnabled.value) {
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

  return {
    hasSidebar,
    isEnabled,
    isVisible,
  }
}
