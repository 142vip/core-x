[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GithubAPI

# 变量: GithubAPI

> `const` **GithubAPI**: `object`

定义于: [changelog/src/core/github.api.ts:219](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/changelog/src/core/github.api.ts#L219)

## 类型声明

### createGithubRelease()

> **createGithubRelease**: (`options`) => `Promise`\<`void`\>

发送github发布
- https://docs.github.com/en/rest/releases/releases?apiVersion=2022-11-28

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

### generateReleaseUrl()

> **generateReleaseUrl**: (`markdown`, `config`) => `string`

生成手动release发布的地址链接

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

### getAuthorInfo()

> **getAuthorInfo**: (`options`, `info`) => `Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)\>

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

### getHeaders()

> **getHeaders**: (`token`) => `object`

#### 参数

##### token

`string`

#### 返回

`object`

##### accept

> **accept**: `string` = `'application/vnd.github.v3+json'`

##### authorization

> **authorization**: `string`

### isExistTag()

> **isExistTag**: (`tag`, `options`) => `Promise`\<`boolean`\>

判断是否有tag

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

### printReleaseUrl()

> **printReleaseUrl**: (`webUrl`, `success`) => `void`

打印手动发布地址
- 默认成功输出

#### 参数

##### webUrl

`string`

##### success

`boolean` = `true`

#### 返回

`void`

### resolveAuthors()

> **resolveAuthors**: (`commits`, `options`) => `Promise`\<[`GitAuthorInfo`](../interfaces/GitAuthorInfo.md)[]\>

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
