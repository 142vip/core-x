import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'
import { AGENT_SKILLS_BASELINE_FILE_NAME, BUSINESS_MAP_SKILL_NAME, CORE_SKILL_NAMES } from '../src/core/constants'
import { syncAgentSkills } from '../src/core/sync'

import { pathsMockState } from './paths-mock-state'

jest.mock('@142vip/utils', () => {
  const nodePath = jest.requireActual<typeof import('node:path')>('node:path')
  const nodeFs = jest.requireActual<typeof import('node:fs')>('node:fs')
  const paint = (text: string) => text
  return {
    logVipCliBanner: () => undefined,
    logVipCliMetaLines: () => undefined,
    VipColor: {
      yellowBright: paint,
      yellow: paint,
      greenBright: paint,
      cyanBright: paint,
      dim: paint,
    },
    VipConsole: { log: () => undefined },
    VipJSON: { stringify: JSON.stringify },
    VipPackageJSON: {
      isExistPackageJSON: (dir: string) => nodeFs.existsSync(nodePath.join(dir, 'package.json')),
    },
    VipNodeJS: {
      pathJoin: (...parts: string[]) => nodePath.join(...parts),
      pathResolve: (target: string) => nodePath.resolve(target),
      pathDirname: (target: string) => nodePath.dirname(target),
      existPath: (target: string) => nodeFs.existsSync(target),
      writeFileByUTF8: (filePath: string, content: string) => nodeFs.writeFileSync(filePath, content),
    },
  }
})

jest.mock('../src/core/paths', () => {
  const { pathsMockState: state } = jest.requireActual<typeof import('./paths-mock-state')>('./paths-mock-state')
  return {
    getPackageRoot: () => state.packageRoot,
    getPackageName: () => '@142vip/agent-skills',
    getVersion: () => '0.0.0-test',
    getSkillsRoot: () => state.skillsRoot,
    getTemplatesRoot: () => `${state.packageRoot}/templates`,
  }
})

describe('syncAgentSkills', () => {
  const roots: string[] = []

  beforeEach(() => {
    const packageRoot = mkdtemp(join(tmpdir(), 'agent-skills-pkg-'))
    const targetRoot = mkdtemp(join(tmpdir(), 'agent-skills-target-'))
    pathsMockState.packageRoot = packageRoot
    pathsMockState.skillsRoot = join(packageRoot, 'skills')
    writeFileSync(join(targetRoot, 'package.json'), '{}\n')
    for (const skillName of CORE_SKILL_NAMES) {
      const skillDir = join(pathsMockState.skillsRoot, skillName)
      mkdirSync(skillDir, { recursive: true })
      writeFileSync(join(skillDir, 'SKILL.md'), `# ${skillName}\n`)
    }
  })

  afterEach(() => {
    for (const root of roots)
      rmSync(root, { recursive: true, force: true })
    roots.length = 0
    pathsMockState.packageRoot = ''
    pathsMockState.skillsRoot = ''
  })

  function mkdtemp(prefix: string): string {
    const root = mkdtempSync(prefix)
    roots.push(root)
    return root
  }

  it('同步四个通用 skill，并写入基线，不改动 business-map', () => {
    const targetRoot = roots[1]
    const businessMap = join(targetRoot, '.agents', 'skills', BUSINESS_MAP_SKILL_NAME, 'SKILL.md')
    mkdirSync(join(targetRoot, '.agents', 'skills', BUSINESS_MAP_SKILL_NAME), { recursive: true })
    writeFileSync(businessMap, 'local\n')

    const result = syncAgentSkills({ target: targetRoot })

    expect(result.ok).toBe(true)
    expect(result.dryRun).toBe(false)
    expect(result.check).toBe(false)
    expect(result.synced).toEqual([...CORE_SKILL_NAMES])
    expect(readFileSync(join(result.dest, 'workflow', 'SKILL.md'), 'utf8')).toBe('# workflow\n')
    expect(readFileSync(businessMap, 'utf8')).toBe('local\n')
    const baseline = JSON.parse(readFileSync(join(result.dest, AGENT_SKILLS_BASELINE_FILE_NAME), 'utf8')) as {
      package: string
      version: string
      skills: string[]
    }
    expect(baseline).toEqual({
      package: '@142vip/agent-skills',
      version: '0.0.0-test',
      skills: [...CORE_SKILL_NAMES],
    })
  })

  it('dry-run 不落盘', () => {
    const targetRoot = roots[1]
    const result = syncAgentSkills({ target: targetRoot, dryRun: true })
    expect(result.dryRun).toBe(true)
    expect(result.ok).toBe(true)
    expect(existsSync(result.dest)).toBe(false)
  })

  it('check 在镜像一致时通过，内容漂移时列出路径', () => {
    const targetRoot = roots[1]
    syncAgentSkills({ target: targetRoot })
    expect(syncAgentSkills({ target: targetRoot, check: true }).ok).toBe(true)

    writeFileSync(join(targetRoot, '.agents', 'skills', 'commit', 'SKILL.md'), 'changed\n')
    const drifted = syncAgentSkills({ target: targetRoot, check: true })
    expect(drifted.ok).toBe(false)
    expect(drifted.drifts).toEqual(['commit/SKILL.md'])
  })

  it('包内缺少 skill 目录时抛错', () => {
    rmSync(join(pathsMockState.skillsRoot, 'commit'), { recursive: true, force: true })
    expect(() => syncAgentSkills({ target: roots[1] })).toThrow('missing skill in package: commit')
  })

  it('同步嵌套文件；check 在目标缺失或无 package.json 时给出漂移', () => {
    const targetRoot = roots[1]
    mkdirSync(join(pathsMockState.skillsRoot, 'workflow', 'nested'), { recursive: true })
    writeFileSync(join(pathsMockState.skillsRoot, 'workflow', 'nested', 'note.md'), 'note\n')
    symlinkSync(
      join(pathsMockState.skillsRoot, 'workflow', 'SKILL.md'),
      join(pathsMockState.skillsRoot, 'workflow', 'link.md'),
    )
    rmSync(join(targetRoot, 'package.json'))

    const synced = syncAgentSkills({ target: targetRoot })
    expect(readFileSync(join(synced.dest, 'workflow', 'nested', 'note.md'), 'utf8')).toBe('note\n')
    expect(existsSync(join(synced.dest, 'workflow', 'link.md'))).toBe(false)

    rmSync(join(synced.dest, 'workflow', 'nested', 'note.md'))
    const missingFile = syncAgentSkills({ target: targetRoot, check: true })
    expect(missingFile.ok).toBe(false)
    expect(missingFile.drifts).toContain('workflow/nested/note.md')

    rmSync(join(synced.dest, 'code-dev'), { recursive: true, force: true })
    mkdirSync(join(synced.dest, BUSINESS_MAP_SKILL_NAME), { recursive: true })
    const missingDir = syncAgentSkills({ target: targetRoot, check: true })
    expect(missingDir.drifts).toContain('code-dev/SKILL.md')
  })

  it('check 模式下包内缺少 skill 目录时抛错', () => {
    rmSync(join(pathsMockState.skillsRoot, 'commit'), { recursive: true, force: true })
    expect(() => syncAgentSkills({ target: roots[1], check: true })).toThrow('missing skill in package: commit')
  })
})
