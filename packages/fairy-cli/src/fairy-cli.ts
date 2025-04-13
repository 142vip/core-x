import * as process from 'node:process'
import { VipCommander } from '@142vip/utils'
import { description, name, version } from '../package.json'
import {
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
  turboPackMain,
} from './commands'

async function fairyCliMain(): Promise<void> {
  const program = new VipCommander(name, version, description)

  // fairy-cli create 创建 todo

  // fairy-cli login 登录 docker npm
  await loginMain(program)

  // install 安装依赖
  await installMain(program)

  // fairy-cli release
  await releaseMain(program)

  // fairy-cli changelog
  await changelogMain(program)

  // fairy-cli publish 推送
  await publishMain(program)

  // fairy-cli sync 推送
  await syncMain(program)

  // fairy-cli deploy 部署
  await deployMain(program)

  // fairy-cli lint
  await lintMain(program)

  // fairy-cli turbo 基于turborepo项目管理
  await turboPackMain(program)

  // fairy-cli clean
  await cleanUpMain(program)

  // fairy-cli copyright
  await copyrightMain(program)

  // fairy-cli commit
  await commitMain(program)

  // 参数解析
  program.parse(process.argv)
}

// cli程序入口
void fairyCliMain()
