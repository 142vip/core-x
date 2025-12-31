import type { DetectIndent } from '../extends/detect-indent'
import { ip, ipv6, mac } from 'address'
import { detect } from 'detect-port'
import { vipLogger } from '../core'
import { detectIndent } from '../extends/detect-indent'
import { detectNewline } from '../extends/detect-newline'

export interface Address {
  local?: string
  ip?: string
  ipv6?: string
  mac?: string
}

export class VipDetect {
  /**
   * 检测端口
   */
  public async detectPort(port: number) {
    try {
      const realPort = await detect(port)
      return realPort !== port
    }
    catch {
      vipLogger.error(`detect port ${port} failed`)
      return false
    }
  }

  public detectIndent(str: string): DetectIndent {
    return detectIndent(str)
  }

  public detectNewLine(str: string) {
    return detectNewline(str)
  }

  /**
   * 获取地址
   */
  public async getAddress(): Promise<Address> {
    const localAddress = ip('lo')
    const ipAddress = ip()
    const ipv6Address = ipv6()

    const macAddress = await new Promise<string>((resolve, reject) => {
      mac((err, addr) => {
        if (err) {
          reject(err)
        }
        resolve(addr as string)
      })
    })

    return {
      local: localAddress,
      ip: ipAddress,
      ipv6: ipv6Address,
      mac: macAddress,
    }
  }
}

export const vipDetect = new VipDetect()
