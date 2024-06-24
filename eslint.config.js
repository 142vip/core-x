const antFu = require('@antfu/eslint-config').default
// 参考：https://github.com/antfu/eslint-config

module.exports = antFu({
  ignores: [
    '**/node_modules/**',
    'dist',
    '**/dist/**',
    '.nuxt',
    '**/.nuxt/**',
    'typings/',
    '**/typings/**/',
    '.output',
    '**/.output/**',
  ],
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }], // 忽略 rest 属性的兄弟属性，便于解构；忽略函数中下划线开头的参数。
      'ts/consistent-type-imports': ['off'], // Nest.js的依赖注入会被识别为type-imports，自动fix会在import添加type，导致注入失败，此项必须关闭。
      'ts/no-inferrable-types': ['error', { ignoreProperties: true }], // 允许类属性在设置默认值的同时设置类型，以兼容swagger对DTO中默认值的识别。
      'ts/explicit-function-return-type': ['warn'], // 显式声明方法返回类型
      'ts/explicit-member-accessibility': ['warn', { overrides: { constructors: 'off', properties: 'off' } }], // 显式声明可访问性修饰符
      'ts/explicit-module-boundary-types': ['warn'], // 导出函数和类的公共类方法上显式返回和参数类型。
      'ts/no-require-imports': ['warn'], // 禁止require
      'ts/no-var-requires': ['warn'], // 禁止require
    },
  },
  vue: true,
  // Disable jsonc and yaml support
  jsonc: false,
  yaml: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  rules: {
    'no-console': 'warn',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
})
