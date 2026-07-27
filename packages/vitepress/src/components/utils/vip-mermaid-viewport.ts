/**
 * VipMermaid 视口工具：测量 SVG 尺寸、判断是否需要交互模式，以及平移 / 缩放逻辑。
 */
import type { Ref } from 'vue'
import { computed, onBeforeUnmount, ref } from 'vue'

const MIN_SCALE = 0.25
const MAX_SCALE = 4

/** 内容与视口边缘留白（px），与 VipMermaid.vue 静态模式 padding 一致 */
export const VIP_MERMAID_FIT_PADDING = 16

/** 桌面端交互视口最大高度（px），与 CSS `min(70vh, 560px)` 一致 */
export const VIP_MERMAID_INTERACTIVE_MAX_HEIGHT = 560

/** 移动端交互视口最大高度（px），与 CSS `min(62vh, 480px)` 一致 */
export const VIP_MERMAID_INTERACTIVE_MAX_HEIGHT_MOBILE = 480

/** SVG 内容在自身坐标系下的包围盒 */
export interface VipMermaidSvgMetrics {
  x: number
  y: number
  width: number
  height: number
}

/** 内容相对容器的适配测量结果 */
export interface VipMermaidFitMeasure {
  metrics: VipMermaidSvgMetrics
  /** 在指定区域内无需缩放即可完整展示 */
  fitsNaturally: boolean
  /** 适配视口时的缩放比；大于 1 表示可放大，通常被限制为 1 */
  fitScale: number
}

interface Point {
  x: number
  y: number
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function getTouchDistance(touches: TouchList): number {
  const [a, b] = [touches[0]!, touches[1]!]
  const dx = a.clientX - b.clientX
  const dy = a.clientY - b.clientY
  return Math.hypot(dx, dy)
}

function getTouchCenter(touches: TouchList, rect: DOMRect): Point {
  const [a, b] = [touches[0]!, touches[1]!]
  return {
    x: (a.clientX + b.clientX) / 2 - rect.left,
    y: (a.clientY + b.clientY) / 2 - rect.top,
  }
}

/**
 * 读取 SVG 实际绘制区域。
 * 优先 `getBBox`（真实内容），再回退 viewBox、width/height、`getBoundingClientRect`。
 */
export function getVipMermaidSvgMetrics(content: HTMLElement): VipMermaidSvgMetrics | null {
  const svg = content.querySelector('svg')
  if (svg == null) {
    return null
  }

  try {
    const bbox = svg.getBBox()
    if (bbox.width > 0 && bbox.height > 0) {
      return {
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height,
      }
    }
  }
  catch {
    // SVG 尚未挂载到 DOM 时 getBBox 可能不可用，继续尝试其他测量方式
  }

  const viewBox = svg.viewBox?.baseVal
  if (viewBox != null && viewBox.width > 0 && viewBox.height > 0) {
    return {
      x: viewBox.x,
      y: viewBox.y,
      width: viewBox.width,
      height: viewBox.height,
    }
  }

  const width = Number.parseFloat(svg.getAttribute('width') ?? '')
  const height = Number.parseFloat(svg.getAttribute('height') ?? '')
  if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
    return { x: 0, y: 0, width, height }
  }

  const rect = svg.getBoundingClientRect()
  if (rect.width > 0 && rect.height > 0) {
    return { x: 0, y: 0, width: rect.width, height: rect.height }
  }

  return null
}

/**
 * 计算交互模式视口高度，与 VipMermaid.vue 中 CSS 规则对齐。
 *
 * - 桌面：`min(70vh, 560px)`
 * - 移动端（≤640px）：`min(62vh, 480px)`
 */
export function getVipMermaidInteractiveViewportHeight(): number {
  if (typeof window === 'undefined') {
    return VIP_MERMAID_INTERACTIVE_MAX_HEIGHT
  }

  const isMobile = window.matchMedia('(max-width: 640px)').matches
  const vhRatio = isMobile ? 0.62 : 0.7
  const maxHeight = isMobile
    ? VIP_MERMAID_INTERACTIVE_MAX_HEIGHT_MOBILE
    : VIP_MERMAID_INTERACTIVE_MAX_HEIGHT

  return Math.min(window.innerHeight * vhRatio, maxHeight)
}

/**
 * 判断内容是否超出展示区域，从而需要启用缩放、平移或全屏。
 *
 * @param containerWidth 可用容器宽度，通常为面板 `clientWidth`
 * @param containerHeight 交互视口高度上限；静态模式下不占用此高度
 * @param content 已渲染 SVG 的容器元素
 * @returns 测量结果；无法测量时返回 `null`
 */
export function measureVipMermaidFit(
  containerWidth: number,
  containerHeight: number,
  content: HTMLElement,
): VipMermaidFitMeasure | null {
  const metrics = getVipMermaidSvgMetrics(content)
  if (metrics == null || containerWidth <= 0 || containerHeight <= 0) {
    return null
  }

  const availableWidth = containerWidth - VIP_MERMAID_FIT_PADDING * 2
  const availableHeight = containerHeight - VIP_MERMAID_FIT_PADDING * 2
  if (availableWidth <= 0 || availableHeight <= 0) {
    return null
  }

  const fitScale = Math.min(
    availableWidth / metrics.width,
    availableHeight / metrics.height,
    1,
  )

  const fitsNaturally = fitScale >= 1

  return { metrics, fitsNaturally, fitScale }
}

/**
 * 为 Mermaid 视口提供平移、缩放与居中适配能力。
 * 仅在交互模式下挂载事件监听；静态模式应调用 `unmountViewport`。
 */
export function useVipMermaidViewport(
  viewportRef: Ref<HTMLElement | null>,
  contentRef: Ref<HTMLElement | null>,
) {
  const scale = ref(1)
  const translateX = ref(0)
  const translateY = ref(0)

  let panning = false
  let panStart: Point & { tx: number, ty: number } = { x: 0, y: 0, tx: 0, ty: 0 }
  let pinching = false
  let pinchStartDistance = 0
  let pinchStartScale = 1
  let pinchCenter: Point = { x: 0, y: 0 }

  const stageStyle = computed(() => ({
    transform: `translate3d(${translateX.value}px, ${translateY.value}px, 0) scale(${scale.value})`,
    transformOrigin: '0 0',
    willChange: 'transform',
  }))

  function zoomBy(factor: number, origin?: Point): void {
    const viewport = viewportRef.value
    if (viewport == null) {
      return
    }

    const rect = viewport.getBoundingClientRect()
    const ox = origin?.x ?? rect.width / 2
    const oy = origin?.y ?? rect.height / 2
    const localX = (ox - translateX.value) / scale.value
    const localY = (oy - translateY.value) / scale.value
    const nextScale = clamp(scale.value * factor, MIN_SCALE, MAX_SCALE)

    translateX.value = ox - localX * nextScale
    translateY.value = oy - localY * nextScale
    scale.value = nextScale
  }

  /** 清除平移与缩放，供静态展示模式使用 */
  function resetTransform(): void {
    scale.value = 1
    translateX.value = 0
    translateY.value = 0
  }

  /**
   * 将内容居中适配到视口。
   * 调用前需确保处于交互模式，且视口尺寸已稳定。
   *
   * @returns 本次适配的测量结果；失败时返回 `null`
   */
  function fitToView(): VipMermaidFitMeasure | null {
    const viewport = viewportRef.value
    const content = contentRef.value
    if (viewport == null || content == null) {
      return null
    }

    const vpWidth = viewport.clientWidth
    const vpHeight = viewport.clientHeight
    if (vpWidth <= 0 || vpHeight <= 0) {
      return null
    }

    resetTransform()

    const measure = measureVipMermaidFit(vpWidth, vpHeight, content)
    if (measure == null || !Number.isFinite(measure.fitScale) || measure.fitScale <= 0) {
      return measure
    }

    const { metrics, fitScale } = measure
    scale.value = clamp(fitScale, MIN_SCALE, MAX_SCALE)
    const centerX = metrics.x + metrics.width / 2
    const centerY = metrics.y + metrics.height / 2
    translateX.value = vpWidth / 2 - centerX * scale.value
    translateY.value = vpHeight / 2 - centerY * scale.value

    return measure
  }

  function onWheel(event: WheelEvent): void {
    event.preventDefault()
    const viewport = viewportRef.value
    if (viewport == null) {
      return
    }

    const rect = viewport.getBoundingClientRect()
    const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12
    zoomBy(factor, {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  function onPointerDown(event: PointerEvent): void {
    if (event.button !== 0 || pinching) {
      return
    }

    const target = event.target as HTMLElement | null
    if (target?.closest('button') != null) {
      return
    }

    panning = true
    panStart = {
      x: event.clientX,
      y: event.clientY,
      tx: translateX.value,
      ty: translateY.value,
    }
    viewportRef.value?.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: PointerEvent): void {
    if (!panning) {
      return
    }

    translateX.value = panStart.tx + (event.clientX - panStart.x)
    translateY.value = panStart.ty + (event.clientY - panStart.y)
  }

  function endPan(event: PointerEvent): void {
    if (!panning) {
      return
    }

    panning = false
    viewportRef.value?.releasePointerCapture(event.pointerId)
  }

  function onTouchStart(event: TouchEvent): void {
    if (event.touches.length !== 2) {
      return
    }

    const viewport = viewportRef.value
    if (viewport == null) {
      return
    }

    pinching = true
    panning = false
    pinchStartDistance = getTouchDistance(event.touches)
    pinchStartScale = scale.value
    pinchCenter = getTouchCenter(event.touches, viewport.getBoundingClientRect())
  }

  function onTouchMove(event: TouchEvent): void {
    if (!pinching || event.touches.length !== 2 || pinchStartDistance <= 0) {
      return
    }

    event.preventDefault()
    const distance = getTouchDistance(event.touches)
    const nextScale = clamp(pinchStartScale * (distance / pinchStartDistance), MIN_SCALE, MAX_SCALE)
    const localX = (pinchCenter.x - translateX.value) / scale.value
    const localY = (pinchCenter.y - translateY.value) / scale.value

    translateX.value = pinchCenter.x - localX * nextScale
    translateY.value = pinchCenter.y - localY * nextScale
    scale.value = nextScale
  }

  function onTouchEnd(): void {
    pinching = false
    pinchStartDistance = 0
  }

  function bindViewport(element: HTMLElement): void {
    element.addEventListener('wheel', onWheel, { passive: false })
    element.addEventListener('pointerdown', onPointerDown)
    element.addEventListener('pointermove', onPointerMove)
    element.addEventListener('pointerup', endPan)
    element.addEventListener('pointercancel', endPan)
    element.addEventListener('touchstart', onTouchStart, { passive: true })
    element.addEventListener('touchmove', onTouchMove, { passive: false })
    element.addEventListener('touchend', onTouchEnd)
    element.addEventListener('touchcancel', onTouchEnd)
  }

  function unbindViewport(element: HTMLElement): void {
    element.removeEventListener('wheel', onWheel)
    element.removeEventListener('pointerdown', onPointerDown)
    element.removeEventListener('pointermove', onPointerMove)
    element.removeEventListener('pointerup', endPan)
    element.removeEventListener('pointercancel', endPan)
    element.removeEventListener('touchstart', onTouchStart)
    element.removeEventListener('touchmove', onTouchMove)
    element.removeEventListener('touchend', onTouchEnd)
    element.removeEventListener('touchcancel', onTouchEnd)
  }

  let boundViewport: HTMLElement | null = null

  /** 绑定拖拽、滚轮与双指缩放事件 */
  function mountViewport(): void {
    const viewport = viewportRef.value
    if (viewport == null || boundViewport === viewport) {
      return
    }

    if (boundViewport != null) {
      unbindViewport(boundViewport)
    }

    bindViewport(viewport)
    boundViewport = viewport
  }

  /** 移除视口事件监听 */
  function unmountViewport(): void {
    if (boundViewport != null) {
      unbindViewport(boundViewport)
      boundViewport = null
    }
  }

  onBeforeUnmount(unmountViewport)

  return {
    scale,
    stageStyle,
    fitToView,
    resetTransform,
    resetView: fitToView,
    mountViewport,
    unmountViewport,
  }
}
