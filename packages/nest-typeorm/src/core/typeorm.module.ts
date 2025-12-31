import { DynamicModule } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type'

/**
 * 参考：https://docs.nestjs.cn/techniques/sql
 */
export class NestTypeOrmModule {
  /**
   * 同步注册数据库连接，全局模块
   */
  public static register(config: TypeOrmModuleOptions): DynamicModule {
    return this.forRoot(config)
  }

  /**
   * 同步注册数据库连接
   */
  public static forRoot(options: TypeOrmModuleOptions, dataSourceName?: string): DynamicModule {
    return {
      module: NestTypeOrmModule,
      imports: [
        TypeOrmModule.forRoot({
          ...options,
          // 连接名
          ...dataSourceName !== null ? { name: dataSourceName } : {},
        }),
      ],
      global: true,
    }
  }

  /**
   * 异步注册数据库连接
   */
  public static forRootAsync(options: TypeOrmModuleAsyncOptions, dataSourceName?: string): DynamicModule {
    return {
      module: NestTypeOrmModule,
      imports: [TypeOrmModule.forRootAsync({
        ...options,
        // 连接名
        ...dataSourceName !== null ? { name: dataSourceName } : {},
      })],
      global: true,
    }
  }

  /**
   * 注册实体
   */
  public static forFeature(entities?: EntityClassOrSchema[], dataSourceName?: string): DynamicModule {
    return TypeOrmModule.forFeature(entities, dataSourceName)
  }
}
