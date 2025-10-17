[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / commitLiner

# Function: commitLiner()

> **commitLiner**(`params?`, `commit?`): [`GitCommitLinter`](../interfaces/GitCommitLinter.md)

Defined in: [commit-linter/src/core/git-commit-linter.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/commit-linter/src/core/git-commit-linter.ts#L14)

Git Commit信息校验

## Parameters

### params?

[`GitCommitLinterOptions`](../interfaces/GitCommitLinterOptions.md)

校验参数 可选，传则需要自定义校验

### commit?

`string`

commit message 可选，不传则从git获取

## Returns

[`GitCommitLinter`](../interfaces/GitCommitLinter.md)
