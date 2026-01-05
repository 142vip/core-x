import { Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { UserAccountEntity } from './user-account.entity'

@Injectable()
export class TypeOrmExampleService {
  constructor(
    private readonly dataSource: DataSource,
  ) {}

  /**
   * 获取用户列表
   */
  public async getUserAccountList(): Promise<UserAccountEntity[]> {
    const userAccountRepo = this.dataSource.getRepository(UserAccountEntity)
    return await userAccountRepo.find()
  }
}
