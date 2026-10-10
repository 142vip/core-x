[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipLogger

# 类: VipLogger

定义于: [packages/utils/src/core/logger.ts:23](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L23)

日志输出
- 用于终端
- 用于基本日志定位

## 构造函数

### 构造函数

> **new VipLogger**(`_opts?`): `VipLogger`

定义于: [packages/utils/src/core/logger.ts:25](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L25)

#### 参数

##### \_opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### 返回

`VipLogger`

## 方法

### error()

> **error**(`msg`, `opts?`): `void`

定义于: [packages/utils/src/core/logger.ts:39](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L39)

#### 参数

##### msg

`string`

##### opts?

[`LoggerOptions`](../interfaces/LoggerOptions.md)

#### 返回

`void`

***

### log()

> **log**(`msg`, `opts?`): `void`

定义于: [packages/utils/src/core/logger.ts:34](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L34)

#### 参数

##### msg

`string`

##### opts?

[`LoggerOptions`](../interfaces/LoggerOptions.md)

#### 返回

`void`

***

### logByBlank()

> **logByBlank**(`message`): `void`

定义于: [packages/utils/src/core/logger.ts:54](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L54)

上下空行输出

#### 参数

##### message

`string`

#### 返回

`void`

***

### println()

> **println**(): `void`

定义于: [packages/utils/src/core/logger.ts:47](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L47)

打印空行

#### 返回

`void`

***

### getInstance()

> `static` **getInstance**(`opts?`): `VipLogger`

定义于: [packages/utils/src/core/logger.ts:27](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/logger.ts#L27)

#### 参数

##### opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### 返回

`VipLogger`
