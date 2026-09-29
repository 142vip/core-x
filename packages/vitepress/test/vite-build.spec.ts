import { resolveVipRollupManualChunk } from '../src/core/vite-build'

describe('resolveVipRollupManualChunk', () => {
  it('拆分 element-plus', () => {
    expect(resolveVipRollupManualChunk('/app/node_modules/element-plus/es/index.mjs'))
      .toBe('vendor-element-plus')
  })

  it('源码路径返回 undefined', () => {
    expect(resolveVipRollupManualChunk('/app/packages/vitepress/src/theme/index.ts'))
      .toBeUndefined()
  })
})
