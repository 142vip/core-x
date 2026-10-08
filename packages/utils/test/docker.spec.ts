import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { VipDocker } from '../src/core/docker'
import { VipExecutor } from '../src/core/exec'

jest.mock('../src/core/package-json', () => ({
  VipPackageJSON: { getPkgGreenLabel: () => 'pkg' },
}))

jest.mock('../src/core/exec', () => ({
  VipExecutor: {
    execCommand: jest.fn(),
    commandStandardExecutor: jest.fn(),
  },
}))

const execCommand = jest.mocked(VipExecutor.execCommand)
const commandStandardExecutor = jest.mocked(VipExecutor.commandStandardExecutor)

function commandResult(stdout: string, code = 0) {
  return { command: 'docker', code, stdout, stderr: '' }
}

describe('VipDocker', () => {
  beforeEach(() => {
    execCommand.mockReset()
    commandStandardExecutor.mockReset()
    commandStandardExecutor.mockResolvedValue({ code: 0, stdout: '', stderr: '' })
  })

  it('isExistDocker 在版本输出含 Docker 时为真', async () => {
    execCommand.mockResolvedValue(commandResult('Docker version 27.0.0\n'))
    await expect(VipDocker.isExistDocker()).resolves.toBe(true)
    expect(execCommand).toHaveBeenCalledWith('docker -v')
  })

  it('isExistDockerCompose 未安装时为假', async () => {
    execCommand.mockResolvedValue(commandResult('not found', 1))
    await expect(VipDocker.isExistDockerCompose()).resolves.toBe(false)
  })

  it('buildImage 把 build-arg 写进 buildx 命令', async () => {
    await VipDocker.buildImage({
      imageName: 'aaa',
      buildArgs: [
        ['aaa', 123],
        ['bb', 'go'],
      ],
    })
    const command = commandStandardExecutor.mock.calls[0]?.[0] ?? ''
    expect(command).toContain(`--build-arg aaa=123`)
    expect(command).toContain(`--build-arg bb='go'`)
    expect(command).toContain(`-t 'aaa'`)
  })

  it('按容器状态拆出全部、运行中、未运行名称', async () => {
    execCommand.mockResolvedValue(commandResult('web &&& Up 2 hours\njob &&& Exited (0)\n'))
    await expect(VipDocker.listContainerNames()).resolves.toEqual(['web', 'job'])
    await expect(VipDocker.listRunningContainerNames()).resolves.toEqual(['web'])
    await expect(VipDocker.listNoRunningContainerNames()).resolves.toEqual(['job'])
  })

  it('getImageAddress 去掉首尾空白', async () => {
    execCommand.mockResolvedValue(commandResult('  nginx:latest\n'))
    await expect(VipDocker.getImageAddress('web')).resolves.toBe('nginx:latest')
  })

  it('listNetworkNames 丢掉空行，isExistNetwork 按名称判断', async () => {
    execCommand.mockResolvedValue(commandResult('bridge\n\nvip\n'))
    await expect(VipDocker.listNetworkNames()).resolves.toEqual(['bridge', 'vip'])
    await expect(VipDocker.isExistNetwork('vip')).resolves.toBe(true)
    await expect(VipDocker.isExistNetwork('missing')).resolves.toBe(false)
  })
})
