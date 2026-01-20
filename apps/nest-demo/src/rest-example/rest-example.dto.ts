import { PaginationDto } from '@142vip/nest'

import { Exclude, Expose } from 'class-transformer'
import { IsNumber, IsString } from 'class-validator'

@Exclude()
export class RestExampleDto {
  /**
   * @example 1
   */
  @Expose()
  @IsNumber()
  id!: number

  /**
   * 姓名
   * @example 张三
   */
  @Expose()
  @IsString()
  name!: string
}

@Exclude()
export class CreateRestExampleDTO extends RestExampleDto {
}

@Exclude()
export class UpdateRestExampleDTO {

}

@Exclude()
export class DeleteRestExampleDTO {

}

@Exclude()
export class GetRestExampleDTO extends RestExampleDto {

}

@Exclude()
export class GetRestExampleListDTO extends PaginationDto {
  /**
   * 测试
   */
  @Expose()
  name!: number
}
