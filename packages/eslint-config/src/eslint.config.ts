import type {
  OptionsConfig,
  TypedFlatConfigItem,
} from '@antfu/eslint-config'
import { antfu } from '@antfu/eslint-config'

/**
 * 默认的Eslint配置
 */
export const defaultEslintConfig = {
  gitignore: true,
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
}

/**
 * 基础的Eslint校验规则
 */
export const baseEslintRules = {
  'no-console': 'warn',
  'no-restricted-syntax': ['warn', {
    selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
    message: 'Unexpected property on console object was called',
  }],
}

type EslintConfigOptions = OptionsConfig & TypedFlatConfigItem

/**
 * 定义Eslint配置
 * 参考：https://github.com/antfu/eslint-config
 * @param options
 */
export function defineVipEslintConfig(
  options: EslintConfigOptions = {},
): any {
  return antfu({
    ...options,
    ...defaultEslintConfig,
    ignores: [
      ...options.ignores ?? [],
    ],
    rules: {
      ...baseEslintRules,
      ...options.rules ?? {},
    },
  } as EslintConfigOptions)
}
