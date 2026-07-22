import { describe, expect, it } from '@jest/globals'
import { Module } from '@nestjs/common'
import { resolveAppModule } from '../src/nest-app.module'

describe('resolveAppModule', () => {
  it('优先调用 static register', () => {
    @Module({})
    class DemoAppModule {
      public static register() {
        return {
          module: DemoAppModule,
          imports: [class FeatureModule {}],
        }
      }
    }

    expect(resolveAppModule(DemoAppModule)).toMatchObject({
      module: DemoAppModule,
      imports: [expect.any(Function)],
    })
  })

  it('普通 Module 类直接返回', () => {
    @Module({})
    class PlainModule {}

    expect(resolveAppModule(PlainModule)).toBe(PlainModule)
  })
})
