import type { VipCommander } from './commander'

/** commander `exitOverride` 回调中的错误码（与底层 commander 一致） */
export const VIP_COMMANDER_EXIT_UNKNOWN_COMMAND = 'commander.unknownCommand'
export const VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS = 'commander.excessArguments'

export interface VipCommanderExitError {
  code: string
  message: string
  exitCode: number
}

/** 判断是否为 VipCommander / commander 解析阶段抛出的可处理错误 */
export function isVipCommanderExitError(error: unknown): error is VipCommanderExitError {
  if (error == null || typeof error !== 'object') {
    return false
  }
  const record = error as Record<string, unknown>
  return typeof record.code === 'string' && typeof record.message === 'string'
}

/**
 * 为命令树注册 `exitOverride`，并屏蔽默认 `error:` stderr（由 `onError` 统一输出）。
 */
export function registerVipCommanderExitOverrideTree(
  root: VipCommander,
  onError: (error: VipCommanderExitError) => void,
): void {
  const attach = (command: VipCommander): void => {
    command.configureOutput({
      writeErr: () => {},
    })
    command.exitOverride((error) => {
      if (isVipCommanderExitError(error)) {
        onError(error)
        return
      }
      throw error
    })
    for (const sub of command.commands) {
      attach(sub as VipCommander)
    }
  }
  attach(root)
}
