import type { NestModule } from '@142vip/nest'
import type { DynamicModule, Type } from '@nestjs/common'

/**
 * 业务根模块约定（类型约束，非强制继承）
 *
 * 为何不用基类：
 * - TypeScript 无法对子类的 static register() 做编译期强制
 * - Nest 生态普遍使用 @Module + static register()，与 NestRootModule 等一致
 * - resolveAppModule 在运行时检测 register 是否存在即可
 *
 * 使用方式：业务 AppModule 实现同名 static register，无需 extends 任何类
 */
export interface NestAppModuleClass {
  register: () => NestModule
}

/**
 * NestStarter.start 的业务模块入参
 *
 * | 形式 | 场景 |
 * |------|------|
 * | 带 static register() 的 Module | 需按配置组装 imports（推荐） |
 * | 普通 Module / DynamicModule | 不依赖配置选模块，直接传入 |
 */
export type NestStarterAppModule = Type<unknown> | DynamicModule | NestAppModuleClass

/**
 * 配置已绑定后解析业务根模块
 *
 * 调用时机：NestStarter.start 内 useConfigModule 之后
 * - 有 register → 调用 register()（此时 nestStaterConfig 已可用）
 * - 无 register → 原样作为 Nest 模块使用
 */
export function resolveAppModule(appModule: NestStarterAppModule): NestModule {
  if (typeof appModule === 'function'
    && typeof (appModule as { register?: unknown }).register === 'function') {
    return (appModule as unknown as NestAppModuleClass).register()
  }

  return appModule as NestModule
}
