import {
  getReleasePkgJSON,
  verifyCommit,
} from '@142vip/fairy-cli'
import { VipColor, VipNodeJS } from '@142vip/utils'

const verifyRes = verifyCommit()

const { isSuccess, message, type, scope } = verifyRes

if (!isSuccess) {
  console.error(
    `\n${VipColor.white(VipColor.bgRed(' Git Commit Message ERROR '))} ${VipColor.red(
      `invalid commit message format.`,
    )}\n\n${
      VipColor.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )
    }    ${VipColor.green(`feat(Github Actions): add CI/CD option`)}\n`
    + `    ${VipColor.green(
      `docs: update wbe site (close #28)`,
    )}\n\n${
      VipColor.red(`  See .github/commit-convention.md for more details.\n`)}`,
  )
  VipNodeJS.exitProcess(1)
}

const typeList = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
  'release',
]
// 校验类型
if (type == null || !typeList.includes(type)) {
  console.error(
    `${VipColor.white(VipColor.bgRed('Git Commit Message ERROR '))} ${VipColor.red(
      `invalid commit type , support ${typeList.join('|')}`,
    )}`,
  )
  VipNodeJS.exitProcess(1)
}

// 获取packages目录下所有的模块名
const pkgJSON = getReleasePkgJSON(['./apps/*', './packages/*'])

const scopeList = [
  ...pkgJSON.map(pkg => pkg.name),
  'Github Actions',
  'release', // 支持主仓库发布版本，临时解决，可以考虑忽略hooks
]

// scope范围不支持
if (scope != null && !scopeList.includes(scope)) {
  console.error(
    `${VipColor.white(VipColor.bgRed('Git Commit Message ERROR '))} ${VipColor.red(
      `invalid commit scope name , Examples:\n${scopeList.join('\n')}`,
    )}`,
  )
  VipNodeJS.exitProcess(1)
}

// 判断message长度
if (message == null || message.length > 80) {
  console.error(
    `  ${VipColor.white(VipColor.bgRed('Git Commit Message ERROR '))} ${VipColor.red(
      `invalid commit message length , max length is 80`,
    )}`,
  )
  VipNodeJS.exitProcess(1)
}

// 提交符合规范，打印相关信息
console.log(verifyRes)
