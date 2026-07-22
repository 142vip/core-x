import type { ClassConstructor } from 'class-transformer'
import { DynamicModule } from '@nestjs/common'
import { fileLoader, selectConfig, TypedConfigModule } from 'nest-typed-config'
import { NestAppConfig } from './app.config'
import { NestConfigPathOptions, nestConfigUtil, StarterConfig } from './config'

type NestConfigRegisterOptions = NestConfigPathOptions

/**
 * 当前生效的配置模块
 * - 由 NestStarter.start() 在解析配置文件后通过 useConfigModule 注册
 * - TypedConfigModule 默认为 global，业务模块可直接 DI，无需再 imports 配置模块
 */
let activeConfigModule: DynamicModule | undefined
/** 根配置 Schema（可能是业务侧 extends NestAppConfig 的子类） */
let activeRootConfigSchema: ClassConstructor<NestAppConfig> = NestAppConfig

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
 * 注册当前生效的配置模块
 * - NestStarter.start 在用户选择（开发）或加载 config.js（生产）后调用
 * - rootConfigSchema：业务根配置类（如 extends NestAppConfig 的 Config）
 */
export function useConfigModule(
  configModule: DynamicModule,
  rootConfigSchema: ClassConstructor<NestAppConfig> = NestAppConfig,
): void {
  activeConfigModule = configModule
  activeRootConfigSchema = rootConfigSchema
}

/** 获取当前生效的配置模块；尚未注册时抛错，避免 start 前误读 config.js */
function getActiveConfigModule(): DynamicModule {
  if (activeConfigModule == null) {
    throw new Error(
      '[@142vip/nest-starter] 配置尚未就绪：请先完成 NestStarter.start()（开发模式需等配置选择结束）后再访问 nestStaterConfig / nestAppConfig / getConfig',
    )
  }
  return activeConfigModule
}

/** 配置值代理：每次属性访问都读当前生效配置 */
function createConfigValueProxy<T extends object>(resolve: () => T): T {
  return new Proxy({} as T, {
    get(_target, property, receiver) {
      const config = resolve()
      const value = Reflect.get(config as object, property, receiver)
      return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(config) : value
    },
    has(_target, property) {
      return Reflect.has(resolve() as object, property)
    },
    ownKeys() {
      return Reflect.ownKeys(resolve() as object)
    },
    getOwnPropertyDescriptor(_target, property) {
      return Reflect.getOwnPropertyDescriptor(resolve() as object, property)
    },
  })
}

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
  return selectConfig(getActiveConfigModule(), configSchema, { allowOptional: true }) as T | undefined
}

/**
 * 启动配置
 * - 读取当前生效配置（须在 NestStarter 绑定配置之后访问）
 *
 * @example
 * ```ts
 * import { nestStaterConfig } from '@142vip/nest-starter'
 * const port = nestStaterConfig.port
 * ```
 */
export const nestStaterConfig: StarterConfig = createConfigValueProxy(() => getConfig(StarterConfig))

/**
 * 整个应用配置
 * - 规则同 nestStaterConfig
 *
 * @example
 * ```ts
 * import { nestAppConfig } from '@142vip/nest-starter'
 * const starter = nestAppConfig.starter
 * ```
 */
export const nestAppConfig: NestAppConfig = createConfigValueProxy(
  () => getConfig(activeRootConfigSchema),
)
