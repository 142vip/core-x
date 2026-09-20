# @142vip/data-source

[![NPM version](https://img.shields.io/npm/v/@142vip/data-source?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/data-source)

通用型数据源：SQL / 文档库、HTTP API、CSV 的统一连接与解析。

## 安装

按需安装对应数据库驱动（见 `package.json` peerDependencies）。

```shell
# npm
npm install @142vip/data-source

# pnpm
pnpm add @142vip/data-source
```

## 功能

- [x] SQL / 文档库：`VipMysql`、`VipPostgreSql`、`VipOracle`、`VipSqlServer`、`VipMongo`、`VipClickhouse`
- [x] API 类：`VipHttpApi` `VipAliGatewayApi` `VipDTableApi` `VipDtStackApi`
- [x] `VipCsv` CSV 解析
- [x] 统一 `DataSourceParseResponse` 返回结构
- [x] `DataSourceManager` 接口（表/库元数据约定）

## 配置

各连接器使用各自的 `*Options`（多数 SQL 类继承 `DataSourceConnectionOptions`：`host` `port` `username` `password` `querySql`）。

## 使用

```ts
import { VipMysql } from '@142vip/data-source'

const mysql = new VipMysql()
const result = await mysql.getConnectionData({
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'secret',
  database: 'demo',
  querySql: 'SELECT 1 AS n',
})

if (result.success) {
  console.log(result.data)
}
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/data-source
```

## 参考

- [@142vip/data-source](https://www.npmjs.com/package/@142vip/data-source)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
