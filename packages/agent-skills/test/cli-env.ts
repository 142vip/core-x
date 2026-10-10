/** CLI 单测的环境变量替身，避免直接读写 process.env */
const values = new Map<string, string>()

export function setCliEnv(key: string, value: string | undefined): void {
  if (value == null)
    values.delete(key)
  else
    values.set(key, value)
}

export function readCliEnv(key: string): string | undefined {
  return values.get(key)
}
