/**
 * 插件的单实例配置
 */
module.exports = {
  axios: {
    client: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      timeout: 6000,
    },
  },
}
