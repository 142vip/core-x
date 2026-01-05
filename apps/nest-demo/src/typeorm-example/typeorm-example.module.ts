import { NestTypeOrmModule } from '@142vip/nest-typeorm'
import { Module } from '@nestjs/common'
import { DatabaseService } from './database.service'
import { TypeOrmExampleController } from './typeorm-example.controller'
import { TypeOrmExampleService } from './typeorm-example.service'
import { UserAccountEntity } from './user-account.entity'

@Module({
  imports: [
    NestTypeOrmModule.forFeature([
      UserAccountEntity,
    ]),
  ],
  controllers: [TypeOrmExampleController],
  providers: [TypeOrmExampleService, DatabaseService],
  exports: [DatabaseService],
})
export class TypeormExampleModule {}
