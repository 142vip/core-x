[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / OneToMany

# 函数: OneToMany()

> **OneToMany**\<`T`\>(`typeFunctionOrTarget`, `inverseSide`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/OneToMany.d.ts:8

A one-to-many relation allows creating the type of relation where Entity1 can have multiple instances of Entity2,
but Entity2 has only one Entity1. Entity2 is the owner of the relationship, and stores the id of Entity1 on its
side of the relation.

## 类型参数

### T

`T`

## 参数

### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

### inverseSide

`string` \| ((`object`) => `any`)

### options?

[`RelationOptions`](../interfaces/RelationOptions.md)

## 返回

`PropertyDecorator`
