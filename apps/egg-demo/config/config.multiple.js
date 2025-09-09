/**
 * 插件的多实例配置，覆盖单实例
 * @type {{}}
 */
module.exports = {
  axios: {
    clients: {
      axios1: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 7000,
        instanceName: 'axios1',
      },
      axios2: {
        headers: {
          common: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
        timeout: 8000,
        instanceName: 'axios2',
      },
    },
  },
}
