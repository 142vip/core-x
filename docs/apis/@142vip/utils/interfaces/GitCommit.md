[API 参考](../../../index.md) / [@142vip/utils](../index.md) / GitCommit

# Interface: GitCommit

Defined in: [packages/utils/src/enums/git.interface.ts:15](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L15)

git commit解析
- 提交类型
- 提交范围
- 提交信息

## Extended by

- [`GitCommitLinter`](../../commit-linter/interfaces/GitCommitLinter.md)

## Properties

### scope?

> `optional` **scope**: `string`

Defined in: [packages/utils/src/enums/git.interface.ts:24](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L24)

提交范围

***

### subject?

> `optional` **subject**: `string`

Defined in: [packages/utils/src/enums/git.interface.ts:29](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L29)

提交信息

***

### type

> **type**: `string`

Defined in: [packages/utils/src/enums/git.interface.ts:19](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L19)

提交类型
