<script lang="ts" setup>
/**
 * VipMermaid：渲染 Mermaid 架构图，并按内容尺寸自动切换展示模式。
 *
 * - 静态模式：内容可完整展示时居中显示，高度随内容自适应
 * - 交互模式：内容超出区域时启用缩放、平移、还原与全屏
 */
import { useData } from 'vitepress'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  renderVipMermaidSvg,
  resolveVipMermaidTheme,
} from '../core/mermaid-theme'
import { getVipMermaidInteractiveViewportHeight, measureVipMermaidFit, useVipMermaidViewport } from './utils/vip-mermaid-viewport'

const props = defineProps<{
  /** encodeURIComponent 后的 mermaid 源码 */
  code: string
  /** 官方主题：default / forest / neutral / base / dark */
  theme?: string
}>()

const { isDark } = useData()
const panelRef = ref<HTMLElement | null>(null)
const inlineViewportRef = ref<HTMLElement | null>(null)
const inlineContentRef = ref<HTMLElement | null>(null)
const fullscreenViewportRef = ref<HTMLElement | null>(null)
const fullscreenContentRef = ref<HTMLElement | null>(null)
const errorMessage = ref('')
const fullscreenOpen = ref(false)
const fullscreenContent = ref('')
/** 内容超出展示区域时为 true，此时启用缩放、平移与全屏 */
const needsInteraction = ref(false)

const inlineViewport = useVipMermaidViewport(inlineViewportRef, inlineContentRef)
const fullscreenViewport = useVipMermaidViewport(fullscreenViewportRef, fullscreenContentRef)
const inlineStageStyle = inlineViewport.stageStyle
const fullscreenStageStyle = fullscreenViewport.stageStyle

/** 渲染代际计数，切换主题时丢弃过期结果，避免空白闪烁 */
let generation = 0

/** 将 fence 传入的 URI 编码源码解码为 Mermaid 文本 */
function decodeSource(): string {
  try {
    return decodeURIComponent(props.code).trim()
  }
  catch {
    return props.code.trim()
  }
}

/**
 * 修正 Mermaid 注入的 SVG 样式。
 * 移除 `max-width: 100%`，避免在绝对定位容器内宽度塌缩为 0。
 */
function normalizeMermaidSvg(container: HTMLElement): void {
  const svg = container.querySelector('svg')
  if (svg == null) {
    return
  }

  svg.style.maxWidth = 'none'
  svg.style.width = 'auto'
  svg.style.height = 'auto'

  if (!svg.getAttribute('width') && svg.viewBox?.baseVal.width) {
    svg.setAttribute('width', String(svg.viewBox.baseVal.width))
  }
  if (!svg.getAttribute('height') && svg.viewBox?.baseVal.height) {
    svg.setAttribute('height', String(svg.viewBox.baseVal.height))
  }
}

/** 渲染或窗口尺寸变化后，同步静态 / 交互模式与视口布局 */
async function syncViewportLayout(): Promise<void> {
  await nextTick()
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updateDisplayMode()
      if (needsInteraction.value && fullscreenOpen.value) {
        fullscreenViewport.fitToView()
      }
    })
  })
}

/**
 * 根据内容尺寸决定展示模式。
 * 能完整放下时使用静态居中；超出时切换为固定视口并挂载交互能力。
 */
function updateDisplayMode(): void {
  const panel = panelRef.value
  const content = inlineContentRef.value
  if (panel == null || content == null || content.innerHTML.length === 0) {
    needsInteraction.value = false
    inlineViewport.unmountViewport()
    inlineViewport.resetTransform()
    return
  }

  const panelWidth = panel.clientWidth
  const interactiveHeight = getVipMermaidInteractiveViewportHeight()
  const measure = measureVipMermaidFit(panelWidth, interactiveHeight, content)

  if (measure == null) {
    needsInteraction.value = false
    inlineViewport.unmountViewport()
    inlineViewport.resetTransform()
    return
  }

  needsInteraction.value = !measure.fitsNaturally

  if (needsInteraction.value) {
    inlineViewport.mountViewport()
    inlineViewport.fitToView()
    return
  }

  inlineViewport.unmountViewport()
  inlineViewport.resetTransform()
  if (fullscreenOpen.value) {
    closeFullscreen()
  }
}

/** 将内联 SVG 同步到全屏容器 */
function syncFullscreenContent(): void {
  if (inlineContentRef.value != null) {
    fullscreenContent.value = inlineContentRef.value.innerHTML
  }
}

/** 打开全屏预览，仅交互模式下可用 */
async function openFullscreen(): Promise<void> {
  if (!needsInteraction.value || inlineContentRef.value == null || inlineContentRef.value.innerHTML.length === 0) {
    return
  }

  syncFullscreenContent()
  fullscreenOpen.value = true
  document.body.classList.add('vip-mermaid-fs-open')
  await nextTick()
  fullscreenViewport.mountViewport()
  await syncViewportLayout()
}

/** 关闭全屏预览并恢复页面滚动 */
function closeFullscreen(): void {
  fullscreenOpen.value = false
  document.body.classList.remove('vip-mermaid-fs-open')
  fullscreenViewport.unmountViewport()
}

/** 监听 Esc 键关闭全屏 */
function onDocumentKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && fullscreenOpen.value) {
    closeFullscreen()
  }
}

/** 渲染 Mermaid SVG，并在完成后更新展示模式 */
async function render(): Promise<void> {
  const el = inlineContentRef.value
  if (el == null || typeof window === 'undefined') {
    return
  }

  const source = decodeSource()
  if (source.length === 0) {
    el.innerHTML = ''
    errorMessage.value = ''
    needsInteraction.value = false
    inlineViewport.unmountViewport()
    inlineViewport.resetTransform()
    return
  }

  const current = ++generation
  const isStale = () => current !== generation
  const theme = resolveVipMermaidTheme(isDark.value, props.theme)

  try {
    const svg = await renderVipMermaidSvg(source, theme, isStale)
    if (isStale() || inlineContentRef.value == null) {
      return
    }

    if (svg.length > 0) {
      inlineContentRef.value.innerHTML = svg
      normalizeMermaidSvg(inlineContentRef.value)
      errorMessage.value = ''
      if (fullscreenOpen.value) {
        syncFullscreenContent()
      }
      await syncViewportLayout()
    }
  }
  catch (error) {
    if (isStale()) {
      return
    }
    errorMessage.value = error instanceof Error ? error.message : String(error)
    closeFullscreen()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onDocumentKeydown)
  void render()

  void nextTick(() => {
    setupResizeObserver()
  })
})

let resizeObserver: ResizeObserver | null = null

/**
 * 监听面板尺寸变化。
 * 窗口缩放或侧边栏折叠时，重新判断静态 / 交互模式。
 */
function setupResizeObserver(): void {
  resizeObserver?.disconnect()
  const panel = panelRef.value
  if (panel == null || typeof ResizeObserver === 'undefined') {
    return
  }

  resizeObserver = new ResizeObserver(() => {
    updateDisplayMode()
  })
  resizeObserver.observe(panel)
}

onBeforeUnmount(() => {
  generation += 1
  document.removeEventListener('keydown', onDocumentKeydown)
  document.body.classList.remove('vip-mermaid-fs-open')
  resizeObserver?.disconnect()
  resizeObserver = null
  inlineViewport.unmountViewport()
  fullscreenViewport.unmountViewport()
})

watch(
  [isDark, () => props.code, () => props.theme],
  () => {
    void render()
  },
  { flush: 'post' },
)
</script>

<template>
  <div class="vip-mermaid">
    <div
      v-show="errorMessage.length === 0"
      ref="panelRef"
      :class="{ 'vip-mermaid__panel--interactive': needsInteraction }"
      class="vip-mermaid__panel"
    >
      <div
        ref="inlineViewportRef"
        :class="{ 'vip-mermaid__viewport--interactive': needsInteraction }"
        class="vip-mermaid__viewport"
      >
        <div
          v-if="needsInteraction"
          class="vip-mermaid__actions"
        >
          <button
            aria-label="还原视图"
            class="vip-mermaid__action"
            title="还原视图"
            type="button"
            @click="inlineViewport.resetView()"
          >
            ⟲
          </button>
          <button
            aria-label="全屏查看 Mermaid 图"
            class="vip-mermaid__action"
            title="全屏查看"
            type="button"
            @click="openFullscreen"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
            </svg>
          </button>
        </div>

        <div
          :class="{ 'vip-mermaid__stage--interactive': needsInteraction }"
          :style="needsInteraction ? inlineStageStyle : undefined"
          class="vip-mermaid__stage"
        >
          <div
            ref="inlineContentRef"
            class="vip-mermaid__content"
          />
        </div>
      </div>
    </div>

    <pre
      v-if="errorMessage.length > 0"
      class="vip-mermaid__error"
    >Mermaid 渲染失败：{{ errorMessage }}</pre>

    <Teleport to="body">
      <div
        v-if="fullscreenOpen"
        aria-label="Mermaid 全屏预览"
        aria-modal="true"
        class="vip-mermaid-fs"
        role="dialog"
      >
        <div class="vip-mermaid-fs__toolbar">
          <span class="vip-mermaid-fs__hint">拖拽移动 · 双指缩放 · Esc 关闭</span>
          <div class="vip-mermaid-fs__actions">
            <button
              aria-label="还原视图"
              class="vip-mermaid-fs__action"
              type="button"
              @click="fullscreenViewport.resetView()"
            >
              ⟲
            </button>
            <button
              class="vip-mermaid-fs__close"
              type="button"
              @click="closeFullscreen"
            >
              关闭
            </button>
          </div>
        </div>

        <div
          ref="fullscreenViewportRef"
          class="vip-mermaid-fs__viewport"
        >
          <div
            :style="fullscreenStageStyle"
            class="vip-mermaid-fs__stage"
          >
            <div
              ref="fullscreenContentRef"
              class="vip-mermaid-fs__content"
              v-html="fullscreenContent"
            />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.vip-mermaid {
  margin: 1rem 0;
}

.vip-mermaid__panel {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.vip-mermaid__panel--interactive {
  overflow: hidden;
}

.vip-mermaid__viewport {
  position: relative;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px; /* 与 VIP_MERMAID_FIT_PADDING 一致 */
}

/* 交互模式：固定高度视口，支持拖拽与滚轮 / 双指缩放 */
.vip-mermaid__viewport--interactive {
  height: min(70vh, 560px);
  padding: 0;
  overflow: hidden;
  touch-action: none;
  cursor: grab;
}

.vip-mermaid__viewport--interactive:active {
  cursor: grabbing;
}

.vip-mermaid__actions {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.vip-mermaid__panel:hover .vip-mermaid__actions,
.vip-mermaid__panel:focus-within .vip-mermaid__actions {
  opacity: 1;
  pointer-events: auto;
}

.vip-mermaid__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.9375rem;
  line-height: 1;
  transition: color 0.2s, border-color 0.2s;
}

.vip-mermaid__action:hover,
.vip-mermaid__action:focus-visible {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.vip-mermaid-fs__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.vip-mermaid-fs__hint {
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  line-height: 1.4;
}

.vip-mermaid-fs__actions {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
}

.vip-mermaid-fs__action,
.vip-mermaid-fs__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-size: 0.9375rem;
  line-height: 1;
}

.vip-mermaid-fs__action:hover,
.vip-mermaid-fs__close:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.vip-mermaid-fs__viewport {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  touch-action: none;
  cursor: grab;
  background: var(--vp-c-bg-soft);
}

.vip-mermaid-fs__viewport:active {
  cursor: grabbing;
}

.vip-mermaid__stage {
  width: max-content;
  height: max-content;
  line-height: 0;
}

.vip-mermaid__stage--interactive {
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
}

.vip-mermaid-fs__stage {
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  height: max-content;
  transform-origin: 0 0;
}

.vip-mermaid__content,
.vip-mermaid-fs__content {
  display: block;
  width: max-content;
  height: max-content;
  line-height: 0;
}

.vip-mermaid__content :deep(svg),
.vip-mermaid-fs__content :deep(svg) {
  display: block;
  max-width: none !important;
  width: auto !important;
  height: auto !important;
}

.vip-mermaid__error {
  margin: 0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
  white-space: pre-wrap;
  font-size: 0.875rem;
}

@media (max-width: 640px) {
  .vip-mermaid__viewport--interactive {
    height: min(62vh, 480px);
  }

  .vip-mermaid-fs__hint {
    width: 100%;
    font-size: 0.75rem;
  }
}

@media (hover: none) {
  .vip-mermaid__actions {
    opacity: 0.88;
    pointer-events: auto;
  }
}
</style>

<style>
body.vip-mermaid-fs-open {
  overflow: hidden;
}

.vip-mermaid-fs {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--vp-c-bg) 94%, transparent);
  backdrop-filter: blur(6px);
  padding:
    env(safe-area-inset-top, 0)
    env(safe-area-inset-right, 0)
    env(safe-area-inset-bottom, 0)
    env(safe-area-inset-left, 0);
}

@media (max-width: 640px) {
  .vip-mermaid-fs__toolbar {
    padding:
      calc(0.5rem + env(safe-area-inset-top, 0))
      0.75rem
      0.5rem;
  }
}
</style>
