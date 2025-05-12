import type { VipCommander } from '@142vip/utils'
import { VipConsole } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface DeployOptions {
  githubPage: boolean
}

function execDeploy(args: DeployOptions): void {
  VipConsole.error(args)
}

/**
 * github page 静态页面部署
 */
function DeployGithubPage() {}

/**
 * deploy命令
 * - 支持部署github pages
 */
export async function deployMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.DEPLOY])
    .option('-gh,--github-page', '部署到Github Pages', false)
    .action((args: DeployOptions) => {
      execDeploy(args)
      DeployGithubPage()
    })
}
