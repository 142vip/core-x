import { Module } from '@nestjs/common'
import { ConfigExampleModule } from './config-example/config-example.module'
import { RedisExampleModule } from './redis-example/redis-example.module'
import { RestExampleModule } from './rest-example/rest-example.module'
import { TypeormExampleModule } from './typeorm-example/typeorm-example.module'

@Module({
  imports: [
    TypeormExampleModule,
    RedisExampleModule,
    ConfigExampleModule,
    RestExampleModule,
  ],
})
export class AppModule {}
