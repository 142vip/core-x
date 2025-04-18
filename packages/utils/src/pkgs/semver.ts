import type { RangeOptions, ReleaseType } from 'semver'
import originImportSemVer, {
  clean,
  compare,
  eq,
  gt,
  inc,
  lt,
  parse,
  prerelease,
  satisfies,
  SemVer,
  valid,
} from 'semver'
import { vipLogger } from '../core'
import { VipColor } from './color'

export type VipSemverReleaseType = ReleaseType

/**
 * 版本类型
 */
export type VipReleaseType = VipSemverReleaseType | 'next'

/**
 * 预发布版本类型
 */
export const prereleaseTypes: ReleaseType[] = ['premajor', 'preminor', 'prepatch', 'prerelease']

/**
 * 所有可能的发布版本
 */
export const releaseTypes: VipReleaseType[] = prereleaseTypes.concat(['major', 'minor', 'patch'])

/**
 * 支持原生创建Semver实例
 */
function createSemver(version: string | SemVer, optionsOrLoose?: boolean | RangeOptions): SemVer {
  return new SemVer(version, optionsOrLoose)
}

/**
 * Determines whether the specified value is a pre-release.
 */
function isPrereleaseType(value: ReleaseType): boolean {
  return prereleaseTypes.includes(value)
}

/**
 * Determines whether the specified value is a valid ReleaseType string.
 */
function isReleaseType(value: ReleaseType): boolean {
  return releaseTypes.includes(value)
}

export interface NextVersion {
  major: string
  minor: string
  patch: string
  preMajor: string
  preMinor: string
  prePatch: string
  next: string
}

/**
 * 获取下一个版本
 */
function getNextVersions(currentVersion: string, preid?: string): NextVersion | null {
  // 判断是否是有效版本
  const validVersion = valid(currentVersion)
  if (validVersion == null) {
    vipLogger.logByBlank(VipColor.red(`${currentVersion} is not a valid version number, please check it.`))
    return null
  }

  const parsed = parse(validVersion)
  if (parsed === null) {
    return null
  }
  const { prerelease } = parsed
  if (prerelease != null) {
    const [currentPreid] = prerelease
    preid = typeof currentPreid === 'string' ? currentPreid : preid
  }

  return {
    major: inc(parsed, 'major')!,
    minor: inc(parsed, 'minor')!,
    patch: inc(parsed, 'patch')!,
    preMajor: inc(parsed, 'premajor', preid)!,
    preMinor: inc(parsed, 'preminor', preid)!,
    prePatch: inc(parsed, 'prepatch', preid)!,
    next: inc(parsed, 'prerelease', preid)!,
  }
}

/**
 * 参考：https://www.npmjs.com/package/semver
 */
export const VipSemver = {
  valid,
  clean,
  satisfies,
  gt,
  lt,
  eq,
  inc,
  parse,
  compare,
  prerelease,
  createSemver,
  originImportSemVer,
  getNextVersions,
  isPrereleaseType,
  isReleaseType,
}
