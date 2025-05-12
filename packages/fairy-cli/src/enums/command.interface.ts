import type { VipCommanderOptions } from '@142vip/utils'

/**
 * fairy-cli 命令选项
 */
export interface FairyCommandOptions extends Omit<VipCommanderOptions, 'help'> {}
