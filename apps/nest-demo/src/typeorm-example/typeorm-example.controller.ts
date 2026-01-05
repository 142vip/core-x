import { Controller, Get } from '@nestjs/common'
import { TypeOrmExampleService } from './typeorm-example.service'
import { UserAccountEntity } from './user-account.entity'

@Controller('typeorm-example')
export class TypeOrmExampleController {
  constructor(
    private readonly typeormExampleService: TypeOrmExampleService,
  ) { }

  @Get('/typeorm-example')
  public async 'Get /list'(): Promise<UserAccountEntity[]> {
    return await this.typeormExampleService.getUserAccountList()
  }
}
