[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipDocker

# 变量: VipDocker

> `const` **VipDocker**: `object`

定义于: [packages/utils/src/core/docker.ts:402](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/utils/src/core/docker.ts#L402)

docker工具

## 类型声明

### buildImage()

> **buildImage**: (`args`) => `Promise`\<`void`\>

构建Docker镜像
- 根据tag标记，推送到远程仓库
- 推送完成后，删除本地镜像

#### 参数

##### args

`BuildImageDockerOptions`

#### 返回

`Promise`\<`void`\>

### createContainer()

> **createContainer**: (`args`) => `Promise`\<`void`\>

创建容器

#### 参数

##### args

`CreateContainerOptions`

#### 返回

`Promise`\<`void`\>

### createNetwork()

> **createNetwork**: (`options`) => `Promise`\<`boolean`\>

创建网络

#### 参数

##### options

`CreateNetworkOptions`

#### 返回

`Promise`\<`boolean`\>

### deleteContainer()

> **deleteContainer**: (`containerName`) => `Promise`\<`boolean`\>

删除容器

#### 参数

##### containerName

`string`

#### 返回

`Promise`\<`boolean`\>

### deleteForceContainer()

> **deleteForceContainer**: (`containerName`) => `Promise`\<`boolean`\>

强制删除容器，同时删除镜像

#### 参数

##### containerName

`string`

#### 返回

`Promise`\<`boolean`\>

### deleteImage()

> **deleteImage**: (`imageName`) => `Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

删除Docker镜像

#### 参数

##### imageName

`string`

#### 返回

`Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

### deletePruneImages()

> **deletePruneImages**: () => `Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

删除虚悬镜像

#### 返回

`Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

### getImageAddress()

> **getImageAddress**: (`containerName`) => `Promise`\<`null` \| `string`\>

基于容器名获取镜像地址

#### 参数

##### containerName

`string`

#### 返回

`Promise`\<`null` \| `string`\>

### isExistContainer()

> **isExistContainer**: (`containerName`) => `Promise`\<`boolean`\>

判断容器是否存在

#### 参数

##### containerName

`string`

#### 返回

`Promise`\<`boolean`\>

### isExistDocker()

> **isExistDocker**: (`args?`) => `Promise`\<`boolean`\>

是否安装docker

#### 参数

##### args?

`DockerOptions`

#### 返回

`Promise`\<`boolean`\>

### isExistDockerCompose()

> **isExistDockerCompose**: (`args?`) => `Promise`\<`boolean`\>

是否安装docker-compose

#### 参数

##### args?

`DockerOptions`

#### 返回

`Promise`\<`boolean`\>

### isExistImage()

> **isExistImage**: (`imageName`) => `Promise`\<`boolean`\>

判断是否存在镜像

#### 参数

##### imageName

`string`

#### 返回

`Promise`\<`boolean`\>

### isExistNetwork()

> **isExistNetwork**: (`networkName`) => `Promise`\<`boolean`\>

判断网络是否存在

#### 参数

##### networkName

`string`

#### 返回

`Promise`\<`boolean`\>

### listContainer()

> **listContainer**: () => `Promise`\<`void`\>

查询所有容器

#### 返回

`Promise`\<`void`\>

### listContainerNames()

> **listContainerNames**: () => `Promise`\<`string`[]\>

列出所有正在运行的容器名称

#### 返回

`Promise`\<`string`[]\>

### listContainerStatus()

> **listContainerStatus**: () => `Promise`\<`object`[]\>

列出所有容器名称、状态

#### 返回

`Promise`\<`object`[]\>

### listNetworkNames()

> **listNetworkNames**: () => `Promise`\<`string`[]\>

列举出所有的网络名称

#### 返回

`Promise`\<`string`[]\>

### listNoRunningContainerNames()

> **listNoRunningContainerNames**: () => `Promise`\<`string`[]\>

列出所有未运行的容器名称

#### 返回

`Promise`\<`string`[]\>

### listPruneImages()

> **listPruneImages**: () => `Promise`\<`void`\>

列出虚线镜像

#### 返回

`Promise`\<`void`\>

### listRunningContainer()

> **listRunningContainer**: () => `Promise`\<`void`\>

查看正在运行的容器

#### 返回

`Promise`\<`void`\>

### listRunningContainerNames()

> **listRunningContainerNames**: () => `Promise`\<`string`[]\>

列出所有正在运行的容器名称

#### 返回

`Promise`\<`string`[]\>

### pullImage()

> **pullImage**: (`imageAddress`) => `Promise`\<`void`\>

#### 参数

##### imageAddress

`string`

#### 返回

`Promise`\<`void`\>

### pushImage()

> **pushImage**: (`imageName`) => `Promise`\<`void`\>

推送Docker镜像到指定仓库

#### 参数

##### imageName

`string`

#### 返回

`Promise`\<`void`\>

### scriptExecutor()

> **scriptExecutor**: (`command`) => `Promise`\<`void`\>

docker命令的通用执行器

#### 参数

##### command

`string`

#### 返回

`Promise`\<`void`\>

### userLogin()

> **userLogin**: (`args`) => `Promise`\<`void`\>

用户登录

#### 参数

##### args

`UserLoginDockerOptions`

#### 返回

`Promise`\<`void`\>
