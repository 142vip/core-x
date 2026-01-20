import { ApiResponseSkip } from '@142vip/nest'
import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TypeOrmExampleService } from './typeorm-example.service'

@Controller('typeorm-example')
@ApiTags('typeorm')
export class TypeOrmExampleController {
  constructor(
    private readonly typeormExampleService: TypeOrmExampleService,
  ) {}

  /**
   * 获取 - 单条
   */
  @Get('/list-id')
  @ApiResponseSkip()
  public async 'Get /'() {
    return await this.typeormExampleService.getUserAccount()
  }

  /**
   * 获取 - 列表
   */
  @Get('/list')
  @ApiResponseSkip()
  public async 'Get /list'() {
    return await this.typeormExampleService.getUserAccountList()
  }
}
