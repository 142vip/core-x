# vip-dameng
## 安装

```bash
npm install @142vip/data-source
# 使用pnpm
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

```ts
``

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
