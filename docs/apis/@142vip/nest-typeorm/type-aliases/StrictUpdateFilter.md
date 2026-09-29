[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / StrictUpdateFilter

# 类型别名: StrictUpdateFilter\<TSchema\>

> **StrictUpdateFilter**\<`TSchema`\> = `object` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4899

**`Experimental`**

## 类型声明

### $addToSet?

> `optional` **$addToSet?**: [`SetFields`](SetFields.md)\<`TSchema`\>

### $bit?

> `optional` **$bit?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, [`NumericType`](NumericType.md) \| `undefined`, \{ `and`: [`IntegerType`](IntegerType.md); \} \| \{ `or`: [`IntegerType`](IntegerType.md); \} \| \{ `xor`: [`IntegerType`](IntegerType.md); \}\>

### $currentDate?

> `optional` **$currentDate?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, `Date` \| [`Timestamp`](../namespaces/BSON/classes/Timestamp.md), `true` \| \{ `$type`: `"date"` \| `"timestamp"`; \}\>

### $inc?

> `optional` **$inc?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, [`NumericType`](NumericType.md) \| `undefined`\>

### $max?

> `optional` **$max?**: [`StrictMatchKeysAndValues`](StrictMatchKeysAndValues.md)\<`TSchema`\>

### $min?

> `optional` **$min?**: [`StrictMatchKeysAndValues`](StrictMatchKeysAndValues.md)\<`TSchema`\>

### $mul?

> `optional` **$mul?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, [`NumericType`](NumericType.md) \| `undefined`\>

### $pop?

> `optional` **$pop?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, `ReadonlyArray`\<`any`\>, `1` \| `-1`\>

### $pull?

> `optional` **$pull?**: [`PullOperator`](PullOperator.md)\<`TSchema`\>

### $pullAll?

> `optional` **$pullAll?**: [`PullAllOperator`](PullAllOperator.md)\<`TSchema`\>

### $push?

> `optional` **$push?**: [`PushOperator`](PushOperator.md)\<`TSchema`\>

### $rename?

> `optional` **$rename?**: `Record`\<`string`, `string`\>

### $set?

> `optional` **$set?**: [`StrictMatchKeysAndValues`](StrictMatchKeysAndValues.md)\<`TSchema`\>

### $setOnInsert?

> `optional` **$setOnInsert?**: [`StrictMatchKeysAndValues`](StrictMatchKeysAndValues.md)\<`TSchema`\>

### $unset?

> `optional` **$unset?**: [`OnlyFieldsOfType`](OnlyFieldsOfType.md)\<`TSchema`, `any`, `""` \| `true` \| `1`\>

## 类型参数

### TSchema

`TSchema`
