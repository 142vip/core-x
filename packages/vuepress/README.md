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

- [x] `defineVipVuepressConfig`：默认 `locales['/'].lang` / `lang` 为 `zh-CN`，补全 `bundler`、favicon、`shouldPrefetch`
- [x] 可选 `appBuildLog`：构建时间 meta + 控制台版本日志（`@142vip/vue/utils`）
- [x] `getVipHopeTheme`：基于 theme-hope 的默认插件与 Markdown 能力
- [x] `defineVipNavbarConfig` / `defineVipSidebarConfig`：导航与侧栏
- [x] 内置 Mermaid、代码高亮语言、slimsearch 中文、复制代码
- [x] bin：`vuepress`（转发至 bundled CLI）

## 配置

单语言中文站一般不必手写 `locales` / `lang`：

```ts
import { defineVipVuepressConfig, getVipHopeTheme } from '@142vip/vuepress'

export default defineVipVuepressConfig({
  title: '我的文档',
  description: '…',
  theme: getVipHopeTheme({
    navbar: [],
    sidebar: {},
  }),
}, {
  // 可选：浏览器控制台打印版本与更新时间
  appBuildLog: { version: '1.0.0' },
})
```

包内默认（未传 `locales` 时）等价于：

```ts
locales: {
  '/': {
    lang: 'zh-CN',
  },
}
```

自定义示例（用户字段优先，缺 `lang` 时才补 `zh-CN`）：

```ts
export default defineVipVuepressConfig({
  locales: {
    '/': {
      // lang 可省略，默认 zh-CN
      title: '中文站',
    },
    '/en/': {
      lang: 'en-US',
      title: 'English',
    },
  },
  theme: getVipHopeTheme({ navbar: [], sidebar: {} }),
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
