import { Column, Entity, PrimaryGeneratedColumn } from '@142vip/nest-typeorm'
/**
 * 用户账号
 */
@Entity('x_user_account')
export class UserAccountEntity {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: number

  /**
   * 用户账号
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  account!: string

  /**
   * 密码
   */
  @Column({
    type: 'varchar',
    length: 255,
  })
  password!: string

  /**
   * 昵称
   */
  @Column({
    type: 'varchar',
    length: 40,
    default: '',
  })
  nickName!: string
}
