import { isVipConsoleTraceEnabled, VipColor, VipConsole } from '@142vip/utils'

/** `fa --trace` / 子命令 `--trace`：统一前缀，便于 grep */
export function traceFaCli(step: string, detail?: Record<string, unknown>): void {
  if (!isVipConsoleTraceEnabled()) {
    return
  }
  const label = `${VipColor.dim('[fa trace]')} ${step}`
  if (detail != null && Object.keys(detail).length > 0) {
    VipConsole.trace(label, detail)
  }
  else {
    VipConsole.trace(label)
  }
}
