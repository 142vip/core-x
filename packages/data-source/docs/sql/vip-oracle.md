# vip-oracle
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { OracleOptions } from '@142vip/data-source'
import { VipOracle } from '@142vip/data-source'

const options: OracleOptions = {
  host: '172.16.202.232',
  port: 1521,
  username: 'system',
  password: 'helowin',
  sid: 'helowin',
  querySql: 'select 1',
}

const vipOracle = new VipOracle()
const data = await vipOracle.getConnectionData(options)
```

## 单元测试

- [vip-oracle.spec.ts](../../test/sql/vip-oracle.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
