[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseVersionProgress

# 接口: ReleaseVersionProgress

定义于: [release-version/src/releasex.interface.ts:72](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L72)

进度回调结构

## theme_extends

- [`ReleaseVersionResults`](ReleaseVersionResults.md)

## 属性

### commit

> **commit**: `string` \| `false`

定义于: [release-version/src/releasex.interface.ts:66](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L66)

git commit message；未提交时为 `false`

#### 继承自

[`ReleaseVersionResults`](ReleaseVersionResults.md).[`commit`](ReleaseVersionResults.md#commit)

***

### currentVersion

> **currentVersion**: `string`

定义于: [release-version/src/releasex.interface.ts:62](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L62)

发版前版本号

#### 继承自

[`ReleaseVersionResults`](ReleaseVersionResults.md).[`currentVersion`](ReleaseVersionResults.md#currentversion)

***

### event

> **event**: [`VersionProgressEvent`](../enumerations/VersionProgressEvent.md)

定义于: [release-version/src/releasex.interface.ts:73](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L73)

***

### newVersion

> **newVersion**: `string`

定义于: [release-version/src/releasex.interface.ts:64](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L64)

发版后版本号

#### 继承自

[`ReleaseVersionResults`](ReleaseVersionResults.md).[`newVersion`](ReleaseVersionResults.md#newversion)

***

### release?

> `optional` **release?**: [`VipReleaseType`](../../utils/type-aliases/VipReleaseType.md)

定义于: [release-version/src/releasex.interface.ts:60](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L60)

选用的 release 类型；自定义版本时为 `undefined`

#### 继承自

[`ReleaseVersionResults`](ReleaseVersionResults.md).[`release`](ReleaseVersionResults.md#release)

***

### script?

> `optional` **script?**: [`VersionHooks`](../enumerations/VersionHooks.md)

定义于: [release-version/src/releasex.interface.ts:74](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L74)

***

### tag

> **tag**: `string` \| `false`

定义于: [release-version/src/releasex.interface.ts:68](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/releasex.interface.ts#L68)

git tag 名；未打 tag 时为 `false`

#### 继承自

[`ReleaseVersionResults`](ReleaseVersionResults.md).[`tag`](ReleaseVersionResults.md#tag)
