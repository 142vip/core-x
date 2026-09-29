[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ConnectionPoolCreatedEvent

# 类: ConnectionPoolCreatedEvent

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2144

An event published when a connection pool is created

## theme_extends

- [`ConnectionPoolMonitoringEvent`](ConnectionPoolMonitoringEvent.md)

## 构造函数

### 构造函数

> **new ConnectionPoolCreatedEvent**(): `ConnectionPoolCreatedEvent`

#### 返回

`ConnectionPoolCreatedEvent`

#### 继承自

[`ConnectionPoolMonitoringEvent`](ConnectionPoolMonitoringEvent.md).[`constructor`](ConnectionPoolMonitoringEvent.md#constructor)

## 属性

### address

> **address**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2171

The address (host/port pair) of the pool

#### 继承自

[`ConnectionPoolMonitoringEvent`](ConnectionPoolMonitoringEvent.md).[`address`](ConnectionPoolMonitoringEvent.md#address)

***

### options?

> `optional` **options?**: [`ConnectionPoolOptions`](../interfaces/ConnectionPoolOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2146

The options used to create this connection pool

***

### time

> **time**: `Date`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2169

A timestamp when the event was created

#### 继承自

[`ConnectionPoolMonitoringEvent`](ConnectionPoolMonitoringEvent.md).[`time`](ConnectionPoolMonitoringEvent.md#time)
