import type { GrpcConnectURI, UntypedMethodImplementation } from './enum/grpc.interface'
import { GrpcServer } from './core/grpc-server'
import { ProtoLoader } from './core/proto-loader'
import { clientStreamToServer, clientStreamToServerStream, clientToServer, clientToServerStream } from './example'
import { exampleProto, exampleProtoServicePath } from './utils/proto.util'

/**
 * 基于exampleProto的GRPC服务管理器
 */
export class GrpcExampleServerManager {
  private readonly grpcServer: GrpcServer

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
    const protoLoader = new ProtoLoader(exampleProto)
    const serviceDef = protoLoader.getServerServiceDefinition(exampleProtoServicePath)
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
   * 关闭GRPC服务
   */
  public shutdown(): void {
    this.grpcServer.forceShutdown()
  }
}
