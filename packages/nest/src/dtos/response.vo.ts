import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { BaseVo } from './base.vo'

@Exclude()
export class ResponseVo<T> extends BaseVo<T> {
  /**
   * 操作结果
   * @example true
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '操作结果',
    example: true,
  })
  success!: boolean
}

/**
 * 响应-空数据
 */
@Exclude()
export class ResponseNullVo<T> extends BaseVo<T> {
  /**
   * 操作结果
   * @example true
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '操作结果',
    example: true,
  })
  success!: boolean
}

/**
 * 响应-请求成功
 */
@Exclude()
export class ResponseSuccessVo<T> extends ResponseVo<T> {
  /**
   * 结果
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '结果',
  })
  data!: T
}

/**
 * 响应-请求失败
 */
@Exclude()
export class ResponseErrorVo<T> extends ResponseVo<T> {
  /**
   * 错误信息
   * @example '参数错误'
   */
  @Expose()
  @ApiProperty({
    required: true,
    description: '错误信息',
    example: '参数错误',
  })
  message!: string
}
