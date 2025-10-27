import { RedisModule } from '@142vip/nest-redis'
import { Module } from '@nestjs/common'
import { RedisExampleModule } from './redis-example/redis-example.module'

@Module({
  imports: [
    // 全局模块
    RedisModule.register({ url: 'redis://localhost:6379' }),

    // 最佳实践
    RedisExampleModule,
  ],
})
export class AppModule {}
