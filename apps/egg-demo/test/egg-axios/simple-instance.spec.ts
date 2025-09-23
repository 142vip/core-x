import { PluginLoadType } from '@142vip/egg'
import { describe } from '@jest/globals'
import { EGG_SERVER_ENV } from '../plugin.config'
import { testVipAxios } from './egg.axios'
/**
 * @142vip/egg-axios 测试
 */

describe('网络请求测试 - 单实例 - @142vip/egg-axios', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.AXIOS
  testVipAxios(PluginLoadType.SIMPLE)
})
