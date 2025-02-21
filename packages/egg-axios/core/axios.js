const {
  createAxiosInstance,
  defaultRequestInterceptor,
  defaultResponseInterceptor,
} = require('@142vip/axios')
const { VipEggPluginLogger } = require('@142vip/egg')
const { VipLodash } = require('@142vip/utils')

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
  const config = VipLodash.merge(defaultConfig, pluginConfig)

  pluginLogger.debug(`default configs: ${JSON.stringify(config)}`)

  const axios = createAxiosInstance(config)

  //  添加请求拦截器
  axios.interceptors.request.use(
    pluginConfig.requestInterceptorsHandler ?? defaultRequestInterceptor,
    (error) => {
      pluginLogger.error(`send request error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  // 响应拦截器
  axios.interceptors.response.use(
    pluginConfig.responseInterceptorsHandler ?? defaultResponseInterceptor,
    (error) => {
      pluginLogger.error(`receive response error in interceptors, ${error.message}`)
      return Promise.reject(error)
    },
  )

  return axios
}
module.exports = {
  createEggAxiosInstance,
}
