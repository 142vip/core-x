import type { Command } from 'commander'
import { CliCommandEnum } from '../shared'

interface ChangelogOptions {
  packageName?: string
  packageDir?: string
  output: string
}

function generateChangelog(args: ChangelogOptions) {
  // 指定目录下的模块，生成changelog文档
  if (args.packageDir != null && args.packageName != null) {
    console.log(args.output)
  }
  // 生成根目录下的changelog文档
  else {
    // execCommand(`npx changelog --output ${args.output}`)
  }
}

export async function changelogMain(program: Command) {
  program
    .command(CliCommandEnum.CHANGELOG)
    .description('生成CHANGELOG日志文档')
    .option('--package', 'registry address')
    .option('--package-dir', 'Monorepo包存在的相对路径，默认：packages', 'packages')
    .option('--output', '日志文档保存的文件名，默认：CHANGELOG.md', 'CHANGELOG.md')
    // .option('--execute', 'registry address')
    .action((args: ChangelogOptions) => {
      // 参考 @142vip/changelog模块
      console.log(CliCommandEnum.CHANGELOG, args)
      generateChangelog(args)
    })
}
