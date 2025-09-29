[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipConsole

# 变量: VipConsole

> `const` **VipConsole**: `object`

定义于: [packages/utils/src/pkgs/console.ts:48](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/utils/src/pkgs/console.ts#L48)

日志

## 类型声明

### error()

> **error**: (`e`) => `void`

错误日志

#### 参数

##### e

`any`

#### 返回

`void`

### log()

> **log**: (`message?`, `level?`) => `void`

普通日志

#### 参数

##### message?

`string`

##### level?

[`VipConsoleLogLevel`](../enumerations/VipConsoleLogLevel.md)

#### 返回

`void`

### trace()

> **trace**: (...`data`) => `void`

追踪日志，按照标准日志输出

#### 参数

##### data

...`any`

#### 返回

`void`
