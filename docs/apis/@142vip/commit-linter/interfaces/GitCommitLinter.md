[API 参考](../../../packages.md) / [@142vip/commit-linter](../index.md) / GitCommitLinter

# 接口: GitCommitLinter

定义于: [commit-linter/src/git-commit.interface.ts:17](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/commit-linter/src/git-commit.interface.ts#L17)

git commit解析
- 提交类型
- 提交范围
- 提交信息

## theme_extends

- [`GitCommit`](../../utils/interfaces/GitCommit.md)

## 属性

### commit

> **commit**: `string`

定义于: [commit-linter/src/git-commit.interface.ts:18](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/commit-linter/src/git-commit.interface.ts#L18)

***

### scope?

> `optional` **scope**: `string`

定义于: [utils/src/enums/git.interface.ts:24](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/enums/git.interface.ts#L24)

提交范围

#### 继承自

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`scope`](../../utils/interfaces/GitCommit.md#scope)

***

### subject?

> `optional` **subject**: `string`

定义于: [utils/src/enums/git.interface.ts:29](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/enums/git.interface.ts#L29)

提交信息

#### 继承自

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`subject`](../../utils/interfaces/GitCommit.md#subject)

***

### type

> **type**: `string`

定义于: [utils/src/enums/git.interface.ts:19](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/enums/git.interface.ts#L19)

提交类型

#### 继承自

[`GitCommit`](../../utils/interfaces/GitCommit.md).[`type`](../../utils/interfaces/GitCommit.md#type)
