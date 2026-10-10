[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / commitLinter

# 函数: commitLinter()

> **commitLinter**(`options?`): [`GitCommitLinter`](../interfaces/GitCommitLinter.md)

定义于: [commit-linter/src/commit-linter.ts:130](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit-linter.ts#L130)

校验 Git Commit 信息（Conventional Commits）。

传入 `options` 时启用 type / scope / subject 白名单与 `verify`；
仅省略 `options` 时只做首行格式解析。

## 参数

### options?

[`CommitLinterOptions`](../interfaces/CommitLinterOptions.md)

## 返回

[`GitCommitLinter`](../interfaces/GitCommitLinter.md)
