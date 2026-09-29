[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ManyToMany

# 函数: ManyToMany()

## 调用签名

> **ManyToMany**\<`T`\>(`typeFunctionOrTarget`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/ManyToMany.d.ts:8

Many-to-many is a type of relationship when Entity1 can have multiple instances of Entity2, and Entity2 can have
multiple instances of Entity1. To achieve it, this type of relation creates a junction table, where it storage
entity1 and entity2 ids. This is owner side of the relationship.

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

> **ManyToMany**\<`T`\>(`typeFunctionOrTarget`, `inverseSide?`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/ManyToMany.d.ts:14

Many-to-many is a type of relationship when Entity1 can have multiple instances of Entity2, and Entity2 can have
multiple instances of Entity1. To achieve it, this type of relation creates a junction table, where it storage
entity1 and entity2 ids. This is owner side of the relationship.

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
