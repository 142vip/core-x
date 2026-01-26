import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { IsPositive } from 'class-validator'

@Exclude()
export class BaseEntityDto {
  /**
   * 自增主键
   * @example 1
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '自增主键',
    example: 1,
  })
  @IsPositive()
  id!: number
}
