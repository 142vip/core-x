[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / WhereExpression

# ~~接口: WhereExpression~~

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/WhereExpressionBuilder.d.ts:125

## 已被弃用

Use `WhereExpressionBuilder` instead

## theme_extends

- [`WhereExpressionBuilder`](WhereExpressionBuilder.md)

## 方法

### ~~andWhere()~~

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhere`](WhereExpressionBuilder.md#andwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhere`](WhereExpressionBuilder.md#andwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhere`](WhereExpressionBuilder.md#andwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhere`](WhereExpressionBuilder.md#andwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhere`](WhereExpressionBuilder.md#andwhere)

***

### ~~andWhereInIds()~~

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

#### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`andWhereInIds`](WhereExpressionBuilder.md#andwhereinids)

***

### ~~orWhere()~~

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhere`](WhereExpressionBuilder.md#orwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhere`](WhereExpressionBuilder.md#orwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhere`](WhereExpressionBuilder.md#orwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhere`](WhereExpressionBuilder.md#orwhere)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhere`](WhereExpressionBuilder.md#orwhere)

***

### ~~orWhereInIds()~~

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

#### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`orWhereInIds`](WhereExpressionBuilder.md#orwhereinids)

***

### ~~where()~~

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`where`](WhereExpressionBuilder.md#where)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`where`](WhereExpressionBuilder.md#where)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`where`](WhereExpressionBuilder.md#where)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`where`](WhereExpressionBuilder.md#where)

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

##### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`where`](WhereExpressionBuilder.md#where)

***

### ~~whereInIds()~~

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

#### 继承自

[`WhereExpressionBuilder`](WhereExpressionBuilder.md).[`whereInIds`](WhereExpressionBuilder.md#whereinids)
