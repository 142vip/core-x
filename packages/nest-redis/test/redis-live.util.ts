import { createConnection } from 'node:net'

/** 探测本机 Redis 是否可连（CI 配 services.redis 或本地已启动时返回 true） */
export function isRedisReachable(host = '127.0.0.1', port = 6379, timeoutMs = 800): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = createConnection({ host, port })
    const finish = (ok: boolean) => {
      socket.removeAllListeners()
      socket.destroy()
      resolve(ok)
    }
    socket.setTimeout(timeoutMs)
    socket.once('connect', () => finish(true))
    socket.once('error', () => finish(false))
    socket.once('timeout', () => finish(false))
  })
}
