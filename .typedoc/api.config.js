import path from 'node:path'
import { defineVipTypedocConfig } from '@142vip/vitepress'
import { defaultTypedocConfig, repoRoot } from './config.js'

export default defineVipTypedocConfig({
  ...defaultTypedocConfig,
  out: path.join(repoRoot, 'dist/apis'),
})
