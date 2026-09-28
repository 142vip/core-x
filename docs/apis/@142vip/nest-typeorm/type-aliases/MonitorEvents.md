[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MonitorEvents

# 类型别名: MonitorEvents

> **MonitorEvents** = `object` & [`EventEmitterWithState`](EventEmitterWithState.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4227

## 类型声明

### close()

> **close**(): `void`

#### 返回

`void`

### resetConnectionPool()

> **resetConnectionPool**(): `void`

#### 返回

`void`

### resetServer()

> **resetServer**(`error?`): `void`

#### 参数

##### error?

[`MongoError`](../classes/MongoError.md)

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
