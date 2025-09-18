const { GrpcConnectURI, GrpcClient, exampleProto, ProtoLoader, exampleProtoServicePath } = require('@142vip/grpc')

/**
 * grpc 客户端示例
 */
function exampleClientMain() {
  const exampleProtoLoader = new ProtoLoader(exampleProto)

  const grpcClient = new GrpcClient(GrpcConnectURI.PORT_50001, exampleProtoLoader)

  // 全部加载
  // const servicePaths = exampleProtoLoader.getServicePaths()
  // for (const servicePath of servicePaths) {
  //   console.log('servicePath', servicePath)
  //   const serviceClientConstructor = exampleProtoLoader.getClientServiceConstructor(servicePath)
  //   grpcClient.registerService(servicePath, serviceClientConstructor)
  // }

  // 指定servicePath加载
  const serviceClientConstructor = exampleProtoLoader.getClientServiceConstructor(exampleProtoServicePath)
  grpcClient.registerService(exampleProtoServicePath, serviceClientConstructor)

  const exampleClient = grpcClient.getService(exampleProtoServicePath)

  console.log(333, exampleClient.clientStreamToServer)

  console.log(grpcClient.getConnectUri(), grpcClient.getServiceSize())
}

exampleClientMain()
