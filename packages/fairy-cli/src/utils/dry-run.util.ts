import { logVipCliDryRun, logVipCliTrace } from '@142vip/utils'
import { name, version } from '../../package.json'

const FAIRY_CLI_IDENTITY = { name, version }

/**
 * 试运行：逐条打印将要执行的操作，不触发副作用。
 */
export function logDryRunSteps(command: string, steps: string[]): void {
  logVipCliDryRun(FAIRY_CLI_IDENTITY, command, steps)
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
  logVipCliTrace(FAIRY_CLI_IDENTITY, `${command}: 执行`, { steps })
  await run()
}
