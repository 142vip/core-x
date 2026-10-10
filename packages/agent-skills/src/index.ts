/**
 * 包公开 API：核心实现在 ./core，CLI 见 ./cli。
 *
 * 类型前缀 `VipAgentSkill*`，便于 core-x 等下游 extends。
 */
/** CLI 类型供下游 extends；`runCli` 见 `dist/cli` / `vip-agent-skills` bin，避免主入口加载 commander */
export type { VipAgentSkillCliOptions } from './cli'
export {
  AGENT_SKILLS_BASELINE_FILE_NAME,
  BUSINESS_MAP_SKILL_NAME,
  CORE_SKILL_NAMES,
  DOWNSTREAM_SKILLS_SEGMENTS,
} from './core/constants'
export type { CoreSkillName } from './core/constants'
export {
  getPackageName,
  getPackageRoot,
  getSkillsRoot,
  getTemplatesRoot,
  getVersion,
} from './core/paths'
export { syncAgentSkills } from './core/sync'
export type {
  VipAgentSkillSyncOptions,
  VipAgentSkillSyncResult,
} from './core/sync'
