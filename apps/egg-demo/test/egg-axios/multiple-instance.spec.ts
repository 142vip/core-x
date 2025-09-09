import { PluginLoadEnv, PluginLoadType } from '@142vip/egg'
import { testVipAxios } from './egg.axios'

describe('网络请求测试 - 多实例 - axios1', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.MULTIPLE
  testVipAxios(PluginLoadType.MULTIPLE, 'axios1')
})

describe('网络请求测试 - 多实例 - axios2', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.MULTIPLE
  testVipAxios(PluginLoadType.MULTIPLE, 'axios2')
})
