[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / commitLiner

# 函数: commitLiner()

> **commitLiner**(`params?`, `commit?`): [`GitCommitLinter`](../interfaces/GitCommitLinter.md)

定义于: [commit-linter/src/core/git-commit-linter.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/commit-linter/src/core/git-commit-linter.ts#L14)

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
