[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Entity

# 函数: Entity()

## 调用签名

> **Entity**(`options?`): `ClassDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/entity/Entity.d.ts:6

This decorator is used to mark classes that will be an entity (table or document depend on database type).
Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.

### 参数

#### options?

[`EntityOptions`](../interfaces/EntityOptions.md)

### 返回

`ClassDecorator`

## 调用签名

> **Entity**(`name?`, `options?`): `ClassDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/entity/Entity.d.ts:11

This decorator is used to mark classes that will be an entity (table or document depend on database type).
Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.

### 参数

#### name?

`string`

#### options?

[`EntityOptions`](../interfaces/EntityOptions.md)

### 返回

`ClassDecorator`
