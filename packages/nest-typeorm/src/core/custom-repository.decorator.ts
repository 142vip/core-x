import { SetMetadata } from '@nestjs/common'
import { TYPEORM_CUSTOM_REPOSITORY } from './typeorm.constant'

/**
 * 自定义Repo装饰器
 * @param entity
 */
export function CustomRepository(entity: new (...args: any) => any): ClassDecorator {
  return SetMetadata(TYPEORM_CUSTOM_REPOSITORY, entity)
}
