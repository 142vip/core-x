import { nestStaterConfig } from '@142vip/nest-starter'
import { DynamicModule, Module } from '@nestjs/common'
import { ConfigExampleModule } from './config-example/config-example.module'
import { RedisExampleModule } from './redis-example/redis-example.module'
import { RestExampleModule } from './rest-example/rest-example.module'
import { TypeormExampleModule } from './typeorm-example/typeorm-example.module'

/**
 * 业务根模块
 *
 * 使用 static register：
 * - NestStarter 在配置就绪后调用（此时 nestStaterConfig 可用）
 * - 按配置决定是否加载 Redis / TypeORM 等业务模块
 *
 * main.ts 仍传 AppModule 即可：
 *   NestStarter.getInstance().start(AppModule, Config)
 */
@Module({})
export class AppModule {
  public static register(): DynamicModule {
    const imports = [
      ConfigExampleModule,
      RestExampleModule,
    ]

    // 配置了 typeorm 再加载 TypeORM 示例
    if (nestStaterConfig.typeorm != null) {
      imports.push(TypeormExampleModule)
    }

    // 配置了 redis 再加载 Redis 示例
    if (nestStaterConfig.redis != null) {
      imports.push(RedisExampleModule)
    }

    return {
      module: AppModule,
      imports,
    }
  }
}
