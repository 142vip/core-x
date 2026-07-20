import type { ClassConstructor } from 'class-transformer'
import { DynamicModule } from '@nestjs/common'
import { fileLoader, selectConfig, TypedConfigModule } from 'nest-typed-config'
import { NestAppConfig } from './app.config'
import { NestConfigPathOptions, nestConfigUtil, StarterConfig } from './config'

type NestConfigRegisterOptions = NestConfigPathOptions

export class NestConfigModule {
  /**
   * 注册配置模块
   * - 默认按 config 目录约定解析配置文件
   * - 通过 NestStarter.start() 启动时传入 configPath，仅此时输出配置加载日志
   */
  public static register<T extends ClassConstructor<NestAppConfig>>(
    ConfigConSchema: T,
    options?: NestConfigRegisterOptions,
  ): DynamicModule {
    const configPath = options?.configPath ?? nestConfigUtil.resolveSync(options ?? {})

    if (options?.configPath != null) {
      nestConfigUtil.log(configPath)
    }

    return TypedConfigModule.forRoot({
      schema: ConfigConSchema,
      load: fileLoader({
        absolutePath: configPath.configFilePath,
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
