# dtable-api

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { DTableAPIOptions } from '@142vip/data-source'
import { VipDTableApi } from '@142vip/data-source'

const options: DTableAPIOptions = {
  url: 'https://api.dtable.cn',
  method: 'GET',
  apiId: 5398,
  appKey: 27183282,
  appSecret: '65d6491c74414cfea365d2de6287836f',
  pathParams: 'api/gateway/test/product_show/fq2',
  headerParams: {},
  queryParams: {
    wd: 1,
  },
  bodyParams: {},
}
const vipDTableApi = new VipDTableApi()
const data = await vipDTableApi.getConnectionData(options)
```

## 单元测试

- [vip-dtable-api.spec.ts](../../test/vip-dtable-api.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
