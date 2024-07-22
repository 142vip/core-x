import * as process from 'node:process'
import {Command} from 'commander'
import {version, name} from '../package.json'
import type {LoginOptions} from './core/login'
import type {ReleaseOptions} from './core/release'
import type {ChangelogOptions} from './core/changelog'
import type {DeployOptions} from './core/deploy'
import {execDeploy} from './core/deploy'
import type {LintOptions} from './core/lint'
import {execLink} from './core/lint'
import type {CleanUpOptions} from './core/clean'
import {execCleanUp} from './core/clean'
import {execTurboPack, TurboPackOptions} from "./core/turbopack";
import {execLogin, LoginPlatformEnum} from "./core/login";

enum CliCommandEnum {
  LOGIN = 'login',
  RELEASE = 'release',
  CHANGELOG = 'changelog',
  PUBLISH = 'publish',
  CLEAN = 'clean',
  LINT = 'lint',
  DEPLOY = 'deploy',
  TURBO = 'turbo'
}

const program = new Command(name)

// 查看版本
program.version(version, '-v --version')


// fairy-cli create 创建
program
  .command('create <projectName>')
  .description('create a new template project')
  .aliases(['c', 'cr'])
  .option('--egg', 'react template')
  .option('--vue', 'vue template')
  .option('-v2, --vue2', 'vue2 template')
  .option('-v3, --vue3', 'vue3 template')
  .action((projectName, options) => {
    console.log(projectName, options)
  })

// 登录 docker  npm
program
  .command(`${CliCommandEnum.LOGIN} <platform>`)
  .description('登录远程平台，支持Docker和Npm')
  .option('-u,--username', '登录账号，docker登录时有效')
  .option('-p,--password', '登录密码，docker登录时有效')
  .option('--registry-url', 'registry address', false)
  .option('--vip', '142vip专用业务账号', false)
  .action(async (platform: LoginPlatformEnum, args: LoginOptions) => {
    if (![LoginPlatformEnum.NPM, LoginPlatformEnum.DOCKER].includes(platform)) {
      console.error('login命令只支持Docker和Npm平台，使用格式 login docker|npm')
      process.exit(1)
    }
    await execLogin(platform, args)
  })

// pnpm ci
program
  .command('pnpm <platform>')
  .description('pnpm ci dependencies')
  .option('--registry', 'registry address')
  .action((projectName, options: LoginOptions) => {
    // pnpm i --frozen-lockfile --registry https://registry.npmmirror.com
    console.log('pnpm', projectName, options)
  })

// fairy-cli release
program
  .command(CliCommandEnum.RELEASE)
  .description('release npm version')
  .option('--push', 'registry address', true)
  .option('--preid <preid>', 'ID for prerelease')
  .option('--commit <msg>', 'Commit message', false)
  .option('--tag <tag>', 'Tag name', false)
  .option('--skip-confirm', `Skip confirmation (default: false)`, false)
  .option('-r, --recursive', `Bump package.json files recursively (default: false)`, false)
  .option('--execute <command>', '版本更新后需要执行的命令')
  .option('--package <package>', '指定需要发布的包')
  .action(async (args: ReleaseOptions) => {
    console.log(CliCommandEnum.RELEASE, args)
    // await execRelease(args)
  })

// fairy-cli changelog
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
  })

// fairy-cli publish  推送
program
  .command(CliCommandEnum.PUBLISH)
  .description('推送到远程平台，支持Docker镜像更新和NPM发包')
  .option('-d,--docker', 'registry address')
  .option('-n,--npm', 'registry address', 'packages')
  .option('-c --clean', 'registry address', 'CHANGELOG.md')
  .action((args: ChangelogOptions) => {
    console.log(CliCommandEnum.PUBLISH, args)
  })

// fairy-cli deploy 部署
program
  .command(CliCommandEnum.DEPLOY)
  .description('项目部署')
  .option('-gh,--github-page', '部署到Github Pages', false)
  .action((args: DeployOptions) => {
    // 参考 @142vip/changelog模块
    console.log(CliCommandEnum.DEPLOY, args)
    execDeploy(args)
  })

// fairy-cli lint
program
  .command(CliCommandEnum.LINT)
  .description('根据Eslint检查代码风格，支持代码格式化')
  .option('-m,--markdown', '格式化markdown文件')
  .option('-c,--config', 'Eslint配置文件路径', false)
  .option('-f --fix', '支持自动修复', false)
  .action((args: LintOptions) => {
    execLink(args)
  })

// fairy-cli clean 项目清理
program
  .command(CliCommandEnum.CLEAN)
  .description('清除开发、构建等环境下的无用目录')
  .option('-n,--nuxt', '删除nuxt构建目录', false)
  .option('-d,--dist', '删除dist目录', false)
  .option('-m,--midway', '删除midway构建目录', false)
  .option('-f,--force', '强制删除，默认值：false', false)
  .option('--all', '深度删除所有', false)
  .option('--ignore-tips', '忽略提示，直接删除', false)
  .option('--dry-run', '试运行，不做实际删除操作', false)
  .option('--turbo', '删除turbo缓存目录', true)
  .option('--vite', '删除vite缓存目录', true)
  .action(async (args: CleanUpOptions) => {
    await execCleanUp(args)
  })

// fairy-cli turbo 基于turborepo项目管理
program
  .command(CliCommandEnum.TURBO)
  .description('exec turbo pack command')
  .argument('[repoName...]', '需要使用Turbo管理的项目名，支持多个',)
  .option('--dev', '执行dev命令', false)
  .option('--build', '执行build命令', false)
  .action(async (repoNames: string[], args: TurboPackOptions) => {
    await execTurboPack(repoNames, args)
  })

program.parse(process.argv)
