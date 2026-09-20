# @142vip/nest

[![NPM version](https://img.shields.io/npm/v/@142vip/nest?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest)

Nest.js 框架基础模块，管理生产、开发依赖

## 安装

须同时安装 `peerDependencies`（版本见本包 `package.json`：`@nestjs/common`、`@nestjs/core`、`class-validator`）。

```shell
# npm
npm install @142vip/nest

# pnpm
pnpm add @142vip/nest
```

## 功能

- [x] 统一响应拦截器 `ResponseInterceptor`（`{ success, data }`）
- [x] 请求头传播 `PropagationInterceptor` 与 `propagationContext`
- [x] 全局异常过滤器 `GlobalFilter`
- [x] Swagger 响应装饰器：`ApiResponseObject` / `ApiResponseList` / `ApiResponsePagination` / `ApiResponseNull` / `ApiResponseSkip`
- [x] DTO / VO 基类与分页：`PaginationDto`、`PaginationVo`、`BaseEntityVo`
- [x] 属性转换装饰器：`TransformToBoolean`、`Trim`、`StrDesensitize`（完整列表见 `FEATURES.md`）
- [x] 模块类型别名 `NestModule`

## 配置

本包无独立配置文件。全局拦截器 / 过滤器由应用自行注册，或使用 `@142vip/nest-starter` 统一挂载。

## 使用

```ts
import {
  ApiResponseObject,
  ApiResponsePagination,
  PaginationDto,
} from '@142vip/nest'
import { Controller, Get, Query } from '@nestjs/common'

/** 业务侧 VO，非本包导出 */
class UserVo {
  id!: number
  name!: string
}

@Controller('users')
export class UserController {
  @Get()
  @ApiResponsePagination(UserVo)
  list(@Query() query: PaginationDto) {
    return { records: [], pageNum: 1, pageSize: 10, total: 0 }
  }

  @Get(':id')
  @ApiResponseObject(UserVo)
  detail() {
    return { id: 1, name: 'demo' }
  }
}
```

DTO 字段转换：

```ts
import { TransformToBoolean, Trim } from '@142vip/nest'

export class QueryDto {
  @Trim()
  keyword!: string

  @TransformToBoolean()
  active?: boolean
}
```

在 `NestStarter` 中全局注册拦截器与过滤器见 `@142vip/nest-starter`。

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/nest
```

## 参考

- [@142vip/nest](https://www.npmjs.com/package/@142vip/nest)
- [@142vip/nest-starter](https://www.npmjs.com/package/@142vip/nest-starter)
- [NestJS 文档](https://docs.nestjs.com/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
