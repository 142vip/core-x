[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / JoinTableOptions

# 接口: JoinTableOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:5

Describes join table options.

## 属性

### database?

> `optional` **database?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:23

Database where join table will be created.
Works only in some databases (like mysql and mssql).

***

### inverseJoinColumn?

> `optional` **inverseJoinColumn?**: [`JoinColumnOptions`](JoinColumnOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:18

Second (inverse) column of the join table.

***

### joinColumn?

> `optional` **joinColumn?**: [`JoinColumnOptions`](JoinColumnOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:14

First column of the join table.

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:10

Name of the table that will be created to store values of the both tables (join table).
By default is auto generated.

***

### schema?

> `optional` **schema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:28

Schema where join table will be created.
Works only in some databases (like postgres and mssql).

***

### synchronize?

> `optional` **synchronize?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/JoinTableOptions.d.ts:34

Indicates if schema synchronization is enabled or disabled junction table.
If it will be set to false then schema sync will and migrations ignores junction table.
By default schema synchronization is enabled.
