import { Controller, Delete, Get, Post } from '@nestjs/common'
import { RedisExampleService } from './redis-example.service'

@Controller('redis-example')
export class RedisExampleController {
  constructor(
    private readonly redisExampleService: RedisExampleService,
  ) {}

  /**
   * 创建
   */
  @Post('/')
  public async 'Post /'(): Promise<void> {
    await this.redisExampleService.setKey()
  }

  /**
   * 获取
   */
  @Get('/')
  public async 'Get /'(): Promise<string | null> {
    return await this.redisExampleService.getKey()
  }

  /**
   * 删除
   * @constructor
   */
  @Delete('/')
  public async 'Delete /'(): Promise<void> {
    await this.redisExampleService.delKey()
  }
}
