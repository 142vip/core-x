# vip-dameng
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { DamengOptions } from '@142vip/data-source'
import { VipDameng } from '@142vip/data-source'

const options: DamengOptions = {
  host: '172.16.202.232',
  port: 5236,
  username: 'SYSDBA',
  password: 'SYSDBA',
  querySql: 'select 1',
}
const vipDameng = new VipDameng()

const data = await vipDameng.getConnectionData(options)
```

## 单元测试

- [vip-clickhouse.spec.ts](../../test/sql/vip-dameng.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
