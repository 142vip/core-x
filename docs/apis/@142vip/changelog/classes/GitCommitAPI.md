[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitAPI

# 类: GitCommitAPI

定义于: [changelog/src/core/apis/git-commit.api.ts:210](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/git-commit.api.ts#L210)

Git 提交解析与 Markdown 聚合

## 构造函数

### 构造函数

> **new GitCommitAPI**(): `GitCommitAPI`

#### 返回

`GitCommitAPI`

## 属性

### getGitCommitDiff

> **getGitCommitDiff**: (`options`) => `Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

定义于: [changelog/src/core/apis/git-commit.api.ts:211](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/git-commit.api.ts#L211)

获取两个 ref 之间的 commit 记录（`git log` pretty 格式）

#### 参数

##### options

[`GitCommitDiffOptions`](../interfaces/GitCommitDiffOptions.md)

#### 返回

`Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

***

### parseCommitsToMarkdownStr

> **parseCommitsToMarkdownStr**: (`commits`, `options`) => `Promise`\<`string`\>

定义于: [changelog/src/core/apis/git-commit.api.ts:213](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/git-commit.api.ts#L213)

将提交列表渲染为 CHANGELOG Markdown 正文

#### 参数

##### commits

[`Commit`](../interfaces/Commit.md)[]

##### options

###### baseUrl

`string`

###### capitalize

`boolean`

###### emoji

`boolean`

###### from

`string`

###### group?

`boolean` \| `"multiple"`

###### name

`string`

###### repo

`string`

###### scopeMap

`Record`\<`string`, `string`\>

###### scopeName?

`string`

###### titles

\{ `breakingChanges?`: `string`; \}

###### titles.breakingChanges?

`string`

###### to

`string`

###### types

`Record`\<`string`, \{ `title`: `string`; \}\>

#### 返回

`Promise`\<`string`\>

***

### parseGitCommits

> **parseGitCommits**: (`commits`, `scopeMap`) => [`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]

定义于: [changelog/src/core/apis/git-commit.api.ts:212](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/git-commit.api.ts#L212)

批量解析 Conventional Commits，过滤无法匹配的提交

#### 参数

##### commits

[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]

##### scopeMap

`Record`\<`string`, `string`\>

#### 返回

[`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]
