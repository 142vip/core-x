[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamDocumentKey

# 接口: ChangeStreamDocumentKey\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1026

## theme_extended_by

- [`ChangeStreamDeleteDocument`](ChangeStreamDeleteDocument.md)
- [`ChangeStreamInsertDocument`](ChangeStreamInsertDocument.md)
- [`ChangeStreamReplaceDocument`](ChangeStreamReplaceDocument.md)
- [`ChangeStreamUpdateDocument`](ChangeStreamUpdateDocument.md)

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 属性

### documentKey

> **documentKey**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1031

For unsharded collections this contains a single field `_id`.
For sharded collections, this will contain all the components of the shard key

#### 索引签名

\[`shardKey`: `string`\]: `any`

#### \_id

> **\_id**: [`InferIdType`](../type-aliases/InferIdType.md)\<`TSchema`\>
