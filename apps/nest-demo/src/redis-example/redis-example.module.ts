import { Module } from '@nestjs/common'
import { RedisExampleController } from './redis-example.controller'
import { RedisExampleService } from './redis-example.service'

@Module({
  controllers: [RedisExampleController],
  providers: [RedisExampleService],
})
export class RedisExampleModule {}
