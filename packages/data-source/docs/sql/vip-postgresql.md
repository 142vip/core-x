# vip-postgresql
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { PostgreSqlOptions } from '@142vip/data-source'
import { VipPostgreSql } from '@142vip/data-source'

const options: PostgreSqlOptions = {
  host: '172.16.202.232',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'postgres',
  querySql: 'select 1',
}

const vipPostgreSql = new VipPostgreSql()
const data = await vipPostgreSql.getConnectionData(options)
```

## 单元测试

- [vip-postgresql.spec.ts](../../test/sql/vip-postgresql.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
