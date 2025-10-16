import type { sendUnaryData, ServiceDefinition, UntypedServiceImplementation } from '@grpc/grpc-js'
import type { GrpcConnectInfo, UntypedMethodImplementation } from '../enum/grpc.interface'
import type {
  GrpcHealthCheckOrWatchRequest,
  GrpcHealthCheckOrWatchResponse,
  GrpcHealthListRequest,
  GrpcHealthListResponse,
  GrpcHealthStatusWatcher,
} from '../enum/health.interface'
import type { ServerUnaryCall, ServerWritableStream } from '../enum/server-type.interface'
import { grpcSimpleHandler, grpcStreamHandler, ProtoLoader, ServiceMethodType } from '@142vip/grpc'
import { Server, ServerCredentials } from '@grpc/grpc-js'
import {
  GRPC_SERVER_METHOD_NAME,
  GrpcHealthStatus,
} from '../enum/health.interface'
import { getMethodType } from '../utils/grpc.util'
import { healthProto, healthProtoServicePath } from '../utils/proto.util'
import { GRPC_ERROR_CODE, grpcErrorHandler, GrpcException } from './grpc-exception'

/**
 * Grpc 服务端
 */
export class GrpcServer {
  private connectInfoMap: Map<string, number> = new Map()
  /**
   * 健康检查
   * @private
   */
  private healthStatusMap: Map<string, GrpcHealthStatus> = new Map()
  private watchers: Map<string, Set<GrpcHealthStatusWatcher>> = new Map()
  private isCheckHealth = false

  /**
   * 服务端实例
   * @private
   */
  private server = new Server()
  constructor() {
    this.init()
  }

  /**
   * 监听端口，即启动
   * @param connectUri
   */
  public async listen(connectUri: string): Promise<number> {
    // 挂载健康检查
    this.addHealthCheck()
    return new Promise((resolve, reject): void => {
      this.server.bindAsync(connectUri, ServerCredentials.createInsecure(), (error, port) => {
        if (error != null) {
          return reject(error)
        }

        // 启动成功
        this.connectInfoMap.set(connectUri, port)
        // 服务正常
        this.setHealthStatus(GRPC_SERVER_METHOD_NAME, GrpcHealthStatus.SERVING)
        resolve(port)
      })
    })
  }

  /**
   * 设置某个方法的健康状况
   * @param methodName
   * @param status
   */
  public setHealthStatus(methodName: string, status: GrpcHealthStatus): void {
    this.healthStatusMap.set(methodName, status)
    const watchers = this.watchers.get(methodName) ?? []
    for (const watcher of watchers) {
      watcher(status)
    }
  }

  /**
   * 添加服务
   * @param serviceDef
   * @param methodHandlers
   */
  public registerService(serviceDef: ServiceDefinition, methodHandlers: UntypedMethodImplementation): void {
    const methodImpls = this.handleServiceMethods(serviceDef, methodHandlers)

    this.server.addService(serviceDef, methodImpls)
  }

  /**
   * 获取连接地址
   */
  public getConnectUris(): string[] {
    return Array.from(this.connectInfoMap.keys())
  }

  public getConnectInfo(): GrpcConnectInfo[] {
    return Array.from(this.connectInfoMap).map(([connectUri, port]) => ({ connectUri, port }))
  }

  /**
   * 强制关闭连接
   */
  public forceShutdown(): void {
    this.server.forceShutdown()
  }

  private init() {
    this.connectInfoMap = new Map()
    this.healthStatusMap = new Map()
    this.watchers = new Map()
  }

  /**
   * 初始化健康检查服务对应的方法
   * @private
   */
  private initHealthServiceImp(): UntypedServiceImplementation {
    return {
      /**
       * 检查某个方法
       */
      check: (
        call: ServerUnaryCall<GrpcHealthCheckOrWatchRequest, GrpcHealthCheckOrWatchResponse>,
        callback: sendUnaryData<GrpcHealthCheckOrWatchResponse>,
      ): void => {
        const requestData = call.request

        try {
          if (requestData.serviceName == null) {
            throw new GrpcException(GRPC_ERROR_CODE.INVALID_ARGUMENT)
          }
          const status = this.healthStatusMap.get(requestData.serviceName) ?? GrpcHealthStatus.UNKNOWN

          callback(null, { data: status })
        }
        catch (error) {
          callback(null, { error: grpcErrorHandler<GrpcHealthCheckOrWatchRequest>(error, requestData) })
        }
      },
      /**
       * 健康检查 监听服务状态变化，支持流式
       */
      watch: (
        call: ServerWritableStream<GrpcHealthCheckOrWatchRequest, GrpcHealthCheckOrWatchResponse>,
      ): void => {
        const requestData = call.request

        try {
          if (requestData.serviceName == null) {
            throw new GrpcException(GRPC_ERROR_CODE.INVALID_ARGUMENT)
          }
          const statusWatcher = (status: GrpcHealthStatus) => {
            call.write({ data: status })
          }
          this.addWatcher(requestData.serviceName, statusWatcher)
          call.on('cancelled', () => {
            this.removeWatcher(requestData.serviceName, statusWatcher)
          })
          const currentStatus = this.healthStatusMap.get(requestData.serviceName) ?? GrpcHealthStatus.UNKNOWN

          call.write({ data: currentStatus })
        }
        catch (error) {
          call.write({ error: grpcErrorHandler<GrpcHealthCheckOrWatchRequest>(error, requestData) })
        }
      },
      /**
       * 健康检查 列出所有支持的方法
       */
      list: (
        call: ServerUnaryCall<GrpcHealthListRequest, GrpcHealthListResponse>,
        callback: sendUnaryData<GrpcHealthListResponse>,
      ): void => {
        const requestData = call.request
        try {
          const healthMap = new Map<string, GrpcHealthStatus>()
          for (const [serviceName, status] of this.healthStatusMap.entries()) {
            healthMap.set(serviceName, status)
          }
          callback(null, { data: Object.fromEntries(healthMap) })
        }
        catch (error) {
          callback(null, { error: grpcErrorHandler<GrpcHealthListRequest>(error, requestData) })
        }
      },
    }
  }

  /**
   * 添加健康检查
   */
  private addHealthCheck(): void {
    // 健康检查已开
    if (this.isCheckHealth) {
      return
    }
    const healthProtoLoader = new ProtoLoader(healthProto)
    // 添加健康检查
    const healthServiceDef = healthProtoLoader.getServerServiceDefinition(healthProtoServicePath)

    this.server.addService(healthServiceDef, this.initHealthServiceImp())

    // 标记健康检查
    this.isCheckHealth = true
  }

  private addWatcher(service: string, watcher: GrpcHealthStatusWatcher): void {
    const existingWatcherSet = this.watchers.get(service)
    if (existingWatcherSet) {
      existingWatcherSet.add(watcher)
    }
    else {
      const newWatcherSet = new Set<GrpcHealthStatusWatcher>()
      newWatcherSet.add(watcher)
      this.watchers.set(service, newWatcherSet)
    }
  }

  /**
   * 移除健康检查
   * @param service
   * @param watcher
   * @private
   */
  private removeWatcher(service: string, watcher: GrpcHealthStatusWatcher) {
    this.watchers.get(service)?.delete(watcher)
  }

  /**
   * 获取GRPC方法处理函数
   * @param serviceDef
   * @param methodHandlers
   * @private
   */
  private handleServiceMethods(serviceDef: ServiceDefinition, methodHandlers: UntypedMethodImplementation): UntypedServiceImplementation {
    const serviceImp: UntypedServiceImplementation = {}
    for (const [methodName, handleMethod] of Object.entries(methodHandlers)) {
      const methodType = getMethodType(methodName, serviceDef)
      // 给每个方法，增加健康检查状态
      this.setHealthStatus(methodName, GrpcHealthStatus.SERVING)

      // 具体方法实现
      if (methodType === ServiceMethodType.Unary) {
        serviceImp[methodName] = grpcSimpleHandler(handleMethod)
      }
      else {
        serviceImp[methodName] = grpcStreamHandler(methodType, handleMethod)
      }
    }

    return serviceImp
  }
}
