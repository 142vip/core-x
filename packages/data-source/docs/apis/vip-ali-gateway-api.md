# ali-gateway-api

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { AliGatewayAPIOptions } from '@142vip/data-source'
import { VipAliGatewayApi } from '@142vip/data-source'

const options: AliGatewayAPIOptions = {
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
const vipAliGatewayApi = new VipAliGatewayApi()
const data = await vipAliGatewayApi.getConnectionData(options)
```

## 单元测试

- [vip-ali-gateway-api](../../test/vip-ali-gateway-api.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
