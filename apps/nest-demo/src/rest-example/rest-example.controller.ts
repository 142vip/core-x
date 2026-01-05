import { PaginationVo } from '@142vip/nest'
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { CreateRestExampleDTO, GetRestExampleDTO, GetRestExampleListDTO } from './rest-example.dto'
import { GetRestExampleListVo, GetRestExampleVo } from './rest-example.vo'

@Controller('rest-example')
export class RestExampleController {
  constructor(
  ) {}

  /**
   * 创建
   */
  @Post('/')
  public 'Post /'(
    @Body() _params: CreateRestExampleDTO,
  ): void {

  }

  /**
   * 获取
   */
  @Get('/')
  public 'Get /'(
    @Body() params: GetRestExampleDTO,
  ): GetRestExampleVo {
    return new GetRestExampleVo(params)
  }

  @Get('/list')
  public 'Get /list'(
    @Body() params: GetRestExampleListDTO,
  ): PaginationVo<GetRestExampleListVo> {
    return new PaginationVo<GetRestExampleListVo>({
      total: 1,
      data: [],
      pageNum: params.pageNum,
      pageSize: params.pageSize,
    })
  }

  /**
   * 更新
   */
  @Patch('/')
  public 'Patch /'(): void {

  }

  @Delete()
  public 'Delete /'(): void {

  }
}
