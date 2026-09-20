# @142vip/commit-linter

[![NPM version](https://img.shields.io/npm/v/@142vip/commit-linter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/commit-linter)

Git Commit 信息校验工具。

## 安装

```shell
# npm
npm install @142vip/commit-linter

# pnpm
pnpm add @142vip/commit-linter
```

## 功能

- [x] `commitLiner` 校验 Conventional Commits 格式
- [x] 内置 `gitCommitTypes` 与默认 type / scope 列表
- [x] 校验失败时打印标准 commit 模板并 `exit(1)`
- [x] 可扩展自定义 `types` / `scopes`

## 配置

在 `commit-msg` 钩子或脚本中调用；可选传入 `GitCommitLinterOptions`：

| 字段 | 说明 |
|------|------|
| `types` | 额外允许的 commit type（与默认列表合并） |
| `scopes` | 额外允许的 scope（与默认列表合并） |

## 使用

```ts
import { commitLiner } from '@142vip/commit-linter'

// 从 git 读取 HEAD commit 第一行并校验
commitLiner({ scopes: ['@142vip/utils', 'vitepress'] })

// 或传入 commit 字符串
commitLiner(undefined, 'feat(utils): 新增工具函数')
```

仓库根目录通过 `pnpm check:commit` → `scripts/core/verify-commit.ts` 集成。

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/commit-linter
```

## 参考

- [@142vip/commit-linter](https://www.npmjs.com/package/@142vip/commit-linter)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
