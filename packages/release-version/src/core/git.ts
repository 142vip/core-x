import type { Operation } from './operation'
import { VipExecutor } from '@142vip/utils'
import { ProgressEvent } from '../types'

/**
 * Commits the modififed files to Git, if the `commit` option is enabled.
 */
export async function gitCommit(operation: Operation): Promise<Operation> {
  if (!operation.options.commit)
    return operation

  const { all, noVerify, message } = operation.options.commit
  const { updatedFiles, newVersion } = operation.state
  let args = ['--allow-empty']

  if (all) {
    // Commit ALL files, not just the ones that were bumped
    args.push('--all')
  }

  if (noVerify) {
    // Bypass git commit hooks
    args.push('--no-verify')
  }

  // Create the commit message
  const commitMessage = formatVersionString(message, newVersion)
  args.push('--message', `'${commitMessage}'`)

  // Append the file names last, as variadic arguments
  if (!all)
    args = args.concat(updatedFiles)

  await VipExecutor.execShell({ command: `git commit ${args.join(' ')}`, description: '提交git commit信息' })

  return operation.update({ event: ProgressEvent.GitCommit, commitMessage })
}

/**
 * 标记 Git 提交（如果启用了tag选项）
 */
export async function gitTag(operation: Operation): Promise<Operation> {
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
    `'${formatVersionString(commit!.message, newVersion)}'`,
  ]

  // Create the Tag name
  const tagName = formatVersionString(tag.name, newVersion)
  args.push(tagName)

  await VipExecutor.execShell({ command: `git tag ${args.join(' ')}`, description: '创建Tag标签' })

  return operation.update({ event: ProgressEvent.GitTag, tagName })
}

/**
 * Pushes the Git commit and tag, if the `push` option is enabled.
 */
export async function gitPush(operation: Operation): Promise<Operation> {
  if (!operation.options.push)
    return operation

  // Push the commit
  await VipExecutor.execShell({ command: 'git push', description: '推送变更' })

  if (operation.options.tag) {
    // Push the tag
    await VipExecutor.execShell({ command: 'git push --tags', description: '推送所有标签' })
  }

  return operation.update({ event: ProgressEvent.GitPush })
}

/**
 * 接受版本字符串模板（例如“release v”或“This is the %s release”）。
 * - 如果模板包含任何“%s”占位符，则它们将替换为版本号;
 * - 否则，版本号将追加到字符串
 */
export function formatVersionString(template: string, newVersion: string): string {
  return template.includes('%s') ? template.replace(/%s/g, newVersion) : `${template}${newVersion}`
}
