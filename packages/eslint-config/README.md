# @142vip/eslint-config

[![NPM version](https://img.shields.io/npm/v/@142vip/eslint-config?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/eslint-config)

通用的 ESLint 配置规则和规范，简化 ESLint 配置。

## 安装

```shell
# npm
npm install -D @142vip/eslint-config eslint

# pnpm
pnpm add -D @142vip/eslint-config eslint
```

## 功能

- [x] `defineVipEslintConfig` 基于 `@antfu/eslint-config` 的扁平配置
- [x] 默认开启 TypeScript、Vue、JSONC、YAML、Markdown 处理
- [x] Markdown 内嵌代码块规则降级（教学示例不误报）
- [x] `baseEslintRules`：`no-console` warn 与受限 `console` 调用

## 配置

根目录 `eslint.config.js`：

```js
import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig({
  // 可覆盖 defaultEslintConfig 字段，如 markdown: false
})
```

## 使用

```js
// eslint.config.js
import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig()
```

自定义规则：

```js
export default defineVipEslintConfig({
  rules: {
    'no-console': 'off',
  },
})
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/eslint-config
```

## 参考

- [@142vip/eslint-config](https://www.npmjs.com/package/@142vip/eslint-config)
- [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
