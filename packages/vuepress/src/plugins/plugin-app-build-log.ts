import type { PluginObject } from '@vuepress/core'
import { fileURLToPath } from 'node:url'

/** 构建产物 `dist/client.mjs`，与 `dist/index.mjs` 同级（打包后 `import.meta.url` 指向 index） */
const VIP_APP_BUILD_LOG_CLIENT = fileURLToPath(new URL('./client.mjs', import.meta.url))

/** `appBuildLog` 启用时自动注册客户端 `setupVipAppBuildLog` */
export function createVipAppBuildLogPlugin(): PluginObject {
  return {
    name: '@142vip/vuepress/app-build-log',
    clientConfigFile: VIP_APP_BUILD_LOG_CLIENT,
  }
}
