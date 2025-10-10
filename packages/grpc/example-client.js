const { GrpcConnectURI, GrpcClient, exampleProto, ProtoLoader, exampleProtoServicePath } = require('@142vip/grpc')

/**
 * grpc 客户端示例
 */
function exampleClientMain() {
  const exampleProtoLoader = new ProtoLoader(exampleProto)

  const grpcClient = new GrpcClient(GrpcConnectURI.PORT_50001, exampleProtoLoader)

  // 指定servicePath加载
  const serviceClientConstructor = exampleProtoLoader.getClientServiceConstructor(exampleProtoServicePath)
  grpcClient.registerService(exampleProtoServicePath, serviceClientConstructor)

  const exampleClient = grpcClient.getService(exampleProtoServicePath)

  console.log(333, exampleClient.clientStreamToServer)

  exampleClient.clientToServer({ name: '123' }, (error, response) => {
    if (error) {
      console.error('Error calling clientToServer:', error)
      throw error
    }
    else {
      console.log('Response received:', response)
    }
  })

  console.log(grpcClient.getConnectUri(), grpcClient.getServiceSize())
}

exampleClientMain()
