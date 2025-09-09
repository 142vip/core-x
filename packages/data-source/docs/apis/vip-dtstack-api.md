# vip-dtstack-api

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { DTStackAPIOptions } from '@142vip/data-source'
import { VipDtStackApi } from '@142vip/data-source'

const options: DTStackAPIOptions = {
  url: 'http://api.insight.dtstack.com',
  // http://api.insight.dtstack.com/api/gateway/test/product_show/fq2?wd=1
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
const vipDtStackApi = new VipDtStackApi()
const data = await vipDtStackApi.getConnectionData(options)
````

## 单元测试

- [vip-dtstack-api.spec.ts](../../test/vip-dtstack-api.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
