<script lang="ts" setup>
import { ArrowUp } from '@element-plus/icons-vue'
import { ElBacktop, ElIcon } from 'element-plus'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-backtop.css'
import 'element-plus/theme-chalk/el-icon.css'

const props = withDefaults(
  defineProps<{
    /** 距视口底部（px）→ ElBacktop `bottom` */
    bottom?: number
    /** 距视口右侧（px）→ ElBacktop `right` */
    right?: number
    /** 滚动超过该高度后显示按钮 */
    visibilityHeight?: number
    /** 无障碍文案 */
    backTopLabel?: string
  }>(),
  {
    bottom: 48,
    right: 24,
    visibilityHeight: 100,
    backTopLabel: '回到顶部',
  },
)

/** SSR 阶段不渲染，避免 hydration 与 window 滚动监听不一致 */
const showBackTop = ref(false)
const layoutBottom = ref(props.bottom)
const layoutRight = ref(props.right)

const MOBILE_MAX_WIDTH = 640
/** 移动端抬高，避免与固定暗色页脚 / 安全区重叠 */
const MOBILE_BOTTOM = 72
const MOBILE_RIGHT = 16

function syncMobileLayout(): void {
  const isMobile = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches
  layoutBottom.value = isMobile ? MOBILE_BOTTOM : props.bottom
  layoutRight.value = isMobile ? MOBILE_RIGHT : props.right
}

/** VitePress 页面滚动在 window；EP 默认只滚 documentElement，底部点击时需兜底 */
function scrollToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

let mobileMedia: MediaQueryList | null = null

onMounted(() => {
  showBackTop.value = true
  syncMobileLayout()
  mobileMedia = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
  mobileMedia.addEventListener('change', syncMobileLayout)
})

onBeforeUnmount(() => {
  mobileMedia?.removeEventListener('change', syncMobileLayout)
})

const resolvedBackTopLabel = computed(() => props.backTopLabel)
</script>

<template>
  <ElBacktop
    v-if="showBackTop"
    :bottom="layoutBottom"
    :right="layoutRight"
    :visibility-height="visibilityHeight"
    class="vip-back-top vip-element-plus-vp-theme"
    :aria-label="resolvedBackTopLabel"
    @click="scrollToTop"
  >
    <!-- 不用嵌套 button，避免抢占点击；pointer-events 交给 ElBacktop 根节点 -->
    <span
      class="vip-back-top__surface"
      aria-hidden="true"
    >
      <ElIcon>
        <ArrowUp />
      </ElIcon>
    </span>
  </ElBacktop>
</template>

<style lang="scss" scoped>
/* 高于 VPFooter / 自定义页脚（--vp-z-index-footer: 10），避免滚到底部被遮挡 */
.vip-back-top {
  z-index: var(--vp-z-index-local-nav) !important;
  width: auto !important;
  height: auto !important;
  background: transparent !important;
  box-shadow: none !important;
}

.vip-back-top__surface {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--vp-c-text-1);
  /* 半透明表面：滚过暗色页脚时不显得突兀 */
  background: color-mix(in srgb, var(--vp-c-bg-elv, var(--vp-c-bg)) 88%, transparent);
  backdrop-filter: blur(8px);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--vp-c-divider) 80%, transparent),
    0 2px 8px color-mix(in srgb, var(--vp-c-text-1) 8%, transparent);
  cursor: pointer;
  pointer-events: none;
  transform: translateY(0) scale(1);
  transition:
    color 0.22s ease,
    background-color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);

  :deep(.el-icon) {
    font-size: 16px;
    transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.vip-back-top:hover .vip-back-top__surface,
.vip-back-top:focus-visible .vip-back-top__surface {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--vp-c-brand-1) 35%, transparent),
    0 6px 16px color-mix(in srgb, var(--vp-c-text-1) 12%, transparent);
}

.vip-back-top:hover .vip-back-top__surface :deep(.el-icon),
.vip-back-top:focus-visible .vip-back-top__surface :deep(.el-icon) {
  animation: vip-back-top-icon-bounce 0.45s ease;
}

.vip-back-top:active .vip-back-top__surface {
  transform: translateY(-1px) scale(0.96);
  transition-duration: 0.12s;
}

@keyframes vip-back-top-icon-bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-3px);
  }

  70% {
    transform: translateY(1px);
  }
}

@media (min-width: 641px) {
  .vip-back-top__surface {
    width: 40px;
    height: 40px;

    :deep(.el-icon) {
      font-size: 18px;
    }
  }
}

@media (max-width: 640px) {
  .vip-back-top__surface {
    width: 34px;
    height: 34px;
    /* 叠在暗色页脚上时用偏暗半透明底，避免纯白圆块突兀 */
    background: color-mix(in srgb, #1b1b1f 72%, transparent);
    color: rgba(235, 235, 245, 0.88);
    box-shadow:
      0 0 0 1px rgba(235, 235, 245, 0.16),
      0 2px 10px rgba(0, 0, 0, 0.28);
  }

  .vip-back-top:hover .vip-back-top__surface,
  .vip-back-top:focus-visible .vip-back-top__surface {
    color: var(--vp-c-brand-1);
    background: color-mix(in srgb, #1b1b1f 88%, transparent);
    transform: translateY(-2px) scale(1.02);
  }

  .vip-back-top__surface :deep(.el-icon) {
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vip-back-top__surface {
    transition:
      color 0.2s,
      background-color 0.2s,
      box-shadow 0.2s;
  }

  .vip-back-top:hover .vip-back-top__surface,
  .vip-back-top:focus-visible .vip-back-top__surface,
  .vip-back-top:active .vip-back-top__surface {
    transform: none;
  }

  .vip-back-top:hover .vip-back-top__surface :deep(.el-icon),
  .vip-back-top:focus-visible .vip-back-top__surface :deep(.el-icon) {
    animation: none;
  }

  .vip-back-top__surface :deep(.el-icon) {
    transition: none;
  }
}
</style>
