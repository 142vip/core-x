import { TransformUriPath } from '@142vip/nest'
import { IsObject, IsString } from 'class-validator'

export class SwaggerConfig {
  @IsString()
  @TransformUriPath()
  docPath: string = 'doc'

  /**
   * 默认本地环境
   */
  @IsObject()
  envs: Record<string, string> = { local: 'http://127.0.0.1' }
}
