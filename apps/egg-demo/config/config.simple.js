/**
 * 插件的单实例配置
 */
const { exampleProto } = require('@142vip/grpc')

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
  grpcClient: {
    client: {
      protoPaths: [exampleProto],
    },
  },
  grpcServer: {
    protoPaths: [exampleProto],
  },
}
