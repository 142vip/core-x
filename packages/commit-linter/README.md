# @142vip/commit-linter

[![NPM version](https://img.shields.io/npm/v/@142vip/commit-linter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/commit-linter)

Git Commit 信息校验工具（Conventional Commits）。运行依赖 `@142vip/utils`。

## 安装

```shell
# npm
npm install @142vip/commit-linter

# pnpm
pnpm add @142vip/commit-linter
```

Monorepo 推荐 `fa commit`（默认交互）与 `fa commit --quiet -s './apps/*' -s './packages/*'`（commit-msg 钩子）；亦可直引本包 `commitLinter`。

## 功能

- ✅ `commitLinter` 校验 Conventional Commits 格式
- ✅ `defineVipCommitLinterConfig` + cosmiconfig（`commit-linter.config.*`）
- ✅ 可配置 `types` / `scopes` 与 `verify` 自定义校验
- ✅ `printStandardCommitMessage` 打印规范模板

## 配置

根目录 `commit-linter.config.ts`（或 `.commit-linterrc` 等，见 cosmiconfig）：

```ts
import { defineVipCommitLinterConfig } from '@142vip/commit-linter'

export default defineVipCommitLinterConfig({
  scopeGlobs: ['./packages/*'],
  scopes: ['@142vip/utils', 'README', 'CHANGELOG'],
  verify: gitCommit => !gitCommit.subject.includes('WIP'),
})
```

`scopeGlobs` 只写在配置文件里，由 `fa commit` 扫描为 `scopes`；CLI `-s` 优先于配置中的 `scopeGlobs`。

直引 `loadCommitLinterConfig()` 仅走 cosmiconfig，**不会**合并 fairy-cli 内置默认；需要内置默认时用 `fa commit` 或从 `@142vip/fairy-cli` 引入 `loadCommitLinterConfigForCli`。

## 使用

```ts
import { commitLinter, loadCommitLinterConfig } from '@142vip/commit-linter'

// 钩子或脚本：待校验首行放在 commit 字段
commitLinter({ scopes: ['@142vip/utils'], commit: 'feat(utils): 新增工具函数' })

// 合并 cosmiconfig（勿把 scopeGlobs 传给 commitLinter）
const { scopeGlobs: _scan, ...options } = loadCommitLinterConfig()
commitLinter({ ...options, commit: 'docs(README): 更新说明' })
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/commit-linter
```

## 参考

- [@142vip/commit-linter](https://www.npmjs.com/package/@142vip/commit-linter)
- [@142vip/utils](https://www.npmjs.com/package/@142vip/utils)
- [@142vip/fairy-cli](https://www.npmjs.com/package/@142vip/fairy-cli)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2022-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
