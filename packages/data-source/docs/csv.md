# CSV

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { CSVOptions } from '@142vip/data-source'
import { VipCsv } from '@142vip/data-source'

const vipCsv = new VipCsv()
const options: CSVOptions = {
  // eslint-disable-next-line node/prefer-global/buffer
  file: Buffer.from('id,name\n1,csv测试', 'utf-8'),
  encode: 'utf-8',
}
const data = await vipCsv.getConnectionData(options)
```

## 单元测试

- [vip-csv.spec.ts](../test/vip-csv.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
