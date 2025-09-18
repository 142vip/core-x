import type { ServiceClientConstructor } from '@grpc/grpc-js'
import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'
import grpc from '@grpc/grpc-js'

type GrpcServices = Map<string, ServiceClient>
type GrpcServiceConstructorMap = Map<string, ServiceClientConstructor>

/**
 * Grpc 客户端
 */
export class GrpcClient {
  private readonly connectUri: string
  private readonly grpcServices: GrpcServices
  private serviceConstructors: GrpcServiceConstructorMap
  constructor(connectUri: string) {
    this.connectUri = connectUri
    this.grpcServices = new Map<string, ServiceClient>()
    this.serviceConstructors = new Map<string, ServiceClientConstructor>()
  }

  /**
   * 建立连接
   */
  public registerService(servicePath: string, IServiceClientConstructor: ServiceClientConstructor): void {
    const client = new IServiceClientConstructor(this.connectUri, grpc.credentials.createInsecure())
    // 创建服务实例
    this.grpcServices.set(servicePath, client)

    // 标记注册
    this.serviceConstructors.set(servicePath, IServiceClientConstructor)
  }

  /**
   * 获取连接Service
   */
  public getService<T>(servicePath: string): T {
    // 检查服务是否已连接
    if (this.grpcServices.has(servicePath)) {
      return this.grpcServices.get(servicePath) as T
    }

    const IServiceClientConstructor = this.serviceConstructors.get(servicePath)
    if (!IServiceClientConstructor) {
      throw new Error(`服务 ${servicePath} 未连接且未注册，请先调用registerService方法注册服务`)
    }

    console.log(`服务 ${servicePath} 未连接，正在自动连接...`)
    // 自动连接，这里做了一个重连冗余
    this.registerService(servicePath, IServiceClientConstructor)

    // TODO 可能存在死锁，需要 考虑最大重连次数
    return this.grpcServices.get(servicePath) as T
  }

  /**
   * 获取连接地址
   */
  public getConnectUri(): string {
    return this.connectUri
  }

  /**
   * 获取所有的服务路径
   */
  public getServicePaths(): string[] {
    return [...new Set(this.grpcServices.keys())]
  }

  /**
   * 获取连接数
   */
  public getServiceSize(): number {
    return this.grpcServices.size
  }

  /**
   * 关闭gRPC连接
   * - 异步关闭
   */
  public removeService(servicePath?: string): void {
    // 关闭所有
    if (servicePath == null) {
      this.getServices().forEach(service => service.close())
      this.grpcServices.clear()
    }
    else {
      this.getService<ServiceClient>(servicePath).close()
      this.grpcServices.delete(servicePath)
    }
  }

  /**
   * 获取所有的服务实例
   * @private
   */
  private getServices(): ServiceClient[] {
    return [...new Set(this.grpcServices.values())]
  }
}
