import { vipLogger, VipSemver } from '@142vip/utils'
import semver from 'semver'

jest.mock('semver')

describe('vipSemver.getNextVersions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    if (typeof semver.valid === 'function') {
      jest.mocked(semver.valid).mockReset()
    }
    if (typeof semver.inc === 'function') {
      jest.mocked(semver.inc).mockReset()
    }
  })

  // Test 1: Invalid version input
  it('should return null and log error for completely invalid version string', () => {
    const result = VipSemver.getNextVersions('not-a-version')
    expect(result).toBeNull()
    expect(vipLogger.logByBlank).toHaveBeenCalledWith(
      expect.stringContaining('is not a valid version number'),
    )
  })

  // Test 2: Valid version but semver.inc fails
  it('should return null when semver.inc fails for all version increments', () => {
    const result = VipSemver.getNextVersions('1.0.0')
    expect(result).toBeNull()
  })

  // Test 3: Standard stable version
  it('should return correct next versions for stable release', () => {
    const result = VipSemver.getNextVersions('1.0.0')
    expect(result).toEqual({
      major: '2.0.0',
      minor: '1.1.0',
      patch: '1.0.1',
      preMajor: '2.0.0-0',
      preMinor: '1.1.0-0',
      prePatch: '1.0.1-0',
      next: '1.0.1-0',
    })
  })

  // Test 4: Prerelease version with existing preid
  it('should maintain existing preid from prerelease version', () => {
    const result = VipSemver.getNextVersions('1.0.0-beta.0')
    expect(result).toEqual({
      major: '2.0.0',
      minor: '1.1.0',
      patch: '1.0.1',
      preMajor: '2.0.0-beta.0',
      preMinor: '1.1.0-beta.0',
      prePatch: '1.0.1-beta.0',
      next: '1.0.1-beta.1',
    })
  })

  // Test 5: Custom preid provided
  it('should use custom preid when provided', () => {
    const result = VipSemver.getNextVersions('1.0.0', 'alpha')
    expect(result).toEqual({
      major: '2.0.0',
      minor: '1.1.0',
      patch: '1.0.1',
      preMajor: '2.0.0-alpha.0',
      preMinor: '1.1.0-alpha.0',
      prePatch: '1.0.1-alpha.0',
      next: '1.0.1-alpha.0',
    })
  })

  // Test 6: Edge case - version 0.x.x
  it('should handle 0.x.x versions correctly', () => {
    const result = VipSemver.getNextVersions('0.1.0')
    expect(result).toEqual({
      major: '1.0.0',
      minor: '0.2.0',
      patch: '0.1.1',
      preMajor: '1.0.0-0',
      preMinor: '0.2.0-0',
      prePatch: '0.1.1-0',
      next: '0.1.1-0',
    })
  })

  // Test 7: Edge case - empty string input
  it('should handle empty string input', () => {
    const result = VipSemver.getNextVersions('')
    expect(result).toBeNull()
    expect(vipLogger.logByBlank).toHaveBeenCalled()
  })
})
