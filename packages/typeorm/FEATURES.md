# @142vip/typeorm

技术说明。不随 npm 发布。

## 定位

提供 TypeORM 实体基类，统一主键与时间戳（及可选软删）字段，供 `@142vip/nest-typeorm` 与业务实体继承。

## 功能

### 子路径

- `@142vip/typeorm`：主入口（`src/index.ts` → `src/base.entity.ts`）

### 类 `BaseEntity`（`base.entity.ts`）

装饰器来自 `typeorm@0.3.21`。

- `id: number`
  - `@PrimaryGeneratedColumn({ type: 'bigint' })`
- `createTime: Date`
  - `@CreateDateColumn({ type: 'timestamp' })`
- `updateTime: Date`
  - `@UpdateDateColumn({ type: 'timestamp' })`

### 类 `BaseEntityWithDeleted`（继承 `BaseEntity`）

- `deleted: boolean`
  - `@Column({ type: 'boolean', default: false })`

## 配置

无

## 最佳实践

- 业务实体继承 `BaseEntity` 或 `BaseEntityWithDeleted`，勿重复定义 `id`/时间列
- Nest 项目通过 `@142vip/nest-typeorm` 注册实体，保持 CommonJS 构建
- 软删查询在业务层过滤 `deleted === false`
- 与 TypeORM migration 同步字段类型（`bigint` / `timestamp`）
- 发版前确认 `typeorm` 依赖版本与仓库 `package.json` 锁定一致（当前 `0.3.21`）

## 构建

`unbuild` → `cd packages/typeorm && pnpm build`

## 验证

```shell
cd packages/typeorm && pnpm build && pnpm typecheck
```

## 演示

无
