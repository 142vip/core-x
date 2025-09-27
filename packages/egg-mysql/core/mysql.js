const { VipEggPluginLogger, VipMySQLPool } = require('@142vip/egg')

/**
 * 创建MySQL实例
 */
async function createEggMysqlInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  // TODO 断言配置，配置校验
  try {
    const vipMysqlPool = await new VipMySQLPool({
      host: pluginConfig.host,
      port: pluginConfig.port,
      user: pluginConfig.userName,
      password: pluginConfig.password,
      database: pluginConfig.database,
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
      idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    })

    if (pluginConfig.database != null) {
      // 创建database
      await vipMysqlPool.createDataBaseName(pluginConfig.database)
    }

    const pool = await vipMysqlPool.pool

    pluginLogger.log(`dataBase create success , the name is ${pluginConfig.database}`)

    // 返回连接池
    return pool
  }

  catch (e) {
    pluginLogger.error(`dataBase create failed,check config carefully!!!!`)
    pluginLogger.error(e.message)
  }
}

module.exports = {
  createEggMysqlInstance,
}
