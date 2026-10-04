/**
 * `--trace` 开关单独放在这里。
 * `console.ts` 若从 `commander.ts` 取这个状态，浏览器入口会把 `node:events` 和 `commander` 一并打进去。
 */
let vipConsoleTraceEnabled = false

/** 由 `VipCommander` 在解析 `--trace` 后调用 */
export function setVipConsoleTraceEnabled(enabled: boolean): void {
  vipConsoleTraceEnabled = enabled
}

/** 当前是否处于 CLI 追踪模式（`--trace`） */
export function isVipConsoleTraceEnabled(): boolean {
  return vipConsoleTraceEnabled
}
