[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / serializeWithBufferAndIndex

# 函数: serializeWithBufferAndIndex()

> **serializeWithBufferAndIndex**(`object`, `finalBuffer`, `options?`): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:930

Serialize a Javascript object using a predefined Buffer and index into the buffer,
useful when pre-allocating the space for serialization.

## 参数

### object

[`Document`](../interfaces/Document.md)

the Javascript object to serialize.

### finalBuffer

`Uint8Array`

the Buffer you pre-allocated to store the serialized BSON object.

### options?

[`SerializeOptions`](../interfaces/SerializeOptions.md)

## 返回

`number`

the index pointing to the last written byte in the buffer.
