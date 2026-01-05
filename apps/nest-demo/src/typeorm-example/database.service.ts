import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'
import { UserAccountEntity } from './user-account.entity'

@Injectable()
export class DatabaseService {
  constructor(
    public readonly dataSource: DataSource,
    @InjectRepository(UserAccountEntity)
    public readonly userAccountRepo: Repository<UserAccountEntity>,
  ) {}
}
