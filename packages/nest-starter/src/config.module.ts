import type { ClassConstructor } from 'class-transformer'
import { VipNodeJS } from '@142vip/utils'
import { DynamicModule } from '@nestjs/common'
import { fileLoader, selectConfig, TypedConfigModule } from 'nest-typed-config'
import { NestAppConfig } from './app.config'
import { StarterConfig } from './config'

export class NestConfigModule {
  public static register<T extends ClassConstructor<NestAppConfig>>(ConfigConSchema: T): DynamicModule {
    return TypedConfigModule.forRoot({
      schema: ConfigConSchema,
      load: fileLoader({
        // TODO 指定配置文件
        absolutePath: VipNodeJS.pathResolve(VipNodeJS.getProcessCwd(), 'config/test.config.js'),
      }),
    })
  }
}

/**
 * Nest应用模块
 * - 默认全局模块
 */
export const NestAppConfigModule = NestConfigModule.register(NestAppConfig)

/**
 * 基于Schema获取配置
 * - 不存在时，报错
 * @param configSchema
 */
export function getConfig<T>(configSchema: ClassConstructor<T>): T {
  const config = getOptionalConfig(configSchema)
  if (!config) {
    throw new Error(`Config ${configSchema.name} not found`)
  }
  return config
}

/**
 * 基于Schema获取配置，可能为空
 * @param configSchema
 */
export function getOptionalConfig<T>(configSchema: ClassConstructor<T>): T | undefined {
  return selectConfig(NestAppConfigModule, configSchema, { allowOptional: true }) as T | undefined
}

/**
 * 启动配置
 */
export const nestStaterConfig = getConfig(StarterConfig)

/**
 * 整个应用配置
 */
export const nestAppConfig = getConfig(NestAppConfig)
