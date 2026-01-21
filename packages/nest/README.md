# @142vip/nest

[![NPM version](https://img.shields.io/npm/v/@142vip/nest?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest)

全面拥抱 [NEST.JS V11.1.8](https://docs.nestjs.com/) 框架，提供常用的响应格式化、数据转换、全局异常处理等功能模块。

## 功能特性

- 📦 **响应格式化**：统一的 `API` 响应格式和 `Swagger` 文档生成
- 🔄 **数据转换**：丰富的数据转换装饰器，简化数据处理
- 🎯 **全局异常处理**：统一的异常处理机制
- 📋 **响应拦截器**：自动格式化 API 响应
- 📊 **分页支持**：内置分页数据结构和转换
- 🔗 **传播拦截器**：跨请求上下文信息传递
- 🎨 **Swagger 集成**：自动生成标准的 API 文档

## 安装

```shell
# npm
npm install @142vip/nest

# pnpm
pnpm i @142vip/nest

# yarn
yarn add @142vip/nest
```

## 核心功能

### 1. 响应格式化装饰器

提供统一的 API 响应格式和 Swagger 文档生成。

#### 主要装饰器

- `ApiResponseObject<T>(?)`: 单个对象响应
- `ApiResponseList<T>(?)`: 数组响应
- `ApiResponsePagination<T>(?)`: 分页响应
- `ApiResponseNull()`: 空响应
- `ApiResponseSkip()`: 跳过响应拦截器

#### 使用示例

```typescript
import { ApiResponseList, ApiResponseObject, ApiResponsePagination } from '@142vip/nest'
import { Controller, Get } from '@nestjs/common'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UserController {
  @Get(':id')
  @ApiResponseObject(UserDto)
  async getUser() {
    return { id: 1, name: 'John Doe' }
  }

  @Get()
  @ApiResponseList(UserDto)
  async getUsers() {
    return [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
  }

  @Get('/paginated')
  @ApiResponsePagination(UserDto)
  async getPaginatedUsers() {
    return {
      list: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }],
      pageNum: 1,
      pageSize: 10,
      total: 2,
      pageCount: 1
    }
  }
}
```

### 2. 数据转换装饰器

提供丰富的数据转换装饰器，简化数据处理和验证。

#### 字符串处理装饰器

- `Trim`: 去除字符串首尾空格
- `StrDesensitize`: 数据脱敏（手机号、API key等）
- `TransformUriPath`: 标准化路径，移除前导斜杠
- `DtoDecodeURI`: 解码URI参数

#### 类型转换装饰器

- `TransformToBoolean`: 转换为布尔值
- `TransformToNumber`: 转换为数字
- `TransformToNumberArray`: 转换为数字数组
- `TransformToStringArray`: 转换为字符串数组
- `TransformToStringAndNumberArray`: 转换为字符串和数字混合数组
- `DtoTransformToBoolean`: DTO专用布尔值转换

#### 默认值装饰器

- `DefaultValue(value)`: 设置默认值（当值为null时生效）

#### 使用示例

```typescript
import {
  DefaultValue,
  StrDesensitize,
  TransformToBoolean,
  TransformToNumber,
  TransformToNumberArray,
  Trim
} from '@142vip/nest'
import { IsArray, IsNumber, IsString } from 'class-validator'

export class UserDto {
  @IsString()
  @Trim()
  name: string

  @IsNumber()
  @DefaultValue(18)
  age: number

  @IsString()
  @StrDesensitize()
  phone: string

  @IsNumber()
  @TransformToNumber()
  userId: number

  @TransformToBoolean()
  isActive: boolean

  @IsArray()
  @TransformToNumberArray()
  roleIds: number[]
}
```

### 3. 响应DTO

提供标准化的响应数据结构。

#### 主要DTO

- `ResponseVo<T>`: 基础响应结构
- `ResponseSuccessVo<T>`: 成功响应
- `ResponseErrorVo<T>`: 错误响应
- `PaginationVo<T>`: 分页响应

#### 结构示例

- 对象
```json5
{
  "success": true,
  "data": []
}
```
- 数组
```json5
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe"
  }
}
```
- 分页数组
```json5
{
  "success": true,
  "data": {
    "list": [{ "id": 1, "name": "John Doe" }],
    "pageNum": 1,
    "pageSize": 10,
    "total": 1,
    "pageCount": 1
  }
}
```
- 空响应
```json5
{
  "success": true
}
```

### 4. 全局过滤器

统一的异常处理机制，捕获并格式化所有异常。

#### 配置示例

```typescript
import { GlobalFilter } from '@142vip/nest'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new GlobalFilter())
  await app.listen(3000)
}
bootstrap()
```

### 5. 响应拦截器

自动格式化 API 响应，支持响应类型转换和分页数据处理。

#### 配置示例

```typescript
import { ResponseInterceptor } from '@142vip/nest'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new ResponseInterceptor())
  await app.listen(3000)
}
bootstrap()
```

### 6. 传播拦截器

跨请求上下文信息传递，支持 HTTP、WebSocket 和 RPC 请求。

#### 配置示例

```typescript
import { PropagationInterceptor } from '@142vip/nest'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalInterceptors(new PropagationInterceptor())
  await app.listen(3000)
}
bootstrap()
```

#### 使用场景

- 请求 ID 传递
- 用户认证信息传递
- 日志上下文追踪
- 跨服务请求链追踪

## 完整示例

### 完整模块配置

```typescript
import { GlobalFilter, PropagationInterceptor, ResponseInterceptor } from '@142vip/nest'
import { Module } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_FILTER,
      useClass: GlobalFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: PropagationInterceptor,
    },
  ],
})
export class AppModule {}
```

### 控制器与服务示例

```typescript
import {
  ApiResponseList,
  ApiResponseObject,
  ApiResponsePagination,
  DefaultValue,
  PaginationVo,
  StrDesensitize,
  TransformToNumber,
  Trim
} from '@142vip/nest'
import {
  Body,
  Controller,
  Get,
  Injectable,
  Post,
  Query
} from '@nestjs/common'
import { IsNumber, IsOptional, IsString } from 'class-validator'
import { UserService } from './user.service'

// 请求 DTO 示例
class CreateUserDto {
  @IsString()
  @Trim()
  name: string

  @IsNumber()
  @DefaultValue(18)
  age: number

  @IsString()
  @StrDesensitize()
  phone: string
}

// 查询 DTO 示例
class GetUsersQuery {
  @IsOptional()
  @IsNumber()
  @TransformToNumber()
  pageNum?: number

  @IsOptional()
  @IsNumber()
  @TransformToNumber()
  pageSize?: number
}

// 响应 VO 示例
class UserVo {
  id: number
  name: string
  age: number
  phone: string
  createdAt: Date
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiResponseObject(UserVo)
  async getUser() {
    return this.userService.findById(1)
  }

  @Get()
  @ApiResponseList(UserVo)
  async getUsers() {
    return this.userService.findAll()
  }

  @Get('/paginated')
  @ApiResponsePagination(UserVo)
  async getPaginatedUsers(@Query() query: GetUsersQuery) {
    return this.userService.findPaginated(query.pageNum || 1, query.pageSize || 10)
  }

  @Post()
  @ApiResponseObject(UserVo)
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user)
  }
}
```

## 参考资料

- 官方文档：<https://docs.nestjs.com/>
- 中文文档：<https://nest.nodejs.cn/>

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
