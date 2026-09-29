[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / OptionalUnlessRequiredId

# 类型别名: OptionalUnlessRequiredId\<TSchema\>

> **OptionalUnlessRequiredId**\<`TSchema`\> = `TSchema` *extends* `object` ? `TSchema` : [`OptionalId`](OptionalId.md)\<`TSchema`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4348

Adds an optional _id field to an object shaped type, unless the _id field is required on that type.
In the case _id is required, this method continues to require_id.

## 类型参数

### TSchema

`TSchema`
