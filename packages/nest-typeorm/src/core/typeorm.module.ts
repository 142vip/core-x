import { DynamicModule, Global, Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { EntitiesMetadataStorage } from '@nestjs/typeorm/dist/entities-metadata.storage'
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type'
import { DEFAULT_DATA_SOURCE_NAME } from '@nestjs/typeorm/dist/typeorm.constants'
import { createTypeOrmProviders } from '@nestjs/typeorm/dist/typeorm.providers'
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
   * 同步注册数据库连接
   */
  public static forRoot(options?: TypeOrmModuleOptions): DynamicModule {
    // 关键修复：避免重复实例化，确保同一个模块实例
    const typeOrmModule = TypeOrmModule.forRoot(options)
    return {
      module: NestTypeOrmModule,
      imports: [{ ...typeOrmModule, global: true }],
      exports: [typeOrmModule],
    }
  }

  /**
   * 异步注册数据库连接
   * 完全兼容 TypeOrmModule.forRootAsync()
   */
  public static forRootAsync(options: TypeOrmModuleAsyncOptions): DynamicModule {
    // 关键修复：避免重复实例化，确保同一个模块实例
    const typeOrmModule = TypeOrmModule.forRootAsync(options)
    return {
      module: NestTypeOrmModule,
      imports: [{ ...typeOrmModule, global: true }],
      exports: [typeOrmModule],
    }
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
    const providers = createTypeOrmProviders(entities, dataSource)
    EntitiesMetadataStorage.addEntitiesByDataSource(dataSource, [...entities])
    return {
      module: NestTypeOrmModule,
      imports: [TypeOrmModule.forFeature(entities, dataSource)],
      providers,
      exports: providers,
    }
  }

  /**
   * 兼容方法，等同于 forRoot
   * 完全兼容 TypeOrmModule.forRoot()
   */
  public static register(config: TypeOrmModuleOptions): DynamicModule {
    return this.forRoot(config)
  }
}
