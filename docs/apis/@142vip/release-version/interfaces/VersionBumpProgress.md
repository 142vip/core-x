[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / VersionBumpProgress

# Interface: VersionBumpProgress

Defined in: [enums/version-bump.interface.ts:121](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L121)

Information about the progress of the `versionBump()` function.

## Extends

- [`VersionBumpResults`](VersionBumpResults.md)

## Properties

### commit

> **commit**: `string` \| `false`

Defined in: [enums/version-bump.interface.ts:109](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L109)

用于 git 提交的提交消息，如果未创建 git 提交，则为“false”。
- 注意：这永远不会是空字符串。 它将始终至少包含新版本号。

#### Inherited from

[`VersionBumpResults`](VersionBumpResults.md).[`commit`](VersionBumpResults.md#commit)

***

### currentVersion

> **currentVersion**: `string`

Defined in: [enums/version-bump.interface.ts:98](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L98)

package.json文件中对应的上一个版本号

#### Inherited from

[`VersionBumpResults`](VersionBumpResults.md).[`currentVersion`](VersionBumpResults.md#currentversion)

***

### event

> **event**: [`VersionProgressEventEnum`](../enumerations/VersionProgressEventEnum.md)

Defined in: [enums/version-bump.interface.ts:122](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L122)

***

### newVersion

> **newVersion**: `string`

Defined in: [enums/version-bump.interface.ts:103](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L103)

发布的新的版本号

#### Inherited from

[`VersionBumpResults`](VersionBumpResults.md).[`newVersion`](VersionBumpResults.md#newversion)

***

### release?

> `optional` **release**: [`VipReleaseType`](../../utils/type-aliases/VipReleaseType.md)

Defined in: [enums/version-bump.interface.ts:93](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L93)

T使用的发布类型，如果使用了自定义版本号，则为 'undefined' .

#### Inherited from

[`VersionBumpResults`](VersionBumpResults.md).[`release`](VersionBumpResults.md#release)

***

### script?

> `optional` **script**: [`VersionHooksEnum`](../enumerations/VersionHooksEnum.md)

Defined in: [enums/version-bump.interface.ts:123](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L123)

***

### tag

> **tag**: `string` \| `false`

Defined in: [enums/version-bump.interface.ts:115](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-bump.interface.ts#L115)

用于 git 标签的标签名称，如果未创建 git 标签，则为 'false'。
- 注意：这永远不会是空字符串。 它将始终至少包含新版本号。

#### Inherited from

[`VersionBumpResults`](VersionBumpResults.md).[`tag`](VersionBumpResults.md#tag)
