const {
  GrpcConnectURI,
  GrpcServer,
  ProtoLoader,
  clientToServer,
  clientStreamToServer,
  clientToServerStream,
  clientStreamToServerStream,
  exampleProto,
  exampleProtoServicePath,
} = require('@142vip/grpc')

/**
 * grpc 服务端示例
 */
async function exampleServerMain() {
  const protoLoader = new ProtoLoader([exampleProto])

  const grpcServer = new GrpcServer()
  /**
   * 函数功能
   */
  const handlers = {
    clientToServer,
    clientStreamToServer,
    clientToServerStream,
    clientStreamToServerStream,
  }

  // const servicePaths = protoLoader.getServicePaths()
  // for (const servicePath of servicePaths) {
  //   const serviceDef = protoLoader.getServerServiceDefinition(servicePath)
  //   // 跳过健康检查
  //   grpcServer.registerService(serviceDef, handlers)
  // }

  const serviceDef = protoLoader.getServerServiceDefinition(exampleProtoServicePath)

  // 注册服务
  grpcServer.registerService(serviceDef, handlers)

  // 监听
  const port = await grpcServer.listen(GrpcConnectURI.PORT_50001)
  console.log('grpcServer--->', port)

  // grpcServer.listen(GrpcConnectURI.PORT_50001)
  //
  // grpcServer.listen(GrpcConnectURI.PORT_50002)
}

void exampleServerMain()
