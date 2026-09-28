[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / InsertOneResult

# 接口: InsertOneResult\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3310

## 类型参数

### TSchema

`TSchema` = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 属性

### acknowledged

> **acknowledged**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3312

Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined

***

### insertedId

> **insertedId**: [`InferIdType`](../type-aliases/InferIdType.md)\<`TSchema`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3314

The identifier that was inserted. If the server generated the identifier, this value will be null as the driver does not have access to that data
