[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / Decimal128

# 类: Decimal128

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:287

A class representation of the BSON Decimal128 type.

## theme_extends

- [`BSONValue`](BSONValue.md)

## 构造函数

### 构造函数

> **new Decimal128**(`bytes`): `Decimal128`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:294

#### 参数

##### bytes

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

a buffer containing the raw Decimal128 bytes in little endian order,
               or a string representation as returned by .toString()

#### 返回

`Decimal128`

#### 重写了

[`BSONValue`](BSONValue.md).[`constructor`](BSONValue.md#constructor)

## 属性

### bytes

> `readonly` **bytes**: `Uint8Array`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:289

## 访问器

### \_bsontype

#### Getter 签名

> **get** **\_bsontype**(): `"Decimal128"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:288

##### 返回

`"Decimal128"`

#### 重写了

[`BSONValue`](BSONValue.md).[`_bsontype`](BSONValue.md#bsontype)

## 方法

### inspect()

> **inspect**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:304

#### 返回

`string`

#### 重写了

[`BSONValue`](BSONValue.md).[`inspect`](BSONValue.md#inspect)

***

### toJSON()

> **toJSON**(): [`Decimal128Extended`](../interfaces/Decimal128Extended.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:303

#### 返回

[`Decimal128Extended`](../interfaces/Decimal128Extended.md)

***

### toString()

> **toString**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:302

Create a string representation of the raw Decimal128 value

#### 返回

`string`

***

### fromString()

> `static` **fromString**(`representation`): `Decimal128`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:300

Create a Decimal128 instance from a string representation

#### 参数

##### representation

`string`

a numeric string representation.

#### 返回

`Decimal128`
