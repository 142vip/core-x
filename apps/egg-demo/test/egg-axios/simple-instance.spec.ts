import { PluginLoadEnv, PluginLoadType } from '@142vip/egg'
import { testVipAxios } from './egg.axios'
/**
 * @142vip/egg-axios 测试
 */

describe('网络请求测试 - 单实例 - default', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.SIMPLE
  testVipAxios(PluginLoadType.SIMPLE)
  process.env.EGG_SERVER_ENV = ''
})
