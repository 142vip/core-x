import { IsOptional, IsString } from 'class-validator'

export class SequelizeConfig {
  @IsOptional()
  @IsString()
  public readonly a?: string
}
