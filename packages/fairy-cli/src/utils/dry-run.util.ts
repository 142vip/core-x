import type { VipCliDryRunParam } from '@142vip/utils'
import { logVipCliDryRun, logVipCliTrace } from '@142vip/utils'
import { name, version } from '../../package.json'

const FAIRY_CLI_IDENTITY = { name, version }

/**
 * 试运行：打印生效参数与将要执行的操作，不触发副作用。
 */
export function logDryRunSteps(
  command: string,
  steps: string[],
  params?: readonly VipCliDryRunParam[],
): void {
  logVipCliDryRun(FAIRY_CLI_IDENTITY, command, steps, params != null ? { params } : undefined)
}

/** `--trace` 时输出一条执行日志；未开启则静默 */
export function logFairyCliTrace(step: string, detail?: Record<string, unknown>): void {
  logVipCliTrace(FAIRY_CLI_IDENTITY, step, detail)
}

/**
 * `dryRun` 为 true 时只打印参数与步骤；否则执行 `run`。
 */
export async function runOrDryRun(
  dryRun: boolean | undefined,
  command: string,
  steps: string[],
  run: () => void | Promise<void>,
  params?: readonly VipCliDryRunParam[],
): Promise<void> {
  if (dryRun) {
    logDryRunSteps(command, steps, params)
    return
  }
  logFairyCliTrace(`${command}: 执行`, { steps })
  await run()
}
