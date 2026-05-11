/**
 * 解析 Vite `import.meta.glob(..., { eager: true })` 载入的 workspace `package.json`（浏览器 / SSR，无 Node fs）。
 *
 * `glob` 的 pattern 仍须在调用方写成字面量，便于 Vite 静态分析；本模块仅处理「模块对象 → 索引表」。
 */

/** 匹配 monorepo 下 `packages/foo/package.json` 或 `apps/bar/package.json` */
const PACKAGE_JSON_IN_WORKSPACE = /(?:^|\/)(?:packages|apps)\/([^/]+)\/package\.json$/

/**
 * 标准化 eager glob 中的单个模块：兼容 `export default` 与裸导出。
 */
export function normalizeGlobPackageJsonModule<T extends Record<string, unknown> = Record<string, unknown>>(
  mod: unknown,
): T {
  if (mod !== null && typeof mod === 'object' && 'default' in mod && (mod as { default: unknown }).default != null) {
    return (mod as { default: T }).default
  }
  return mod as T
}

/**
 * 将 glob 得到的「路径 → 模块」映射为「子目录名 → package.json 内容」。
 */
export function indexWorkspacePackageJsonGlob<T extends Record<string, unknown> = Record<string, unknown>>(
  modules: Record<string, unknown>,
): Record<string, T> {
  const byDir: Record<string, T> = {}
  for (const [filePath, mod] of Object.entries(modules)) {
    const m = filePath.match(PACKAGE_JSON_IN_WORKSPACE)
    if (!m)
      continue
    byDir[m[1]] = normalizeGlobPackageJsonModule<T>(mod)
  }
  return byDir
}
