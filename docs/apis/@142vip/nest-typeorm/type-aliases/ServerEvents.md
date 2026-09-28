[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ServerEvents

# 类型别名: ServerEvents

> **ServerEvents** = `object` & [`ConnectionPoolEvents`](ConnectionPoolEvents.md) & [`EventEmitterWithState`](EventEmitterWithState.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4738

## 类型声明

### closed()

> **closed**(): `void`

#### 返回

`void`

### descriptionReceived()

> **descriptionReceived**(`description`): `void`

#### 参数

##### description

[`ServerDescription`](../classes/ServerDescription.md)

#### 返回

`void`

### ended()

> **ended**(): `void`

#### 返回

`void`

### serverHeartbeatFailed()

> **serverHeartbeatFailed**(`event`): `void`

#### 参数

##### event

[`ServerHeartbeatFailedEvent`](../classes/ServerHeartbeatFailedEvent.md)

#### 返回

`void`

### serverHeartbeatStarted()

> **serverHeartbeatStarted**(`event`): `void`

#### 参数

##### event

[`ServerHeartbeatStartedEvent`](../classes/ServerHeartbeatStartedEvent.md)

#### 返回

`void`

### serverHeartbeatSucceeded()

> **serverHeartbeatSucceeded**(`event`): `void`

#### 参数

##### event

[`ServerHeartbeatSucceededEvent`](../classes/ServerHeartbeatSucceededEvent.md)

#### 返回

`void`
