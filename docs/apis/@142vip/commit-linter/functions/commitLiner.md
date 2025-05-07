[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / commitLiner

# 函数: commitLiner()

> **commitLiner**(`params?`, `commit?`): [`GitCommitLinter`](../interfaces/GitCommitLinter.md)

定义于: [commit-linter/src/git-commit-linter.ts:14](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/commit-linter/src/git-commit-linter.ts#L14)

Git Commit信息校验

## 参数

### params?

[`GitCommitLinterOptions`](../interfaces/GitCommitLinterOptions.md)

校验参数 可选，传则需要自定义校验

### commit?

`string`

commit message 可选，不传则从git获取

## 返回

[`GitCommitLinter`](../interfaces/GitCommitLinter.md)
