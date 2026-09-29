[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FileLogger

# 类: FileLogger

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/FileLogger.d.ts:9

Performs logging of the events in TypeORM.
This version of logger logs everything into ormlogs.log file.

## theme_extends

- [`AbstractLogger`](AbstractLogger.md)

## 构造函数

### 构造函数

> **new FileLogger**(`options?`, `fileLoggerOptions?`): `FileLogger`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/FileLogger.d.ts:11

#### 参数

##### options?

[`LoggerOptions`](../type-aliases/LoggerOptions.md)

##### fileLoggerOptions?

[`FileLoggerOptions`](../type-aliases/FileLoggerOptions.md)

#### 返回

`FileLogger`

#### 重写了

[`AbstractLogger`](AbstractLogger.md).[`constructor`](AbstractLogger.md#constructor)

## 属性

### options?

> `protected` `optional` **options?**: [`LoggerOptions`](../type-aliases/LoggerOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:5

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`options`](AbstractLogger.md#options)

## 方法

### isLogEnabledFor()

> `protected` **isLogEnabledFor**(`type?`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:35

Check is logging for level or message type is enabled.

#### 参数

##### type?

`"schema"` \| `"query"` \| `"error"` \| `"warn"` \| `"info"` \| `"log"` \| `"migration"` \| `"query-error"` \| `"query-slow"` \| `"schema-build"`

#### 返回

`boolean`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`isLogEnabledFor`](AbstractLogger.md#islogenabledfor)

***

### log()

> **log**(`level`, `message`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:31

Perform logging using given logger, or by default to the console.
Log has its own level and message.

#### 参数

##### level

`"warn"` \| `"info"` \| `"log"`

##### message

`any`

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`log`](AbstractLogger.md#log)

***

### logMigration()

> **logMigration**(`message`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:26

Logs events from the migration run process.

#### 参数

##### message

`string`

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`logMigration`](AbstractLogger.md#logmigration)

***

### logQuery()

> **logQuery**(`query`, `parameters?`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:10

Logs query and parameters used in it.

#### 参数

##### query

`string`

##### parameters?

`any`[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`logQuery`](AbstractLogger.md#logquery)

***

### logQueryError()

> **logQueryError**(`error`, `query`, `parameters?`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:14

Logs query that is failed.

#### 参数

##### error

`string`

##### query

`string`

##### parameters?

`any`[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`logQueryError`](AbstractLogger.md#logqueryerror)

***

### logQuerySlow()

> **logQuerySlow**(`time`, `query`, `parameters?`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:18

Logs query that is slow.

#### 参数

##### time

`number`

##### query

`string`

##### parameters?

`any`[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`logQuerySlow`](AbstractLogger.md#logqueryslow)

***

### logSchemaBuild()

> **logSchemaBuild**(`message`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:22

Logs events from the schema build process.

#### 参数

##### message

`string`

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`logSchemaBuild`](AbstractLogger.md#logschemabuild)

***

### prepareLogMessages()

> `protected` **prepareLogMessages**(`logMessage`, `options?`, `queryRunner?`): [`LogMessage`](../type-aliases/LogMessage.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:43

Prepare and format log messages

#### 参数

##### logMessage

`string` \| `number` \| [`LogMessage`](../type-aliases/LogMessage.md) \| (`string` \| `number` \| [`LogMessage`](../type-aliases/LogMessage.md))[]

##### options?

`Partial`\<[`PrepareLogMessagesOptions`](../type-aliases/PrepareLogMessagesOptions.md)\>

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

[`LogMessage`](../type-aliases/LogMessage.md)[]

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`prepareLogMessages`](AbstractLogger.md#preparelogmessages)

***

### stringifyParams()

> `protected` **stringifyParams**(`parameters`): `string` \| `any`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:48

Converts parameters to a string.
Sometimes parameters can have circular objects and therefor we are handle this case too.

#### 参数

##### parameters

`any`[]

#### 返回

`string` \| `any`[]

#### 继承自

[`AbstractLogger`](AbstractLogger.md).[`stringifyParams`](AbstractLogger.md#stringifyparams)

***

### write()

> `protected` **write**(`strings`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/FileLogger.d.ts:19

Writes given strings into the log file.

#### 参数

##### strings

`string` \| `string`[]

#### 返回

`void`

***

### writeLog()

> `protected` **writeLog**(`level`, `logMessage`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/FileLogger.d.ts:15

Write log to specific output.

#### 参数

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### logMessage

[`LogMessage`](../type-aliases/LogMessage.md) \| [`LogMessage`](../type-aliases/LogMessage.md)[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`

#### 重写了

[`AbstractLogger`](AbstractLogger.md).[`writeLog`](AbstractLogger.md#writelog)
