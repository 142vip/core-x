export class BaseVo<T> {
  constructor(obj: T) {
    Object.assign(this, obj)
  }
}
