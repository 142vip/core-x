import type { ReleaseVersionOptions, ReleaseVersionResults } from './releasex.interface'
import { ReleaseVersionOperation } from './core/releasex-operation'

/**
 * `@142vip/release-version` 对外 API。
 * `releasex` CLI 与 `fa release` 编排层通过 `releaseApi` 调用。
 */
export class ReleaseApi {
  /** 解析发版上下文：当前版本、目标版本（不写盘） */
  async releaseVersionInfo(options: ReleaseVersionOptions): Promise<ReleaseVersionOperation> {
    const operation = await ReleaseVersionOperation.create(options)
    await operation.resolveVersions()
    return operation
  }

  /** 发版准备：写版本号、CHANGELOG、脚本（不含 git commit / push） */
  async releaseVersionDryRun(options: ReleaseVersionOptions): Promise<ReleaseVersionOperation> {
    const operation = await this.releaseVersionInfo(options)
    await operation.prepareRelease()
    return operation
  }

  /** 完整发版：准备 → commit → tag → postversion → push */
  async releaseVersion(options: ReleaseVersionOptions): Promise<ReleaseVersionResults> {
    const operation = await this.releaseVersionDryRun(options)
    await operation.finalizeRelease()
    return operation.results
  }
}

export const releaseApi = new ReleaseApi()
