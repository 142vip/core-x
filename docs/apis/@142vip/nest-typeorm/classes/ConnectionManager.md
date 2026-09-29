[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ConnectionManager

# ~~类: ConnectionManager~~

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionManager.d.ts:9

ConnectionManager is used to store and manage multiple orm connections.
It also provides useful factory methods to simplify connection creation.

## 已被弃用

## 构造函数

### 构造函数

> **new ConnectionManager**(): `ConnectionManager`

#### 返回

`ConnectionManager`

## 访问器

### ~~connections~~

#### Getter 签名

> **get** **connections**(): [`DataSource`](DataSource.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionManager.d.ts:13

List of connections registered in this connection manager.

##### 返回

[`DataSource`](DataSource.md)[]

## 方法

### ~~create()~~

> **create**(`options`): [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionManager.d.ts:32

Creates a new connection based on the given connection options and registers it in the manager.
Connection won't be established, you'll need to manually call connect method to establish connection.

#### 参数

##### options

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

#### 返回

[`DataSource`](DataSource.md)

***

### ~~get()~~

> **get**(`name?`): [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionManager.d.ts:27

Gets registered connection with the given name.
If connection name is not given then it will get a default connection.
Throws error if connection with the given name was not found.

#### 参数

##### name?

`string`

#### 返回

[`DataSource`](DataSource.md)

***

### ~~has()~~

> **has**(`name`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionManager.d.ts:21

Checks if connection with the given name exist in the manager.

#### 参数

##### name

`string`

#### 返回

`boolean`
