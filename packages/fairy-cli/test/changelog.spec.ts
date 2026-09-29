import { changelogCommandRegistration } from '@142vip/changelog'
import { VipPackageCliCommander } from '@142vip/utils'
import { describe, expect, it } from '@jest/globals'

import { changelogMain } from '../src/commands/changelog'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../src/fairy.interface'
import { findCommand } from './helpers/command-runner'

describe('changelogMain', () => {
  it('注册 changelog 子命令并与 @142vip/changelog 载荷一致', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await changelogMain(program)

    const command = findCommand(program, CommandEnum.CHANGELOG)
    expect(command.name()).toBe('changelog')
    expect(command.aliases()).toEqual(CLI_COMMAND_DETAIL[CommandEnum.CHANGELOG].aliases)
    expect(changelogCommandRegistration.action).toBeDefined()
  })
})
