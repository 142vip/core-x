import type { VipPackageCliCommander } from '@142vip/utils'
import type { FairyCommandOptions } from '../fairy.interface'
import { VipConsole } from '@142vip/utils'
import { CommandEnum } from '../fairy.interface'
import { registerFairySubcommand, runOrDryRun } from '../utils'

interface DeployOptions extends FairyCommandOptions {
  githubPage: boolean
}

function execDeploy(args: DeployOptions): void {
  VipConsole.error(args)
}

function DeployGithubPage(): void {}

export async function deployMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.DEPLOY, async (args: DeployOptions) => {
    const steps = [
      args.githubPage ? '部署 GitHub Pages' : '部署（未指定 -gh/--github-page）',
    ]
    await runOrDryRun(args.dryRun, 'deploy', steps, () => {
      execDeploy(args)
      DeployGithubPage()
    })
  }, (command) => {
    command.option('-gh,--github-page', '部署到Github Pages', false)
  })
}
