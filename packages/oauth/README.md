# @142vip/oauth2.0

[![NPM version](https://img.shields.io/npm/v/@142vip/oauth2.0?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/oauth2.0)

Oauth2.0 授权认证，支持通用授权协议。

## 安装

> npm 包名为 `@142vip/oauth2.0`，仓库目录为 `packages/oauth`。

```shell
# npm
npm install @142vip/oauth2.0

# pnpm
pnpm add @142vip/oauth2.0
```

## 功能

- [x] 导出 `StandardOauthV2` 类骨架
- [ ] `authorize` / `getToken` / `authenticate` / `refreshToken` **当前为空实现（stub）**

## 配置

无（尚未提供配置项与端点定义）。

## 使用

```ts
import { StandardOauthV2 } from '@142vip/oauth2.0'

const oauth = new StandardOauthV2()
// 以下方法已声明但暂无实现体
await oauth.authorize()
await oauth.getToken()
await oauth.authenticate()
await oauth.refreshToken()
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/oauth2.0
```

## 参考

- [@142vip/oauth2.0](https://www.npmjs.com/package/@142vip/oauth2.0)
- [OAuth 2.0 RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)
- [142vip-oauth 仓库](https://github.com/142vip/142vip-oauth)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
