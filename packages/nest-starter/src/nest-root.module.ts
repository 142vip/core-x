import { DynamicModule, Module } from '@nestjs/common'

@Module({
  imports: [
    // NestConfigModule,
  ],
})
export class NestRootModule {
  public static register(rootModuleOptions: Omit<DynamicModule, 'module'>): DynamicModule {
    return {
      module: NestRootModule,
      ...rootModuleOptions,
    }
  }
}
