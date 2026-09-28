import { CHANGELOG_COMMAND_DETAIL, changelogCommandRegistration, runChangelogCli } from '@142vip/changelog'
import { describe, expect, it } from '@jest/globals'

describe('@142vip/changelog 子命令注册载荷', () => {
  it('CHANGELOG_COMMAND_DETAIL 对齐 fa changelog 命令名与别名', () => {
    expect(CHANGELOG_COMMAND_DETAIL.command).toBe('changelog')
    expect(CHANGELOG_COMMAND_DETAIL.aliases).toEqual(['c', 'ch', 'cha'])
  })

  it('changelogCommandRegistration 共用 runChangelogCli action', () => {
    expect(changelogCommandRegistration.action).toBe(runChangelogCli)
    expect(typeof changelogCommandRegistration.registerBusinessOptions).toBe('function')
  })
})
