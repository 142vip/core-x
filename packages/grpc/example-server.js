const { GrpcConnectURI } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcExampleServerManager } = require('@142vip/grpc')

/**
 * grpc 服务端示例
 */
async function exampleServerMain() {
  const exampleServerManager = new GrpcExampleServerManager()

  // 监听
  await exampleServerManager.listen(GrpcConnectURI.PORT_50001)
  console.log(`\ngrpcServer启动，连接地址：grpc://${GrpcConnectURI.PORT_50001}\n`)
}

void exampleServerMain()
