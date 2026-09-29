[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AutoEncrypter

# 类: AutoEncrypter

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:459

## 构造函数

### 构造函数

> **new AutoEncrypter**(`client`, `options`): `AutoEncrypter`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:460

#### 参数

##### client

[`MongoClient`](MongoClient.md)

##### options

[`AutoEncryptionOptions`](../interfaces/AutoEncryptionOptions.md)

#### 返回

`AutoEncrypter`

## 属性

### cryptSharedLibVersionInfo

> `readonly` **cryptSharedLibVersionInfo**: \{ `version`: `bigint`; `versionStr`: `string`; \} \| `null`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:466

**`Experimental`**

## 方法

### decrypt()

> **decrypt**(`cmd`, `options`, `callback`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:464

#### 参数

##### cmd

[`Document`](../namespaces/BSON/interfaces/Document.md)

##### options

`any`

##### callback

[`Callback`](../type-aliases/Callback.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

#### 返回

`void`

***

### encrypt()

> **encrypt**(`ns`, `cmd`, `options`, `callback`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:463

#### 参数

##### ns

`string`

##### cmd

[`Document`](../namespaces/BSON/interfaces/Document.md)

##### options

`any`

##### callback

[`Callback`](../type-aliases/Callback.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

#### 返回

`void`

***

### init()

> **init**(`cb`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:461

#### 参数

##### cb

[`Callback`](../type-aliases/Callback.md)

#### 返回

`void`

***

### teardown()

> **teardown**(`force`, `callback`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:462

#### 参数

##### force

`boolean`

##### callback

[`Callback`](../type-aliases/Callback.md)

#### 返回

`void`
