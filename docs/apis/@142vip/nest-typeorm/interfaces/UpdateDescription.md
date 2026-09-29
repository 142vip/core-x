[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / UpdateDescription

# 接口: UpdateDescription\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5121

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 属性

### disambiguatedPaths?

> `optional` **disambiguatedPaths?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5160

A document containing additional information about any ambiguous update paths from the update event.  The document
maps the full ambiguous update path to an array containing the actual resolved components of the path.  For example,
given a document shaped like `{ a: { '0': 0 } }`, and an update of `{ $inc: 'a.0' }`, disambiguated paths would look like
the following:

```
  {
    'a.0': ['a', '0']
  }
```

This field is only present when there are ambiguous paths that are updated as a part of the update event and `showExpandedEvents`
is enabled for the change stream.

#### Since Server Version

6.1.0

***

### removedFields?

> `optional` **removedFields?**: `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5130

An array of field names that were removed from the document.

***

### truncatedArrays?

> `optional` **truncatedArrays?**: `object`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5138

An array of documents which record array truncations performed with pipeline-based updates using one or more of the following stages:
- $addFields
- $set
- $replaceRoot
- $replaceWith

#### field

> **field**: `string`

The name of the truncated field.

#### newSize

> **newSize**: `number`

The number of elements in the truncated array.

***

### updatedFields?

> `optional` **updatedFields?**: `Partial`\<`TSchema`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5126

A document containing key:value pairs of names of the fields that were
changed, and the new value for those fields.
