[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / deserializeStream

# 函数: deserializeStream()

> **deserializeStream**(`data`, `startIndex`, `numberOfDocuments`, `documents`, `docStartIndex`, `options`): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:368

Deserialize stream data as BSON documents.

## 参数

### data

`ArrayBuffer` \| `Uint8Array`\<`ArrayBufferLike`\>

the buffer containing the serialized set of BSON documents.

### startIndex

`number`

the start index in the data Buffer where the deserialization is to start.

### numberOfDocuments

`number`

number of documents to deserialize.

### documents

[`Document`](../interfaces/Document.md)[]

an array where to store the deserialized documents.

### docStartIndex

`number`

the index in the documents array from where to start inserting documents.

### options

[`DeserializeOptions`](../interfaces/DeserializeOptions.md)

additional options used for the deserialization.

## 返回

`number`

next index in the buffer after deserialization **x** numbers of documents.
