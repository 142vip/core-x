# @142vip/vuepress

[![NPM version](https://img.shields.io/npm/v/@142vip/vuepress?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/vuepress)

VuePress 使用的最佳实践，基于 vuepress-theme-hope 的封装

## 安装

包内已 bundled `vuepress`、`vuepress-theme-hope`；使用方通常无需单独声明 `vuepress`。

```shell
# npm
npm install -D @142vip/vuepress

# pnpm
pnpm add -D @142vip/vuepress
```

## 功能

- [x] `defineVipVuepressConfig`：补全 `lang`、`bundler`、favicon、`shouldPrefetch`
- [x] `getVipHopeTheme`：基于 theme-hope 的默认插件与 Markdown 能力
- [x] `defineVipNavbarConfig` / `defineVipSidebarConfig`：导航与侧栏
- [x] 内置 Mermaid、代码高亮语言、slimsearch 中文、复制代码
- [x] 可选构建时间注入与浏览器控制台版本日志
- [x] bin：`vuepress`（转发至 bundled CLI）

## 配置

`docs/.vuepress/config.ts` 示例：

```ts
import { defineVipVuepressConfig, getVipHopeTheme } from '@142vip/vuepress'
import { defaultTheme } from 'vuepress'

export default defineVipVuepressConfig({
  theme: getVipHopeTheme({
    navbar: [],
    sidebar: {},
  }),
}, {
  appBuildLog: { version: '1.0.0' },
})
```

## 使用

开发与构建（使用包内 bin）：

```shell
pnpm vuepress dev docs
pnpm vuepress build docs
```

代码块路径别名（Markdown `<!-- @include -->`）：

```ts
import { handleImportCodePath } from '@142vip/vuepress'

const resolver = handleImportCodePath([['@code', './code']])
```

默认文档目录常量：`VUEPRESS_DEFAULT_DOCS_DIR`（`'docs'`）。

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/vuepress
```

## 参考

- [@142vip/vuepress](https://www.npmjs.com/package/@142vip/vuepress)
- [vuepress-theme-hope](https://theme-hope.vuejs.press/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
