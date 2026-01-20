import { ApiResponseSkip } from '@142vip/nest'
import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ConfigExampleService } from './config-example.service'

/**
 * 配置
 */
@Controller('config-example')
@ApiTags('config')
export class ConfigExampleController {
  constructor(
    private readonly configExampleService: ConfigExampleService,
  ) {}

  /**
   * 获取配置
   */
  @Get('/')
  @ApiResponseSkip()
  public 'Get /'() {
    return this.configExampleService.getStarterConfig()
  }
}
