import { PluginLoadType } from '@142vip/egg'
import { describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { axiosSimpleConfig } from './egg.axios'

/**
 * 单实例配置测试 - 实例的配置与插件的配置相等
 */
describe('单实例配置测试', () => {
  process.env.EGG_SERVER_ENV = PluginLoadType.SIMPLE
  beforeAll(() => {
    jest.resetModules()
  })

  afterAll(() => {
    jest.resetModules()
  })

  it('环境变量初始化测试', () => {
    expect(process.env.EGG_SERVER_ENV).toBe(PluginLoadType.SIMPLE)
  })

  it('实例的配置与插件的配置相等', async () => {
    const vipAxios = await app.axios

    expect(vipAxios).toBeDefined()
    expect(vipAxios.getInstanceNames()).toEqual(['default'])

    // axios实例的配置
    const instanceConfig = vipAxios.getConfig()

    expect(instanceConfig.timeout).toEqual(axiosSimpleConfig.client.timeout)

    // 对比client配置是否相等
    const config = app.config.axios
    expect(config.client).toEqual(axiosSimpleConfig.client)
    jest.resetModules()
  })
})
