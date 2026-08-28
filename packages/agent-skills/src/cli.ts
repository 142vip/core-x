/**
 * CLI 入口（VipCommander）。由 bin/vip-agent-skills.cjs 加载。
 *
 * 导出 {@link VipAgentSkillCliOptions}，供 core-x 等项目的 AiCommandOptions 继承扩展。
 */
import {
  ProcessExitCodeEnum,
  VipColor,
  VipCommander,
  VipConsole,
  VipNodeJS,
} from '@142vip/utils'
import { ENV_AGENT_SKILLS_TARGET } from './core/constants'
import { getPackageName, getVersion } from './core/paths'
import { syncAgentSkills } from './core/sync'

/**
 * `vip-agent-skills` CLI 选项（VipCommander action 载荷）。
 *
 * - 与 commander 默认值对齐：未传时为 `false` / `undefined`，勿再 `Boolean()` 包一层。
 * - 设计给 **core-x** 等仓库的 `AiCommandOptions`（或同级 CLI options）**extends** 使用，
 *   以便共享 `--target` / `--check` / `--force` / `--dry-run` 字段语义，再叠加本项目专有选项。
 *
 * @example
 * ```ts
 * // core-x 侧示意
 * import type { VipAgentSkillCliOptions } from '@142vip/agent-skills'
 *
 * export interface AiCommandOptions extends VipAgentSkillCliOptions {
 *   // 本命令额外字段
 *   model?: string
 * }
 * ```
 */
export interface VipAgentSkillCliOptions {
  /**
   * 下游项目根目录（`--target` / `-t`）。
   * 省略时：先读 env `AGENT_SKILLS_TARGET`，再回落 process.cwd()。
   */
  target?: string
  /**
   * 试运行，不写盘（`--dry-run`，VipCommander.init 注入）。
   * commander 默认 false。
   */
  dryRun?: boolean
  /**
   * 目标无 package.json 也继续（`--force`）。
   * commander 默认 false。
   */
  force?: boolean
  /**
   * 只比对镜像是否与包内 skills 一致（`--check`）；不一致 exit 1。
   * 与 `dryRun` 互斥。commander 默认 false。
   */
  check?: boolean
}

function resolveTargetRoot(targetArg?: string): string {
  if (targetArg)
    return VipNodeJS.pathResolve(targetArg)

  const envTarget = VipNodeJS.getProcessEnv(ENV_AGENT_SKILLS_TARGET)
  if (envTarget)
    return VipNodeJS.pathResolve(envTarget)

  return VipNodeJS.getProcessCwd()
}

/**
 * 注册并解析 CLI。
 * 选项：--target / --dry-run（VipCommander.init）/ --check / --force
 */
export function runCli(argv: string[] = VipNodeJS.getProcessArgv().slice(2)): void {
  const packageName = getPackageName()
  const version = getVersion()

  const program = new VipCommander(
    'vip-agent-skills',
    version,
    `将已安装的 ${packageName} 同步到下游项目 .agents/skills/。永不改动 business-map。`,
  )

  program
    .init(
      {
        summary: '同步 Agent Skills 到下游项目',
        description: [
          `将 ${packageName} 的通用 skills 写入下游项目 .agents/skills/。`,
          '永不创建 / 覆盖 / 删除 business-map。',
          `Env: ${ENV_AGENT_SKILLS_TARGET} 可在未传 --target 时指定下游根目录。`,
        ].join('\n'),
      },
      {
        dryRun: true,
        trace: false,
        help: true,
      },
    )
    .option('-t, --target <path>', '下游项目根目录（默认 cwd）')
    .option('--check', '比对包与下游镜像是否一致（不一致 exit 1）', false)
    .option('--force', '目标无 package.json 也继续', false)
    .action((cliOptions: VipAgentSkillCliOptions) => {
      // commander option 默认值已是 boolean；解构默认再兜一层 undefined
      const {
        dryRun = false,
        check = false,
        force = false,
      } = cliOptions

      if (check && dryRun) {
        VipConsole.error(
          `${VipColor.redBright(`${packageName}:`)} --check and --dry-run are mutually exclusive`,
        )
        VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
        return
      }

      try {
        const syncOutcome = syncAgentSkills({
          target: resolveTargetRoot(cliOptions.target),
          dryRun,
          force,
          check,
        })
        if (check && !syncOutcome.ok)
          VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
      }
      catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        VipConsole.error(`${VipColor.redBright(`${packageName}:`)} ${message}`)
        VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
      }
    })

  program.parse(argv, { from: 'user' })
}
