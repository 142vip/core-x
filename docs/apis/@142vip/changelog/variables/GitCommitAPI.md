[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitAPI

# Variable: GitCommitAPI

> `const` **GitCommitAPI**: `object`

Defined in: [changelog/src/core/git-commit.api.ts:225](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/changelog/src/core/git-commit.api.ts#L225)

## Type Declaration

### getGitCommitDiff()

> **getGitCommitDiff**: (`options`) => `Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

获取不同tag之间的commit记录

#### Parameters

##### options

[`GitCommitDiffOptions`](../interfaces/GitCommitDiffOptions.md)

#### Returns

`Promise`\<[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]\>

### parseCommitsToMarkdownStr()

> **parseCommitsToMarkdownStr**: (`commits`, `options`) => `Promise`\<`string`\>

生成Markdown文档记录的每行记录

#### Parameters

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

#### Returns

`Promise`\<`string`\>

### parseGitCommits()

> **parseGitCommits**: (`commits`, `scopeMap`) => [`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]

解析所有Commit信息

#### Parameters

##### commits

[`GitCommitRaw`](../interfaces/GitCommitRaw.md)[]

##### scopeMap

`Record`\<`string`, `string`\>

#### Returns

[`GitCommitRecord`](../interfaces/GitCommitRecord.md)[]
