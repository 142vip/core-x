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
  const vipHttpApi = new VipHttpApi()

  /**
   * 测试连接
   * @param options
   */
  async function testConnect(options: HttpApiOptions): Promise<void> {
    const response = await vipHttpApi.getConnectionData<HttpApiOptions>(options)

    console.log(`测试${options.method}请求：`, JSON.stringify(response))
    expect(response.success).toBe(true)
    expect(response.data?.method).toEqual(options.method)
    expect(response.data?.params).toEqual({})
  }

  it('测试GET请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'GET',
      data: {},
    }

    await testConnect(options)
  })

  it('测试POST请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'POST',
      data: {},
    }

    await testConnect(options)
  })

  it('测试PUT请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'PUT',
      data: {},
    }

    await testConnect(options)
  })

  it('测试DELETE请求', async () => {
    const options: HttpApiOptions = {
      url: 'http://172.16.202.252:8100/api/easyv-ds/v1/example',
      method: 'DELETE',
      data: {},
    }

    await testConnect(options)
  })
})
