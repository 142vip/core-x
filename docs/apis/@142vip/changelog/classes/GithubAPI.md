[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GithubAPI

# 类: GithubAPI

定义于: [changelog/src/core/apis/github.api.ts:288](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L288)

GitHub REST 与 Release 相关 API

## 构造函数

### 构造函数

> **new GithubAPI**(): `GithubAPI`

#### 返回

`GithubAPI`

## 属性

### buildGithubReleaseRequestBody

> **buildGithubReleaseRequestBody**: (`options`) => `Record`\<`string`, `unknown`\>

定义于: [changelog/src/core/apis/github.api.ts:292](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L292)

构建 GitHub Release API 请求体
- 非预发布时附带 `make_latest: true`

#### 参数

##### options

###### content

`string`

###### draft?

`boolean`

###### includeMakeLatest?

`boolean`

仅 POST 新建 Release 时可传 `make_latest`；PATCH 携带会触发 422

###### name

`string`

###### prerelease?

`boolean`

###### tag

`string`

#### 返回

`Record`\<`string`, `unknown`\>

***

### createGithubRelease

> **createGithubRelease**: (`options`) => `Promise`\<`void`\>

定义于: [changelog/src/core/apis/github.api.ts:297](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L297)

创建或更新 GitHub Release

#### 参数

##### options

###### baseUrlApi

`string`

###### content

`string`

###### draft?

`boolean`

###### name

`string`

###### prerelease?

`boolean`

###### repo

`string`

###### tag

`string`

###### token

`string`

#### 返回

`Promise`\<`void`\>

***

### fetchGitHubJson

> **fetchGitHubJson**: \<`T`\>(`url`, `init`) => `Promise`\<`T`\>

定义于: [changelog/src/core/apis/github.api.ts:293](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L293)

GitHub REST 请求（Node 18+ 原生 fetch）

#### 类型参数

##### T

`T`

#### 参数

##### url

`string`

##### init?

###### body?

`Record`\<`string`, `unknown`\>

###### method?

`string`

###### token?

`string`

#### 返回

`Promise`\<`T`\>

***

### generateReleaseUrl

> **generateReleaseUrl**: (`markdown`, `config`) => `string`

定义于: [changelog/src/core/apis/github.api.ts:291](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L291)

生成 GitHub Web「新建 Release」链接（token 缺失时手动发布）

#### 参数

##### markdown

`string`

##### config

###### baseUrl

`string`

###### name

`string`

###### prerelease

`boolean`

###### repo

`string`

###### to

`string`

#### 返回

`string`

***

### getAuthorInfo

> **getAuthorInfo**: (`options`, `info`) => `Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)\>

定义于: [changelog/src/core/apis/github.api.ts:289](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L289)

#### 参数

##### options

###### baseUrlApi

`string`

###### repo

`string`

###### token

`string`

##### info

[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)

#### 返回

`Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)\>

***

### getHeaders

> **getHeaders**: (`token`) => `object`

定义于: [changelog/src/core/apis/github.api.ts:295](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L295)

#### 参数

##### token

`string`

#### 返回

`object`

##### accept

> **accept**: `string` = `'application/vnd.github.v3+json'`

##### authorization

> **authorization**: `string`

***

### isExistTag

> **isExistTag**: (`tag`, `options`) => `Promise`\<`boolean`\>

定义于: [changelog/src/core/apis/github.api.ts:290](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L290)

检查远程 tag 是否存在

#### 参数

##### tag

`string`

##### options

###### baseUrlApi

`string`

###### repo

`string`

###### token

`string`

#### 返回

`Promise`\<`boolean`\>

***

### printReleaseUrl

> **printReleaseUrl**: (`webUrl`, `success`) => `void`

定义于: [changelog/src/core/apis/github.api.ts:294](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L294)

#### 参数

##### webUrl

`string`

##### success?

`boolean` = `true`

#### 返回

`void`

***

### resolveAuthors

> **resolveAuthors**: (`commits`, `options`) => `Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)[]\>

定义于: [changelog/src/core/apis/github.api.ts:296](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/apis/github.api.ts#L296)

为 commit 列表解析 GitHub 贡献者 login

#### 参数

##### commits

[`Commit`](../interfaces/Commit.md)[]

##### options

###### baseUrlApi

`string`

###### repo

`string`

###### token?

`string`

#### 返回

`Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)[]\>
