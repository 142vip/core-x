# vip-ibm-db
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { IbmDBOptions } from '@142vip/data-source'
import { VipIbmDB } from '@142vip/data-source'

const options: IbmDBOptions = {
  host: '172.16.202.232',
  port: 50000,
  username: 'DB2INST1',
  password: 'Easyv.cloud',
  database: 'easyvdb',
  querySql: 'select 1',
}

const vipIbmDB = new VipIbmDB()
const data = await vipIbmDB.getConnectionData(options)
```

## 单元测试

- [vip-ibm-db.spec.ts](../../test/sql/vip-ibm-db.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
