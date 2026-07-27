import type { UserConfig } from 'vitepress'

const MERMAID_OPTIMIZE_DEPS = ['mermaid', '@braintree/sanitize-url'] as const

function mergeOptimizeDepsInclude(
  existing: string | string[] | undefined,
): string[] {
  const base = existing == null
    ? []
    : Array.isArray(existing)
      ? [...existing]
      : [existing]

  for (const dep of MERMAID_OPTIMIZE_DEPS) {
    if (!base.includes(dep)) {
      base.push(dep)
    }
  }
  return base
}

/** 启用 Mermaid 时合并 Vite 预构建配置，修复 sanitize-url CJS/ESM 互操作 */
export function mergeVipMermaidViteConfig(
  vite: UserConfig['vite'] = {},
): NonNullable<UserConfig['vite']> {
  return {
    ...vite,
    optimizeDeps: {
      ...vite.optimizeDeps,
      include: mergeOptimizeDepsInclude(vite.optimizeDeps?.include),
    },
  }
}
