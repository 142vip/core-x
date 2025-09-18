import { PluginLoadEnv } from '@142vip/egg'
import { expect } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { defaultEggGrpcServerPluginConfig } from '../plugin.config'

/**
 * @142vip/egg-grpc-server 测试
 */
describe('默认环境加载插件配置', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.DEFAULT
  beforeAll(() => {
    jest.resetModules()
  })
  afterAll(() => {
    jest.resetModules()
  })

  it('环境变量初始化测试', () => {
    expect(app.config.env).toBe('default')
    expect(process.env.EGG_SERVER_ENV).toBe(PluginLoadEnv.DEFAULT)
  })

  it('插件默认配置测试', () => {
    const config = app.config.grpcClient
    expect(config).toBeDefined()
    expect(config).toEqual(defaultEggGrpcServerPluginConfig)
    console.log(111, config)
  })
})
