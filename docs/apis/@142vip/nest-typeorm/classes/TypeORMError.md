[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeORMError

# 类: TypeORMError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/TypeORMError.d.ts:1

## theme_extends

- `Error`

## theme_extended_by

- [`CannotReflectMethodParameterTypeError`](CannotReflectMethodParameterTypeError.md)
- [`AlreadyHasActiveConnectionError`](AlreadyHasActiveConnectionError.md)
- [`SubjectWithoutIdentifierError`](SubjectWithoutIdentifierError.md)
- [`CannotConnectAlreadyConnectedError`](CannotConnectAlreadyConnectedError.md)
- [`LockNotSupportedOnGivenDriverError`](LockNotSupportedOnGivenDriverError.md)
- [`ConnectionIsNotSetError`](ConnectionIsNotSetError.md)
- [`CannotCreateEntityIdMapError`](CannotCreateEntityIdMapError.md)
- [`MetadataAlreadyExistsError`](MetadataAlreadyExistsError.md)
- [`CannotDetermineEntityError`](CannotDetermineEntityError.md)
- [`UpdateValuesMissingError`](UpdateValuesMissingError.md)
- [`TreeRepositoryNotSupportedError`](TreeRepositoryNotSupportedError.md)
- [`CustomRepositoryNotFoundError`](CustomRepositoryNotFoundError.md)
- [`TransactionNotStartedError`](TransactionNotStartedError.md)
- [`TransactionAlreadyStartedError`](TransactionAlreadyStartedError.md)
- [`EntityNotFoundError`](EntityNotFoundError.md)
- [`EntityMetadataNotFoundError`](EntityMetadataNotFoundError.md)
- [`MustBeEntityError`](MustBeEntityError.md)
- [`OptimisticLockVersionMismatchError`](OptimisticLockVersionMismatchError.md)
- [`LimitOnUpdateNotSupportedError`](LimitOnUpdateNotSupportedError.md)
- [`PrimaryColumnCannotBeNullableError`](PrimaryColumnCannotBeNullableError.md)
- [`CustomRepositoryCannotInheritRepositoryError`](CustomRepositoryCannotInheritRepositoryError.md)
- [`QueryRunnerProviderAlreadyReleasedError`](QueryRunnerProviderAlreadyReleasedError.md)
- [`CannotAttachTreeChildrenEntityError`](CannotAttachTreeChildrenEntityError.md)
- [`CustomRepositoryDoesNotHaveEntityError`](CustomRepositoryDoesNotHaveEntityError.md)
- [`MissingDeleteDateColumnError`](MissingDeleteDateColumnError.md)
- [`NoConnectionForRepositoryError`](NoConnectionForRepositoryError.md)
- [`CircularRelationsError`](CircularRelationsError.md)
- [`ReturningStatementNotSupportedError`](ReturningStatementNotSupportedError.md)
- [`UsingJoinTableIsNotAllowedError`](UsingJoinTableIsNotAllowedError.md)
- [`MissingJoinColumnError`](MissingJoinColumnError.md)
- [`MissingPrimaryColumnError`](MissingPrimaryColumnError.md)
- [`EntityPropertyNotFoundError`](EntityPropertyNotFoundError.md)
- [`MissingDriverError`](MissingDriverError.md)
- [`DriverPackageNotInstalledError`](DriverPackageNotInstalledError.md)
- [`CannotGetEntityManagerNotConnectedError`](CannotGetEntityManagerNotConnectedError.md)
- [`ConnectionNotFoundError`](ConnectionNotFoundError.md)
- [`NoVersionOrUpdateDateColumnError`](NoVersionOrUpdateDateColumnError.md)
- [`InsertValuesMissingError`](InsertValuesMissingError.md)
- [`OptimisticLockCanNotBeUsedError`](OptimisticLockCanNotBeUsedError.md)
- [`MetadataWithSuchNameAlreadyExistsError`](MetadataWithSuchNameAlreadyExistsError.md)
- [`DriverOptionNotSetError`](DriverOptionNotSetError.md)
- [`FindRelationsNotFoundError`](FindRelationsNotFoundError.md)
- [`PessimisticLockTransactionRequiredError`](PessimisticLockTransactionRequiredError.md)
- [`RepositoryNotTreeError`](RepositoryNotTreeError.md)
- [`DataTypeNotSupportedError`](DataTypeNotSupportedError.md)
- [`InitializedRelationError`](InitializedRelationError.md)
- [`MissingJoinTableError`](MissingJoinTableError.md)
- [`QueryFailedError`](QueryFailedError.md)
- [`NoNeedToReleaseEntityManagerError`](NoNeedToReleaseEntityManagerError.md)
- [`UsingJoinColumnOnlyOnOneSideAllowedError`](UsingJoinColumnOnlyOnOneSideAllowedError.md)
- [`UsingJoinTableOnlyOnOneSideAllowedError`](UsingJoinTableOnlyOnOneSideAllowedError.md)
- [`SubjectRemovedAndUpdatedError`](SubjectRemovedAndUpdatedError.md)
- [`PersistedEntityNotFoundError`](PersistedEntityNotFoundError.md)
- [`UsingJoinColumnIsNotAllowedError`](UsingJoinColumnIsNotAllowedError.md)
- [`ColumnTypeUndefinedError`](ColumnTypeUndefinedError.md)
- [`QueryRunnerAlreadyReleasedError`](QueryRunnerAlreadyReleasedError.md)
- [`OffsetWithoutLimitNotSupportedError`](OffsetWithoutLimitNotSupportedError.md)
- [`CannotExecuteNotConnectedError`](CannotExecuteNotConnectedError.md)
- [`NoConnectionOptionError`](NoConnectionOptionError.md)
- [`ForbiddenTransactionModeOverrideError`](ForbiddenTransactionModeOverrideError.md)

## 构造函数

### 构造函数

> **new TypeORMError**(`message?`): `TypeORMError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/TypeORMError.d.ts:3

#### 参数

##### message?

`string`

#### 返回

`TypeORMError`

#### 重写了

`Error.constructor`

## 属性

### cause?

> `optional` **cause?**: `unknown`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### 继承自

`Error.cause`

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

`Error.message`

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

`Error.stack`

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### 参数

##### err

`Error`

##### stackTraces

`CallSite`[]

#### 返回

`any`

#### 参阅

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 继承自

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

`Error.stackTraceLimit`

## 访问器

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/TypeORMError.d.ts:2

##### 返回

`string`

#### 重写了

`Error.name`

## 方法

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### 参数

##### targetObject

`object`

##### constructorOpt?

`Function`

#### 返回

`void`

#### 继承自

`Error.captureStackTrace`
