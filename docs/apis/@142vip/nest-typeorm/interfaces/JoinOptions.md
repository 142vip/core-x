[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / JoinOptions

# ~~接口: JoinOptions~~

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:35

Used to specify what entity relations should be loaded.

Example:
 const options: JoinOptions = \{
    alias: "photo",
    leftJoin: \{
        author: "photo.author",
        categories: "categories",
        user: "categories.user",
        profile: "user.profile"
    \},
    innerJoin: \{
        author: "photo.author",
        categories: "categories",
        user: "categories.user",
        profile: "user.profile"
    \},
    leftJoinAndSelect: \{
        author: "photo.author",
        categories: "categories",
        user: "categories.user",
        profile: "user.profile"
    \},
    innerJoinAndSelect: \{
        author: "photo.author",
        categories: "categories",
        user: "categories.user",
        profile: "user.profile"
    \}
\};

## 已被弃用

## 属性

### ~~alias~~

> **alias**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:39

Alias of the main entity.

***

### ~~innerJoin?~~

> `optional` **innerJoin?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:73

Object where each key represents the INNER JOIN alias,
and the corresponding value represents the relation path.

This method does not select the columns of the joined table.

#### 索引签名

\[`key`: `string`\]: `string`

***

### ~~innerJoinAndSelect?~~

> `optional` **innerJoinAndSelect?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:55

Object where each key represents the INNER JOIN alias,
and the corresponding value represents the relation path.

The columns of the joined table are included in the selection.

#### 索引签名

\[`key`: `string`\]: `string`

***

### ~~leftJoin?~~

> `optional` **leftJoin?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:64

Object where each key represents the LEFT JOIN alias,
and the corresponding value represents the relation path.

This method does not select the columns of the joined table.

#### 索引签名

\[`key`: `string`\]: `string`

***

### ~~leftJoinAndSelect?~~

> `optional` **leftJoinAndSelect?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/JoinOptions.d.ts:46

Object where each key represents the LEFT JOIN alias,
and the corresponding value represents the relation path.

The columns of the joined table are included in the selection.

#### 索引签名

\[`key`: `string`\]: `string`
