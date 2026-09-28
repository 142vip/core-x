[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ValueTransformer

# 接口: ValueTransformer

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ValueTransformer.d.ts:4

Interface for objects that deal with (un)marshalling data.

## 方法

### from()

> **from**(`value`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ValueTransformer.d.ts:12

Used to unmarshal data when reading from the database.

#### 参数

##### value

`any`

#### 返回

`any`

***

### to()

> **to**(`value`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ValueTransformer.d.ts:8

Used to marshal data when writing to the database.

#### 参数

##### value

`any`

#### 返回

`any`
