import type { ReleaseOperation } from './version-operation'
import { VipExecutor, VipNpm } from '@142vip/utils'
import { VersionProgressEventEnum } from '../enums'

/**
 * 如果启用了 'commit' 选项，则将修改后的文件提交到 Git
 */
export async function gitCommit(operation: ReleaseOperation): Promise<ReleaseOperation> {
  if (!operation.options.commit)
    return operation

  const commitOptions = operation.options.commit
  const { newVersion } = operation.state
  const args = ['--allow-empty']

  // 提交所有本地所有变更
  if (commitOptions.all) {
    args.push('--all')
  }

  // 跳过git commit的hooks函数
  if (commitOptions.skipGitVerify) {
    args.push('--no-verify')
  }

  // 格式化commit信息
  const commitMessage = VipNpm.formatVersionStr(commitOptions.message, newVersion)
  args.push('--message', `'${commitMessage}'`)

  await VipExecutor.execShell({ command: `git commit ${args.join(' ')}`, description: '提交git commit信息' })

  return operation.update({ event: VersionProgressEventEnum.GitCommit, commitMessage })
}

/**
 * 标记 Git 提交（如果启用了tag选项）
 */
export async function gitTag(operation: ReleaseOperation): Promise<ReleaseOperation> {
  if (!operation.options.tag)
    return operation

  const { commit, tag } = operation.options
  const { newVersion } = operation.state

  const args = [
    // Create an annotated tag, which is recommended for releases.
    // See https://git-scm.com/docs/git-tag
    '--annotate',

    // Use the same commit message for the tag
    '--message',
    // 注意格式
    `'${VipNpm.formatVersionStr(commit!.message, newVersion)}'`,
  ]

  // 创建标签名称
  const tagName = VipNpm.formatVersionStr(tag.name, newVersion)
  args.push(tagName)

  await VipExecutor.execShell({ command: `git tag ${args.join(' ')}`, description: '创建Tag标签' })

  return operation.update({ event: VersionProgressEventEnum.GitTag, tagName })
}

/**
 * 如果启用了 'push' 选项，则推送 Git 提交和标签
 */
export async function gitPush(operation: ReleaseOperation): Promise<ReleaseOperation> {
  if (!operation.options.push)
    return operation

  // 推送commit信息
  await VipExecutor.execShell({ command: 'git push', description: '推送变更' })

  // 推送标签
  if (operation.options.tag) {
    await VipExecutor.execShell({ command: 'git push --tags', description: '推送所有标签' })
  }

  return operation.update({ event: VersionProgressEventEnum.GitPush })
}
