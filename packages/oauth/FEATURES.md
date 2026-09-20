# @142vip/oauth2.0

技术说明。不随 npm 发布。

## 定位

OAuth 2.0 授权的 npm 包占位与 API 骨架；完整实现见独立仓库 [142vip-oauth](https://github.com/142vip/142vip-oauth)。当前源码中业务方法均为空 stub。

## 功能

### 子路径

- `@142vip/oauth2.0`：主入口（目录名 `packages/oauth`，`src/index.ts` → `src/oauth2.0.ts`）

### 类 `StandardOauthV2`（`oauth2.0.ts`）

- `authorize(): Promise<void>`：空实现
- `getToken(): Promise<void>`：空实现
- `authenticate(): Promise<void>`：空实现
- `refreshToken(): Promise<void>`：空实现

### 依赖说明

- `package.json` 声明 `@142vip/utils`（workspace）；当前类内未引用 utils 符号

## 配置

无

## 最佳实践

- 生产 OAuth 流程勿依赖本包当前 stub，改用 [142vip-oauth](https://github.com/142vip/142vip-oauth) 或成熟 OIDC 库
- 扩展实现时保持类名 `StandardOauthV2` 与 npm 名 `@142vip/oauth2.0` 一致
- 实现后同步 README 功能清单与 TypeDoc
- 令牌存储与刷新须遵循 RFC 6749 安全实践
- 文档站侧栏显示名为 `oauth2.0`，勿与目录名 `oauth` 混淆

## 构建

`unbuild` → `cd packages/oauth && pnpm build`

## 验证

```shell
cd packages/oauth && pnpm build && pnpm typecheck
```

## 演示

无
