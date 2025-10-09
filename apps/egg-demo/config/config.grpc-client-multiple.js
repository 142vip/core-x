const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcClient: {
    clients: {
      example1: {
        connectUri: GrpcConnectURI.PORT_50001,
        protoPaths: [exampleProto],
      },
      example2: {
        connectUri: GrpcConnectURI.PORT_50002,
        protoPaths: [exampleProto],
      },
    },
  },
}
