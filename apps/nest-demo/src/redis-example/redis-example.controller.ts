import { Controller, Delete, Get, Post } from '@nestjs/common'
import { RedisExampleService } from './redis-example.service'

@Controller('redis-example')
export class RedisExampleController {
  constructor(
    private readonly redisExampleService: RedisExampleService,
  ) {}

  @Post('/')
  public async 'Post /'(): Promise<void> {
    await this.redisExampleService.setKey()
  }

  @Get('/')
  public async 'Get /'(): Promise<string | null> {
    return await this.redisExampleService.getKey()
  }

  @Delete('/')
  public async 'Delete /'(): Promise<void> {
    await this.redisExampleService.delKey()
  }
}
