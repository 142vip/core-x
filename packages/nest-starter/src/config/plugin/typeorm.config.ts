import type { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions'
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { TransformToBoolean, TransformToNumber } from '@142vip/nest'
import { DataType } from '@142vip/nest-typeorm'
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, Max } from 'class-validator'

export class TypeormConfig implements BaseDataSourceOptions {
  @IsString()
  @IsOptional()
  url?: string

  @IsString()
  @IsOptional()
  host?: string

  @IsNumber()
  @IsOptional()
  @TransformToNumber()
  port?: number

  @IsString()
  @IsOptional()
  username?: string

  @IsString()
  @IsOptional()
  password?: string

  @IsString()
  @IsOptional()
  database?: string

  @IsString()
  type!: 'mysql' | 'postgres'

  @TransformToBoolean()
  @IsBoolean()
  autoLoadEntities = true

  @TransformToBoolean()
  @IsBoolean()
  synchronize = false

  @TransformToBoolean()
  @IsBoolean()
  debug = false

  @TransformToBoolean()
  @IsBoolean()
  logging = false

  // 数据库连接池，默认10个，若希望控制typeorm内置线程池的连接数，则使用maxConnections配置
  @IsInt()
  @IsOptional()
  @Max(25)
  poolSize?: number
}

/**
 * MySQL
 */
export class TypeormMysqlConfig extends TypeormConfig implements MysqlConnectionOptions {
  @IsString()
  override type = DataType.MYSQL as const

  @TransformToBoolean()
  @IsBoolean()
  supportBigNumbers = true

  @TransformToBoolean()
  @IsBoolean()
  bigNumberStrings = false

  @IsString()
  // 官方默认值为utf8_general_ci，不支持emoji表情，只适用于mysql
  charset = 'utf8mb4_unicode_ci'
}

/**
 * PostgreSQL
 */
export class TypeormPostgresConfig extends TypeormConfig implements PostgresConnectionOptions {
  @IsString()
  override type = DataType.POSTGRES as const

  @IsBoolean()
  @TransformToBoolean()
  parseInt8 = true

  @IsOptional()
  @IsString()
  schema?: string
}
