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

withDefaults(
  defineProps<{
    /** GitHub 仓库 pin 列表；不传则使用 142vip 三仓默认 */
    items?: VipGithubPinItem[]
    /** 区块标题；空字符串不展示（嵌在「开源趋势」等标题下时常用） */
    title?: string
  }>(),
  {
    items: () => [
      { repo: 'core-x', alt: 'core-x' },
      { repo: '408CSFamily', alt: '408CSFamily' },
      { repo: 'JavaScriptCollection', alt: 'JavaScriptCollection' },
    ],
    title: '',
  },
)

const { isDark } = useVipDocTheme()

/**
 * pin 图主题随站点亮/暗切换。
 * `dark` 对齐 GitHub 深色 pin；`default` 为浅色卡片。
 */
const pinTheme = computed(() => (isDark.value ? 'dark' : 'default'))

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
  >
    <div class="vip-github-pins__inner">
      <h3
        v-if="title"
        class="vip-github-pins__title"
      >
        {{ title }}
      </h3>
      <div class="vip-github-pins__grid">
        <a
          v-for="item in items"
          :key="`${item.username ?? '142vip'}/${item.repo}`"
          class="vip-github-pins__card"
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
          >
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* 对齐 GitHub pin 卡片：三列等宽、轻圆角、无双重边框；亮/暗由 pin API theme 承担 */
.vip-github-pins {
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
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.vip-github-pins__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.vip-github-pins__card {
  display: block;
  width: 100%;
  min-width: 0;
  border-radius: 8px;
  overflow: hidden;
  /* 与 pin 卡片底色衔接，避免亮/暗切换时露白边 */
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

.vip-github-pins__img {
  display: block;
  width: 100%;
  height: auto;
  /* pin SVG 常见比例偏扁 */
  aspect-ratio: 400 / 120;
  object-fit: cover;
  object-position: top left;
  background: transparent;
}

@media (max-width: 960px) {
  .vip-github-pins__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .vip-github-pins__grid > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 420px;
    justify-self: center;
  }
}

/* 小屏：横向滑动，贴近 GitHub 多端浏览 */
@media (max-width: 640px) {
  .vip-github-pins {
    margin-top: 16px;
  }

  .vip-github-pins__title {
    margin-bottom: 12px;
    font-size: 1rem;
  }

  .vip-github-pins__grid {
    display: flex;
    grid-template-columns: none;
    gap: 12px;
    overflow-x: auto;
    padding-bottom: 6px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
  }

  .vip-github-pins__grid > :last-child:nth-child(odd) {
    grid-column: auto;
    max-width: none;
    justify-self: auto;
  }

  .vip-github-pins__card {
    flex: 0 0 min(320px, 86vw);
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
