import type { VipPackageCliCommander } from '@142vip/utils'
import { changelogCommandRegistration } from '@142vip/changelog'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../fairy.interface'

/**
 * `fa changelog`：基于 Git 提交生成 CHANGELOG，可选写文件并创建 GitHub Release。
 * 业务实现与 standalone `changelog` bin 共用 `@142vip/changelog` 的注册载荷。
 */
export async function changelogMain(program: VipPackageCliCommander): Promise<void> {
  program.registerSubcommand(
    CLI_COMMAND_DETAIL[CommandEnum.CHANGELOG],
    changelogCommandRegistration,
  )
}
