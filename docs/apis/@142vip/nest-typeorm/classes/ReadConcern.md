[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ReadConcern

# 类: ReadConcern

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4403

The MongoDB ReadConcern, which allows for control of the consistency and isolation properties
of the data read from replica sets and replica set shards.

## 参阅

https://www.mongodb.com/docs/manual/reference/read-concern/index.html

## 构造函数

### 构造函数

> **new ReadConcern**(`level`): `ReadConcern`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4406

Constructs a ReadConcern from the read concern level.

#### 参数

##### level

[`ReadConcernLevel`](../type-aliases/ReadConcernLevel.md)

#### 返回

`ReadConcern`

## 属性

### level

> **level**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4404

## 访问器

### AVAILABLE

#### Getter 签名

> **get** `static` **AVAILABLE**(): `"available"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4417

##### 返回

`"available"`

***

### LINEARIZABLE

#### Getter 签名

> **get** `static` **LINEARIZABLE**(): `"linearizable"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4418

##### 返回

`"linearizable"`

***

### MAJORITY

#### Getter 签名

> **get** `static` **MAJORITY**(): `"majority"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4416

##### 返回

`"majority"`

***

### SNAPSHOT

#### Getter 签名

> **get** `static` **SNAPSHOT**(): `"snapshot"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4419

##### 返回

`"snapshot"`

## 方法

### toJSON()

> **toJSON**(): [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4420

#### 返回

[`Document`](../namespaces/BSON/interfaces/Document.md)

***

### fromOptions()

> `static` **fromOptions**(`options?`): `ReadConcern` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4412

Construct a ReadConcern given an options object.

#### 参数

##### options?

The options object from which to extract the write concern.

###### level?

[`ReadConcernLevel`](../type-aliases/ReadConcernLevel.md)

###### readConcern?

[`ReadConcernLike`](../type-aliases/ReadConcernLike.md)

#### 返回

`ReadConcern` \| `undefined`
