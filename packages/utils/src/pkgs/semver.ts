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

/**
 * 支持原生创建Semver实例
 */
function createSemver(version: string | SemVer, optionsOrLoose?: boolean | RangeOptions): SemVer {
  return new SemVer(version, optionsOrLoose)
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
}

export type VipSemverReleaseType = ReleaseType
