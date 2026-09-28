[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FindOptionsRelationsProperty

# 类型别名: FindOptionsRelationsProperty\<Property\>

> **FindOptionsRelationsProperty**\<`Property`\> = `Property` *extends* `Promise`\<infer I\> ? `FindOptionsRelationsProperty`\<`NonNullable`\<`I`\>\> \| `boolean` : `Property` *extends* infer I[] ? `FindOptionsRelationsProperty`\<`NonNullable`\<`I`\>\> \| `boolean` : `Property` *extends* `string` ? `never` : `Property` *extends* `number` ? `never` : `Property` *extends* `boolean` ? `never` : `Property` *extends* `Function` ? `never` : `Property` *extends* `Buffer` ? `never` : `Property` *extends* `Date` ? `never` : `Property` *extends* [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) ? `never` : `Property` *extends* `object` ? ... \| ... : `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOptionsRelations.d.ts:5

A single property handler for FindOptionsRelations.

## 类型参数

### Property

`Property`
