import { describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { axiosSimpleConfig } from '../egg-axios/egg.axios'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'

/**
 * 单实例配置测试 - 实例的配置与插件的配置相等
 */
describe('单实例配置测试 - @142vip/egg-axios', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.AXIOS

  it('环境变量初始化测试', () => {
    expect(process.env.EGG_SERVER_ENV).toBe(EGG_SERVER_ENV.AXIOS)
  })

  it('实例的配置与插件的配置相等', async () => {
    const vipAxios = await app.axios

    expect(vipAxios).toBeDefined()
    const instanceNames = vipAxios.getInstanceNames()
    expect(instanceNames).toContain(PluginInstanceName.DEFAULT)
    expect(vipAxios.getInstanceNames()).toEqual([PluginInstanceName.DEFAULT])

    // axios实例的配置
    const instanceConfig = vipAxios.getInstance(PluginInstanceName.DEFAULT).getConfig()

    expect(instanceConfig.timeout).toEqual(axiosSimpleConfig.client.timeout)

    // 对比client配置是否相等
    const config = app.config.axios
    expect(config.client).toEqual(axiosSimpleConfig.client)
  })
})
