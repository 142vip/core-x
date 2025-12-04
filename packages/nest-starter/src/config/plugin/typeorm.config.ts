import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class TypeOrmConfig {
  @IsString()
  @IsNotEmpty()
  url!: string

  @IsOptional()
  @IsString()
  schema?: string

  @IsOptional()
  @IsString()
  logging: boolean = false
}
