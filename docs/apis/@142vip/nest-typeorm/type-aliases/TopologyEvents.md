[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TopologyEvents

# 类型别名: TopologyEvents

> **TopologyEvents** = `object` & `Omit`\<[`ServerEvents`](ServerEvents.md), `"connect"`\> & [`ConnectionPoolEvents`](ConnectionPoolEvents.md) & [`ConnectionEvents`](ConnectionEvents.md) & [`EventEmitterWithState`](EventEmitterWithState.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5005

## 类型声明

### close()

> **close**(): `void`

#### 返回

`void`

### error()

> **error**(`error`): `void`

#### 参数

##### error

`Error`

#### 返回

`void`

### serverClosed()

> **serverClosed**(`event`): `void`

#### 参数

##### event

[`ServerClosedEvent`](../classes/ServerClosedEvent.md)

#### 返回

`void`

### serverDescriptionChanged()

> **serverDescriptionChanged**(`event`): `void`

#### 参数

##### event

[`ServerDescriptionChangedEvent`](../classes/ServerDescriptionChangedEvent.md)

#### 返回

`void`

### serverOpening()

> **serverOpening**(`event`): `void`

#### 参数

##### event

[`ServerOpeningEvent`](../classes/ServerOpeningEvent.md)

#### 返回

`void`

### timeout()

> **timeout**(): `void`

#### 返回

`void`

### topologyClosed()

> **topologyClosed**(`event`): `void`

#### 参数

##### event

[`TopologyClosedEvent`](../classes/TopologyClosedEvent.md)

#### 返回

`void`

### topologyDescriptionChanged()

> **topologyDescriptionChanged**(`event`): `void`

#### 参数

##### event

[`TopologyDescriptionChangedEvent`](../classes/TopologyDescriptionChangedEvent.md)

#### 返回

`void`

### topologyOpening()

> **topologyOpening**(`event`): `void`

#### 参数

##### event

[`TopologyOpeningEvent`](../classes/TopologyOpeningEvent.md)

#### 返回

`void`
