const { join } = require('node:path')
const { VipEggPluginLogger, PluginLoader } = require('@142vip/egg')
const { GrpcServer, ProtoLoader } = require('@142vip/grpc')
const { vipLodash } = require('@142vip/utils')

const GRPC_SERVICE_PATH = 'app/grpc'
const GRPC_NAME = '__grpc'

/**
 * 将service方法与proto文件定义的方法进行绑定
 * @param service
 * @param serviceMethod
 */
function bindServiceMethod(service, serviceMethod) {
  const handlers = {}
  for (const methodName of Object.keys(service)) {
    const methodNameLower = vipLodash.lowerFirst(methodName)
    const methodNameUpper = vipLodash.upperFirst(methodName)
    // 方法
    const method = serviceMethod[methodName] ?? serviceMethod[methodNameLower] ?? serviceMethod[methodNameUpper]
    // 绑定 this 上下文到 serviceMethod，兼容大小写
    handlers[methodNameLower] = method ? method.bind(serviceMethod) : undefined
    handlers[methodNameUpper] = method ? method.bind(serviceMethod) : undefined
  }
  return handlers
}

/**
 * 创建grpc服务端实例
 * @param pluginConfig
 * @param app
 */
function createEggGrpcServerInstance(pluginConfig, app) {
  const pluginLogger = VipEggPluginLogger.getInstance(pluginConfig, app)
  const { connectUri, protoPaths, loaderOptions, grpcServicePath, instanceName = 'default' } = pluginConfig

  // 避免用户错误配置，GrpcServer 只允许在agent.js上加载
  const { loaders: pluginLoaders = [] } = app.config.grpcServer
  if (pluginLoaders.includes(PluginLoader.APP)) {
    pluginLogger.error('GrpcServer 只允许在agent.js上加载，避免端口占用冲突')
    return
  }

  const grpcServer = new GrpcServer()

  // 将grpc对应的实现类，挂载到ctx.service对象上，类似Egg框架的Service类写法
  const grpcPath = grpcServicePath ?? GRPC_SERVICE_PATH

  //  获取所有的 loadUnit ，过滤掉node_modules
  const servicePaths = app.loader
    .getLoadUnits()
    .map(unit => join(unit.path, grpcPath))
    .filter(unit => !unit.includes('node_modules'))

  // 避免多实例时，重复加载
  if (app[GRPC_NAME] == null) {
    app.loader.loadToContext(servicePaths, 'service', {
    // service 需要继承 app.Service，因此需要 app 参数
    // 设置 call 为 true，会在加载时调用函数，并返回 UserService
      call: true,
      // 将文件加载到 app.xx
      fieldClass: GRPC_NAME,
    })
  }

  try {
    const protoLoader = new ProtoLoader(protoPaths, loaderOptions)

    // 匿名 ctx对象
    const ctx = app.createAnonymousContext()

    // 这里不能直接从app上获取，避免插件挂载时，类没有实例化
    const grpcServiceMap = ctx.service

    if (grpcServiceMap == null)
      throw new Error('grpc service not found')

    // 获取详情
    for (const { ServiceClientConstructor, serviceName } of protoLoader.getGrpcServiceDetail()) {
      const serviceMethodHandler = grpcServiceMap[serviceName]
      if (serviceMethodHandler == null) {
        pluginLogger.error(`GrpcServer create failed , the service ${serviceName} not found`)
        return
      }

      // 函数处理器
      const methodHandlers = bindServiceMethod(ServiceClientConstructor.service, serviceMethodHandler)

      grpcServer.registerService(ServiceClientConstructor.service, methodHandlers)
    }

    // app启动时，监听端口、多服务
    app.beforeStart(async () => {
      const instance = app.grpcServer.getInstance(instanceName)
      const port = await instance.listen(connectUri)
      pluginLogger.log(`GrpcServer create success,the instance name is ${instanceName},port: ${port}. connect: grpc://${connectUri}`)
    })

    // 应用关闭时清理实例
    app.beforeClose(() => {
      pluginLogger.log('应用关闭，关闭GRPC服务')
      const grpcServerInstanceMaps = app.grpcServer.getInstances()
      // 强制关闭所有grpc实例
      Object.values(grpcServerInstanceMaps).forEach((instance) => {
        instance.forceShutdown()
      })
    })

    return grpcServer
  }
  catch (e) {
    pluginLogger.error(`GrpcServer create failed ，check egg-grpc-server config carefully ${e.message}`)
  }
}

module.exports = {
  createEggGrpcServerInstance,
}
