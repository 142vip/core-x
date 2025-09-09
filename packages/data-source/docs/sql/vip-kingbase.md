# vip-kingbase
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { KingBaseOptions } from '@142vip/data-source'
import { VipKingBase } from '@142vip/data-source'

const options: KingBaseOptions = {
  host: '172.16.202.232',
  port: 54321,
  username: 'system',
  password: 'system',
  database: 'test',
  querySql: 'select 1',
}

const vipKingBase = new VipKingBase()
const data = await vipKingBase.getConnectionData(options)
```

## 单元测试

- [vip-kingbase.spec.ts](../../test/sql/vip-kingbase.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
