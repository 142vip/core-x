import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'

import type { GrpcConnectURI, UntypedMethodImplementation } from './enum/grpc.interface'
import { GrpcClient } from './core/grpc-client'
import { GrpcProtoLoader } from './core/grpc-proto-loader'
import { GrpcServer } from './core/grpc-server'
import {
  clientStreamToServer,
  clientStreamToServerStream,
  clientToServer,
  clientToServerStream,
} from './example'
import { exampleProto, exampleProtoServicePath } from './utils/proto.util'

/**
 * 基于exampleProto的GRPC服务管理器
 */
export class GrpcExampleServerManager {
  private readonly grpcServer: GrpcServer
  private readonly exampleProtoLoader = new GrpcProtoLoader(exampleProto)

  constructor() {
    this.grpcServer = new GrpcServer()
  }

  public registerService() {
    const handlers = {
      clientToServer,
      clientStreamToServer,
      clientToServerStream,
      clientStreamToServerStream,
    }
    const serviceDef = this.exampleProtoLoader.getServerServiceDefinition(exampleProtoServicePath)
    this.grpcServer.registerService(serviceDef, handlers as UntypedMethodImplementation)
  }

  /**
   * 启动GRPC服务，监听端口
   */
  public async listen(connectUri: GrpcConnectURI): Promise<void> {
    this.registerService()
    await this.grpcServer.listen(connectUri)
  }

  /**
   * 获取原生的grpcServer服务
   */
  public getGrpcServer(): GrpcServer {
    return this.grpcServer
  }

  /**
   * 获取客户端
   * @param connectUri
   */
  public getServiceClient(connectUri: GrpcConnectURI): ServiceClient {
    const grpcClient = new GrpcClient(connectUri)

    // 指定servicePath加载
    const serviceClientConstructor = this.exampleProtoLoader.getClientServiceConstructor(exampleProtoServicePath)
    grpcClient.registerService(exampleProtoServicePath, serviceClientConstructor)

    return grpcClient.getService<ServiceClient>(exampleProtoServicePath)
  }

  /**
   * 关闭GRPC服务
   * - 服务端
   */
  public shutdown(): void {
    this.grpcServer.forceShutdown()
  }
}
