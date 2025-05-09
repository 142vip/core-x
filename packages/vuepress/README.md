# @142vip/vuepress

[![NPM version](https://img.shields.io/npm/v/@142vip/vuepress?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/vuepress)

## 使用

```shell
# 安装
pnpm i @142vip/vuepress -D
```

## 配置

```ts
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  getVipViteBundler,

  handleImportCodePath,
} from '@142vip/vuepress'

export default defineVipVuepressConfig({
  // 基础配置
  // ...

  // markdown配置
  markdown: {
    // 导入代码
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code/'],
        ['~', ''],
      ]),
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: getVipHopeTheme({
    // 一些主题配置
    // ...
  }),
  // 编译
  bundler: getVipViteBundler(),
  shouldPrefetch: false,
})
```

## 命令

```shell
# 本地开发
npx vuepress dev

# 编辑
npx vuepress build
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
