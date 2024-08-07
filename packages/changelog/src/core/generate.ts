import type { GitCommit, RawGitCommit } from 'changelogen'
import { getGitDiff, parseGitCommit } from 'changelogen'
import { notNullish } from '@antfu/utils'
import type { ChangelogEnOptions, ChangelogOptions } from './types'
import { generateMarkdown } from './markdown'
import { resolveConfig } from './config'
import { resolveAuthors } from './github'

export async function generate(options: ChangelogOptions) {
  const config = await resolveConfig(options)

  const rawCommits = await getGitDiff(config.from, config.to)
  const commits = parseCommits(rawCommits, config)

  // 添加贡献者
  if (config.contributors) {
    await resolveAuthors(commits, config)
  }
  // 生成文档
  const markdown = await generateMarkdown(commits, config)

  return { config, markdown, commits }
}

/**
 * 解析git commit信息
 * @param commits
 * @param config
 */
export function parseCommits(commits: RawGitCommit[], config: ChangelogEnOptions): GitCommit[] {
  return commits.map(commit => parseGitCommit(commit, config)).filter(notNullish)
}
