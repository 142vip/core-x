[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ConnectionOptionsReader

# 类: ConnectionOptionsReader

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:5

Reads connection options from the ormconfig.

## 构造函数

### 构造函数

> **new ConnectionOptionsReader**(`options?`): `ConnectionOptionsReader`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:17

#### 参数

##### options?

###### configName?

`string`

Filename of the ormconfig configuration. By default its equal to "ormconfig".

###### root?

`string`

Directory where ormconfig should be read from.
By default its your application root (where your app package.json is located).

#### 返回

`ConnectionOptionsReader`

## 属性

### options?

> `protected` `optional` **options?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:6

#### configName?

> `optional` **configName?**: `string`

Filename of the ormconfig configuration. By default its equal to "ormconfig".

#### root?

> `optional` **root?**: `string`

Directory where ormconfig should be read from.
By default its your application root (where your app package.json is located).

## 访问器

### baseConfigName

#### Getter 签名

> **get** `protected` **baseConfigName**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:62

Gets configuration file name.

##### 返回

`string`

***

### baseDirectory

#### Getter 签名

> **get** `protected` **baseDirectory**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:58

Gets directory where configuration file should be located.

##### 返回

`string`

***

### baseFilePath

#### Getter 签名

> **get** `protected` **baseFilePath**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:54

Gets directory where configuration file should be located and configuration file name.

##### 返回

`string`

## 方法

### all()

> **all**(): `Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:31

Returns all connection options read from the ormconfig.

#### 返回

`Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]\>

***

### get()

> **get**(`name`): `Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:36

Gets a connection with a given name read from ormconfig.
If connection with such name would not be found then it throw error.

#### 参数

##### name

`string`

#### 返回

`Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)\>

***

### has()

> **has**(`name`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:40

Checks if there is a TypeORM configuration file.

#### 参数

##### name

`string`

#### 返回

`Promise`\<`boolean`\>

***

### load()

> `protected` **load**(): `Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[] \| `undefined`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:46

Loads all connection options from a configuration file.

todo: get in count NODE_ENV somehow

#### 返回

`Promise`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[] \| `undefined`\>

***

### normalizeConnectionOptions()

> `protected` **normalizeConnectionOptions**(`connectionOptions`): [`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/ConnectionOptionsReader.d.ts:50

Normalize connection options.

#### 参数

##### connectionOptions

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md) \| [`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]

#### 返回

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]
