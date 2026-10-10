[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / MarkdownAPI

# 类: MarkdownAPI

定义于: [changelog/src/core/apis/markdown.api.ts:198](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/apis/markdown.api.ts#L198)

CHANGELOG Markdown 片段格式化

## 构造函数

### 构造函数

> **new MarkdownAPI**(): `MarkdownAPI`

#### 返回

`MarkdownAPI`

## 属性

### formatSection

> **formatSection**: (`commits`, `options`) => `string`[]

定义于: [changelog/src/core/apis/markdown.api.ts:199](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/apis/markdown.api.ts#L199)

将一组 commit 格式化为 Markdown 章节

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

###### group?

`boolean` \| `"multiple"`

###### repo

`string`

###### scopeMap

`Record`\<`string`, `string`\>

###### scopeName?

`string`

###### sectionName

`string`

#### 返回

`string`[]

***

### getGithubVersionDescription

> **getGithubVersionDescription**: (`__namedParameters`) => `string`

定义于: [changelog/src/core/apis/markdown.api.ts:202](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/apis/markdown.api.ts#L202)

仓库根发版时的 GitHub compare 说明行

#### 参数

##### \_\_namedParameters

###### baseUrl

`string`

###### fromVersion

`string`

###### repo

`string`

###### toVersion

`string`

#### 返回

`string`

***

### getNoSignificantChanges

> **getNoSignificantChanges**: () => `string`

定义于: [changelog/src/core/apis/markdown.api.ts:200](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/apis/markdown.api.ts#L200)

无有效变更时的占位文案

#### 返回

`string`

***

### getNPMVersionDescription

> **getNPMVersionDescription**: (`pkgName`, `pkgVersion`) => `string`

定义于: [changelog/src/core/apis/markdown.api.ts:201](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/apis/markdown.api.ts#L201)

Monorepo 子包发版时的 NPM 版本说明行

#### 参数

##### pkgName

`string`

##### pkgVersion

`string`

#### 返回

`string`
