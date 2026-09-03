import defineVipExtendsTheme from '@142vip/vitepress/theme'
import { h } from 'vue'
import HomePage from './components/HomePage.vue'
import './style.css'

/**
 * 自定义主题
 * - HomePage 挂在首页 Markdown 正文之后、页脚之前（勿在 docs/index.md 中 import）
 * @see https://vitepress.dev/guide/extending-default-theme#layout-slots
 */
export default defineVipExtendsTheme(undefined, {
  homePage: () => h(HomePage),
})
