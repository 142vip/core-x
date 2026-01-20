import { ApiResponseNull, ApiResponseSkip } from '@142vip/nest'
import { Controller, Delete, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { RedisExampleService } from './redis-example.service'

@Controller('redis-example')
@ApiTags('redis')
export class RedisExampleController {
  constructor(
    private readonly redisExampleService: RedisExampleService,
  ) {}

  /**
   * 创建
   */
  @Post('/')
  @ApiResponseNull()
  public async 'Post /'(): Promise<void> {
    await this.redisExampleService.setKey()
  }

  /**
   * 获取 所有缓存Key
   */
  @Get('/')
  @ApiResponseSkip()
  public async 'Get /'(): Promise<string | null> {
    return await this.redisExampleService.getKey()
  }

  /**
   * 删除
   */
  @Delete('/')
  @ApiResponseNull()
  public async 'Delete /'(): Promise<void> {
    await this.redisExampleService.delKey()
  }
}
