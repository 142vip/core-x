import { execShell } from '@142vip/common'
import type { Command } from 'commander'
import { CliCommandEnum } from '../shared'

interface LintOptions {
  markdown: boolean
  fix: boolean
}

async function execLink(args: LintOptions) {
  // auto fix
  if (args.fix) {
    console.log('自动修复')
  }
  await doCodeLint()

  if (args.markdown) {
    doMdLink()
  }
}

/**
 * 代码格式化
 */
async function doCodeLint() {
  await execShell('npx eslint . --fix')
}

/**
 * markdown文档格式化
 */
function doMdLink() {
  // markdownlint
}

/**
 *
 * @param program
 */
export async function lintMain(program: Command) {
  program
    .command(CliCommandEnum.LINT)
    .description('根据Eslint检查代码风格，支持代码格式化')
    .option('-m,--markdown', '格式化markdown文件')
    .option('-c,--config', 'Eslint配置文件路径', false)
    .option('-f --fix', '支持自动修复', false)
    .action(async (args: LintOptions) => {
      await execLink(args)
    })
}
