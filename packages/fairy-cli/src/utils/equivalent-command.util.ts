import { VipColor, VipConsole, vipLogger } from '@142vip/utils'

export type FairyEquivalentFlagKind = 'boolean' | 'value' | 'repeat'

/** 一个命令参数如何写成终端 flag */
export interface FairyEquivalentFlag {
  key: string
  /** 肯定形式，如 `-s`、`--vip`、`-F` */
  flag: string
  kind: FairyEquivalentFlagKind
  /** 与命令内置默认相同则不写入等价命令 */
  defaultValue?: boolean | string
  /** 布尔生效值为 false、且默认是 true 时使用，如 `--no-push` */
  offFlag?: string
}

function quoteShellArg(value: string): string {
  return `'${value.replace(/'/g, `'\\''`)}'`
}

function readArg(args: object, key: string): unknown {
  if (!Object.hasOwn(args, key)) {
    return undefined
  }
  return Reflect.get(args, key)
}

function appendFlag(parts: string[], flag: FairyEquivalentFlag, value: unknown): void {
  if (flag.kind === 'boolean') {
    const defaultOn = flag.defaultValue === true
    if (value === true && !defaultOn) {
      parts.push(flag.flag)
    }
    else if (value === false && defaultOn && flag.offFlag != null) {
      parts.push(flag.offFlag)
    }
    return
  }

  if (flag.kind === 'value') {
    if (typeof value !== 'string' || value === '' || value === flag.defaultValue) {
      return
    }
    parts.push(flag.flag, quoteShellArg(value))
    return
  }

  if (!Array.isArray(value) || value.length === 0) {
    return
  }
  for (const item of value) {
    if (typeof item === 'string' && item !== '') {
      parts.push(flag.flag, quoteShellArg(item))
    }
  }
}

/**
 * 把本次生效参数写成 `fa <command> ...`。
 * 含命令行显式参数和配置补上的参数，方便直接粘贴。没有超出内置默认的参数时返回 `undefined`。
 */
export function formatFairyEquivalentCommand(
  subcommand: string,
  args: object,
  flags: readonly FairyEquivalentFlag[],
): string | undefined {
  const parts = [`fa ${subcommand}`]
  for (const flag of flags) {
    appendFlag(parts, flag, readArg(args, flag.key))
  }
  if (parts.length === 1) {
    return undefined
  }
  return parts.join(' ')
}

/**
 * 配置补过参数时打印等价命令。
 * 命令行已经写全时不打印，避免 commit-msg 这类显式调用多一行日志。
 */
export function logFairyEquivalentCommand(
  subcommand: string,
  args: object,
  fromConfig: readonly string[],
  flags: readonly FairyEquivalentFlag[],
): void {
  if (fromConfig.length === 0) {
    return
  }
  const command = formatFairyEquivalentCommand(subcommand, args, flags)
  if (command == null) {
    return
  }
  vipLogger.println()
  VipConsole.log(VipColor.dim(`等价命令：${command}`))
}
