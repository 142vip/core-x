import type { VipAxiosInstance } from '@142vip/axios'
import type { EggPluginInstance } from '@142vip/egg/src/egg.interface'
import { HttpMethod, HttpStatus } from '@142vip/axios'
import { PluginLoadType } from '@142vip/egg'
import { app } from 'egg-mock/bootstrap'

/**
 * @142vip/egg-axios 插件默认配置
 */
// eslint-disable-next-line ts/no-require-imports
export const defaultPluginConfig = require('@142vip/egg-axios/config/config.default').axios

export const axiosSimpleConfig = {
  client: {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    timeout: 6000,
  },
}

export const axiosMultipleConfig = {
  clients: {
    axios1: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 7000,
      instanceName: 'axios1',
    },
    axios2: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 8000,
      instanceName: 'axios2',
    },
  },
}

type EggVipAxios = EggPluginInstance<VipAxiosInstance> & VipAxiosInstance

function getEggAxios(type: PluginLoadType, instanceName?: string): EggVipAxios {
  let vipAxios: any
  if (type === PluginLoadType.SIMPLE) {
    const instanceNames = app.axios.getInstanceNames()
    expect(instanceNames).toEqual(['default'])
    vipAxios = app.axios
    expect(vipAxios).toBeDefined()
  }
  if (type === PluginLoadType.MULTIPLE) {
    const instanceNames = app.axios.getInstanceNames()
    expect(instanceNames).toEqual(['axios1', 'axios2'])
    vipAxios = app.axios.getInstance(instanceName)
    expect(vipAxios).toBeDefined()
  }

  return vipAxios
}

/**
 * 网络请求测试
 */
export function testVipAxios(type: PluginLoadType, instanceName: string = 'default') {
  // 支持2次重试
  jest.retryTimes(2)

  describe(`${type}实例 - ${HttpMethod.GET}请求`, () => {
    it('Get请求 - 100条数据', async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data.length).toBe(100)
    })

    it('Get请求 - 5条数据', async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts/1/comments')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data.length).toBe(5)
    })

    it('Get请求 - 路由传参', async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts/1')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data.id).toBe(1)
      expect(response.data.userId).toBe(1)
    })

    it('Get请求 - query传参', async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const response = await vipAxios.get('https://jsonplaceholder.typicode.com/comments?postId=1')

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data.length).toBe(5)
    })
  })

  describe(`${type}实例 - ${HttpMethod.POST}`, () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    it(`${HttpMethod.POST}请求 - axios对象`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
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
      const vipAxios = getEggAxios(type, instanceName)
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

  describe(`${type}实例 - ${HttpMethod.PUT}`, () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const data = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    it(`${HttpMethod.PUT}请求 - axios对象`, async () => {
      const vipAxios = getEggAxios(type, instanceName)

      const response = await vipAxios({
        url: apiUrl,
        method: HttpMethod.PUT,
        data,
      })

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data).toEqual(data)
    })

    it(`${HttpMethod.PUT}请求 - vipAxios.request方法`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const response = await vipAxios.request({
        url: apiUrl,
        method: HttpMethod.PUT,
        data,
      })

      expect(response.status).toBe(HttpStatus.OK)
      expect(response.data).toEqual(data)
    })
  })

  describe(`${type}实例 - ${HttpMethod.PATCH}`, () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const data = {
      title: 'foo',
    }
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    }
    it(`${HttpMethod.PATCH}请求 - axios对象`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
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
      const vipAxios = getEggAxios(type, instanceName)
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

  describe(`${type}实例 - 请求URI`, () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    it(`测试URI地址 - 无参数`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const url = vipAxios.getUri({
        url: apiUrl,
      })

      expect(url).toBe(apiUrl)
    })

    it(`测试URI地址 - 增加Body传参`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
      const url = vipAxios.getUri({
        url: apiUrl,
        data: {
          a: 1,
        },
      })

      expect(url).toBe(apiUrl)
    })

    it(`测试URI地址 - 增加Query传参`, async () => {
      const vipAxios = getEggAxios(type, instanceName)
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
}
