# Mermaid 架构图

切换站点外观时，图会按队列重绘：暗黑统一用官方 `dark`，亮色用所选主题。

## 默认

```mermaid
flowchart LR
  MD[Markdown] --> VP[VitePress]
  VP --> Theme[defineVipExtendsTheme]
  Theme --> Mermaid[VipMermaid]
  Mermaid --> SVG[SVG]
```

## 指定主题

可选：`default` | `forest` | `neutral` | `base` | `dark`

### forest

```mermaid theme=forest
flowchart TB
  A[用户] --> B[文档站]
  B --> C[架构图]
```

### neutral

```mermaid theme=neutral
sequenceDiagram
  participant U as 读者
  participant P as 页面
  participant M as VipMermaid
  U->>P: 打开文档
  P->>M: 渲染
  M-->>U: 展示
```

### base

```mermaid theme=base
flowchart LR
  Config[defineVipVitepressConfig] --> Comp[VipMermaid]
  Comp --> SVG[SVG]
```

## 站点配置

```ts
defineVipVitepressConfig(config, {
  mermaid: { theme: 'default' }, // forest / neutral / base / dark
})
```

规则：亮色用所选官方主题；暗黑一律 `dark`（保证可读）。

站点需第二参数启用：

```ts
defineVipVitepressConfig(config, { mermaid: { theme: 'default' } })
```
