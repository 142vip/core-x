# vip-mssql
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { SqlServerOptions } from '@142vip/data-source'
import { VipSqlServer } from '@142vip/data-source'

const options: SqlServerOptions = {
  host: '172.16.202.232',
  port: 1433,
  username: 'sa',
  password: 'YourStrong@Passw0rd',
  database: 'master',
  querySql: 'select 1',
}

const vipSqlServer = new VipSqlServer()
const data = await vipSqlServer.getConnectionData(options)
```

## 单元测试

- [vip-mssql.spec.ts](../../test/sql/vip-mssql.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
