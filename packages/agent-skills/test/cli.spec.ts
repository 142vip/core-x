import type { VipAgentSkillSyncResult } from '../src/core/sync'
import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { runCli } from '../src/cli'

import { ENV_AGENT_SKILLS_TARGET } from '../src/core/constants'
import { syncAgentSkills } from '../src/core/sync'
import { setCliEnv } from './cli-env'

jest.mock('../src/core/paths', () => ({
  getPackageName: () => '@142vip/agent-skills',
  getVersion: () => '0.0.0-test',
}))

jest.mock('../src/core/sync', () => ({
  syncAgentSkills: jest.fn(),
}))

jest.mock('@142vip/utils', () => {
  const paint = (text: string) => text

  function parseArgv(argv: string[]): {
    target?: string
    check: boolean
    force: boolean
    dryRun: boolean
  } {
    const options: { target?: string, check: boolean, force: boolean, dryRun: boolean } = {
      check: false,
      force: false,
      dryRun: false,
    }
    for (let index = 0; index < argv.length; index++) {
      const arg = argv[index]
      if (arg === '--check') {
        options.check = true
      }
      else if (arg === '--force') {
        options.force = true
      }
      else if (arg === '--dry-run') {
        options.dryRun = true
      }
      else if (arg === '-t' || arg === '--target') {
        options.target = argv[index + 1]
        index += 1
      }
    }
    return options
  }

  class VipPackageCliCommander {
    registerCliVersionBanner(): void {}

    bootstrapStandalone(
      _meta: unknown,
      hooks: {
        registerBusinessOptions: (root: { option: () => unknown }) => void
        action: (options: ReturnType<typeof parseArgv>) => void
      },
      argv: string[],
    ): void {
      const root = { option: () => root }
      hooks.registerBusinessOptions(root)
      hooks.action(parseArgv(argv))
    }
  }

  return {
    VipPackageCliCommander,
    registerVipPackageCliErrorHandling: (_program: unknown, options: { renderHelpHintLine?: () => string }) => {
      options.renderHelpHintLine?.()
    },
    formatVipCliHelpExample: (command: string) => command,
    ProcessExitCodeEnum: { UsageError: 2, FatalError: 1, SUCCESS: 0 },
    VipColor: { redBright: paint },
    VipConsole: { error: () => undefined },
    VipNodeJS: {
      getProcessArgv: () => ['node', 'vip-agent-skills'],
      getProcessEnv: (key: string) => {
        const { readCliEnv } = jest.requireActual<typeof import('./cli-env')>('./cli-env')
        return readCliEnv(key)
      },
      getProcessCwd: () => '/cwd',
      pathResolve: (target: string) => target,
      exitProcess: (code: number) => {
        throw new Error(`exit ${code}`)
      },
    },
  }
})

function syncResult(ok: boolean): VipAgentSkillSyncResult {
  return {
    package: '@142vip/agent-skills',
    version: '0.0.0-test',
    target: '/repo',
    dest: '/repo/.agents/skills',
    synced: [],
    dryRun: false,
    check: !ok,
    ok,
    drifts: [],
  }
}

describe('runCli', () => {
  const sync = jest.mocked(syncAgentSkills)

  afterEach(() => {
    sync.mockReset()
    setCliEnv(ENV_AGENT_SKILLS_TARGET, undefined)
  })

  it('--target 优先，否则用环境变量，再否则用 cwd', () => {
    sync.mockReturnValue(syncResult(true))
    runCli(['-t', '/repo'])
    expect(sync).toHaveBeenCalledWith({
      target: '/repo',
      dryRun: false,
      force: false,
      check: false,
    })

    setCliEnv(ENV_AGENT_SKILLS_TARGET, '/from-env')
    runCli([])
    expect(sync).toHaveBeenLastCalledWith(expect.objectContaining({ target: '/from-env' }))

    setCliEnv(ENV_AGENT_SKILLS_TARGET, undefined)
    runCli([])
    expect(sync).toHaveBeenLastCalledWith(expect.objectContaining({ target: '/cwd' }))
  })

  it('--check 与 --dry-run 同时出现时以 UsageError 退出', () => {
    expect(() => runCli(['--check', '--dry-run'])).toThrow('exit 2')
    expect(sync).not.toHaveBeenCalled()
  })

  it('check 不一致或同步抛错时以 FatalError 退出', () => {
    sync.mockReturnValueOnce(syncResult(false))
    expect(() => runCli(['--check', '--force', '-t', '/repo'])).toThrow('exit 1')
    expect(sync).toHaveBeenCalledWith(expect.objectContaining({ check: true, force: true }))

    sync.mockImplementationOnce(() => {
      throw new Error('boom')
    })
    expect(() => runCli(['-t', '/repo'])).toThrow('exit 1')

    const rejected: unknown = { reason: 'plain' }
    sync.mockImplementationOnce(() => {
      throw rejected
    })
    expect(() => runCli(['-t', '/repo'])).toThrow('exit 1')
  })
})
