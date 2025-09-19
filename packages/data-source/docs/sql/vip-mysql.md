# vip-mysql
## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { MysqlOptions } from '@142vip/data-source'
import { VipMysql } from '@142vip/data-source'

const options: MysqlOptions = {
  host: '172.16.202.232',
  port: 3309,
  username: 'root',
  password: 'DTStack2022',
  database: 'information_schema',
  querySql: 'select 1',
}

const vipMysql = new VipMysql()
const data = await vipMysql.getConnectionData(options)
```

## 单元测试

- [vip-mysql.spec.ts](../../test/sql/vip-mysql.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
