import type { VipPackageCliCommander } from '@142vip/utils'
import type { FairyCommandOptions } from '../fairy.interface'
import { vipConfig, VipExecutor } from '@142vip/utils'
import { CommandEnum } from '../fairy.interface'
import { registerFairySubcommand, runOrDryRun, traceFaCli } from '../utils'
import { resolveEslintConfigPath } from '../utils/eslint-config.util'

interface LintOptions extends FairyCommandOptions {
  fix: boolean
  config?: string
}

/** 组装 ESLint CLI（配置见 `eslint.config.*` 或内置默认） */
function buildLintCommand(fix: boolean, configPath?: string): string {
  const eslintConfig = resolveEslintConfigPath(configPath)
  const parts = ['npx', 'eslint', '.', '--config', eslintConfig]
  if (fix) {
    parts.push('--fix')
  }
  return parts.join(' ')
}

/** `fa lint`：按仓库或内置 ESLint 配置检查 / `--fix` 修复。 */
export async function lintMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.LINT, async (args: LintOptions) => {
    const eslintConfig = resolveEslintConfigPath(args.config)
    const command = buildLintCommand(args.fix, args.config)
    traceFaCli('lint: 解析', {
      eslintConfig,
      userConfig: args.config ?? vipConfig.searchConfigFilePath('eslint') ?? '(内置 default-eslint.config.mjs)',
      fix: args.fix,
      dryRun: args.dryRun === true,
    })
    await runOrDryRun(args.dryRun, 'lint', [command], async () => {
      await VipExecutor.commandStandardExecutor(command)
    })
  }, (command) => {
    command
      .option('-f, --config <path>', 'ESLint 配置文件路径（默认 `eslint.config.*` 或内置配置）')
      .option('--fix', '按 ESLint 规则自动修复', false)
  })
}
