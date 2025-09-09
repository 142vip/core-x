# HTTP API

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

```ts
import type { HttpApiOptions } from '@142vip/data-source'
import { VipHttpApi } from '@142vip/data-source'

const options: HttpApiOptions = {
  url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
  method: 'GET',
  data: {},
}

const vipHttpApi = new VipHttpApi()
const data = await vipHttpApi.getConnectionData<HttpApiOptions>(options)
```

## 单元测试

- [vip-http-api.spec.ts](../../test/vip-http-api.spec.ts)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
