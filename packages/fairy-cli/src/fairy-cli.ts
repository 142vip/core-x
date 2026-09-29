import { VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { description, name, version } from '../package.json'
import {
  aiMain,
  changelogMain,
  cleanUpMain,
  commitMain,
  copyrightMain,
  deployMain,
  installMain,
  lintMain,
  loginMain,
  publishMain,
  releaseMain,
  syncMain,
} from './commands'
import { registerFairyCliErrorHandling } from './utils/cli-error.util'

/** `fa` / `fairy` bin 入口：注册全部子命令并解析 `process.argv` */
export async function fairyCliMain(): Promise<void> {
  const program = new VipPackageCliCommander(name, version, description)

  program.init({ summary: description, description })
  program.registerRootOptions()

  // login：Docker / npm 登录
  await loginMain(program)
  // install：安装项目依赖
  await installMain(program)
  // release：版本迭代与发版
  await releaseMain(program)
  // changelog：生成 CHANGELOG
  await changelogMain(program)
  // publish：推送 npm 包到远程仓库
  await publishMain(program)
  // sync：同步 npm 包到 CNPM 镜像
  await syncMain(program)
  // deploy：项目部署（如 GitHub Pages）
  await deployMain(program)
  // lint：ESLint 检查与格式化
  await lintMain(program)
  // clean：清理构建产物与缓存
  await cleanUpMain(program)
  // copyright：软著登记源代码文档
  await copyrightMain(program)
  // commit：交互式规范 Git 提交
  await commitMain(program)
  // ai：Agent Skills 同步与校验
  await aiMain(program)

  registerFairyCliErrorHandling(program)
  await program.parseAsync(VipNodeJS.getProcessArgv())
}
