[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamDocumentCollectionUUID

# 接口: ChangeStreamDocumentCollectionUUID

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:983

## theme_extended_by

- [`ChangeStreamCollModDocument`](ChangeStreamCollModDocument.md)
- [`ChangeStreamCreateDocument`](ChangeStreamCreateDocument.md)
- [`ChangeStreamCreateIndexDocument`](ChangeStreamCreateIndexDocument.md)
- [`ChangeStreamDeleteDocument`](ChangeStreamDeleteDocument.md)
- [`ChangeStreamDropDocument`](ChangeStreamDropDocument.md)
- [`ChangeStreamDropIndexDocument`](ChangeStreamDropIndexDocument.md)
- [`ChangeStreamInsertDocument`](ChangeStreamInsertDocument.md)
- [`ChangeStreamRefineCollectionShardKeyDocument`](ChangeStreamRefineCollectionShardKeyDocument.md)
- [`ChangeStreamRenameDocument`](ChangeStreamRenameDocument.md)
- [`ChangeStreamReshardCollectionDocument`](ChangeStreamReshardCollectionDocument.md)
- [`ChangeStreamShardCollectionDocument`](ChangeStreamShardCollectionDocument.md)
- [`ChangeStreamUpdateDocument`](ChangeStreamUpdateDocument.md)

## 属性

### collectionUUID

> **collectionUUID**: [`Binary`](../namespaces/BSON/classes/Binary.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:994

The UUID (Binary subtype 4) of the collection that the operation was performed on.

Only present when the `showExpandedEvents` flag is enabled.

**NOTE:** collectionUUID will be converted to a NodeJS Buffer if the promoteBuffers
   flag is enabled.

#### Since Server Version

6.1.0
