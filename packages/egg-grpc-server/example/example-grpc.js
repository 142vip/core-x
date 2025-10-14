const {
  clientToServer,
  clientStreamToServer,
  clientToServerStream,
  clientStreamToServerStream,
  exampleProto,
  GrpcConnectURI,
  GrpcExampleServerManager,
} = require('@142vip/grpc')

module.exports = {
  // 对应的proto定义路径
  exampleProto,
  GrpcConnectURI,
  // 函数定义
  clientToServer,
  clientStreamToServer,
  clientToServerStream,
  clientStreamToServerStream,

  // 示例服务管理器
  GrpcExampleServerManager,
}
