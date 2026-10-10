[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseVersionResults

# 接口: ReleaseVersionResults

定义于: [release-version/src/releasex.interface.ts:58](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L58)

`releaseVersion()` 执行结果

## theme_extended_by

- [`ReleaseVersionProgress`](ReleaseVersionProgress.md)

## 属性

### commit

> **commit**: `string` \| `false`

定义于: [release-version/src/releasex.interface.ts:66](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L66)

git commit message；未提交时为 `false`

***

### currentVersion

> **currentVersion**: `string`

定义于: [release-version/src/releasex.interface.ts:62](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L62)

发版前版本号

***

### newVersion

> **newVersion**: `string`

定义于: [release-version/src/releasex.interface.ts:64](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L64)

发版后版本号

***

### release?

> `optional` **release?**: [`VipReleaseType`](../../utils/type-aliases/VipReleaseType.md)

定义于: [release-version/src/releasex.interface.ts:60](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L60)

选用的 release 类型；自定义版本时为 `undefined`

***

### tag

> **tag**: `string` \| `false`

定义于: [release-version/src/releasex.interface.ts:68](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L68)

git tag 名；未打 tag 时为 `false`
