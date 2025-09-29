[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / MarkdownAPI

# 变量: MarkdownAPI

> `const` **MarkdownAPI**: `object`

定义于: [changelog/src/core/markdown.api.ts:191](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/changelog/src/core/markdown.api.ts#L191)

## 类型声明

### formatSection()

> **formatSection**: (`commits`, `options`) => `string`[]

格式化Section

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

### getGithubVersionDescription()

> **getGithubVersionDescription**: (`__namedParameters`) => `string`

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

### getNoSignificantChanges()

> **getNoSignificantChanges**: () => `string`

无内容更新

#### 返回

`string`

### getNPMVersionDescription()

> **getNPMVersionDescription**: (`pkgName`, `pkgVersion`) => `string`

获取npm版本描述

#### 参数

##### pkgName

`string`

##### pkgVersion

`string`

#### 返回

`string`
