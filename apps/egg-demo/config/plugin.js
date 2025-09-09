const { join } = require('node:path')

module.exports = {

  mysql: {
    enable: false,
    package: '@142vip/egg-mysql',
    path: join(__dirname, '../../../packages/egg-mysql'),
  },
  axios: {
    enable: true,
    package: '@142vip/egg-axios',
    path: join(__dirname, '../../../packages/egg-axios'),
    // 单实例、多实例下加载
  },
}
