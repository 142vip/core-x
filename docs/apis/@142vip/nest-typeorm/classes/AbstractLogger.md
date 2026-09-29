[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AbstractLogger

# 抽象 类: AbstractLogger

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:4

Performs logging of the events in TypeORM.

## theme_extended_by

- [`AdvancedConsoleLogger`](AdvancedConsoleLogger.md)
- [`FormattedConsoleLogger`](FormattedConsoleLogger.md)
- [`SimpleConsoleLogger`](SimpleConsoleLogger.md)
- [`FileLogger`](FileLogger.md)

## 实现

- [`Logger`](../interfaces/Logger.md)

## 构造函数

### 构造函数

> **new AbstractLogger**(`options?`): `AbstractLogger`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:6

#### 参数

##### options?

[`LoggerOptions`](../type-aliases/LoggerOptions.md)

#### 返回

`AbstractLogger`

## 属性

### options?

> `protected` `optional` **options?**: [`LoggerOptions`](../type-aliases/LoggerOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:5

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`log`](../interfaces/Logger.md#log)

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`logMigration`](../interfaces/Logger.md#logmigration)

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`logQuery`](../interfaces/Logger.md#logquery)

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`logQueryError`](../interfaces/Logger.md#logqueryerror)

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`logQuerySlow`](../interfaces/Logger.md#logqueryslow)

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

#### 实现了

[`Logger`](../interfaces/Logger.md).[`logSchemaBuild`](../interfaces/Logger.md#logschemabuild)

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

***

### writeLog()

> `abstract` `protected` **writeLog**(`level`, `message`, `queryRunner?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/logger/AbstractLogger.d.ts:39

Write log to specific output.

#### 参数

##### level

[`LogLevel`](../type-aliases/LogLevel.md)

##### message

`string` \| `number` \| [`LogMessage`](../type-aliases/LogMessage.md) \| (`string` \| `number` \| [`LogMessage`](../type-aliases/LogMessage.md))[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`void`
