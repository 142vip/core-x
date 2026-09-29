import { VipConsole } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { logDryRunSteps, runOrDryRun } from '../src/utils/dry-run.util'

describe('dry-run.util', () => {
  beforeEach(() => {
    jest.spyOn(VipConsole, 'log').mockImplementation(() => {})
  })

  it('logDryRunSteps 输出步骤列表', () => {
    logDryRunSteps('lint', ['npx eslint .'])
    expect(VipConsole.log).toHaveBeenCalled()
  })

  it('runOrDryRun dryRun 时不执行 run', async () => {
    const run = jest.fn<() => Promise<void>>()
    await runOrDryRun(true, 'publish', ['npm publish'], run)
    expect(run).not.toHaveBeenCalled()
  })

  it('runOrDryRun 非 dryRun 时执行 run', async () => {
    const run = jest.fn<() => Promise<void>>()
    await runOrDryRun(false, 'publish', ['npm publish'], run)
    expect(run).toHaveBeenCalled()
  })
})
