const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

/**
 * 单实例加载@142vip/egg-grpc-server
 */
module.exports = {
  grpcServer: {
    client: {
      connectUri: GrpcConnectURI.PORT_50003,
      protoPaths: [exampleProto],
    },
  },
}
