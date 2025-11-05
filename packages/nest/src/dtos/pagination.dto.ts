import { Exclude, Expose, Transform } from 'class-transformer'
import { IsOptional, IsPositive } from 'class-validator'

/**
 * 默认分页参数
 */
@Exclude()
export class PaginationDto {
  /**
   * 页号 默认1
   */
  @Expose()
  @IsOptional()
  @Transform(({ value }) => Number(value) ?? 1)
  @IsPositive()
  pageNum!: number

  /**
   * 单页大小，默认10
   */
  @Expose()
  @IsOptional()
  @Transform(({ value }) => Number(value) ?? 10)
  @IsPositive()
  pageSize!: number
}
