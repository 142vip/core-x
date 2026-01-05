import { BaseVo } from '@142vip/nest'
import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class RestExampleVo extends BaseVo<RestExampleVo> {
  @Expose() id?: number
  @Expose() name?: string
}

@Exclude()
export class GetRestExampleVo extends RestExampleVo {}

@Exclude()
export class GetRestExampleListVo extends RestExampleVo {}
