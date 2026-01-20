import { BaseVo } from '@142vip/nest'
import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class TestVo extends BaseVo<TestVo> {
  /**
   * 测试用
   * @example 1
   */
  @Expose()
  id!: number
}
