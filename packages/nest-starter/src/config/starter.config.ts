import { Type } from 'class-transformer'
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { LoggerConfig } from './plugin/logger.config'
import { RedisConfig } from './plugin/redis.config'
import { SequelizeConfig } from './plugin/sequelize.config'
import { SwaggerConfig } from './plugin/swagger.config'
import { TypeOrmConfig } from './plugin/typeorm.config'

export class StarterConfig {
  @IsNumber()
  @IsNotEmpty()
  public readonly port!: number

  @IsOptional()
  @IsString()
  globalPrefix?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => RedisConfig)
  redis?: RedisConfig

  @ValidateNested()
  @Type(() => TypeOrmConfig)
  @IsOptional()
  typeorm?: TypeOrmConfig

  @ValidateNested()
  @Type(() => SequelizeConfig)
  @IsOptional()
  sequelize?: SequelizeConfig

  @IsBoolean()
  @IsOptional()
  enableSwagger?: boolean

  @ValidateNested()
  @Type(() => SwaggerConfig)
  @IsOptional()
  swagger?: SwaggerConfig

  @IsBoolean()
  @IsOptional()
  enableLogger?: boolean

  @ValidateNested()
  @Type(() => LoggerConfig)
  @IsOptional()
  public readonly logger?: LoggerConfig
}
