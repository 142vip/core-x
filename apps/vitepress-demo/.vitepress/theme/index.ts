import defineVipExtendsTheme from '@142vip/vitepress/theme'
import { h } from 'vue'
import HomePage from './components/HomePage.vue'
import './style.css'

/**
 * 扩展默认主题：HomePage 在首页正文下方；页脚 / 回到顶部见 enableVipFooter
 * @see https://vitepress.dev/zh/guide/extending-default-theme
 */
export default defineVipExtendsTheme(undefined, {
  homePage: () => h(HomePage),
})
