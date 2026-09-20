/** 须从 `@142vip/vue/utils` 导入，避免主入口连带 constants 中的 `.jpg`（SSR 无法解析） */
import { setupVipAppBuildLog } from '@142vip/vue/utils'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance() {
    setupVipAppBuildLog()
  },
})
