[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AnyBulkWriteOperation

# 类型别名: AnyBulkWriteOperation\<TSchema\>

> **AnyBulkWriteOperation**\<`TSchema`\> = \{ `insertOne`: [`InsertOneModel`](../interfaces/InsertOneModel.md)\<`TSchema`\>; \} \| \{ `replaceOne`: [`ReplaceOneModel`](../interfaces/ReplaceOneModel.md)\<`TSchema`\>; \} \| \{ `updateOne`: [`UpdateOneModel`](../interfaces/UpdateOneModel.md)\<`TSchema`\>; \} \| \{ `updateMany`: [`UpdateManyModel`](../interfaces/UpdateManyModel.md)\<`TSchema`\>; \} \| \{ `deleteOne`: [`DeleteOneModel`](../interfaces/DeleteOneModel.md)\<`TSchema`\>; \} \| \{ `deleteMany`: [`DeleteManyModel`](../interfaces/DeleteManyModel.md)\<`TSchema`\>; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:398

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)
