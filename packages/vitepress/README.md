# @142vip/vitepress

基于 VitePress 的文档站封装：主题、Element Plus、**Mermaid 架构图**。

## 快速开始

### 1. 配置

```ts
import { defineVipVitepressConfig, getVipThemeConfig } from '@142vip/vitepress'

// 原用法（不变）
export default defineVipVitepressConfig({
  title: 'My Docs',
  themeConfig: getVipThemeConfig({ nav: [] }),
})

// 启用 Mermaid（第二参数拓展）
export default defineVipVitepressConfig({
  title: 'My Docs',
  themeConfig: getVipThemeConfig({ nav: [] }),
}, {
  mermaid: true, // 或 { theme: 'forest' }
})
```

### 2. 主题

```ts
import defineVipExtendsTheme from '@142vip/vitepress/theme'

export default defineVipExtendsTheme()
```

### 3. 写图（需已启用 mermaid）

````md
```mermaid
flowchart LR
  A --> B
```

```mermaid theme=forest
flowchart LR
  A --> B
```
````

规则：亮色用所选官方主题；暗黑统一官方 `dark`。

## Demo

```shell
pnpm --filter @142vip/vitepress build
pnpm --filter vitepress-demo dev
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
