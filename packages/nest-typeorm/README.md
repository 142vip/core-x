# @142vip/nest-typeorm

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-typeorm?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-typeorm)

Nest.js 框架下 TypeORM 的最佳实践

## 安装

```shell
# npm
npm install @142vip/nest-typeorm @142vip/nest @nestjs/typeorm typeorm

# pnpm
pnpm add @142vip/nest-typeorm @142vip/nest @nestjs/typeorm typeorm
```

## 功能

- [x] `NestTypeOrmModule`：委托 `@nestjs/typeorm`，避免多余包装破坏 DataSource 注入
- [x] `forRoot` / `forRootAsync` / `forFeature` / `register`（等同 `forRoot`）
- [x] `DataType` 枚举：`mysql` / `postgres`
- [x] re-export `@nestjs/typeorm` 与 `typeorm` 常用 API（`pkgs.ts`）

## 配置

在 `nest-starter` 配置文件的 `starter.typeorm` 中声明（`TypeormMysqlConfig` / `TypeormPostgresConfig`）：

```js
module.exports = {
  starter: {
    port: 3000,
    typeorm: {
      type: 'postgres',
      url: 'postgres://user:pass@127.0.0.1:5432/db',
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    },
  },
}
```

`type` 也可由 `url` 协议推断（`nest-starter` `StarterConfig` 内 `@Type` 工厂）。

## 使用

由 `NestStarter` 在 `starter.typeorm` 存在时自动 `NestTypeOrmModule.forRoot`。

业务模块注册实体：

```ts
import { NestTypeOrmModule } from '@142vip/nest-typeorm'
import { UserEntity } from './user.entity'

@Module({
  imports: [NestTypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}
```

也可直接 re-export 的 TypeORM API：

```ts
import { InjectRepository, Repository } from '@142vip/nest-typeorm'
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/nest-typeorm
```

## 参考

- [@142vip/nest-typeorm](https://www.npmjs.com/package/@142vip/nest-typeorm)
- [Nest TypeORM](https://docs.nestjs.com/techniques/database)
- [TypeORM 文档](https://typeorm.io/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
