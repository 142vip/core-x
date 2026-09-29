import { defineVipEslintConfig } from '@142vip/eslint-config'

/**
 * 内置默认 ESLint Flat Config（`fa lint` 未传 `-f` 时使用）。
 */
export default defineVipEslintConfig({
  ignores: [
    '**/CHANGELOG.md',
    'docs/apis/**',
    'docs/wiki/**',
    'spider/**',
    '.vitepress/.vite/**',
    '.vitepress/dist/**',
    '.vuepress/dist/**',
    '.vuepress/.temp/**',
    '.vuepress/.cache/**',
    'vuepress.config.ts.*.mjs',
    '.agents/**',
  ],
  rules: {
    'antfu/no-import-dist': 0,
    'no-console': 'warn',
    'ts/consistent-type-imports': ['off'],
  },
  settings: {
    node: {
      exitFunctions: ['process.exit', 'VipNodeJS.exitProcess'],
    },
  },
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      test: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
      beforeAll: 'readonly',
      afterAll: 'readonly',
      app: 'readonly',
    },
  },
})
