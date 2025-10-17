[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitAPI

# 变量: GitCommitAPI

> `const` **GitCommitAPI**: `object`

定义于: [changelog/src/core/git-commit.api.ts:225](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/changelog/src/core/git-commit.api.ts#L225)

## 类型声明

### getGitCommitDiff()

> **getGitCommitDiff**: (`options`) => `Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

获取不同tag之间的commit记录

#### 参数

##### options

[`GitCommitDiffOptions`](../interfaces/GitCommitDiffOptions.md)

#### 返回

`Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

### parseCommitsToMarkdownStr()

> **parseCommitsToMarkdownStr**: (`commits`, `options`) => `Promise`\<`string`\>

生成Markdown文档记录的每行记录

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

### parseGitCommits()

> **parseGitCommits**: (`commits`, `scopeMap`) => [`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]

解析所有Commit信息

#### 参数

##### commits

[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]

##### scopeMap

`Record`\<`string`, `string`\>

#### 返回

[`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]
