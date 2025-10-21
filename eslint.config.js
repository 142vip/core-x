import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig({
  ignores: [
    '**/CHANGELOG.md',
  ],
  rules: {
    // 用于在模块构建后基于dist导出时找不到文件，忽略校验
    'antfu/no-import-dist': 0,
    // Nest.js的依赖注入会被识别为type-imports，自动fix会在import添加type，导致注入失败，此项必须关闭。
    'ts/consistent-type-imports': ['off'],
  },
  settings: {
    node: {
      exitFunctions: ['process.exit', 'VipNodeJS.exitProcess'],
    },
  },
  languageOptions: {
    globals: {
      // 配置Jest全局变量
      describe: 'readonly',
      it: 'readonly',
      test: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
      beforeAll: 'readonly',
      afterAll: 'readonly',
      app: 'readonly',
      // 其他Jest全局变量
    },
  },
})
