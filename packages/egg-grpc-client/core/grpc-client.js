const { VipEggPluginLogger } = require('@142vip/egg')
const { GrpcClient, GrpcProtoLoader } = require('@142vip/grpc')

/**
 * 创建egg grpc连接实例
 * @param pluginConfig
 * @param app
 */
function createEggGrpcClientInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)

  const { connectUri, protoPaths, loaderOptions } = pluginConfig

  const grpcClient = new GrpcClient(connectUri)
  const grpcProtoLoader = new GrpcProtoLoader(protoPaths, loaderOptions)
  const servicePaths = grpcProtoLoader.getServicePaths()

  // 加载proto
  for (const servicePath of servicePaths) {
    const serviceClientConstructor = grpcProtoLoader.getClientServiceConstructor(servicePath)
    grpcClient.registerService(servicePath, serviceClientConstructor)
  }

  // 打印连接
  if (grpcClient.getServiceSize() === 0) {
    pluginLogger.error('grpc client connect size is 0')
  }

  pluginLogger.log('plugin init')

  // TODO 考虑将grpcClient实例挂载ctx上
  return grpcClient
}

module.exports = {
  createEggGrpcClientInstance,
}
