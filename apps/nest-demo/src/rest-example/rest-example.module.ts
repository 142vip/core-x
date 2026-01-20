import { Module } from '@nestjs/common'
import { RestExampleController } from './rest-example.controller'
import { RestExampleService } from './rest-example.service'

@Module({
  controllers: [RestExampleController],
  providers: [RestExampleService],
})
export class RestExampleModule {}
