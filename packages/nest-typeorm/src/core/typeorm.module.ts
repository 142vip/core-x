import { DynamicModule, Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

export * from '@nestjs/typeorm'
export * from 'typeorm'

/**
 * 参考：
 * - https://docs.nestjs.cn/techniques/sql
 * - https://github.com/nestjs/typeorm/blob/master/lib/typeorm.module.ts
 */
@Module({})
export class NestTypeOrmModule extends TypeOrmModule {
  /**
   * 同步注册数据库连接，全局模块
   */
  public static register(config: TypeOrmModuleOptions): DynamicModule {
    return this.forRoot(config)
  }
}
