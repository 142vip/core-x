---
layout: home

hero:
  name: "@142vip/core-x"
  text: "X代表一切都有可能"
  tagline: "易学易用、功能丰富、适用工程化的通用型工具包"
  actions:
    - theme: brand
      text: 快速开始 🚀
      link: /packages/fairy-cli/index.html
    - theme: alt
      text: 📙 408CSFamily
      link: https://github.com/142vip/408CSFamily
    - theme: alt
      text: 📘 JavaScriptCollection
      link: https://github.com/142vip/JavaScriptCollection
features:
  - title: 易学易用
    details: 文档丰富、提供完整、丰富的入门方案
    icon: 🛡️
  - title: 功能丰富
    details: 类型安全、基于TS编码、功能丰富的工具包
    icon: 🚀
  - title: 适用工程化
    details: 适用工程化，可复用性极高，支持Monorepo模式
    icon: 🧰
---

<script setup>
import HomePage from '@theme/components/HomePage.vue'
</script>

## 仓库架构

pnpm 9 + Turbo monorepo：`packages/` 含 31 个可发布 `@142vip/*` npm 包，`apps/` 含 4 个 `*-demo` 示例。

```mermaid
flowchart TB
  ROOT["core-x · pnpm workspace + turbo"]

  PKGS["packages/ · 31 × @142vip/*"]
  APPS["apps/ · egg / nest / vitepress / vuepress demo"]
  VP[".vitepress/ + docs/ · 根文档站 :8080"]
  TDOC["docs/apis · docs/wiki · TypeDoc"]
  SCR["scripts/ · CI / 发布 / commit 校验"]
  GHA[".github/workflows · CI + CD"]

  ROOT --> PKGS
  ROOT --> APPS
  ROOT --> VP
  ROOT --> SCR
  ROOT --> GHA
  APPS --> PKGS
  VP --> PKGS
  TDOC --> VP
```

## 技术分层

```mermaid
flowchart LR
  DEMO["apps/*-demo ×4"] --> PKG["@142vip/* ×30"]
  PKG --> UTIL["utils · open-source"]
  PKG --> CLI["fairy-cli · release-version · eslint-config"]
  PKG --> FW["Nest · Egg · VitePress · VuePress"]
```

## 模块发布

npm 包默认 **ESM** 交付，**同时提供 CJS** 以兼容 `require`（unbuild 双格式）；Nest 系为 CommonJS；Egg 子插件多为源码直发。

```mermaid
flowchart LR
  SRC["src/"] --> UB["unbuild · 17 包"]
  SRC --> TSC["tsc · Nest 5 包"]
  SRC --> EGG["Egg 插件 8 包 · 无 build 脚本"]
  UB --> DIST["dist .mjs + .cjs"]
  TSC --> DIST2["dist .js CJS"]
  EGG --> NPM["npm @142vip/*"]
  DIST --> EXP["exports"]
  DIST2 --> EXP
  EXP --> NPM
```

## 开发与发布流程

```mermaid
sequenceDiagram
  participant Dev as 开发者
  participant Hook as git hooks
  participant CI as GitHub CI
  participant CD as GitHub CD
  participant NPM as npm

  Dev->>Dev: build / test / lint:fix
  Dev->>Hook: git commit
  Hook->>Hook: lint:fix · check:commit
  Dev->>CI: PR
  CI->>CI: lint · build:docs
  CI->>CD: merge next/main
  CD->>NPM: release @142vip/*
  CD->>CD: GitHub Pages
```

## 本地开发流程

```mermaid
flowchart TD
  A["pnpm install"] --> B["改 packages / apps"]
  B --> C["pnpm --filter @142vip/xxx build"]
  C --> D["pnpm lint:fix"]
  D --> E{"文档?"}
  E -->|根站| F["pnpm dev :8080"]
  E -->|demo| G["pnpm --filter vitepress-demo dev :3080"]
  F --> H["pnpm build:docs"]
  G --> H
```

<HomePage/>
