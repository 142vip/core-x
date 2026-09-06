<script lang="ts" setup>
import { computed } from 'vue'
import { useVipDocTheme } from './composables/useVipDocTheme'

export interface VipGithubPinItem {
  /** 仓库名（用于 pin API） */
  repo: string
  /** 组织 / 用户名，默认 142vip */
  username?: string
  /** 点击跳转，默认 GitHub 仓库页 */
  href?: string
  /** 无障碍 / 失败兜底文案 */
  alt?: string
}

const props = withDefaults(
  defineProps<{
    /** GitHub 仓库 pin 列表；不传则使用 142vip 三仓默认 */
    items?: VipGithubPinItem[]
    /** 区块标题；空字符串不展示（嵌在「开源趋势」等标题下时常用） */
    title?: string
    /**
     * 布局模式
     * - `auto`：随容器宽度自适应网格，窄屏单列垂直堆叠（默认）
     * - `grid`：始终按断点多列网格
     * - `scroll`：宽屏横向滑动；窄屏回退为单列垂直
     */
    layout?: 'auto' | 'grid' | 'scroll'
    /**
     * pin 图主题
     * - `auto`：跟随 VitePress 亮 / 暗（默认）
     * - `light` / `dark`：固定浅色 / 深色 pin
     */
    theme?: 'auto' | 'light' | 'dark'
  }>(),
  {
    items: () => [
      { repo: 'core-x', alt: 'core-x' },
      { repo: '408CSFamily', alt: '408CSFamily' },
      { repo: 'JavaScriptCollection', alt: 'JavaScriptCollection' },
    ],
    title: '',
    layout: 'auto',
    theme: 'auto',
  },
)

const { isDark } = useVipDocTheme()

/** pin API：`default` 浅色卡片，`dark` 深色卡片 */
const pinTheme = computed(() => {
  if (props.theme === 'light') {
    return 'default'
  }
  if (props.theme === 'dark') {
    return 'dark'
  }
  return isDark.value ? 'dark' : 'default'
})

const layoutClass = computed(() => `vip-github-pins--layout-${props.layout}`)

const itemCount = computed(() => props.items.length)

function resolveHref(item: VipGithubPinItem): string {
  if (item.href != null && item.href.length > 0) {
    return item.href
  }
  const user = item.username ?? '142vip'
  return `https://github.com/${user}/${item.repo}`
}

function resolveSrc(item: VipGithubPinItem): string {
  const user = item.username ?? '142vip'
  const query = new URLSearchParams({
    username: user,
    repo: item.repo,
    theme: pinTheme.value,
    hide_border: 'true',
    show_owner: 'false',
  })
  return `https://github-stats-extended.vercel.app/api/pin/?${query.toString()}`
}
</script>

<template>
  <section
    :aria-label="title || '开源仓库'"
    class="vip-github-pins"
    :class="[layoutClass, { 'vip-github-pins--few': itemCount <= 2 }]"
  >
    <div class="vip-github-pins__inner">
      <h3
        v-if="title"
        class="vip-github-pins__title"
      >
        {{ title }}
      </h3>
      <div
        class="vip-github-pins__grid"
        role="list"
      >
        <a
          v-for="item in items"
          :key="`${item.username ?? '142vip'}/${item.repo}`"
          class="vip-github-pins__card"
          role="listitem"
          :href="resolveHref(item)"
          :title="item.alt ?? item.repo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            class="vip-github-pins__img"
            :src="resolveSrc(item)"
            :alt="item.alt ?? item.repo"
            loading="lazy"
            decoding="async"
            width="400"
            height="120"
            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 45vw, 320px"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vip-github-pins {
  --vip-github-pins-col-min: 280px;
  --vip-github-pins-gap: clamp(12px, 2vw, 16px);
  --vip-github-pins-card-radius: 8px;
  --vip-github-pins-scroll-card-width: min(320px, 86vw);

  container-type: inline-size;
  container-name: vip-github-pins;
  width: 100%;
  margin: 20px 0 0;
  padding: 0;
  background: transparent;
}

.vip-github-pins__inner {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.vip-github-pins__title {
  margin: 0 0 16px;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.1rem);
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.vip-github-pins__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--vip-github-pins-col-min)), 1fr));
  gap: var(--vip-github-pins-gap);
  align-items: stretch;
}

.vip-github-pins--few .vip-github-pins__grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  justify-content: center;
}

.vip-github-pins__card {
  display: block;
  width: 100%;
  min-width: 0;
  border-radius: var(--vip-github-pins-card-radius);
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--vp-c-divider) 70%, transparent);
  transition:
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--vp-c-brand-1) 35%, transparent),
      0 10px 24px color-mix(in srgb, var(--vp-c-text-1) 8%, transparent);
  }

  &:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
}

html.dark .vip-github-pins__card {
  background: color-mix(in srgb, var(--vp-c-bg-alt, #161618) 88%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--vp-c-divider) 55%, transparent);
}

.vip-github-pins__img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 400 / 120;
  object-fit: cover;
  object-position: top left;
  background: transparent;
}

/* `layout: grid` — 宽屏三列，中屏两列，窄容器单列垂直 */
.vip-github-pins--layout-grid .vip-github-pins__grid {
  @container vip-github-pins (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @container vip-github-pins (min-width: 560px) and (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @container vip-github-pins (max-width: 559px) {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* `layout: auto` — 宽容器多列，窄容器单列垂直 */
@container vip-github-pins (max-width: 640px) {
  .vip-github-pins--layout-auto .vip-github-pins__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* `layout: scroll` — 宽容器横向滑动；窄容器单列垂直 */
@container vip-github-pins (min-width: 641px) {
  .vip-github-pins--layout-scroll .vip-github-pins__grid {
    display: flex;
    gap: var(--vip-github-pins-gap);
    overflow-x: auto;
    padding-bottom: 6px;
    padding-inline: max(0px, env(safe-area-inset-left, 0px))
      max(0px, env(safe-area-inset-right, 0px));
    scroll-snap-type: x mandatory;
    scroll-padding-inline: max(0px, env(safe-area-inset-left, 0px));
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .vip-github-pins--layout-scroll .vip-github-pins__card {
    flex: 0 0 var(--vip-github-pins-scroll-card-width);
    scroll-snap-align: start;
  }
}

@container vip-github-pins (max-width: 640px) {
  .vip-github-pins--layout-scroll .vip-github-pins__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* 视口级兜底：移动端单列垂直 */
@media (max-width: 640px) {
  .vip-github-pins {
    margin-top: 16px;
  }

  .vip-github-pins__title {
    margin-bottom: 12px;
  }

  .vip-github-pins--layout-auto .vip-github-pins__grid,
  .vip-github-pins--layout-grid .vip-github-pins__grid,
  .vip-github-pins--layout-scroll .vip-github-pins__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (min-width: 641px) {
  .vip-github-pins--layout-scroll .vip-github-pins__grid {
    display: flex;
    gap: var(--vip-github-pins-gap);
    overflow-x: auto;
    padding-bottom: 6px;
    padding-inline: max(0px, env(safe-area-inset-left, 0px))
      max(0px, env(safe-area-inset-right, 0px));
    scroll-snap-type: x mandatory;
    scroll-padding-inline: max(0px, env(safe-area-inset-left, 0px));
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .vip-github-pins--layout-scroll .vip-github-pins__card {
    flex: 0 0 var(--vip-github-pins-scroll-card-width);
    scroll-snap-align: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vip-github-pins__card {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}
</style>
