import type { VipFooterConfig } from '../core/vip'
import { VipFooter } from '@142vip/vue/components'
import { useData } from 'vitepress'
import { computed, defineComponent, h } from 'vue'
import VipBackTop from '../components/VipBackTop.vue'
import { resolveVipFooterBadgeLinks } from '../core/vip'
import { useVipFooterVisible } from './composables/use-vip-footer-visible'

/**
 * 将 `themeConfig.vipFooter` 中显式配置转为 `AppSiteFooter` props。
 * 未配置的链接 / 文案由 `@142vip/vue` 内置默认提供。
 *
 * 说明：`AppSiteFooter` 的 `ElBacktop` 仅在 `variant=main` 模板中渲染；
 * 本站使用 `admin` 样式，故回到顶部由本组件在 `showBackTop` 为 true 时挂载 `VipBackTop`。
 */
function resolveAppSiteFooterProps(config: VipFooterConfig) {
  return {
    variant: 'admin' as const,
    showBackTop: false,
    ...(config.labels != null ? { labels: config.labels } : {}),
    ...(config.resourceLinks != null ? { resourceLinks: config.resourceLinks } : {}),
    ...(config.openSourceLinks != null ? { openSourceLinks: config.openSourceLinks } : {}),
    ...(config.friendLinks != null ? { friendLinks: config.friendLinks } : {}),
    ...(config.contactQrItems != null ? { contactQrItems: config.contactQrItems } : {}),
    ...(config.socialLinks != null ? { socialLinks: config.socialLinks } : {}),
  }
}

/**
 * VitePress `layout-bottom`：挂载 `AppSiteFooter` + 可选 `VipBackTop` / Release / 徽章。
 */
export const LayoutVipFooter = defineComponent({
  name: 'LayoutVipFooter',
  setup() {
    const { theme } = useData()
    const { isVisible } = useVipFooterVisible()

    const resolvedConfig = computed<VipFooterConfig>(() => {
      const cfg = theme.value.vipFooter
      return cfg != null && typeof cfg === 'object' ? { ...cfg } : {}
    })

    return () => {
      if (!isVisible.value) {
        return null
      }

      const config = resolvedConfig.value
      const showBackTop = config.showBackTop === true
      // showBadge: true → 默认徽章；false/未传 → 无；数组 → 自定义
      const badgeLinks = resolveVipFooterBadgeLinks(config.showBadge)
      const children = [
        ...(showBackTop ? [h(VipBackTop)] : []),
        h(VipFooter, resolveAppSiteFooterProps(config)),
      ]

      const metaChildren = []
      if (config.pkgName) {
        metaChildren.push(
          h(
            'p',
            { class: 'vip-footer-host__release' },
            `Release ${config.pkgName} @${config.pkgVersion} 😏`,
          ),
        )
      }

      if (badgeLinks.length > 0) {
        metaChildren.push(
          h(
            'div',
            {
              'class': 'vip-footer-host__badges',
              'role': 'navigation',
              'aria-label': '相关链接',
            },
            badgeLinks.map(item =>
              h(
                'a',
                {
                  class: 'vip-footer-host__badge',
                  href: item.href,
                  title: item.alt,
                  rel: item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer',
                  target: item.href.startsWith('mailto:') ? undefined : '_blank',
                },
                [
                  h('img', {
                    src: item.src,
                    alt: item.alt,
                    height: '20',
                    decoding: 'async',
                    referrerpolicy: 'no-referrer',
                  }),
                ],
              ),
            ),
          ),
        )
      }

      if (metaChildren.length > 0) {
        children.push(
          h('div', { class: 'vip-footer-host__meta' }, metaChildren),
        )
      }

      return h(
        'div',
        { class: 'vip-footer-host vip-footer-host--dark' },
        children,
      )
    }
  },
})
