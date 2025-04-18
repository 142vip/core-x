import type { VipReleaseType } from '@142vip/utils'
import type { VersionBumpOptions } from '../types'
import process from 'node:process'

/**
 * 特定版本发布
 */
export interface VersionRelease {
  type: 'version'
  version: string
}

/**
 * 提示用户输入版本号
 */
export interface PromptRelease {
  type: 'prompt'
  preid: string
}

/**
 * 相对于当前版本号的发布版本
 */
export interface BumpRelease {
  type: VipReleaseType
  preid: string
}

/**
 * One of the possible Release types.
 */
export type Release = VersionRelease | PromptRelease | BumpRelease

/**
 * Normalized and sanitized options
 */
export interface NormalizedOptions {
  commit?: {
    message: string
    noVerify: boolean
    all: boolean
  }
  tag?: {
    name: string
  }
  push: boolean
  cwd: string
  ignoreScripts: boolean
  execute?: string
  currentVersion?: string
  changelog?: boolean
  // monorepo 模块名
  scopeName?: string
}

/**
 * Converts raw VersionBumpOptions to a normalized and sanitized Options object.
 */
export async function normalizeOptions(raw: VersionBumpOptions): Promise<NormalizedOptions> {
  const push = Boolean(raw.push)
  const all = Boolean(raw.all)
  const noVerify = Boolean(raw.noVerify)
  const cwd = raw.cwd || process.cwd()
  const ignoreScripts = Boolean(raw.ignoreScripts)
  const execute = raw.execute
  const changelog = Boolean(raw.changelog)
  // 允许用户不输入
  const scopeName = raw.scopeName ?? undefined

  let tag
  if (typeof raw.tag === 'string')
    tag = { name: raw.tag }

  else if (raw.tag)
    tag = { name: 'v' }

  // NOTE: This must come AFTER `tag` and `push`, because it relies on them
  let commit
  if (typeof raw.commit === 'string')
    commit = { all, noVerify, message: raw.commit }

  else if (raw.commit || tag || push)
    commit = { all, noVerify, message: 'chore: release v' }

  return {
    commit,
    tag,
    push,
    cwd,
    ignoreScripts,
    execute,
    currentVersion: raw.currentVersion,
    changelog,
    scopeName,
  }
}
