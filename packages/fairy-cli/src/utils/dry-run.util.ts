import { VipColor, vipLogger } from '@142vip/utils'
import { traceFaCli } from './trace-cli.util'

/**
 * 试运行：逐条打印将要执行的操作，不触发副作用。
 * 各子命令在 `--dry-run` 时调用，日志格式统一便于对照真实执行。
 */
export function logDryRunSteps(command: string, steps: string[]): void {
  vipLogger.logByBlank(`${VipColor.yellow('[dry-run]')} ${VipColor.cyan(command)}`)
  for (const step of steps) {
    vipLogger.log(`  ${VipColor.dim('→')} ${step}`)
  }
  vipLogger.println()
}

/**
 * `dryRun` 为 true 时只打印步骤；否则执行 `run`。
 */
export async function runOrDryRun(
  dryRun: boolean | undefined,
  command: string,
  steps: string[],
  run: () => void | Promise<void>,
): Promise<void> {
  if (dryRun) {
    logDryRunSteps(command, steps)
    return
  }
  traceFaCli(`${command}: 执行`, { steps })
  await run()
}
