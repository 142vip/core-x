# vip-clickhouse
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-sourcee
```

## 使用

```ts
import type { ClickHouseOptions } from '@142vip/data-source'
import { VipClickhouse } from '@142vip/data-source'

const options: ClickHouseOptions = {
  host: '172.16.202.232',
  port: 8123,
  username: 'easyv',
  password: 'Easyv123',
  database: 'default',
  querySql: 'select 1',
}
const vipClickhouse = new VipClickhouse()

const data = await vipClickhouse.getConnectionData(options)
```

## 单元测试

- [vip-clickhouse.spec.ts](../../test/sql/vip-clickhouse.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
