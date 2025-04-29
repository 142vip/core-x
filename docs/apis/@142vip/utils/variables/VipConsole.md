[API 参考](../../../packages.md) / [@142vip/utils](../index.md) / VipConsole

# 变量: VipConsole

> `const` **VipConsole**: `object`

定义于: [packages/utils/src/pkgs/console.ts:48](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/console.ts#L48)

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
