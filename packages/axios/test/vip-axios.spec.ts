import { AxiosFactory, createVipAxios, HttpMethod, HttpStatus, vipAxios } from '@142vip/axios'
import { describe, expect, it } from '@jest/globals'

/**
 * HTTP 测试
 * - 用例：https://jsonplaceholder.typicode.com/
 */
describe('测试vip-axios实例', () => {
  it('测试实例 - 函数', async () => {
    const userConfig = {}
    const vipAxios = createVipAxios(userConfig)

    // 判断两种方式拿到的实例得配置是否一致
    expect(vipAxios.getConfig()).toEqual(userConfig)
  })

  it('测试实例 - 构造函数', async () => {
    const userConfig = {}
    const vipAxios = new AxiosFactory(userConfig).createAxiosInstance()
    expect(vipAxios.getConfig()).toEqual(userConfig)
  })

  it('测试实例的默认配置 - 函数', async () => {
    const vipAxios = createVipAxios()

    expect(vipAxios.getConfig()).toBeUndefined()
  })

  it('测试实例的默认配置 - 默认实例', async () => {
    expect(vipAxios.getConfig()).toBeUndefined()
  })
})

describe('测试vipAxios配置', () => {
  it('用户自定义配置 - 空', async () => {
    const userConfig = {}
    const vipAxios = createVipAxios(userConfig)
    const config = vipAxios.getConfig()

    expect(config).toEqual(userConfig)
  })

  it('用户自定义配置 - 方法', async () => {
    const userConfig = {
      method: HttpMethod.PUT,
    }
    const vipAxios = createVipAxios(userConfig)
    const config = vipAxios.getConfig()

    expect(config).toEqual(userConfig)
  })

  it('默认配置', async () => {
    const config = vipAxios.getConfig()

    expect(config).toBeUndefined()
  })
})

describe('测试vipAxios网络请求', () => {
  it('Get请求 - 100条数据', async () => {
    const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.length).toBe(100)
  })

  it('Get请求 - 5条数据', async () => {
    const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts/1/comments')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.length).toBe(5)
  })

  it('Get请求 - 路由传参', async () => {
    const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts/1')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.id).toBe(1)
    expect(response.data.userId).toBe(1)
  })

  it('Get请求 - query传参', async () => {
    const response = await vipAxios.get('https://jsonplaceholder.typicode.com/comments?postId=1')

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.length).toBe(5)
  })
})

describe(`测试vipAxios网络请求 - ${HttpMethod.POST}`, () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  it(`${HttpMethod.POST}请求 - axios对象`, async () => {
    const response = await vipAxios({
      url: apiUrl,
      method: HttpMethod.POST,
      data,
    })

    expect(response.status).toBe(HttpStatus.CREATED)
    expect(response.data.title).toBe(data.title)
    expect(response.data.body).toBe(data.body)
    expect(response.data.userId).toBe(data.userId)
  })

  it(`${HttpMethod.POST}请求 - vipAxios.request方法`, async () => {
    const response = await vipAxios.request({
      url: apiUrl,
      method: HttpMethod.POST,
      data,
    })

    expect(response.status).toBe(HttpStatus.CREATED)
    expect(response.data.body).toBe(data.body)
    expect(response.data.title).toBe(data.title)
    expect(response.data.userId).toBe(data.userId)
  })
})

describe(`测试vipAxios网络请求 - ${HttpMethod.PUT}`, () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  it(`${HttpMethod.PUT}请求 - axios对象`, async () => {
    const response = await vipAxios({
      url: apiUrl,
      method: HttpMethod.PUT,
      data,
    })

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data).toEqual(data)
  })

  it(`${HttpMethod.PUT}请求 - vipAxios.request方法`, async () => {
    const response = await vipAxios.request({
      url: apiUrl,
      method: HttpMethod.PUT,
      data,
    })

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data).toEqual(data)
  })
})

describe(`测试vipAxios网络请求 - ${HttpMethod.PATCH}`, () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = {
    title: 'foo',
  }
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  }
  it(`${HttpMethod.PATCH}请求 - axios对象`, async () => {
    const response = await vipAxios({
      url: apiUrl,
      method: HttpMethod.PATCH,
      data,
      headers,
    })

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.title).toBe(data.title)
  })

  it(`${HttpMethod.PATCH}请求 - vipAxios.request方法`, async () => {
    const response = await vipAxios.request({
      url: apiUrl,
      method: HttpMethod.PATCH,
      data,
      headers,
    })

    expect(response.status).toBe(HttpStatus.OK)
    expect(response.data.title).toBe(data.title)
  })
})

describe(`测试vipAxios请求URI`, () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  it(`测试URI地址 - 无参数`, async () => {
    const url = vipAxios.getUri({
      url: apiUrl,
    })

    expect(url).toBe(apiUrl)
  })

  it(`测试URI地址 - 增加Body传参`, async () => {
    const url = vipAxios.getUri({
      url: apiUrl,
      data: {
        a: 1,
      },
    })

    expect(url).toBe(apiUrl)
  })

  it(`测试URI地址 - 增加Query传参`, async () => {
    const url = vipAxios.getUri({
      url: apiUrl,
      params: {
        a: 1,
        b: 2,
      },
    })

    expect(url).toBe(`${apiUrl}?a=1&b=2`)
  })
})
