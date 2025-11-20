/**
 * redis key管理器
 */
export class RedisKeyManager<T extends string> {
  constructor(
    private readonly clientKey: T,
  ) {}

  /**
   * 创建缓存key
   */
  public generateKey(key: string): string {
    return `${this.clientKey}:${key}`
  }
}
