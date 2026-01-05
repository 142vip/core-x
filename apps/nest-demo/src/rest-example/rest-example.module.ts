import { Module } from '@nestjs/common'
import { RestExampleController } from './rest-example.controller'

@Module({
  controllers: [RestExampleController],
})
export class RestExampleModule {}
