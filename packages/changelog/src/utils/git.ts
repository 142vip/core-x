import semver from 'semver'

/**
 * 获取github仓库
 */
export async function getGitHubRepo(baseUrl: string): Promise<string> {
  const url = await execCommand('git', ['config', '--get', 'remote.origin.url'])
  const escapedBaseUrl = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escapedBaseUrl}[\/:]([\\w\\d._-]+?)\\/([\\w\\d._-]+?)(\\.git)?$`, 'i')
  const match = regex.exec(url)
  if (!match)
    throw new Error(`Can not parse GitHub repo from url ${url}`)
  return `${match[1]}/${match[2]}`
}

export async function getCurrentGitBranch(): Promise<string> {
  return await execCommand('git', ['tag', '--points-at', 'HEAD']) || await execCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
}

export async function isRepoShallow(): Promise<boolean> {
  return (await execCommand('git', ['rev-parse', '--is-shallow-repository'])).trim() === 'true'
}

export async function getGitTags(): Promise<string[]> {
  return (await execCommand('git', ['--no-pager', 'tag', '-l', '--sort=creatordate']).then(r => r.split('\n')))
    .reverse()
}

function getTagWithoutPrefix(tag: string): string {
  return tag.replace(/^v/, '')
}

export async function getLastMatchingTag(inputTag: string): Promise<string | undefined> {
  const inputTagWithoutPrefix = getTagWithoutPrefix(inputTag)
  const isVersion = semver.valid(inputTagWithoutPrefix) !== null
  const isPrerelease = semver.prerelease(inputTag) !== null
  const tags = await getGitTags()

  let tag: string | undefined
  // Doing a stable release, find the last stable release to compare with
  if (!isPrerelease && isVersion) {
    tag = tags.find((tag) => {
      const tagWithoutPrefix = getTagWithoutPrefix(tag)

      return tagWithoutPrefix !== inputTagWithoutPrefix
        && semver.valid(tagWithoutPrefix) !== null
        && semver.prerelease(tagWithoutPrefix) === null
    })
  }

  // Fallback to the last tag, that are not the input tag
  tag ||= tags.find(tag => tag !== inputTag)

  return tag
}

export async function getFirstGitCommit(): Promise<string> {
  return await execCommand('git', ['rev-list', '--max-parents=0', 'HEAD'])
}

export function isPrerelease(version: string): boolean {
  return !/^[^.]*(?:\.[\d.]*|\d)$/.test(version)
}

async function execCommand(cmd: string, args: string[]): Promise<string> {
  const { execa } = await import('execa')
  const res = await execa(cmd, args)
  return res.stdout.trim()
}
