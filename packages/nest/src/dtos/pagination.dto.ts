import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose, Transform } from 'class-transformer'
import { IsOptional, IsPositive } from 'class-validator'

/**
 * 默认页号
 */
export const DEFAULT_PAGE_NUM = 1
/**
 * 默认单页大小
 */
export const DEFAULT_PAGE_SIZE = 10

/**
 * 分页入参
 */
@Exclude()
export class PaginationDto {
  /**
   * 页号 默认1
   */
  @Expose()
  @ApiProperty({
    required: false,
    description: '页号，默认1',
    example: 1,
  })
  @IsOptional()
  @IsPositive()
  @Transform(({ value }) => {
    return value ?? DEFAULT_PAGE_NUM
  })
  pageNum!: number

  /**
   * 单页大小，默认10
   */
  @Expose()
  @ApiProperty({
    required: false,
    description: '单页大小，默认10',
    example: 10,
  })
  @IsOptional()
  @IsPositive()
  @Transform(({ value }) => {
    return value ?? DEFAULT_PAGE_SIZE
  })
  pageSize!: number
}
