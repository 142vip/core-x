[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipLogger

# Class: VipLogger

Defined in: [packages/utils/src/core/logger.ts:22](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L22)

日志输出
- 用于终端
- 用于基本日志定位

## Constructors

### Constructor

> **new VipLogger**(`_opts?`): `VipLogger`

Defined in: [packages/utils/src/core/logger.ts:24](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L24)

#### Parameters

##### \_opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### Returns

`VipLogger`

## Methods

### error()

> **error**(`msg`, `opts?`): `void`

Defined in: [packages/utils/src/core/logger.ts:38](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L38)

#### Parameters

##### msg

`string`

##### opts?

[`LoggerOptions`](../interfaces/LoggerOptions.md)

#### Returns

`void`

***

### log()

> **log**(`msg`, `opts?`): `void`

Defined in: [packages/utils/src/core/logger.ts:33](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L33)

#### Parameters

##### msg

`string`

##### opts?

[`LoggerOptions`](../interfaces/LoggerOptions.md)

#### Returns

`void`

***

### logByBlank()

> **logByBlank**(`message`): `void`

Defined in: [packages/utils/src/core/logger.ts:53](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L53)

上下空行输出

#### Parameters

##### message

`string`

#### Returns

`void`

***

### println()

> **println**(): `void`

Defined in: [packages/utils/src/core/logger.ts:46](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L46)

打印空行

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(`opts?`): `VipLogger`

Defined in: [packages/utils/src/core/logger.ts:26](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/logger.ts#L26)

#### Parameters

##### opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### Returns

`VipLogger`
