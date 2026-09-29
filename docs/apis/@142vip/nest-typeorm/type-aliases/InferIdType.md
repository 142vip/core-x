[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / InferIdType

# 类型别名: InferIdType\<TSchema\>

> **InferIdType**\<`TSchema`\> = `TSchema` *extends* `object` ? `Record`\<`any`, `never`\> *extends* `IdType` ? `never` : `IdType` : `TSchema` *extends* `object` ? `unknown` *extends* `IdType` ? [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) : `IdType` : [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3281

Given an object shaped type, return the type of the _id field or default to ObjectId

## 类型参数

### TSchema

`TSchema`
