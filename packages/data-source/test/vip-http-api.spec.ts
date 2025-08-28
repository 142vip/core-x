import type { HttpApiOptions } from '@142vip/data-source'
import { VipHttpApi } from '@142vip/data-source'
import { expect } from '@jest/globals'

/**
 * 测试用例
 * - http://172.16.202.252:8100/api/easyv-ds/v1/example
 *  - 测试GET请求
 *  - 测试POST请求
 *  - 测试PUT请求
 *  - 测试DELETE请求
 */
describe('vip-http-api', () => {
  it('测试GET请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'GET',
      data: {},
    }
    const vipHttpApi = new VipHttpApi()

    const data = await vipHttpApi.getConnectionData(options)

    console.log('测试GET请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
    expect(data.data.data.method).toEqual('GET')
    expect(data.data.data.params).toEqual({})
    expect(data.data.data.body).toEqual({})
    expect(data.data.data.query).toEqual({})
  })

  it('测试POST请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'POST',
      data: {},
    }
    const vipHttpApi = new VipHttpApi()

    const data = await vipHttpApi.getConnectionData(options)

    console.log('测试POST请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
    expect(data.data.data.method).toEqual('POST')
    expect(data.data.data.params).toEqual({})
    expect(data.data.data.body).toEqual({})
    expect(data.data.data.query).toEqual({})
  })

  it('测试PUT请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'PUT',
      data: {},
    }
    const vipHttpApi = new VipHttpApi()

    const data = await vipHttpApi.getConnectionData(options)

    console.log('测试PUT请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
    expect(data.data.data.method).toEqual('PUT')
    expect(data.data.data.params).toEqual({})
    expect(data.data.data.body).toEqual({})
    expect(data.data.data.query).toEqual({})
  })

  it('测试DELETE请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'DELETE',
      data: {},
    }
    const vipHttpApi = new VipHttpApi()

    const data = await vipHttpApi.getConnectionData(options)

    console.log('测试DELETE请求：', data, JSON.stringify(data))
    expect(data.success).toBe(true)
    expect(data.data.data.method).toEqual('DELETE')
    expect(data.data.data.params).toEqual({})
    expect(data.data.data.body).toEqual({})
    expect(data.data.data.query).toEqual({})
  })
})
