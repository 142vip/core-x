/**
 * 分页的请求参数
 * - 可继承
 */
export interface PaginationParams {
  /**
   * 页号
   */
  pageNum: number
  /**
   * 单页大小
   */
  pageSize: number
}

/**
 * 分页的响应参数
 */
export interface PaginationResponse<T> extends PaginationParams {
  /**
   * 总页数，拦截器最后处理
   */
  pageCount?: number
  /**
   * 数据总数
   */
  total: number
  /**
   * 分页数据
   */
  records: T[]
}
