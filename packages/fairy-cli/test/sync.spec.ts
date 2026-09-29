import { VipInquirer, VipPackageCliCommander } from '@142vip/utils'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

import { syncMain } from '../src/commands/sync'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptSearch: jest.fn(),
    },
    VipMonorepo: {
      ...actual.VipMonorepo,
      getReleasePkgJSON: jest.fn(() => [{
        name: '@142vip/utils',
        version: '1.0.0',
        path: '/tmp/packages/utils',
        private: false,
      }]),
    },
    vipLogger: {
      ...actual.vipLogger,
      log: jest.fn(),
      logByBlank: jest.fn(),
      println: jest.fn(),
    },
    VipConsole: {
      ...actual.VipConsole,
      log: jest.fn(),
    },
    VipNodeJS: {
      ...actual.VipNodeJS,
      existErrorProcess: jest.fn(),
    },
  }
})

describe('syncMain', () => {
  const promptSearch = jest.mocked(VipInquirer.promptSearch)
  const fetchMock = jest.fn<typeof fetch>()

  beforeEach(() => {
    jest.useFakeTimers()
    promptSearch.mockReset()
    fetchMock.mockReset()
    globalThis.fetch = fetchMock as typeof fetch
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  function mockJsonResponse(data: unknown, ok = true): Response {
    return {
      ok,
      status: ok ? 200 : 500,
      json: async () => data,
      text: async () => JSON.stringify(data),
    } as Response
  }

  it('注册 sync 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await syncMain(program)
    expect(findCommand(program, 'sync').name()).toBe('sync')
  })

  it('vip 模式无包名时从 Monorepo 选择并发起同步', async () => {
    promptSearch.mockResolvedValueOnce('@142vip/utils')
    fetchMock
      .mockResolvedValueOnce(mockJsonResponse({ ok: true, id: 'sync-id' }))
      .mockResolvedValueOnce(mockJsonResponse({
        ok: true,
        id: 'sync-id',
        type: 'sync_package',
        state: 'success',
        logUrl: 'https://log',
      }))
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        text: async () => 'sync done',
      } as Response)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await syncMain(program)
    await runCliArgv(program, ['sync', '--vip'])

    expect(promptSearch).toHaveBeenCalled()
    await jest.advanceTimersByTimeAsync(3000)

    expect(fetchMock).toHaveBeenCalledWith(
      'https://registry-direct.npmmirror.com/-/package/@142vip/utils/syncs',
      { method: 'PUT' },
    )
  })

  it('--dry-run 只打印步骤不请求镜像站', async () => {
    promptSearch.mockResolvedValueOnce('@142vip/utils')

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await syncMain(program)
    await runCliArgv(program, ['sync', '--vip', '--dry-run'])

    await jest.advanceTimersByTimeAsync(3000)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
