[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / Code

# 类: Code

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:236

A class representation of the BSON Code type.

## theme_extends

- [`BSONValue`](BSONValue.md)

## 构造函数

### 构造函数

> **new Code**(`code`, `scope?`): `Code`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:244

#### 参数

##### code

`string` \| `Function`

a string or function.

##### scope?

[`Document`](../interfaces/Document.md) \| `null`

an optional scope for the function.

#### 返回

`Code`

#### 重写了

[`BSONValue`](BSONValue.md).[`constructor`](BSONValue.md#constructor)

## 属性

### code

> **code**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:238

***

### scope

> **scope**: [`Document`](../interfaces/Document.md) \| `null`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:239

## 访问器

### \_bsontype

#### Getter 签名

> **get** **\_bsontype**(): `"Code"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:237

##### 返回

`"Code"`

#### 重写了

[`BSONValue`](BSONValue.md).[`_bsontype`](BSONValue.md#bsontype)

## 方法

### inspect()

> **inspect**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:249

#### 返回

`string`

#### 重写了

[`BSONValue`](BSONValue.md).[`inspect`](BSONValue.md#inspect)

***

### toJSON()

> **toJSON**(): `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:245

#### 返回

`object`

##### code

> **code**: `string`

##### scope?

> `optional` **scope?**: [`Document`](../interfaces/Document.md)
