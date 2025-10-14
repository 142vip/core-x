const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcClient: {
    client: {
      connectUri: GrpcConnectURI.PORT_50003,
      protoPaths: [exampleProto],
    },
  },
}
