# @142vip/commit-linter

技术说明。不随 npm 发布。

## 定位

Git Commit 规范校验（Conventional Commits），依赖 `@142vip/utils`（`VipGit`、cosmiconfig 经 `vipConfig`）；源码在 `src/` 扁平目录。

## 功能

### 入口

- `@142vip/commit-linter`：`src/index.ts`

### 模块

- `commit-linter.ts`：`commitLinter`、`printStandardCommitMessage`
- `config.ts`：`CONFIG_DEFAULT_NAME`（`commit-linter`）、`defineVipCommitLinterConfig`、`loadCommitLinterConfig`
- `git-commit.interface.ts`：`gitCommitTypes`、`GIT_COMMIT_DEFAULT_*`、`CommitLinterOptions`、`GitCommitLinter`

## 配置

- cosmiconfig 模块名：`commit-linter`（`commit-linter.config.ts` / `.commit-linterrc` 等）
- `CommitLinterOptions`：`types` / `scopes` / `commit` / `verify`（`commitLinter` 入参）
- `VipCommitLinterConfig`：继承上表 + 可选 `scopeGlobs`（仅配置文件 / 内置默认；`fa commit` 扫描为 `scopes`，CLI `-s` 优先）

## 最佳实践

- `fa commit`：默认交互；读取 `loadCommitLinterConfig()`
- `fa commit --quiet -s './apps/*' -s './packages/*'`：commit-msg 校验 + Monorepo scope
- 直引 API：`commitLinter({ ...loadCommitLinterConfig(), commit: message })`（运行时勿把 `scopeGlobs` 传入 `commitLinter`）

## 构建

```shell
cd packages/commit-linter && pnpm build
```

`unbuild` 双格式；`dependencies` + `peerDependencies`：`@142vip/utils`。

## 验证

```shell
cd packages/commit-linter && pnpm test && pnpm build && pnpm typecheck
```

## 演示

无
