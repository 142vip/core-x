import type { GrpcObject } from '@grpc/grpc-js/build/src/make-client'
import type protoLoader from '@grpc/proto-loader'
import type { ServiceClaDefinition } from './grpc.interface'
import { loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import { Singleton } from './singleton'

/**
 * proto文件加载器
 */
export class ProtoLoader extends Singleton<ProtoLoader> {
  private readonly grpcObj: GrpcObject

  private readonly protoPath: string
  private readonly loaderOptions: protoLoader.Options

  constructor(protoPath: string, loaderOptions: protoLoader.Options) {
    super(protoPath, loaderOptions)
    this.protoPath = protoPath
    this.loaderOptions = loaderOptions

    this.grpcObj = this.getGrpcObj()
  }

  public getPackageName(): string {
    return Object.keys(this.grpcObj)[0]
  }

  /**
   * 获取rpc Service类定义
   */
  public getServiceClassDefinition(): ServiceClaDefinition[] {
    const packageName = this.getPackageName()

    const services: ServiceClaDefinition[] = []
    for (const [serviceName, cla] of Object.entries(this.grpcObj[packageName])) {
      if (cla.service != null) {
        services.push({
          ServiceClass: cla,
          serviceName,
          packageName,
        })
      }
    }

    return services
  }

  /**
   * 加载proto包文件
   * @private
   */
  private getGrpcObj(): GrpcObject {
    const packageDefinition = loadSync(this.protoPath, this.loaderOptions ?? {})

    return loadPackageDefinition(packageDefinition)
  }
}
