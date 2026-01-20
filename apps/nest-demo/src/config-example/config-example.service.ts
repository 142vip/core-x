import { StarterConfig } from '@142vip/nest-starter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ConfigExampleService {
  constructor(
    private readonly starterConfig: StarterConfig,
  ) { }

  public getStarterConfig(): StarterConfig {
    return this.starterConfig
  }
}
