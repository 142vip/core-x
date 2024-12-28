const { VipEggPluginLogger } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')
/**
 * 创建redis实例
 * @param config
 * @param app
 */
function createRedisInstance(config, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pkgName, app)

  pluginLogger.info('redis test')
}

module.exports = {
  createRedisInstance,
}
