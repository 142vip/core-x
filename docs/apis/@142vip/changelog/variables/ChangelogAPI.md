[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogAPI

# 变量: ChangelogAPI

> `const` **ChangelogAPI**: `object`

定义于: [changelog/src/core/changelog.api.ts:163](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/changelog/src/core/changelog.api.ts#L163)

changelog相关API

## 类型声明

### changelogCoreHandler()

> **changelogCoreHandler**: (`cliOptions`) => `Promise`\<`void`\>

处理changelog业务

#### 参数

##### cliOptions

[`ChangelogCliOptions`](../interfaces/ChangelogCliOptions.md)

#### 返回

`Promise`\<`void`\>

### generateChangelogInfo()

> **generateChangelogInfo**: (`config`) => `Promise`\<[`GenerateChangelogResult`](../interfaces/GenerateChangelogResult.md)\>

处理git changelog记录生成

#### 参数

##### config

[`ChangelogGenerateOptions`](../interfaces/ChangelogGenerateOptions.md)

#### 返回

`Promise`\<[`GenerateChangelogResult`](../interfaces/GenerateChangelogResult.md)\>

### upsertChangelogDoc()

> **upsertChangelogDoc**: (`outputPath`, `markdown`, `releaseVersionName`, `markdownHeader`) => `Promise`\<`void`\>

创建或更新changelog文档

#### 参数

##### outputPath

`string`

##### markdown

`string`

##### releaseVersionName

`string`

##### markdownHeader

`string`

#### 返回

`Promise`\<`void`\>
