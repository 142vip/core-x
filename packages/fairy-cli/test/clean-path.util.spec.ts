import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { VipNodeJS } from '@142vip/utils'
import { afterEach, describe, expect, it } from '@jest/globals'

import {
  deleteByPatterns,
  globPatternToRegExp,
  resolveDeleteTargets,
} from '../src/utils/clean-path.util'

describe('globPatternToRegExp', () => {
  it('匹配 **/dist', () => {
    const pattern = globPatternToRegExp('**/dist')
    expect(pattern.test('dist')).toBe(true)
    expect(pattern.test('packages/utils/dist')).toBe(true)
    expect(pattern.test('node_modules/foo/dist')).toBe(true)
  })

  it('排除规则可匹配 node_modules 下 dist', () => {
    const pattern = globPatternToRegExp('**/node_modules/**/dist')
    expect(pattern.test('node_modules/foo/dist')).toBe(true)
    expect(pattern.test('packages/utils/dist')).toBe(false)
  })
})

describe('resolveDeleteTargets', () => {
  const tempDirs: string[] = []

  afterEach(async () => {
    for (const dir of tempDirs.splice(0)) {
      if (VipNodeJS.existPath(dir)) {
        await rm(dir, { recursive: true, force: true })
      }
    }
  })

  it('单目录 dist 仅删除 cwd 下 dist', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'fa-clean-'))
    tempDirs.push(root)
    await mkdir(path.join(root, 'dist'))
    await mkdir(path.join(root, 'packages', 'app', 'dist'), { recursive: true })

    const targets = await resolveDeleteTargets(root, ['dist'])
    expect(targets).toEqual([path.join(root, 'dist')])
  })

  it('**/dist 配合排除 node_modules 下 dist', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'fa-clean-'))
    tempDirs.push(root)
    const pkgDist = path.join(root, 'packages', 'utils', 'dist')
    const nmDist = path.join(root, 'node_modules', 'foo', 'dist')
    await mkdir(pkgDist, { recursive: true })
    await mkdir(nmDist, { recursive: true })
    await writeFile(path.join(pkgDist, 'index.js'), 'export {}')

    const targets = await resolveDeleteTargets(root, ['**/dist', '!**/node_modules/**/dist'])
    expect(targets).toContain(pkgDist)
    expect(targets).not.toContain(nmDist)
  })
})

describe('deleteByPatterns', () => {
  it('dry-run 不删除磁盘文件', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'fa-clean-dry-'))
    const distDir = path.join(root, 'dist')
    await mkdir(distDir)

    const deleted = await deleteByPatterns(['dist'], { dryRun: true, cwd: root })
    expect(deleted).toEqual([distDir])
    expect(VipNodeJS.existPath(distDir)).toBe(true)

    await rm(root, { recursive: true, force: true })
  })
})
