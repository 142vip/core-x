[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseOperationOptions

# Interface: ReleaseOperationOptions

Defined in: [enums/version-operation.interface.ts:4](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L4)

Normalized and sanitized options

## Properties

### changelog?

> `optional` **changelog**: `boolean`

Defined in: [enums/version-operation.interface.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L18)

***

### commit?

> `optional` **commit**: `object`

Defined in: [enums/version-operation.interface.ts:5](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L5)

#### all

> **all**: `boolean`

#### message

> **message**: `string`

#### skipGitVerify

> **skipGitVerify**: `boolean`

***

### currentVersion?

> `optional` **currentVersion**: `string`

Defined in: [enums/version-operation.interface.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L17)

***

### cwd

> **cwd**: `string`

Defined in: [enums/version-operation.interface.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L14)

***

### execute?

> `optional` **execute**: `string`

Defined in: [enums/version-operation.interface.ts:16](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L16)

***

### ignoreScripts

> **ignoreScripts**: `boolean`

Defined in: [enums/version-operation.interface.ts:15](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L15)

***

### push

> **push**: `boolean`

Defined in: [enums/version-operation.interface.ts:13](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L13)

***

### scopeName?

> `optional` **scopeName**: `string`

Defined in: [enums/version-operation.interface.ts:22](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L22)

monorepo模式下 模块名

***

### tag?

> `optional` **tag**: `object`

Defined in: [enums/version-operation.interface.ts:10](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/release-version/src/enums/version-operation.interface.ts#L10)

#### name

> **name**: `string`
