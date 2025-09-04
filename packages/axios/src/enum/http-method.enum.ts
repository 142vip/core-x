/**
 * 适用于Axios的请求类型
 *  - 全大写
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  // PURGE = 'PURGE',
  // LINK = 'LINK',
  // UNLINK = 'UNLINK',
}

/**
 * 其他场景适用的请求类型
 * - 全小写
 */
export enum HttpMethodLower {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  HEAD = 'head',
  OPTIONS = 'options',
  // PURGE = 'purge',
  // LINK = 'link',
  // UNLINK = 'unlink',
}
