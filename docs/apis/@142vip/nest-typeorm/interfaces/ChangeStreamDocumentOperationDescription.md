[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamDocumentOperationDescription

# 接口: ChangeStreamDocumentOperationDescription

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1037

## theme_extended_by

- [`ChangeStreamCreateIndexDocument`](ChangeStreamCreateIndexDocument.md)
- [`ChangeStreamDropIndexDocument`](ChangeStreamDropIndexDocument.md)
- [`ChangeStreamRefineCollectionShardKeyDocument`](ChangeStreamRefineCollectionShardKeyDocument.md)
- [`ChangeStreamReshardCollectionDocument`](ChangeStreamReshardCollectionDocument.md)
- [`ChangeStreamShardCollectionDocument`](ChangeStreamShardCollectionDocument.md)

## 属性

### operationDescription?

> `optional` **operationDescription?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1045

An description of the operation.

Only present when the `showExpandedEvents` flag is enabled.

#### Since Server Version

6.1.0
