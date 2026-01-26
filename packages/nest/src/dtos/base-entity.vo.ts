import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { BaseVo } from './base.vo'

@Exclude()
export class BaseEntityVo extends BaseVo<BaseEntityVo> {
  /**
   * 主键
   * @example 1
   */
  @ApiProperty({
    required: true,
    description: '主键',
    example: 1,
  })
  @Expose() id!: number

  /**
   * 创建时间
   * @example "2023-01-01T00:00:00.000Z"
   */
  @ApiProperty({
    required: true,
    description: '创建时间',
    example: '2023-01-01T00:00:00.000Z',
  })
  @Expose() createdAt!: Date

  /**
   * 更新时间
   * @example "2023-01-01T00:00:00.000Z"
   */
  @ApiProperty({
    required: true,
    description: '更新时间',
    example: '2023-01-01T00:00:00.000Z',
  })
  @Expose() updatedAt!: Date
}
