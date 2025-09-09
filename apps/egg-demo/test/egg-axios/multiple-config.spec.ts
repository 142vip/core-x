import { PluginLoadEnv } from '@142vip/egg'
import { describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { axiosMultipleConfig } from './egg.axios'

/**
 * 多实例配置测试 - 实例的配置与插件的配置相等
 */
describe('多实例配置测试', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.MULTIPLE

  beforeAll(() => {
    jest.resetModules()
  })

  afterAll(() => {
    jest.resetModules()
  })

  it('环境变量初始化测试', () => {
    expect(process.env.EGG_SERVER_ENV).toBe(PluginLoadEnv.MULTIPLE)
  })

  it('实例的配置与插件的配置相等', async () => {
    const instanceNames = await app.axios.getInstanceNames()
    expect(instanceNames).toEqual(['axios1', 'axios2'])
    const vipAxios1 = await app.axios.getInstance('axios1')
    const vipAxios2 = await app.axios.getInstance('axios2')

    // axios实例的配置
    const instanceConfig1 = vipAxios1.getConfig()
    const instanceConfig2 = vipAxios2.getConfig()

    expect(instanceConfig1).not.toEqual(instanceConfig2)

    expect(instanceConfig1.instanceName).toBe('axios1')
    expect(instanceConfig2.instanceName).toBe('axios2')

    // 比较timeout字段
    expect(instanceConfig1.timeout).toEqual(axiosMultipleConfig.clients.axios1.timeout)
    expect(instanceConfig2.timeout).toEqual(axiosMultipleConfig.clients.axios2.timeout)
  })
})
