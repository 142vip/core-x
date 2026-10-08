# HTTP API

## 安装

```bash
# npm
npm install @142vip/data-source
# pnpm
pnpm i @142vip/data-source
```

## 使用

请求经 `@142vip/axios` 的 `createVipAxios()` 发出。未传 `validateStatus` 时非 2xx 不抛错，`HttpStatus.OK` 返回响应体，否则 `{ success: false }`。

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

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
