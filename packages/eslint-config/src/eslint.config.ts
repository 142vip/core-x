import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import { antfu } from '@antfu/eslint-config'

/**
 * markdown 内代码块的 ESLint 规则降级（避免误报）。
 *
 * 教学文档（SKILL.md / README.md / *.md 等）内嵌的 ts/js 代码块只是示例：
 * - 不一定完整可用（可能 import 了未在文档中实际使用的符号）
 * - 风格上不要求与业务代码一致
 * - 但 markdown 自身仍需 ESLint 校验（prettier 风格 / 一致性）
 *
 * 解决：在 markdown processor 输出的虚拟文件上关闭部分 ts 严格规则，
 *       但保留 markdown 原生规则。**仅作用于 markdown processor 处理的子文件**，
 *       不影响业务 .ts/.js 代码。
 */
const markdownCodeBlockOverrides: TypedFlatConfigItem[] = [
  {
    // markdown processor 把代码块拆为虚拟文件，路径形如：
    //   0   /abs/path/to/SKILL.md/code-block.ts
    //   1   /abs/path/to/SKILL.md/code-block.js
    // ESLint 9 用 `files` 模式匹配；用「以 .md 目录分隔符结尾」+ ts/js 后缀
    files: ['**/*.md/**'],
    rules: {
      'ts/no-unused-vars': 'off',
      'style/max-statements-per-line': 'off',
      'style/multiline-comment-style': 'off',
      'style/no-tabs': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-console': 'off',
      'ts/no-require-imports': 'off',
      'ts/no-var-requires': 'off',
      'ts/no-unused-expressions': 'off',
    },
  },
]

/**
 * 默认的 Eslint 配置。
 *
 * `markdown: true` 开启 antfu 的 markdown 处理器：markdown 自身格式/风格仍按 ESLint 校验
 * （如格式化、一致性），但其内嵌的 ts/js 代码块通过 overrides 降级规则，避免 `ts/no-unused-vars`
 * 等在「教学示例」上误报。
 *
 * 调用方仍可通过 `options.markdown = false` 显式关闭（向后兼容设计）。
 */
export const defaultEslintConfig: EslintConfigOptions = {
  gitignore: true,
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  // markdown 处理器默认开启：markdown 自身 ESLint 校验 + 内嵌代码块通过 overrides 降级
  markdown: true,
}

/**
 * 基础的 Eslint 校验规则
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
 * 定义 Eslint 配置
 *
 * 参考：https://github.com/antfu/eslint-config
 *
 * 实现要点：
 * - `antfu(options, ...userConfigs)` 第一参是 antfu 全局 options；第二参起是 userConfigs（flat config 数组项）
 * - 旧实现把 `defaultEslintConfig` 写死作为第一参，导致 `options.markdown` 等覆盖不生效
 * - 新实现 `antfu({ ...defaultEslintConfig, ...options }, ...)` —— 调用方可通过 options 覆盖 default 字段（向后兼容）
 * - 末尾追加 `markdownCodeBlockOverrides`：针对 markdown 内 ts/js 代码块的规则降级
 */
export function defineVipEslintConfig(
  options: EslintConfigOptions = {},
): Promise<TypedFlatConfigItem[]> {
  // 合并 antfu options：允许调用方通过 options 显式覆盖 default（如 markdown）
  const antfuOptions: EslintConfigOptions = { ...defaultEslintConfig, ...options }
  return antfu(antfuOptions, {
    ...options,
    rules: {
      ...baseEslintRules,
      ...(options.rules ?? {}),
    } as any,
    settings: {
      ...(options.settings ?? {}),
      node: {
        ...(options.settings?.node ?? {}),
        exitFunctions: ['process.exit', 'VipNodeJS.exitProcess'],
      },
    },
  }).then(configs => [...configs, ...markdownCodeBlockOverrides])
}
