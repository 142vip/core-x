import {
  checkbox,
  confirm,
  input,
  number,
  password,
  rawlist,
  search,
  select,
} from '@inquirer/prompts'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { VipNodeJS } from '../src/core'
import { VipInquirer, VipInquirerDefaultArrayParser, VipInquirerSeparator } from '../src/pkgs/inquirer'

jest.mock('../src/core', () => ({
  vipLogger: { logByBlank: jest.fn() },
  VipNodeJS: { existSuccessProcess: jest.fn() },
  VipPackageJSON: { getPkgGreenLabel: () => 'pkg' },
}))

jest.mock('@inquirer/prompts', () => ({
  checkbox: jest.fn(),
  confirm: jest.fn(),
  input: jest.fn(),
  number: jest.fn(),
  password: jest.fn(),
  rawlist: jest.fn(),
  search: jest.fn(),
  select: jest.fn(),
  Separator: class Separator {},
}))

describe('VipInquirer', () => {
  beforeEach(() => {
    jest.mocked(input).mockReset()
    jest.mocked(confirm).mockReset()
    jest.mocked(select).mockReset()
    jest.mocked(checkbox).mockReset()
    jest.mocked(number).mockReset()
    jest.mocked(password).mockReset()
    jest.mocked(rawlist).mockReset()
    jest.mocked(search).mockReset()
  })

  it('promptInput / promptNumber / promptPassword 透传 message', async () => {
    jest.mocked(input).mockResolvedValue('hello')
    jest.mocked(number).mockResolvedValue(3)
    jest.mocked(password).mockResolvedValue('secret')

    await expect(VipInquirer.promptInput('输入：')).resolves.toBe('hello')
    await expect(VipInquirer.promptNumber('输入数字：', 1)).resolves.toBe(3)
    await expect(VipInquirer.promptPassword('输入密码：')).resolves.toBe('secret')
    expect(password).toHaveBeenCalledWith({ message: '输入密码：', mask: '*' })
  })

  it('promptSelect 未给 default 时用第一项', async () => {
    jest.mocked(select).mockResolvedValue('npm')
    await VipInquirer.promptSelect('选择：', [
      { name: 'npm', value: 'npm' },
      { name: 'pnpm', value: 'pnpm' },
    ], {})
    expect(select).toHaveBeenCalledWith(expect.objectContaining({
      default: 'npm',
    }))
  })

  it('promptCheckBox 与 promptConfirm 返回选择结果', async () => {
    jest.mocked(checkbox).mockResolvedValue(['pnpm'])
    jest.mocked(confirm).mockResolvedValue(true)
    await expect(VipInquirer.promptCheckBox('选择：', ['npm', 'pnpm'])).resolves.toEqual(['pnpm'])
    await expect(VipInquirer.promptConfirm('是否删除?', true)).resolves.toBe(true)
  })

  it('promptList / promptSearch 调用对应 prompt', async () => {
    jest.mocked(rawlist).mockResolvedValue('yarn')
    jest.mocked(search).mockResolvedValue('lodash')
    const source = () => ['lodash']
    await expect(VipInquirer.promptList('列表', [{ value: 'yarn' }])).resolves.toBe('yarn')
    await expect(VipInquirer.promptSearch('搜索：', source, 8)).resolves.toBe('lodash')
    expect(search).toHaveBeenCalledWith({ message: '搜索：', source, pageSize: 8 })
  })

  it('handleSimpleSearchSource 按关键字过滤', () => {
    const source = VipInquirer.handleSimpleSearchSource(['npm', 'pnpm', 'yarn'])
    expect(source(undefined)).toEqual(['npm', 'pnpm', 'yarn'])
    expect(source('pn')).toEqual(['pnpm'])
  })

  it('Ctrl+C（ExitPromptError）记日志并结束进程，不再抛给调用方', async () => {
    const forceClose = new Error('User force closed the prompt with 0 SIGINT')
    forceClose.name = 'ExitPromptError'
    jest.mocked(confirm).mockRejectedValue(forceClose)

    await expect(VipInquirer.promptConfirm('是否继续?')).resolves.toBeUndefined()
    expect(VipNodeJS.existSuccessProcess).toHaveBeenCalledTimes(1)
  })

  it('其它错误继续抛出', async () => {
    jest.mocked(input).mockRejectedValue(new Error('boom'))
    await expect(VipInquirer.promptInput('输入：')).rejects.toThrow('boom')
  })
})

describe('VipInquirerSeparator / VipInquirerDefaultArrayParser', () => {
  it('分隔符可构造', () => {
    expect(new VipInquirerSeparator()).toBeInstanceOf(VipInquirerSeparator)
  })

  it('空值重置为单项，否则追加', () => {
    expect(VipInquirerDefaultArrayParser('', ['a'])).toEqual([''])
    expect(VipInquirerDefaultArrayParser('b', ['a'])).toEqual(['a', 'b'])
  })
})
