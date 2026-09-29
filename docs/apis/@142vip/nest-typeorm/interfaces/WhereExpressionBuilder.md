[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / WhereExpressionBuilder

# 接口: WhereExpressionBuilder

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:6

Query Builders can implement this interface to support where expression

## theme_extended_by

- [`WhereExpression`](WhereExpression.md)

## 方法

### andWhere()

#### 调用签名

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:46

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

`string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:51

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`Brackets`](../classes/Brackets.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:56

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:61

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)[]

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **andWhere**(`subQuery`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:66

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### subQuery

(`qb`) => `string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

***

### andWhereInIds()

> **andWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:111

Adds new AND WHERE with conditions for the given ids.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`

***

### orWhere()

#### 调用签名

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:71

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

`string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:76

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`Brackets`](../classes/Brackets.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:81

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:86

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)[]

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **orWhere**(`subQuery`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:91

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

##### 参数

###### subQuery

(`qb`) => `string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

***

### orWhereInIds()

> **orWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:120

Adds new OR WHERE with conditions for the given ids.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`

***

### where()

#### 调用签名

> **where**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:13

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

##### 参数

###### where

`string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **where**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:20

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`Brackets`](../classes/Brackets.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **where**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:27

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **where**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:34

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

##### 参数

###### where

[`ObjectLiteral`](ObjectLiteral.md)[]

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **where**(`subQuery`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:41

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

##### 参数

###### subQuery

(`qb`) => `string`

###### parameters?

[`ObjectLiteral`](ObjectLiteral.md)

##### 返回

`this`

***

### whereInIds()

> **whereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:102

Sets WHERE condition in the query builder with a condition for the given ids.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`
