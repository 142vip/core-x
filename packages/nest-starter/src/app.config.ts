import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { StarterConfig } from './config'

export class NestAppConfig {
  @ValidateNested()
  @Type(() => StarterConfig)
  @IsNotEmpty()
  starter!: StarterConfig
}
