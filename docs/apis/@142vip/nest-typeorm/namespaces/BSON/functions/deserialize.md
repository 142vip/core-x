[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / deserialize

# 函数: deserialize()

> **deserialize**(`buffer`, `options?`): [`Document`](../interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:317

Deserialize data as BSON.

## 参数

### buffer

`Uint8Array`

the buffer containing the serialized set of BSON documents.

### options?

[`DeserializeOptions`](../interfaces/DeserializeOptions.md)

## 返回

[`Document`](../interfaces/Document.md)

returns the deserialized Javascript Object.
