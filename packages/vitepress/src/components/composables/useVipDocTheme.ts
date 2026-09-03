import { useData } from 'vitepress'
import { computed } from 'vue'

/**
 * VitePress 文档站主题上下文。
 * `isDark` 与 `html.dark` / 主题切换按钮同步，供需随亮暗切换资源的组件使用。
 */
export function useVipDocTheme() {
  const { isDark, theme } = useData()

  return {
    isDark,
    theme,
    /** 只读布尔：当前是否为暗黑模式 */
    isDarkMode: computed(() => isDark.value),
  }
}
