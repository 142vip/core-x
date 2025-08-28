import type { DTStackAPIOptions } from '@142vip/data-source'
import { VipDtStackApi } from '@142vip/data-source'
import { expect } from '@jest/globals'

describe('vip-dtstack-api', () => {
  it('测试GET请求', async () => {
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

    console.log('测试GET请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
  })

  it('测试POST请求', async () => {
    const options: DTStackAPIOptions = {
      url: 'http://api.insight.dtstack.com',
      method: 'POST',
      apiId: 5527,
      appKey: 27183292,
      appSecret: '03d8dc90c19b45c4a9cea78bf83ef983',
      pathParams: 'api/gateway/test/dtstack_pangu_api/demo/order',
      headerParams: { },
      queryParams: {},
      bodyParams: {
        pageNo: 1,
        pageSize: 1,
      },
    }
    const vipDtStackApi = new VipDtStackApi()

    const data = await vipDtStackApi.getConnectionData(options)

    console.log('测试POST请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
  })
})
