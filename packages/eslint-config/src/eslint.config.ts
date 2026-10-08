import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
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
 *
 * @antfu/eslint-config v9 新增 `@e18e/eslint-plugin`、`eslint-plugin-pnpm` 等集成；此处显式关闭，
 * 避免升级依赖后全仓突然出现大量与 v4 时代不一致的 error（非本次升级的语义变更范围）。
 * 参考：https://www.npmjs.com/package/@antfu/eslint-config
 */
export const defaultEslintConfig: EslintConfigOptions = {
  gitignore: true,
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  // markdown 处理器默认开启：markdown 自身 ESLint 校验 + 内嵌代码块通过 overrides 降级
  markdown: true,
  // @e18e/eslint-plugin：现代 JS 写法建议（??、Object.hasOwn 等）；默认关，避免升级 antfu 时全仓批量改码
  e18e: false,
  // monorepo 存在 `pnpm-workspace.yaml` 时 v9 可能启用 pnpm 规则；关闭以免强制改 workspace 设置
  pnpm: false,
}

/**
 * 基础的 Eslint 校验规则
 */
export const baseEslintRules: NonNullable<TypedFlatConfigItem['rules']> = {
  'no-console': 'warn',
  'no-restricted-syntax': ['warn', {
    selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
    message: 'Unexpected property on console object was called',
  }],
}

type EslintConfigOptions = OptionsConfig & TypedFlatConfigItem

/**
 * 把调用方额外的 flat config 展平。
 * 这些项会排在 antfu 与 markdown 降级之后，同名规则整段替换，不再和默认规则叠在一起。
 */
async function resolveUserConfigs(
  userConfigs: Array<Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>>,
): Promise<TypedFlatConfigItem[]> {
  const resolved: TypedFlatConfigItem[] = []
  for (const item of userConfigs) {
    const config = await item
    if (Array.isArray(config)) {
      resolved.push(...config)
    }
    else {
      resolved.push(config)
    }
  }
  return resolved
}

/**
 * 定义 Eslint 配置
 *
 * 参考：https://github.com/antfu/eslint-config
 *
 * 第一参只传 antfu 全局选项。`files` 不能放进 antfu 第一参，否则会直接抛错。
 * 无 `files` 的 `rules` 作为全局覆盖，插在 antfu 之后、markdown 代码块降级之前。
 * 带 `files` 的规则，以及第二参起的配置，排在整份配置最后，避免 Vue 等插件规则把用户配置盖回去。
 */
export async function defineVipEslintConfig(
  options: EslintConfigOptions = {},
  ...userConfigs: Array<Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>>
): Promise<TypedFlatConfigItem[]> {
  const {
    name,
    files,
    languageOptions,
    linterOptions,
    processor,
    plugins,
    rules: userRules,
    settings: userSettings,
    ...antfuRest
  } = options

  const antfuOptions: OptionsConfig = {
    ...defaultEslintConfig,
    ...antfuRest,
  }

  const globalConfig: TypedFlatConfigItem = {
    name: 'vip/rules',
    rules: {
      ...baseEslintRules,
      ...(files == null ? userRules : {}),
    },
    settings: {
      ...(userSettings ?? {}),
      node: {
        ...(userSettings?.node ?? {}),
        exitFunctions: ['process.exit', 'VipNodeJS.exitProcess'],
      },
    },
  }
  if (files == null) {
    if (name != null) {
      globalConfig.name = name
    }
    if (languageOptions != null) {
      globalConfig.languageOptions = languageOptions
    }
    if (linterOptions != null) {
      globalConfig.linterOptions = linterOptions
    }
    if (processor != null) {
      globalConfig.processor = processor
    }
    if (plugins != null) {
      globalConfig.plugins = plugins
    }
  }

  const scopedFromOptions: TypedFlatConfigItem[] = []
  if (files != null) {
    const scoped: TypedFlatConfigItem = {
      name: name ?? 'vip/files',
      files,
      rules: userRules,
    }
    if (languageOptions != null) {
      scoped.languageOptions = languageOptions
    }
    if (linterOptions != null) {
      scoped.linterOptions = linterOptions
    }
    if (processor != null) {
      scoped.processor = processor
    }
    if (plugins != null) {
      scoped.plugins = plugins
    }
    scopedFromOptions.push(scoped)
  }

  return antfu(antfuOptions, globalConfig).then(async (configs) => {
    const overrides = await resolveUserConfigs(userConfigs)
    return [
      ...configs,
      ...markdownCodeBlockOverrides,
      ...scopedFromOptions,
      ...overrides,
    ]
  })
}
