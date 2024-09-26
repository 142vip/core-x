import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig({
  ignores: [
    '**/CHANGELOG.md',
  ],
  rules: {
    // 用于在模块构建后基于dist导出时找不到文件，忽略校验
    'antfu/no-import-dist': 1,
  },
})
