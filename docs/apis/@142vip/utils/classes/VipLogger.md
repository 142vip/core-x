[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipLogger

# 类: VipLogger

定义于: [packages/utils/src/core/logger.ts:22](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L22)

日志输出
- 用于终端
- 用于基本日志定位

## 构造函数

### 构造函数

> **new VipLogger**(`_opts?`): `VipLogger`

定义于: [packages/utils/src/core/logger.ts:24](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L24)

#### 参数

##### \_opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### 返回

`VipLogger`

## 方法

### error()

> **error**(`msg`, `opts?`): `void`

定义于: [packages/utils/src/core/logger.ts:38](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L38)

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

定义于: [packages/utils/src/core/logger.ts:33](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L33)

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

定义于: [packages/utils/src/core/logger.ts:53](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L53)

上下空行输出

#### 参数

##### message

`string`

#### 返回

`void`

***

### println()

> **println**(): `void`

定义于: [packages/utils/src/core/logger.ts:46](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L46)

打印空行

#### 返回

`void`

***

### getInstance()

> `static` **getInstance**(`opts?`): `VipLogger`

定义于: [packages/utils/src/core/logger.ts:26](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/core/logger.ts#L26)

#### 参数

##### opts?

[`VipLoggerOptions`](../interfaces/VipLoggerOptions.md)

#### 返回

`VipLogger`
