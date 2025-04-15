import {
  checkbox,
  confirm,
  input,
  number,
  password,
  rawlist,
  search,
  select,
  Separator,
} from '@inquirer/prompts'
import { name } from '../../package.json'
import { vipLogger, VipPackageJSON } from '../core'

/**
 * 参考：
 * - https://www.npmjs.com/package/inquirer#answers
 * - https://github.com/SBoudrias/Inquirer.js
 * - inquirer@8 兼容commonjs
 */

interface VipInquirerChoice<T> {
  value: T
  name?: string
  description?: string
  short?: string
  checked?: boolean
  disabled?: boolean | string
}
type VipInquirerChoiceList<T> = Array<VipInquirerChoice<T>>

interface VipInquirerOptions {
  default?: string
  pageSize?: 10
  loop?: false
}

type SearchSourceResponse<T> = (string | VipInquirerSeparator)[] | readonly (Separator | VipInquirerChoice<T>)[] | Promise<(string | VipInquirerSeparator)[]> | Promise<(VipInquirerSeparator | VipInquirerChoice<T>)[]>

/**
 * 搜索源
 */
type SearchSource<T> = (term: string | undefined, opt: { signal: AbortSignal }) => SearchSourceResponse<T>

/**
 * 简单搜索源
 */
type SimpleSearchSource<T> = (input: T | undefined) => SearchSourceResponse<T>
/**
 * 输入框，只输入数字
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number
 */
async function promptNumber(message: string, defaultValue?: number): Promise<number | undefined> {
  return number({ message, default: defaultValue })
}

/**
 * 终端交互选择，单选
 */
async function promptList<T extends string>(message: string, choices: VipInquirerChoiceList<T>): Promise<T> {
  return rawlist({ message, choices })
}

/**
 * 终端交互输入，输入框，可选
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input
 */
async function promptInput(message: string, defaultValue?: string): Promise<string> {
  return input({ message, default: defaultValue })
}

/**
 * 终端交互输入，输入框，必填
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input
 */
async function promptInputRequired(message: string): Promise<string> {
  return input({ message, required: true })
}

/**
 * 输入框，隐藏输入
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password
 */
async function promptPassword(message: string): Promise<string> {
  return password({ message, mask: '*' })
}

/**
 * 选择框，必选选择框
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select
 */
async function promptSelect<T extends string>(message: string, choices: VipInquirerChoiceList<T> | string[], options?: VipInquirerOptions): Promise<T> {
  // 默认值为第一个属性
  if (options != null && options.default == null && choices.length > 0) {
    const choice = choices[0]
    options.default = typeof choice === 'object'
      ? choice.value
      : choice
  }
  return select({ message, choices, ...(options == null ? {} : options) })
}

/**
 * 终端交互选择，多选
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox
 */
async function promptCheckBox<T extends string>(message: string, choices: VipInquirerChoiceList<T> | string[], options?: VipInquirerOptions): Promise<T[]> {
  return checkbox({ message, choices, ...(options == null ? {} : options) })
}

/**
 * 终端交互确认，确认框，可配置默认值
 */
async function promptConfirm(message: string, defaultValue?: boolean): Promise<boolean> {
  return confirm({ message, default: defaultValue })
}

/**
 * 搜索框
 * - https://github.com/SBoudrias/Inquirer.js/tree/main/packages/search
 */
async function promptSearch<T extends string>(message: string, source: SearchSource<T>, pageSize?: number): Promise<T> {
  return search({ message, source, pageSize })
}

/**
 * 搜索源简单处理
 */
function handleSimpleSearchSource(sources: string[]): SimpleSearchSource<string> {
  return function (input: string | undefined): string[] {
    if (input == null) {
      return sources
    }
    return sources.filter((name: string) => name.includes(input))
  }
}

/**
 * 使用try catch 处理Prompt退出时报错
 * - ctrl+c 优雅地处理
 */
function withTryCatch<F extends (...args: any[]) => any>(fn: F): F {
  return (async (...args: Parameters<F>) => {
    try {
      return await fn(...args)
    }
    catch (error) {
      if (error instanceof Error && error.name === 'ExitPromptError') {
        vipLogger.logByBlank(`${VipPackageJSON.getPkgGreenLabel(name)} 用户安全退出，欢迎下次使用👏🏻👏🏻👏🏻`)
      }
      else {
        throw error
      }
    }
  }) as F
}

/**
 * 终端交互
 */
export const VipInquirer = {
  promptList: withTryCatch(promptList),
  promptInput: withTryCatch(promptInput),
  promptInputRequired: withTryCatch(promptInputRequired),
  promptNumber: withTryCatch(promptNumber),
  promptPassword: withTryCatch(promptPassword),
  promptSelect: withTryCatch(promptSelect),
  promptCheckBox: withTryCatch(promptCheckBox),
  promptConfirm: withTryCatch(promptConfirm),
  promptSearch: withTryCatch(promptSearch),
  handleSimpleSearchSource,
}

/**
 * 分隔符
 */
export class VipInquirerSeparator extends Separator {}
