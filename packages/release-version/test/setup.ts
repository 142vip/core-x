import { vipLogger } from '@142vip/utils'
import { beforeEach, expect } from '@jest/globals'

beforeEach(() => {
  const testName = expect.getState().currentTestName
  if (testName != null) {
    vipLogger.log(`[release-version:test] ▶ ${testName}`)
  }
})
