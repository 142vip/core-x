import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from '@jest/globals'
import { copyFile, ensureDir, filesEqual, writeTextFile } from '../src/core/fs'

describe('agent-skills 文件辅助', () => {
  const roots: string[] = []

  afterEach(() => {
    for (const root of roots)
      rmSync(root, { recursive: true, force: true })
    roots.length = 0
  })

  function tempRoot(): string {
    const root = mkdtempSync(join(tmpdir(), 'agent-skills-'))
    roots.push(root)
    return root
  }

  it('ensureDir 创建嵌套目录，writeTextFile 与 copyFile 落盘', () => {
    const root = tempRoot()
    const source = join(root, 'nested', 'a.txt')
    const copied = join(root, 'out', 'b.txt')

    ensureDir(join(root, 'nested', 'deep'))
    writeTextFile(source, 'same')
    copyFile(source, copied)

    expect(readFileSync(copied, 'utf8')).toBe('same')
    expect(filesEqual(source, copied)).toBe(true)
  })

  it('filesEqual 在内容不同时返回 false', () => {
    const root = tempRoot()
    const left = join(root, 'left.txt')
    const right = join(root, 'right.txt')
    writeFileSync(left, 'a')
    writeFileSync(right, 'b')
    expect(filesEqual(left, right)).toBe(false)
  })
})
