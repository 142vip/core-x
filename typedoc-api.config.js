import { defineVipTypedocConfig } from '@142vip/vitepress'
import { defaultTypedocConfig } from './typedoc.config.js'

export default defineVipTypedocConfig({
  ...defaultTypedocConfig,
  out: 'dist/apis',
})
