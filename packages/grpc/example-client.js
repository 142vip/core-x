const { GrpcExampleServerManager } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI, sendGrpcRequest } = require('@142vip/grpc')

/**
 * grpc 客户端示例
 */
async function exampleClientMain() {
  const exampleServiceClient = new GrpcExampleServerManager().getServiceClient(GrpcConnectURI.PORT_50001)

  const requestData = { serviceName: '12334' }
  const aa = await sendGrpcRequest(exampleServiceClient, 'ClientToServer', requestData)
  console.log('aa', aa, JSON.stringify(aa))
  const bb = await sendGrpcRequest(exampleServiceClient, 'clientToServerStream', requestData)
  console.log('bb', bb, JSON.stringify(bb))
  const cc = await sendGrpcRequest(exampleServiceClient, 'clientStreamToServer', requestData)
  console.log('cc', cc, JSON.stringify(cc))
  const dd = await sendGrpcRequest(exampleServiceClient, 'clientStreamToServerStream', requestData)
  console.log('dd', dd, JSON.stringify(dd))
}

void exampleClientMain()
