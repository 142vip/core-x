import { VipColor } from '@142vip/utils'

/** npm `bin` 注册的等价入口（均指向 `bin/fa.cjs`） */
export const FAIRY_CLI_BIN_ALIASES = ['fan', 'ffr', 'fa', 'fairy', 'ff'] as const

export type FairyCliBinAlias = (typeof FAIRY_CLI_BIN_ALIASES)[number]

/** 彩色：fan · ffr · fa · fairy · ff */
export function formatFairyCliBinAliases(): string {
  return FAIRY_CLI_BIN_ALIASES.map(name => VipColor.cyan(name)).join(VipColor.dim(' · '))
}

/** 示例命令（默认以 `fa` 展示，附注其它入口等价） */
export function formatFairyCliExample(commandLine: string): string {
  const primary = commandLine.startsWith('fa ')
    ? commandLine
    : `fa ${commandLine}`
  const others = FAIRY_CLI_BIN_ALIASES.filter(name => name !== 'fa').join(' / ')
  return `${VipColor.green(primary)} ${VipColor.dim(`（${others} 相同）`)}`
}
