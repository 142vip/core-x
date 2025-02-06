import type { ReleaseType } from 'semver'
import {
  clean,
  compare,
  eq,
  gt,
  inc,
  lt,
  prerelease,
  satisfies,
  valid,
} from 'semver'

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
  compare,
  prerelease,
}

export type VipSemverReleaseType = ReleaseType
