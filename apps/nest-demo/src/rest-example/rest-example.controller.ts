import { ApiResponseNull, ApiResponseObject, ApiResponsePagination, PaginationResponse } from '@142vip/nest'
import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import {
  CreateRestExampleDTO,
  GetRestExampleDTO,
  GetRestExampleListDTO,
} from './rest-example.dto'
import { RestExampleService } from './rest-example.service'
import { GetRestExampleListVo, GetRestExampleVo } from './rest-example.vo'

@Controller('rest-example')
@ApiTags('rest')
export class RestExampleController {
  constructor(
    private readonly restExampleService: RestExampleService,
  ) {}

  /**
   * 创建
   */
  @Post('/')
  @ApiResponseNull()
  public 'Post /'(
    @Body() _params: CreateRestExampleDTO,
  ): void {

  }

  /**
   * 获取 - 单页
   */
  @Get('/')
  @ApiResponseObject(GetRestExampleVo)
  public async 'Get /'(
    @Query() _params: GetRestExampleDTO,
  ): Promise<GetRestExampleVo> {
    const example = this.restExampleService.getExample()
    return new GetRestExampleVo(example)
  }

  /**
   * 获取 - 列表
   */
  @Get('/list')
  @ApiResponsePagination(GetRestExampleListVo)
  public async 'Get /list'(
    @Query() params: GetRestExampleListDTO,
  ): Promise<PaginationResponse<GetRestExampleListVo>> {
    const examples = this.restExampleService.getExampleList()
    return {
      total: 1,
      records: examples,
      pageNum: params.pageNum,
      pageSize: params.pageSize,
    }
  }

  /**
   * 更新
   */
  @Patch('/')
  @ApiResponseNull()
  public 'Patch /'(): void {

  }

  /**
   * 删除
   */
  @Delete()
  @ApiResponseNull()
  public 'Delete /'(): void {

  }
}
