/// <reference types="vite/client" />

/** 包内 TypeScript 模块声明（构建工具不生成，需在源码侧补充） */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module '@142vip/cdn/media/svg/*.svg' {
  const src: string
  export default src
}
