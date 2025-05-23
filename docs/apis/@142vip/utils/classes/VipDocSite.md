[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipDocSite

# 类: VipDocSite

定义于: [packages/utils/src/core/doc-site.ts:6](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/utils/src/core/doc-site.ts#L6)

博客站点的工具方法

## 构造函数

### 构造函数

> **new VipDocSite**(): `VipDocSite`

#### 返回

`VipDocSite`

## 属性

### defaultEnvKey

> `readonly` **defaultEnvKey**: `string` = `'NEED_PROXY'`

定义于: [packages/utils/src/core/doc-site.ts:10](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/utils/src/core/doc-site.ts#L10)

默认的环境变量的键

## 方法

### getBase()

> **getBase**(`baseName`, `envKey?`): `` `/${string}/` `` \| `"/"`

定义于: [packages/utils/src/core/doc-site.ts:19](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/utils/src/core/doc-site.ts#L19)

用于区分base路径，是否nginx代理
- 路径名称
- 默认环境变量 NEED_PROXY

#### 参数

##### baseName

`string`

路径名称

##### envKey?

`string`

环境变量的键

#### 返回

`` `/${string}/` `` \| `"/"`
