import { describe, expect, it } from '@jest/globals'

import {
  resolveFairyCliBundledConfig,
  resolveFairyCliPackageRoot,
} from '../src/utils/pkg.util'

describe('pkg.util', () => {
  it('resolveFairyCliPackageRoot 指向包根目录', () => {
    const root = resolveFairyCliPackageRoot()
    expect(root.endsWith('fairy-cli')).toBe(true)
  })

  it('resolveFairyCliBundledConfig 解析内置 commit-linter 配置', () => {
    const path = resolveFairyCliBundledConfig('default-commit-linter.config.cjs')
    expect(path).toContain('config/default-commit-linter.config.cjs')
    expect(path).not.toContain('@142vip/fairy-cli')
  })
})
