[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseApi

# 类: ReleaseApi

定义于: [release-version/src/release.api.ts:8](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/release.api.ts#L8)

`@142vip/release-version` 对外 API。
`releasex` CLI 与 `fa release` 编排层通过 `releaseApi` 调用。

## 构造函数

### 构造函数

> **new ReleaseApi**(): `ReleaseApi`

#### 返回

`ReleaseApi`

## 方法

### releaseVersion()

> **releaseVersion**(`options`): `Promise`\<[`ReleaseVersionResults`](../interfaces/ReleaseVersionResults.md)\>

定义于: [release-version/src/release.api.ts:24](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/release.api.ts#L24)

完整发版：准备 → commit → tag → postversion → push

#### 参数

##### options

[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)

#### 返回

`Promise`\<[`ReleaseVersionResults`](../interfaces/ReleaseVersionResults.md)\>

***

### releaseVersionDryRun()

> **releaseVersionDryRun**(`options`): `Promise`\<[`ReleaseVersionOperation`](ReleaseVersionOperation.md)\>

定义于: [release-version/src/release.api.ts:17](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/release.api.ts#L17)

发版准备：写版本号、CHANGELOG、脚本（不含 git commit / push）

#### 参数

##### options

[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)

#### 返回

`Promise`\<[`ReleaseVersionOperation`](ReleaseVersionOperation.md)\>

***

### releaseVersionInfo()

> **releaseVersionInfo**(`options`): `Promise`\<[`ReleaseVersionOperation`](ReleaseVersionOperation.md)\>

定义于: [release-version/src/release.api.ts:10](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/release.api.ts#L10)

解析发版上下文：当前版本、目标版本（不写盘）

#### 参数

##### options

[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)

#### 返回

`Promise`\<[`ReleaseVersionOperation`](ReleaseVersionOperation.md)\>
