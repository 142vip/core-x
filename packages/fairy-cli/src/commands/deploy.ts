import type { VipCommander } from '@142vip/utils'
import { VipConsole } from '@142vip/utils'
import { CommandEnum, initFairyCliCommand } from '../enums'

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
 */
export async function deployMain(program: VipCommander): Promise<void> {
  initFairyCliCommand(program, CommandEnum.DEPLOY)
    .option('-gh,--github-page', '部署到Github Pages', false)
    .action((args: DeployOptions) => {
      execDeploy(args)
      DeployGithubPage()
    })
}
