import { describe, expect, it } from '@jest/globals'
import { formatFairyEquivalentCommand } from '../src/utils/equivalent-command.util'

const releaseFlags = [
  { key: 'push', flag: '--push', kind: 'boolean' as const, defaultValue: true, offFlag: '--no-push' },
  { key: 'checkBranch', flag: '--check-branch', kind: 'repeat' as const },
  { key: 'filter', flag: '-F', kind: 'repeat' as const },
  { key: 'vip', flag: '--vip', kind: 'boolean' as const, defaultValue: false },
  { key: 'dryRun', flag: '--dry-run', kind: 'boolean' as const, defaultValue: false },
]

describe('formatFairyEquivalentCommand', () => {
  it('只写出超出内置默认的参数', () => {
    const command = formatFairyEquivalentCommand('release', {
      vip: true,
      push: true,
      filter: ['./apps/*', './packages/*'],
      checkBranch: ['next', 'main'],
      dryRun: false,
    }, releaseFlags)
    expect(command).toBe(
      'fa release --check-branch \'next\' --check-branch \'main\' -F \'./apps/*\' -F \'./packages/*\' --vip',
    )
  })

  it('默认 true 被配置关掉时写成否定参数', () => {
    const command = formatFairyEquivalentCommand('release', {
      push: false,
      vip: false,
      filter: [],
      checkBranch: [],
    }, releaseFlags)
    expect(command).toBe('fa release --no-push')
  })

  it('全部是内置默认时不生成命令', () => {
    expect(formatFairyEquivalentCommand('release', {
      push: true,
      vip: false,
      filter: [],
      checkBranch: [],
    }, releaseFlags)).toBeUndefined()
  })
})
