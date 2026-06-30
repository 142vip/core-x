import { DynamicModule, Global, Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type'
import { DEFAULT_DATA_SOURCE_NAME } from '@nestjs/typeorm/dist/typeorm.constants'
import { DataSource, DataSourceOptions } from 'typeorm'

/**
 * 参考：
 * - https://docs.nestjs.cn/techniques/sql
 * - https://github.com/nestjs/typeorm/blob/master/lib/typeorm.module.ts
 */
@Global()
@Module({})
export class NestTypeOrmModule {
  /**
   * 同步注册数据库连接。
   * 直接委托 TypeOrmModule.forRoot，避免额外包装导致 TypeOrmCoreModule 的 DataSource 无法全局注入。
   */
  public static forRoot(options: TypeOrmModuleOptions = {}): DynamicModule {
    return TypeOrmModule.forRoot(options)
  }

  /**
   * 异步注册数据库连接，行为与 TypeOrmModule.forRootAsync 一致。
   */
  public static forRootAsync(options: TypeOrmModuleAsyncOptions): DynamicModule {
    return TypeOrmModule.forRootAsync(options)
  }

  /**
   * 注册实体
   * 完全兼容 TypeOrmModule.forFeature()
   */
  public static forFeature(
    entities: EntityClassOrSchema[] = [],
    dataSource:
      | DataSource
      | DataSourceOptions
      | string = DEFAULT_DATA_SOURCE_NAME,
  ): DynamicModule {
    return TypeOrmModule.forFeature(entities, dataSource)
  }

  /**
   * 兼容方法，等同于 forRoot
   * 完全兼容 TypeOrmModule.forRoot()
   */
  public static register(config: TypeOrmModuleOptions): DynamicModule {
    return this.forRoot(config)
  }
}
