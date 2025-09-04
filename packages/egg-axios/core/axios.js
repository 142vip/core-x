const { createVipAxios, defaultRequestInterceptor, defaultResponseInterceptor } = require('@142vip/axios')
const { VipEggPluginLogger, mergeConfig } = require('@142vip/egg')

/**
 * 创建egg-axios实例
 */
function createEggAxiosInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  // 默认配置
  const defaultConfig = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    // default 5 seconds timeout
    timeout: 5000,
  }
  // 合并插件用户自定义配置、axios默认配置
  const config = mergeConfig(defaultConfig, pluginConfig)

  pluginLogger.debug(`default configs: ${JSON.stringify(config)}`)

  const vipAxios = createVipAxios(config)

  //  添加请求拦截器
  vipAxios.interceptors.request.use(
    pluginConfig.requestInterceptorsHandler ?? defaultRequestInterceptor,
    (error) => {
      pluginLogger.error(`send request error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  // 响应拦截器
  vipAxios.interceptors.response.use(
    pluginConfig.responseInterceptorsHandler ?? defaultResponseInterceptor,
    (error) => {
      pluginLogger.error(`receive response error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  return vipAxios
}
module.exports = {
  createEggAxiosInstance,
}
