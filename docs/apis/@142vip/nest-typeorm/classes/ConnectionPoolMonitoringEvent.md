[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ConnectionPoolMonitoringEvent

# 类: ConnectionPoolMonitoringEvent

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2167

The base export class for all monitoring events published from the connection pool

## theme_extended_by

- [`ConnectionCheckedInEvent`](ConnectionCheckedInEvent.md)
- [`ConnectionCheckedOutEvent`](ConnectionCheckedOutEvent.md)
- [`ConnectionCheckOutFailedEvent`](ConnectionCheckOutFailedEvent.md)
- [`ConnectionCheckOutStartedEvent`](ConnectionCheckOutStartedEvent.md)
- [`ConnectionClosedEvent`](ConnectionClosedEvent.md)
- [`ConnectionCreatedEvent`](ConnectionCreatedEvent.md)
- [`ConnectionPoolClearedEvent`](ConnectionPoolClearedEvent.md)
- [`ConnectionPoolClosedEvent`](ConnectionPoolClosedEvent.md)
- [`ConnectionPoolCreatedEvent`](ConnectionPoolCreatedEvent.md)
- [`ConnectionPoolReadyEvent`](ConnectionPoolReadyEvent.md)
- [`ConnectionReadyEvent`](ConnectionReadyEvent.md)

## 构造函数

### 构造函数

> **new ConnectionPoolMonitoringEvent**(): `ConnectionPoolMonitoringEvent`

#### 返回

`ConnectionPoolMonitoringEvent`

## 属性

### address

> **address**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2171

The address (host/port pair) of the pool

***

### time

> **time**: `Date`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2169

A timestamp when the event was created
