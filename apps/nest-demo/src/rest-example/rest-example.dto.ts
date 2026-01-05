import { PaginationDto } from '@142vip/nest'
import {
  SwaggerIntersectionType,
  SwaggerPartialType,
  SwaggerPickType,
} from '@142vip/nest-starter'
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

  @Expose()
  @IsString()
  name!: string
}

export class CreateRestExampleDTO extends RestExampleDto {
}

@Exclude()
export class UpdateRestExampleDTO extends SwaggerPartialType(SwaggerPickType(RestExampleDto, ['name'])) {

}

@Exclude()
export class DeleteRestExampleDTO {

}

@Exclude()
export class GetRestExampleDTO extends SwaggerPartialType(RestExampleDto) {

}

export class GetRestExampleListDTO extends SwaggerIntersectionType(PaginationDto, SwaggerPartialType(RestExampleDto)) {

}
