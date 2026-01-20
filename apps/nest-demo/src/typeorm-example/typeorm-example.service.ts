import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { DatabaseService } from './database.service'
import { UserAccountEntity } from './user-account.entity'

@Injectable()
export class TypeOrmExampleService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly databaseService: DatabaseService,
  ) {}

  public async getUserAccountList(): Promise<UserAccountEntity[]> {
    const userAccountRepo = this.dataSource.getRepository(UserAccountEntity)
    return await userAccountRepo.find()
  }

  public async getUserAccount(): Promise<UserAccountEntity | null> {
    return await this.databaseService.userAccountRepo.findOneBy({
      id: 1,
    })
  }
}
