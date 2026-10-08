import type { HttpApiOptions } from '@142vip/data-source'
import type { Server } from 'node:http'
import { createServer } from 'node:http'
import { VipHttpApi } from '@142vip/data-source'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'

describe('vip-http-api', () => {
  const vipHttpApi = new VipHttpApi()
  let server: Server
  let baseUrl = ''

  beforeAll(async () => {
    server = createServer((request, response) => {
      const status = request.url === '/fail' ? 500 : 200
      response.writeHead(status, { 'content-type': 'application/json' })
      response.end(JSON.stringify({
        success: status === 200,
        data: {
          method: request.method,
          params: {},
        },
      }))
    })
    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', () => resolve())
    })
    const address = server.address()
    if (address == null || typeof address === 'string')
      throw new Error('测试 HTTP 服务没有端口')
    baseUrl = `http://127.0.0.1:${address.port}`
  })

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close(error => error != null ? reject(error) : resolve())
    })
  })

  async function testConnect(options: HttpApiOptions): Promise<void> {
    const response = await vipHttpApi.getConnectionData<HttpApiOptions>(options)
    expect(response.success).toBe(true)
    expect(response.data?.method).toEqual(options.method)
    expect(response.data?.params).toEqual({})
  }

  it('GET / POST / PUT / DELETE 原样带回方法', async () => {
    await testConnect({ url: `${baseUrl}/example`, method: 'GET' })
    await testConnect({ url: `${baseUrl}/example`, method: 'POST', data: {} })
    await testConnect({ url: `${baseUrl}/example`, method: 'PUT', data: {} })
    await testConnect({ url: `${baseUrl}/example`, method: 'DELETE' })
  })

  it('非 200 时返回失败', async () => {
    const response = await vipHttpApi.getConnectionData({
      url: `${baseUrl}/fail`,
      method: 'GET',
    })
    expect(response.success).toBe(false)
  })
})
