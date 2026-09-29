[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / OneToOne

# 函数: OneToOne()

## 调用签名

> **OneToOne**\<`T`\>(`typeFunctionOrTarget`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/OneToOne.d.ts:7

One-to-one relation allows the creation of a direct relation between two entities. Entity1 has only one Entity2.
Entity1 is the owner of the relationship, and stores Entity2 id on its own side.

### 类型参数

#### T

`T`

### 参数

#### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

#### options?

[`RelationOptions`](../interfaces/RelationOptions.md)

### 返回

`PropertyDecorator`

## 调用签名

> **OneToOne**\<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/OneToOne.d.ts:12

One-to-one relation allows the creation of a direct relation between two entities. Entity1 has only one Entity2.
Entity1 is the owner of the relationship, and stores Entity2 id on its own side.

### 类型参数

#### T

`T`

### 参数

#### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

#### inverseSide?

`string` \| ((`object`) => `any`)

#### options?

[`RelationOptions`](../interfaces/RelationOptions.md)

### 返回

`PropertyDecorator`
