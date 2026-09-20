# @142vip/commit-linter

技术说明。不随 npm 发布。

## 定位

校验 Git commit message 是否符合 Conventional Commits 约定。供根仓库 `commit-msg` 钩子（`scripts/core/verify-commit.ts`）与 `fa commit vip` 交互式提交使用。

## 功能

### 子路径

- `@142vip/commit-linter`：主入口（`src/index.ts` → `src/core`）

### 核心函数（`src/core/git-commit-linter.ts`）

- `commitLiner(params?: GitCommitLinterOptions, commit?: string): GitCommitLinter`
  - 未传 `commit` 时从 `VipGit.getCommitFirstLineMsg()` 读取
  - 解析失败：打印标准模板并 `exitProcess(1)`
  - 传入 `params` 时校验 `type` / `scope` / `subject` 长度（subject 5–100 字符）

### 类型（`src/core/git-commit.interface.ts`）

- `GitCommitLinterOptions`
  - `types?: string[]`：追加到默认 type 列表（与默认合并后去重）
  - `scopes?: string[]`：追加到默认 scope 列表
- `GitCommitLinter`：extends `@142vip/utils` `GitCommit`，含 `commit: string`

### 默认 type（`src/core/git-commit-type.ts`）

`gitCommitTypes` 对象键（即 `GIT_COMMIT_DEFAULT_TYPES`）：

- `feat` — Features ✨
- `fix` — Bug Fixes 🐛
- `hotfix` — Hotfix 🔥
- `docs` — Documentation 📚
- `style` — Styles 💎
- `refactor` — Code Refactoring 📦
- `perf` — Performance Improvements 🚀
- `test` — Tests 🚨
- `build` — Builds 🛠
- `ci` — Continuous Integrations ⚙️
- `chore` — Chores ♻️
- `revert` — Reverts 🗑
- `release` — Releases 🎉

### 默认 scope（`GIT_COMMIT_DEFAULT_SCOPES`）

- `release`
- `CHANGELOG`
- `README`

### 模板输出（`src/core/commit-template.ts`）

- `printStandardCommitMessage(message?: string): void`：打印格式说明、示例与各 type 描述

### 校验规则摘要

- 格式：`<type>(<scope>): <subject>`（scope 可选）
- `type` 须在支持列表内
- 有 `scope` 时须在支持列表内
- `subject` 非空，长度 5–100

## 配置

无运行时配置文件。调用方通过 `GitCommitLinterOptions` 传入额外 `types` / `scopes`：

```ts
commitLiner({
  types: ['custom-type'],
  scopes: ['@142vip/utils', 'vitepress-demo'],
}, commitMsg)
```

## 最佳实践

- 钩子场景：`commitLiner({ scopes: monorepoPkgNames })`，scope 与 `VipMonorepo.getPkgNames` 对齐
- 函数名为 `commitLiner`（历史拼写），import 时勿写成 `commitLinter`
- 校验失败已 `exitProcess(1)`，调用方无需再 catch
- `fa commit vip` 交互流程：选 type → scope（含 monorepo 包名）→ subject → `commitLiner` → `git add .` → `git commit`

## 构建

`unbuild` 双格式

```shell
cd packages/commit-linter && pnpm build
```

## 验证

```shell
cd packages/commit-linter && pnpm build && pnpm typecheck
cd packages/commit-linter && pnpm test
pnpm check:commit   # 根目录，模拟 commit-msg 钩子
```

## 演示

无独立 demo；根仓库 `simple-git-hooks` → `commit-msg` → `pnpm check:commit` 集成本包。
