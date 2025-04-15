import { commitLiner } from '@142vip/commit-linter'
import { VipColor, VipConsole, vipLogger, VipMonorepo } from '@142vip/utils'

const { type, scope, subject, commit } = commitLiner({
  // 获取packages目录下所有的模块名
  scopes: VipMonorepo.getPkgNames(['./apps/*', './packages/*']),
})

// 提交符合规范，打印相关信息
VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
vipLogger.logByBlank(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)
