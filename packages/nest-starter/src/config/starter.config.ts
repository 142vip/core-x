import { DataType } from '@142vip/nest-typeorm'
import { Type } from 'class-transformer'
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { LoggerConfig } from './plugin/logger.config'
import { RedisConfig } from './plugin/redis.config'
import { SequelizeConfig } from './plugin/sequelize.config'
import { SwaggerConfig } from './plugin/swagger.config'
import { TypeormMysqlConfig, TypeormPostgresConfig } from './plugin/typeorm.config'

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

  @Type((options) => {
    const { type, url } = (options?.object as any).typeorm
    const dataType = type ?? new URL(url).protocol.slice(0, -1)

    if (dataType === DataType.POSTGRES)
      return TypeormPostgresConfig

    if (dataType === DataType.MYSQL)
      return TypeormMysqlConfig

    //  默认PG
    return TypeormPostgresConfig
  })
  @ValidateNested()
  @IsOptional()
  typeorm?: TypeormMysqlConfig | TypeormPostgresConfig

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
