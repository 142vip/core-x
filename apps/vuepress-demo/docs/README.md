---
home: true
title: 首页
heroText: vuepress-demo
tagline: "@142vip/vuepress包的使用Demo演示"
actions:
  - text: 示例文档-1
    link: /example/test-1.md
    type: primary
  - text: 示例文档-2
    link: /example/test-2.md
    type: secondary
  - text: 示例文档-3
    link: /example/test-3.md
    type: secondary
features:
  - title: VuePress官网
    details: Vue 驱动的静态网站生成器
    link: https://v2.vuepress.vuejs.org/zh/
  - title: Hope主题
    details: vuepress-theme-hope
    link: https://theme-hope.vuejs.press/
  - title: "@142vip/vuepress"
    details: 基于vuepress框架和vuepress-theme-hope主题封装
    link: https://www.npmjs.com/package/@142vip/vuepress
---

## 下载依赖

```bash:no-line-numbers
# 安装@142vip/vuepress模块
pnpm i @142vip/vuepress -D

# 安装@142vip/utils模块
pnpm i @142vip/utils -D
```

## 基本使用

```bash:no-line-numbers
# 进入vuepress-demo根目录
cd apps/vuepress-demo

# 启动项目
pnpm dev

# 编译
pnpm build
```
