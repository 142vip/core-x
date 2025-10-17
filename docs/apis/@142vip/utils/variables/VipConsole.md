[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipConsole

# Variable: VipConsole

> `const` **VipConsole**: `object`

Defined in: [packages/utils/src/pkgs/console.ts:48](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/console.ts#L48)

日志

## Type Declaration

### error()

> **error**: (`e`) => `void`

错误日志

#### Parameters

##### e

`any`

#### Returns

`void`

### log()

> **log**: (`message?`, `level?`) => `void`

普通日志

#### Parameters

##### message?

`string`

##### level?

[`VipConsoleLogLevel`](../enumerations/VipConsoleLogLevel.md)

#### Returns

`void`

### trace()

> **trace**: (...`data`) => `void`

追踪日志，按照标准日志输出

#### Parameters

##### data

...`any`

#### Returns

`void`
