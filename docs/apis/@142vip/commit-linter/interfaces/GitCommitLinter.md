[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / GitCommitLinter

# Interface: GitCommitLinter

Defined in: [commit-linter/src/core/git-commit.interface.ts:20](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/commit-linter/src/core/git-commit.interface.ts#L20)

Git Commit信息校验结果

## Extends

- [`GitCommit`](../../utils/interfaces/GitCommit.md)

## Properties

### commit

> **commit**: `string`

Defined in: [commit-linter/src/core/git-commit.interface.ts:21](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/commit-linter/src/core/git-commit.interface.ts#L21)

***

### scope?

> `optional` **scope**: `string`

Defined in: [utils/src/enums/git.interface.ts:24](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L24)

提交范围

#### Inherited from

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`scope`](../../utils/interfaces/GitCommit.md#scope)

***

### subject?

> `optional` **subject**: `string`

Defined in: [utils/src/enums/git.interface.ts:29](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L29)

提交信息

#### Inherited from

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`subject`](../../utils/interfaces/GitCommit.md#subject)

***

### type

> **type**: `string`

Defined in: [utils/src/enums/git.interface.ts:19](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/enums/git.interface.ts#L19)

提交类型

#### Inherited from

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`type`](../../utils/interfaces/GitCommit.md#type)
