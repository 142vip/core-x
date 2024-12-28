const { registerPlugin } = require('@142vip/egg/src')
const { createRedisInstance } = require('./core/redis')

class EggRedisAppBoot {
  constructor(app) {
    this.app = app
  }

  // 所有文件已加载，此时可以启动插件。
  async didLoad() {
    if (this.app.config.redis) {
      registerPlugin('redis', this.app, createRedisInstance)
    }
  }
}

module.exports = EggRedisAppBoot
