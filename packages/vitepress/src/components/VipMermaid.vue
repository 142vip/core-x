<script lang="ts" setup>
import { useData } from 'vitepress'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  renderVipMermaidSvg,
  resolveVipMermaidTheme,
} from '../core/mermaid-theme'

const props = defineProps<{
  /** encodeURIComponent 后的 mermaid 源码 */
  code: string
  /** 官方主题：default / forest / neutral / base / dark */
  theme?: string
}>()

const { isDark } = useData()
const canvasRef = ref<HTMLElement | null>(null)
const errorMessage = ref('')

/** 递增代际：切主题时丢弃过期结果，避免空白闪烁 */
let generation = 0

function decodeSource(): string {
  try {
    return decodeURIComponent(props.code).trim()
  }
  catch {
    return props.code.trim()
  }
}

async function render(): Promise<void> {
  const el = canvasRef.value
  if (el == null || typeof window === 'undefined') {
    return
  }

  const source = decodeSource()
  if (source.length === 0) {
    el.innerHTML = ''
    errorMessage.value = ''
    return
  }

  const current = ++generation
  const isStale = () => current !== generation
  const theme = resolveVipMermaidTheme(isDark.value, props.theme)

  try {
    const svg = await renderVipMermaidSvg(source, theme, isStale)
    if (isStale() || canvasRef.value == null) {
      return
    }
    // 有结果再替换，保留上一帧，切换外观时不闪空
    if (svg.length > 0) {
      canvasRef.value.innerHTML = svg
      errorMessage.value = ''
    }
  }
  catch (error) {
    if (isStale()) {
      return
    }
    errorMessage.value = error instanceof Error ? error.message : String(error)
  }
}

onMounted(() => {
  void render()
})

onBeforeUnmount(() => {
  generation += 1
})

// 明暗 / 源码 / 主题变化时重绘（post 保证 DOM 已切完）
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
      ref="canvasRef"
      class="vip-mermaid__canvas"
    />
    <pre
      v-if="errorMessage.length > 0"
      class="vip-mermaid__error"
    >Mermaid 渲染失败：{{ errorMessage }}</pre>
  </div>
</template>

<style scoped>
.vip-mermaid {
  margin: 1rem 0;
  overflow-x: auto;
}

.vip-mermaid__canvas {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.vip-mermaid__canvas :deep(svg) {
  max-width: 100%;
  height: auto;
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
</style>
