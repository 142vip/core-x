import { VipGit } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { commitLinter } from '../src/commit-linter'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipGit: {
      ...actual.VipGit,
      getCommitFirstLineMsg: jest.fn(() => 'feat(pkg): from git file'),
      parseCommitMsg: actual.VipGit.parseCommitMsg,
    },
    VipNodeJS: {
      ...actual.VipNodeJS,
      exitProcess: jest.fn(() => {
        throw new Error('exit')
      }),
    },
  }
})

describe('commitLinter', () => {
  const getCommitFirstLineMsg = jest.mocked(VipGit.getCommitFirstLineMsg)

  beforeEach(() => {
    getCommitFirstLineMsg.mockClear()
  })

  it('options.commit 优先于仓库 COMMIT_EDITMSG', () => {
    const gitCommit = commitLinter({
      commit: 'docs(README): update usage',
    })
    expect(gitCommit.commit).toBe('docs(README): update usage')
    expect(getCommitFirstLineMsg).not.toHaveBeenCalled()
  })

  it('仅传入 commit 时不校验 scope 白名单（单包仓 fa commit --quiet）', () => {
    const gitCommit = commitLinter({
      commit: 'chore(ci): lock node version',
    })
    expect(gitCommit.scope).toBe('ci')
    expect(gitCommit.type).toBe('chore')
  })

  it('省略 commit 时读取 git 首行', () => {
    const gitCommit = commitLinter()
    expect(getCommitFirstLineMsg).toHaveBeenCalled()
    expect(gitCommit.type).toBe('feat')
    expect(gitCommit.scope).toBe('pkg')
  })
})
