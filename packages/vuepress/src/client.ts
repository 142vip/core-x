import { setupVipAppBuildLog } from '@142vip/vue'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance() {
    setupVipAppBuildLog()
  },
})
