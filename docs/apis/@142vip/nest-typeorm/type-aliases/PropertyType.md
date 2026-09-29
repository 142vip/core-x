[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / PropertyType

# 类型别名: PropertyType\<Type, Property\>

> **PropertyType**\<`Type`, `Property`\> = `string` *extends* `Property` ? `unknown` : `Property` *extends* keyof `Type` ? `Type`\[`Property`\] : `Property` *extends* `` `${number}` `` ? `Type` *extends* `ReadonlyArray`\<infer ArrayType\> ? `ArrayType` : `unknown` : `Property` *extends* `` `${infer Key}.${infer Rest}` `` ? `Key` *extends* `` `${number}` `` ? `Type` *extends* `ReadonlyArray`\<infer ArrayType\> ? `PropertyType`\<`ArrayType`, `Rest`\> : `unknown` : `Key` *extends* keyof `Type` ? `Type`\[`Key`\] *extends* `Map`\<`string`, infer MapType\> ? `MapType` : `PropertyType`\<`Type`\[`Key`\], `Rest`\> : `unknown` : `unknown`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4370

## 类型参数

### Type

`Type`

### Property

`Property` *extends* `string`
