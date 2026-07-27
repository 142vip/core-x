# vitepress-demo

`@142vip/vitepress` 的最佳实践 Demo：主题拓展、Element Plus、**Mermaid 架构图**。

运行时依赖（`vitepress` / `vue` / `element-plus` / `mermaid` 等）由 `@142vip/vitepress` 提供，Demo 无需再单独声明。

## 在线浏览

- Netlify： <https://apps-vitepress-demo.netlify.app>
- Vercel： <https://apps-vitepress-demo.vercel.app>

## 本地验证

```bash
# 在 monorepo 根目录
./scripts/ci
# 或：pnpm install

# 构建包（改了 packages/vitepress 后需要）
cd packages/vitepress && pnpm build

# 启动 Demo（:3080）
cd apps/vitepress-demo && pnpm dev
# 打开「Mermaid 架构图」页，切换明暗主题 / 查看 theme=forest 等示例

# 构建校验
cd apps/vitepress-demo && pnpm build
```

## 本 Demo 覆盖的最佳实践

| 能力 | 用法 |
|------|------|
| 站点配置 | `defineVipVitepressConfig(config, { mermaid: true })` |
| 主题 | `defineVipExtendsTheme()` |
| 图渲染 | ` ```mermaid `，可选 `theme=forest` 等 |
| 依赖 | 只依赖 `@142vip/vitepress`，peer 由包内锁定 |

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
