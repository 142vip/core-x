[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipDetect

# 类: VipDetect

定义于: [packages/utils/src/pkgs/detect.ts:15](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/detect.ts#L15)

## 构造函数

### 构造函数

> **new VipDetect**(): `VipDetect`

#### 返回

`VipDetect`

## 方法

### detectIndent()

> **detectIndent**(`str`): `DetectIndent`

定义于: [packages/utils/src/pkgs/detect.ts:30](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/detect.ts#L30)

#### 参数

##### str

`string`

#### 返回

`DetectIndent`

***

### detectNewLine()

> **detectNewLine**(`str`): "\n" \| "\r\n" \| `undefined`

定义于: [packages/utils/src/pkgs/detect.ts:34](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/detect.ts#L34)

#### 参数

##### str

`string`

#### 返回

"\n" \| "\r\n" \| `undefined`

***

### detectPort()

> **detectPort**(`port`): `Promise`\<`boolean`\>

定义于: [packages/utils/src/pkgs/detect.ts:19](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/detect.ts#L19)

检测端口

#### 参数

##### port

`number`

#### 返回

`Promise`\<`boolean`\>

***

### getAddress()

> **getAddress**(): `Promise`\<[`Address`](../interfaces/Address.md)\>

定义于: [packages/utils/src/pkgs/detect.ts:41](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/detect.ts#L41)

获取地址

#### 返回

`Promise`\<[`Address`](../interfaces/Address.md)\>
