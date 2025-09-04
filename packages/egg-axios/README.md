# @142vip/egg-axios

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-axios?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-axios)

`Egg.js`框架下使用`@142vip/axios`的插件，简化`Http`请求配置

## 安装

```bash
# npm
npm i @142vip/axios
# pnpm
pnpm i @142vip/egg-axios
```

## 配置

### 单实例
```js
// config/config.default.js
module.exports = {
  axios: {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    // default 5 seconds timeout
    timeout: 5000,
  }
}
```

### 多个实例

```js
// config/config.default.js
exports.eggAxios = {
  clients: {
    // clientId，可通过 app.mysql.get('clientId') 访问客户端实例
    axios1: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
      // default 5 seconds timeout
      timeout: 5000,
    },
    axios2: {
      headers: {
        common: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    },
  },
  // 所有数据库的默认配置
  default: {
    timeout: 5000,
  },
}
```

## 使用

### 单实例
```js
// app/controller/post.js
class PostController extends Controller {
  async list() {
    const axios = await this.app.axios
  }
}
```

### 多实例

```js
// app/controller/post.js
class PostController extends Controller {
  async list() {
    const axios1 = await this.app.axios.get('axios1')
    const axios2 = await this.app.axios.get('axios2')
  }
}
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
