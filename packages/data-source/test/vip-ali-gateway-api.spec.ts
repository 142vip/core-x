import type { AliGatewayApiOptions } from '@142vip/data-source'
import { VipAliGatewayApi } from '@142vip/data-source'
import { expect } from '@jest/globals'

describe('vip-ali-gateway-api', () => {
  const vipAliGatewayApi = new VipAliGatewayApi()
  it('测试GET请求', async () => {
    const options: AliGatewayApiOptions = {
      appKey: '203996391',
      appSecret: 'yVBekTjr2u3qAtFOFLgkIVY1Jk3LCyNi',
      url: 'https://baidu.com',
      method: 'get',
      bodyParams: {},
      headerParams: {},
    }

    const response = await vipAliGatewayApi.getConnectionData(options)

    console.log('测试GET请求：', response)
    expect(response.success).toBe(false)
  })

  it('测试POST请求', async () => {
    const options: AliGatewayApiOptions = {
      appKey: '203996391',
      appSecret: 'yVBekTjr2u3qAtFOFLgkIVY1Jk3LCyNi',
      url: 'https://baidu.com',
      method: 'post',
      bodyParams: {},
      headerParams: {},
    }

    const response = await vipAliGatewayApi.getConnectionData(options)

    console.log('测试POST请求：', response)
    expect(response.success).toBe(false)
  })
})
