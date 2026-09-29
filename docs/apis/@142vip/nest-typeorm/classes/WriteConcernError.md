[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / WriteConcernError

# 类: WriteConcernError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5448

An error representing a failure by the server to apply the requested write concern to the bulk operation.

## 构造函数

### 构造函数

> **new WriteConcernError**(`error`): `WriteConcernError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5449

#### 参数

##### error

[`WriteConcernErrorData`](../interfaces/WriteConcernErrorData.md)

#### 返回

`WriteConcernError`

## 访问器

### code

#### Getter 签名

> **get** **code**(): `number` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5451

Write concern error code.

##### 返回

`number` \| `undefined`

***

### errInfo

#### Getter 签名

> **get** **errInfo**(): [`Document`](../namespaces/BSON/interfaces/Document.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5455

Write concern error info.

##### 返回

[`Document`](../namespaces/BSON/interfaces/Document.md) \| `undefined`

***

### errmsg

#### Getter 签名

> **get** **errmsg**(): `string` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5453

Write concern error message.

##### 返回

`string` \| `undefined`

## 方法

### toJSON()

> **toJSON**(): [`WriteConcernErrorData`](../interfaces/WriteConcernErrorData.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5456

#### 返回

[`WriteConcernErrorData`](../interfaces/WriteConcernErrorData.md)

***

### toString()

> **toString**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5457

#### 返回

`string`
