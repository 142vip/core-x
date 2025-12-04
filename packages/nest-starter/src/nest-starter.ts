import type { ClassConstructor } from 'class-transformer'
import { NestModule } from '@142vip/nest'
import { LoggerLevelEnum, NestLoggerModule } from '@142vip/nest-logger'
import { NestRedisModule } from '@142vip/nest-redis'
import { NestTypeOrmModule } from '@142vip/nest-typeorm'
import { vipLogger } from '@142vip/utils'
import {
  ClassSerializerInterceptor,
  HttpStatus,
  NestApplicationOptions,
  VersioningType,
} from '@nestjs/common'
import { APP_INTERCEPTOR, NestFactory } from '@nestjs/core'
import { selectConfig } from 'nest-typed-config'
import { NestAppConfig } from './app.config'
import { NestConfigModule, nestStaterConfig } from './config.module'
import { NestRootModule } from './nest-root.module'
import { NestUtil } from './nest-util'
import { SwaggerManager } from './swagger/swagger.manager'

/**
 * Nest框架启动器
 */
export class NestStarter {
  private static instance: NestStarter
  /**
   *
   * @param nestApplicationOptions
   * @protected
   */
  protected constructor(
    protected readonly nestApplicationOptions?: NestApplicationOptions,
  ) { }

  /**
   * 单例
   * @param nestApplicationOptions 应用启动选项
   */
  public static getInstance(
    nestApplicationOptions?: NestApplicationOptions,
  ): NestStarter {
    if (this.instance == null)
      this.instance = new this(nestApplicationOptions)

    return this.instance
  }

  /**
   * 入口
   */
  public async start(appModule: NestModule, rootConfigSchema: ClassConstructor<NestAppConfig>): Promise<void> {
    const ConfigModule = NestConfigModule.register(rootConfigSchema)

    // 整个项目配置
    const rootConfig = selectConfig(ConfigModule, rootConfigSchema)

    // 开启日志
    if (nestStaterConfig.enableLogger)
      vipLogger.logByBlank(JSON.stringify(rootConfig, null, 2))

    const rootModule = NestRootModule.register({
      imports: [
        // 配置模块
        ConfigModule,

        // 全局模块
        ...this.registerGlobalModules(),

        // 业务模块
        appModule,
      ],
      providers: this.getProviders(),
    })

    /**
     * 创建应用
     */
    const app = await NestFactory.create(rootModule, {
      bufferLogs: true,
      ...this.nestApplicationOptions,
    })

    /**
     * 应用日志
     */
    if (nestStaterConfig.enableLogger)
      NestLoggerModule.useLogger(app)

    // 路由版本功能
    // apiVersioning必须在swagger之前加载
    app.enableVersioning({ type: VersioningType.URI })

    if (nestStaterConfig.enableSwagger && nestStaterConfig.swagger != null) {
      new SwaggerManager(nestStaterConfig.swagger).register(app)

      // TODO 打印swagger相关信息
    }

    // 启用关闭钩子（for优雅下线）
    app.enableShutdownHooks()

    // 添加健康检查路由
    app.getHttpAdapter()
      .get('/health', (_req, res) => res.status(HttpStatus.OK).send('SERVER OK'))

    // 应用启动
    await app.listen(nestStaterConfig.port!)

    // 优化日志
    void new NestUtil(app, nestStaterConfig).printAppModuleStarterLogger()
  }

  /**
   * 注册全局模块
   * @private
   */
  private registerGlobalModules(): NestModule[] {
    const imports: NestModule[] = []

    if (nestStaterConfig.enableLogger) {
      imports.push(NestLoggerModule.register({ consoleLogger: { level: LoggerLevelEnum.trace } }))
    }

    // 注册Redis模块
    if (nestStaterConfig.redis != null) {
      imports.push(NestRedisModule.register(nestStaterConfig.redis))
    }

    // 注册TypeOrm模块
    if (nestStaterConfig.typeorm != null) {
      imports.push(NestTypeOrmModule.register(nestStaterConfig.typeorm))
    }

    return imports
  }

  private getProviders() {
    return [
      /**
       * 传播上下文
       */
      // {
      //   provide: APP_INTERCEPTOR,
      //   useClass: PropagationInterceptor,
      // },
      /**
       * 统一响应体
       */
      // {
      //   provide: APP_INTERCEPTOR,
      //   useClass: ResponseInterceptor,
      // },
      /**
       * 序列化类(过滤不正常字段)
       */
      {
        provide: APP_INTERCEPTOR,
        useClass: ClassSerializerInterceptor,
      },
      /**
       * 校验入参
       */
      // {
      //   provide: APP_PIPE,
      //   useValue: new CustomValidationPipe({
      //     // 下面两个class-transformer参数用于尝试将传进来的参数转成dto定义的类型
      //     transform: true,
      //     transformOptions: { enableImplicitConversion: true }, // TODO to delete it
      //     // 是否禁用DTO参数校验错误详情
      //     disableErrorMessages: nestStaterConfig.disableErrorMessages,
      //     // 下面两个class-validator参数用于禁止未知的参数
      //     // whitelist: true,
      //     // forbidNonWhitelisted: true,
      //     ...(nestStaterConfig.disableErrorMessages
      //       ? {
      //           exceptionFactory: (_errors): PlatformException => {
      //             return new PlatformException(ErrorCodes.BAD_REQUEST, HttpStatus.BAD_REQUEST)
      //           },
      //         }
      //       : {}),
      //   }),
      // },
      /**
       * 拦截框架内部异常
       */
      // {
      //   provide: APP_FILTER,
      //   useClass: GlobalFilter,
      // },
      // /**
      //  * 限制请求来源页
      //  */
      // ...(nestStaterConfig.allowedReferers != null
      //   ? [{
      //       provide: APP_GUARD,
      //       useClass: RefererGuard,
      //     }]
      //   : []),
    ]
  }
}
