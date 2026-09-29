[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AlternativeType

# 类型别名: AlternativeType\<T\>

> **AlternativeType**\<`T`\> = `T` *extends* `ReadonlyArray`\<infer U\> ? `T` \| [`RegExpOrString`](RegExpOrString.md)\<`U`\> : [`RegExpOrString`](RegExpOrString.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:396

It is possible to search using alternative types in mongodb e.g.
string types can be searched using a regex in mongo
array types can be searched using their element type

## 类型参数

### T

`T`
