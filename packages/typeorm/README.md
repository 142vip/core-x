# @142vip/typeorm

[![NPM version](https://img.shields.io/npm/v/@142vip/typeorm?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/typeorm)

TypeORM 数据库操作工具，基于 TypeORM 的封装。

## 安装

```shell
# npm
npm install @142vip/typeorm typeorm

# pnpm
pnpm add @142vip/typeorm typeorm
```

## 功能

- [x] `BaseEntity`：自增 `id`、`createTime`、`updateTime`
- [x] `BaseEntityWithDeleted`：含 `deleted` 软删字段

## 配置

无（实体字段通过 TypeORM 装饰器定义；连接配置在应用层 `DataSource`）。

## 使用

```ts
import { BaseEntity, BaseEntityWithDeleted } from '@142vip/typeorm'
import { Column, Entity } from 'typeorm'

@Entity()
class User extends BaseEntityWithDeleted {
  @Column()
  name!: string
}
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/typeorm
```

## 参考

- [@142vip/typeorm](https://www.npmjs.com/package/@142vip/typeorm)
- [TypeORM 文档](https://typeorm.io/)
- [@142vip/nest-typeorm](https://www.npmjs.com/package/@142vip/nest-typeorm)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
