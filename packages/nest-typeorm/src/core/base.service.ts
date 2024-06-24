import { EntityManager } from 'typeorm'
import { InjectEntityManager } from '@nestjs/typeorm'

export class BaseDBService {
  @InjectEntityManager()
  public readonly entityManager: EntityManager
}
