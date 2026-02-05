import { ApiProperty } from '@nestjs/swagger'
import { ClassConstructor, Exclude, Expose, plainToInstance } from 'class-transformer'
import { BaseVo } from './base.vo'

/**
 * 分页出参
 */
@Exclude()
export class PaginationVo<T> extends BaseVo<PaginationVo<T>> {
  /**
   * 分页数据
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '分页数据',
    example: [],
  })
  records!: T[]

  /**
   * 当前页码
   * @example 1
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '当前页码',
    example: 1,
  })
  pageNum!: number

  /**
   * 每页数量
   * @example 10
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '每页数量',
    example: 10,
  })
  pageSize!: number

  /**
   * 总页数
   * @example 100
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '总页数',
    example: 100,
  })
  pageCount!: number

  /**
   * 数据总数
   * @example 1000
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '数据总数',
    example: 1000,
  })
  total!: number

  /**
   * 格式化分页数据
   */
  static format<T>(ItemVoCla: ClassConstructor<T>, params: PaginationVo<T>): PaginationVo<T> {
    const records = params.records.map(item => plainToInstance(ItemVoCla, item))

    return plainToInstance(PaginationVo<T>, {
      pageNum: params.pageNum,
      pageSize: params.pageSize,
      pageCount: Math.ceil(params.total / params.pageSize),
      total: params.total,
      records,
    })
  }
}
