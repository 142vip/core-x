# @142vip/data-source

[![NPM version](https://img.shields.io/npm/v/@142vip/data-source?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/data-source)

**TIPS：没数据源，可视化、数字孪生就是玩单机**

## 介绍

`@142vip/data-source`模块可以用来连接多种数据源，支持从数据源快速获取数据

## 安装

```bash
npm install @142vip/data-source
# 使用pnpm
pnpm i @142vip/data-source
```

### 简单使用

按照数据来源，将数据源分为CSV型、API型、SQL数据库型等类型。

- [CSV](./docs/csv.md)
- API
  - [ALI Gateway API](docs/apis/vip-ali-gateway-api.md)
  - [DTable API](docs/apis/vip-dtable-api.md)
  - [DTStack API](docs/apis/vip-dtstack-api.md)
  - [HTTP API](docs/apis/vip-http-api.md)
- SQL
  - [ClickHouse数据库](docs/sql/vip-clickhouse.md)
  - [达梦数据库](docs/sql/vip-dameng.md)
  - [DB2数据库](docs/sql/vip-ibm-db.md)
  - [KingBase金仓数据库](docs/sql/vip-kingbase.md)
  - [MySQL数据库](docs/sql/vip-mysql.md)
  - [SQL Server数据库](docs/sql/vip-mssql.md)
  - [Oracle数据库](docs/sql/vip-oracle.md)
  - [PostgreSQL数据库](docs/sql/vip-postgresql.md)

### 新增数据源

```ts
import { DataSourceManager } from '@142vip/data-source'

export class MyDataSource extends DataSourceManager {
  // coding xxx
}
```

## 参考

- [aliyun-api-gateway](https://www.npmjs.com/package/aliyun-api-gateway)
- [axios](https://www.npmjs.com/package/axios)
- [clickhouse](https://www.npmjs.com/package/clickhouse)
- [csv-parse](https://www.npmjs.com/package/csv-parse)
- [dmdb](https://www.npmjs.com/package/dmdb)
- [ibm_db](https://www.npmjs.com/package/ibm_db)
- [iconv-lite](https://www.npmjs.com/package/iconv-lite)
- [mssql](https://www.npmjs.com/package/mssql)
- [oracledb](https://www.npmjs.com/package/oracledb)
- [pg](https://www.npmjs.com/package/pg)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
