[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Brackets

# 类: Brackets

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/Brackets.d.ts:6

Syntax sugar.
Allows to use brackets in WHERE expressions for better syntax.

## theme_extended_by

- [`NotBrackets`](NotBrackets.md)

## 构造函数

### 构造函数

> **new Brackets**(`whereFactory`): `Brackets`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/Brackets.d.ts:15

Given WHERE query builder that will build a WHERE expression that will be taken into brackets.

#### 参数

##### whereFactory

(`qb`) => `any`

#### 返回

`Brackets`

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/Brackets.d.ts:7

***

### whereFactory

> **whereFactory**: (`qb`) => `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/Brackets.d.ts:11

WHERE expression that will be taken into brackets.

#### 参数

##### qb

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md)

#### 返回

`any`
