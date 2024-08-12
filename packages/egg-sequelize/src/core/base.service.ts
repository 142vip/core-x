import type { Sequelize } from 'sequelize'

export class BaseService {
  private readonly entity: Sequelize
  constructor(entity: Sequelize) {
    this.entity = entity
  }

  /**
   * 插入数据
   */
  public async insertData() {
    // this.entity.
    console.log(this.entity)
  }
}
