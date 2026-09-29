[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ConnectionPoolEvents

# 类型别名: ConnectionPoolEvents

> **ConnectionPoolEvents** = `object` & `Omit`\<[`ConnectionEvents`](ConnectionEvents.md), `"close"` \| `"message"`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2149

## 类型声明

### connectionCheckedIn()

> **connectionCheckedIn**(`event`): `void`

#### 参数

##### event

[`ConnectionCheckedInEvent`](../classes/ConnectionCheckedInEvent.md)

#### 返回

`void`

### connectionCheckedOut()

> **connectionCheckedOut**(`event`): `void`

#### 参数

##### event

[`ConnectionCheckedOutEvent`](../classes/ConnectionCheckedOutEvent.md)

#### 返回

`void`

### connectionCheckOutFailed()

> **connectionCheckOutFailed**(`event`): `void`

#### 参数

##### event

[`ConnectionCheckOutFailedEvent`](../classes/ConnectionCheckOutFailedEvent.md)

#### 返回

`void`

### connectionCheckOutStarted()

> **connectionCheckOutStarted**(`event`): `void`

#### 参数

##### event

[`ConnectionCheckOutStartedEvent`](../classes/ConnectionCheckOutStartedEvent.md)

#### 返回

`void`

### connectionClosed()

> **connectionClosed**(`event`): `void`

#### 参数

##### event

[`ConnectionClosedEvent`](../classes/ConnectionClosedEvent.md)

#### 返回

`void`

### connectionCreated()

> **connectionCreated**(`event`): `void`

#### 参数

##### event

[`ConnectionCreatedEvent`](../classes/ConnectionCreatedEvent.md)

#### 返回

`void`

### connectionPoolCleared()

> **connectionPoolCleared**(`event`): `void`

#### 参数

##### event

[`ConnectionPoolClearedEvent`](../classes/ConnectionPoolClearedEvent.md)

#### 返回

`void`

### connectionPoolClosed()

> **connectionPoolClosed**(`event`): `void`

#### 参数

##### event

[`ConnectionPoolClosedEvent`](../classes/ConnectionPoolClosedEvent.md)

#### 返回

`void`

### connectionPoolCreated()

> **connectionPoolCreated**(`event`): `void`

#### 参数

##### event

[`ConnectionPoolCreatedEvent`](../classes/ConnectionPoolCreatedEvent.md)

#### 返回

`void`

### connectionPoolReady()

> **connectionPoolReady**(`event`): `void`

#### 参数

##### event

[`ConnectionPoolReadyEvent`](../classes/ConnectionPoolReadyEvent.md)

#### 返回

`void`

### connectionReady()

> **connectionReady**(`event`): `void`

#### 参数

##### event

[`ConnectionReadyEvent`](../classes/ConnectionReadyEvent.md)

#### 返回

`void`
