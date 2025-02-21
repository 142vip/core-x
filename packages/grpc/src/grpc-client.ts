import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'
import type { ServiceClaDefinition } from './grpc.interface'
import grpc from '@grpc/grpc-js'
import { Singleton } from './singleton'

type GrpcServices = Map<string, ServiceClient>

export class GrpcClient extends Singleton<GrpcClient> {
  private readonly grpcServices: GrpcServices
  constructor() {
    super()
    this.grpcServices = new Map<string, ServiceClient>()
  }

  /**
   * 建立连接
   */
  public connect(connectUri: string, serviceClaDefinitions: ServiceClaDefinition[]): void {
    // 创建服务实例
    for (const { packageName, ServiceClass, serviceName } of serviceClaDefinitions) {
      console.log(`包：${packageName} -- 类：${serviceName}`)
      this.grpcServices.set(serviceName, new ServiceClass(connectUri, grpc.credentials.createInsecure()))
    }
  }

  /**
   * 获取连接Service
   */
  public getService<T>(serviceName: string): T {
    if (!this.grpcServices.has(serviceName)) {
      console.log('服务不存在')
      throw new Error('服务不存在')
    }
    return this.grpcServices.get(serviceName) as T
  }

  /**
   * 获取连接数
   */
  public getConnectSize(): number {
    return this.grpcServices.size
  }

  /**
   * 关闭gRPC连接
   */
  public close(): void {
    for (const grpcService of this.grpcServices.values()) {
      grpcService.close()
    }
  }
}
