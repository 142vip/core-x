import { BaseEntityDto, PaginationDto } from '@142vip/nest'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { IsString } from 'class-validator'

@Exclude()
export class RestExampleDto extends BaseEntityDto {
  /**
   * 姓名
   * @example 张三
   */
  @Expose()
  @IsString()
  name!: string

  /**
   * 自定义信息
   */
  @Expose()
  @ApiPropertyOptional({
    example: {
      age: 18,
      sex: '男',
    },
  })
  info?: Record<string, any>
}

@Exclude()
export class CreateRestExampleDTO extends RestExampleDto {
}

@Exclude()
export class UpdateRestExampleDTO extends RestExampleDto {

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
