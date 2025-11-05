import { Exclude, Expose } from 'class-transformer'
import { BaseVo } from './base.vo'

/**
 * 分页
 */
@Exclude()
export class PaginationVo<T> extends BaseVo<PaginationVo<T>> {
  /**
   * 总数
   */
  @Expose()
  total!: number

  /**
   * 分页数据
   */
  @Expose()
  data!: T[]

  /**
   * 页码
   */
  @Expose()
  pageNum!: number

  /**
   * 每页数量
   */
  @Expose()
  pageSize!: number
}
