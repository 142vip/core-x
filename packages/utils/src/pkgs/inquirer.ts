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

/**
 * 搜索源
 */
type SearchSource = <T>(input: T, opt?: { signal: AbortSignal }) => Promise<ReadonlyArray<VipInquirerChoice<T> | Separator>>

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
 * 选择框
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
async function promptSearch(message: string, source: SearchSource, pageSize?: number): Promise<string | undefined> {
  return search({ message, source, pageSize })!
}

/**
 * 搜索源简单处理
 */
function handleSimpleSearchSource(sources: string[]) {
  return function (input: string) {
    return sources.filter((name: string) => name.includes(input))
  }
}

/**
 * 终端交互
 */
export const VipInquirer = {
  promptList,
  promptInput,
  promptInputRequired,
  promptNumber,
  promptPassword,
  promptSelect,
  promptCheckBox,
  promptConfirm,
  promptSearch,
  handleSimpleSearchSource,
}

/**
 * 分隔符
 */
export class VipInquirerSeparator extends Separator {}
