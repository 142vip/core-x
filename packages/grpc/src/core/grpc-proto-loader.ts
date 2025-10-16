import type { GrpcObject, ProtobufTypeDefinition, ServiceClientConstructor, ServiceDefinition } from '@grpc/grpc-js'
import type { ServiceClientDefinitionMap } from '../enum/grpc.interface'
import type { GrpcServiceDetail, GrpcServicePath, ParsedGrpcObject, VipProtoLoaderOptions } from '../enum/proto.interface'
import { existsSync } from 'node:fs'
import { loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'

/**
 * 默认的加载配置
 */
export const DEFAULT_LOADER_OPTIONS: VipProtoLoaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

/**
 * proto文件加载器
 */
export class GrpcProtoLoader {
  private readonly protoPaths: string | string[]
  private readonly loaderOptions: VipProtoLoaderOptions

  // 包名
  private packageNameSet: Set<string> = new Set()
  // service路径
  private servicePathSet: Set<string> = new Set()
  private serviceMap: ServiceClientDefinitionMap = new Map()

  constructor(protoPath: string | string[], loaderOptions?: VipProtoLoaderOptions) {
    this.protoPaths = protoPath
    this.loaderOptions = loaderOptions ?? DEFAULT_LOADER_OPTIONS

    // 解析
    this.parseDefinition()
  }

  public getPackageNames(): string[] {
    return Array.from(this.packageNameSet.keys())
  }

  /**
   * 获取grpc对应的service名称
   */
  public getServiceName(servicePath: string): string {
    return this.parsePackagePath(servicePath).serviceName
  }

  /**
   * 获取proto loader options
   */
  public getLoaderOptions(): VipProtoLoaderOptions {
    return this.loaderOptions
  }

  /**
   * 获取所有的路径定义
   */
  public getServicePaths(): string[] {
    return Array.from(this.servicePathSet.keys())
  }

  public getServiceDetail(): GrpcServicePath[] {
    const servicePaths = this.getServicePaths()

    return servicePaths.map(servicePath => ({
      servicePath,
      ...this.parsePackagePath(servicePath),
    }))
  }

  /**
   * 获取grpc service详细信息
   */
  public getGrpcServiceDetail(): Array<GrpcServiceDetail> {
    const servicePaths = this.getServicePaths()

    return servicePaths.map((servicePath) => {
      const ServiceClientConstructor = this.getClientServiceConstructor(servicePath)
      const { service: serviceDef, serviceName } = ServiceClientConstructor
      const packageName = servicePath.split(serviceName)[0]
      const methodNames = Object.keys(serviceDef)
      return {
        servicePath,
        packageName,
        serviceName,
        ServiceClientConstructor,
        methodNames,
        // methodLowerNames: methodNames.map(name => vipLodash.lowerFirst(name)),
        // methodUpperNames: methodNames.map(name => vipLodash.upperFirst(name)),
      }
    })
  }

  /**
   * 获取rpc Service类定义
   */
  public getServerServiceDefinition(servicePath: string): ServiceDefinition {
    const serviceDef = this.serviceMap.get(servicePath)
    if (serviceDef == null) {
      throw new Error(`servicePath:${servicePath}, service not found`)
    }
    return serviceDef.service
  }

  /**
   * 获取client Service类定义，用于客户端
   * @param servicePath
   */
  public getClientServiceConstructor(servicePath: string): ServiceClientConstructor {
    const serviceDef = this.serviceMap.get(servicePath)
    if (serviceDef == null) {
      throw new Error(`servicePath:${servicePath} , client service constructor not found`)
    }
    return serviceDef
  }

  /**
   * 判断是否是ProtobufTypeDefinition
   */
  public isProtobufTypeDefinition(obj: GrpcObject | ServiceClientConstructor | ProtobufTypeDefinition): obj is ProtobufTypeDefinition {
    return 'format' in obj
  }

  private getValidProto(): string[] {
    const protoPaths = Array.isArray(this.protoPaths) ? this.protoPaths : [this.protoPaths]
    protoPaths.forEach((path) => {
      if (!existsSync(path)) {
        throw new Error(`proto file not found: ${path}`)
      }
    })
    return protoPaths
  }

  /**
   * 解析
   * @private
   */
  private parseDefinition(): void {
    const protoPaths = this.getValidProto()

    const packageDefinition = loadSync(protoPaths, this.loaderOptions)

    const grpcObj = loadPackageDefinition(packageDefinition)
    const grpcParsedObj = this.parseGrpcObject(grpcObj)

    // 解析 package，过滤出serviceDef
    grpcParsedObj
      .forEach(({ serviceDef, packageName, serviceName }) => {
        // 判断是否为服务构造函数
        if (serviceDef == null) {
          return
        }

        const servicePath = `${packageName}.${serviceName}`
        this.packageNameSet.add(packageName)
        this.servicePathSet.add(servicePath)
        this.serviceMap.set(servicePath, serviceDef)
      })
  }

  /**
   * 递归解析GrpcObject结构，提取package信息
   */
  private parseGrpcObject(obj: GrpcObject | ServiceClientConstructor | ProtobufTypeDefinition, packagePath: string = ''): ParsedGrpcObject[] {
    const parseGRPC: ParsedGrpcObject[] = []

    // 检查当前对象是否包含服务定义
    if (obj && typeof obj === 'object') {
      // 如果当前对象有format属性，说明是类型定义
      if (this.isProtobufTypeDefinition(obj)) {
        // 提取包名和服务名并添加到结果中
        if (packagePath) {
          parseGRPC.push(this.parsePackagePath(packagePath))
        }
      }
      else {
        // 递归处理嵌套结构
        for (const [key, value] of Object.entries(obj)) {
          const newPackagePath = packagePath ? `${packagePath}.${key}` : key
          const nestedResults = this.parseGrpcObject(value, newPackagePath)
          parseGRPC.push(...nestedResults)

          // 检查是否为服务构造函数
          if (typeof value === 'function' && value.name === 'ServiceClientImpl') {
            parseGRPC.push({ ...this.parsePackagePath(newPackagePath), serviceDef: value })
          }
        }
      }
    }

    return parseGRPC
  }

  /**
   * 分离packageName和serviceName
   * @private
   */
  private parsePackagePath(packagePath: string) {
    const lastDotIndex = packagePath.lastIndexOf('.')
    const serviceName = lastDotIndex >= 0 ? packagePath.substring(lastDotIndex + 1) : packagePath
    const actualPackageName = lastDotIndex >= 0 ? packagePath.substring(0, lastDotIndex) : ''

    return {
      packageName: actualPackageName,
      serviceName,
    }
  }
}
