[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ServerHeartbeatStartedEvent

# 类: ServerHeartbeatStartedEvent

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4766

Emitted when the server monitor’s hello command is started - immediately before
the hello command is serialized into raw BSON and written to the socket.

## 构造函数

### 构造函数

> **new ServerHeartbeatStartedEvent**(): `ServerHeartbeatStartedEvent`

#### 返回

`ServerHeartbeatStartedEvent`

## 属性

### connectionId

> **connectionId**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4768

The connection id for the command
