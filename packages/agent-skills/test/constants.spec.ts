import { describe, expect, it } from '@jest/globals'
import {
  AGENT_SKILLS_BASELINE_FILE_NAME,
  BUSINESS_MAP_SKILL_NAME,
  CORE_SKILL_NAMES,
  DOWNSTREAM_SKILLS_SEGMENTS,
  ENV_AGENT_SKILLS_TARGET,
} from '../src/core/constants'

describe('agent-skills 常量', () => {
  it('只同步四个通用 skill，不含 business-map', () => {
    expect(CORE_SKILL_NAMES).toEqual(['workflow', 'code-dev', 'self-check', 'commit'])
    expect(CORE_SKILL_NAMES).not.toContain(BUSINESS_MAP_SKILL_NAME)
  })

  it('下游目录与基线文件名固定', () => {
    expect(DOWNSTREAM_SKILLS_SEGMENTS).toEqual(['.agents', 'skills'])
    expect(AGENT_SKILLS_BASELINE_FILE_NAME).toBe('agent-skills.json')
    expect(ENV_AGENT_SKILLS_TARGET).toBe('AGENT_SKILLS_TARGET')
  })
})
