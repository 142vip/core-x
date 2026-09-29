[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Admin

# 类: Admin

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:219

The **Admin** class is an internal class that allows convenient access to
the admin functionality and commands for MongoDB.

**ADMIN Cannot directly be instantiated**

## 示例

```ts
import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017')
const admin = client.db().admin()
const dbInfo = await admin.listDatabases()
for (const db of dbInfo.databases) {
  console.log(db.name)
}
```

## 构造函数

### 构造函数

> **new Admin**(): `Admin`

#### 返回

`Admin`

## 方法

### addUser()

> **addUser**(`username`, `passwordOrOptions?`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:258

Add a user to the database

#### 参数

##### username

`string`

The username for the new user

##### passwordOrOptions?

`string` \| [`AddUserOptions`](../interfaces/AddUserOptions.md)

An optional password for the new user, or the options for the command

##### options?

[`AddUserOptions`](../interfaces/AddUserOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### buildInfo()

> **buildInfo**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:232

Retrieve the server build information

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### command()

> **command**(`command`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:226

Execute a command

#### 参数

##### command

[`Document`](../namespaces/BSON/interfaces/Document.md)

The command to execute

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### listDatabases()

> **listDatabases**(`options?`): `Promise`\<[`ListDatabasesResult`](../interfaces/ListDatabasesResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:278

List the available databases

#### 参数

##### options?

[`ListDatabasesOptions`](../interfaces/ListDatabasesOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`ListDatabasesResult`](../interfaces/ListDatabasesResult.md)\>

***

### ping()

> **ping**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:250

Ping the MongoDB server and retrieve results

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### removeUser()

> **removeUser**(`username`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:265

Remove a user from a database

#### 参数

##### username

`string`

The username to remove

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### replSetGetStatus()

> **replSetGetStatus**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:284

Get ReplicaSet status

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### serverInfo()

> **serverInfo**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:238

Retrieve the server build information

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### serverStatus()

> **serverStatus**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:244

Retrieve this db's server status.

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### validateCollection()

> **validateCollection**(`collectionName`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:272

Validate an existing collection

#### 参数

##### collectionName

`string`

The name of the collection to validate.

##### options?

[`ValidateCollectionOptions`](../interfaces/ValidateCollectionOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>
