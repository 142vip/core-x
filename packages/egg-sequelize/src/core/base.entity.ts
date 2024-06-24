import { DataTypes } from 'sequelize'

export const BaseEntity = {

  /**
   * 主键
   */
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  /**
   * 是否删除
   */
  deleted: {
    type: DataTypes.BIGINT,
    defaultValue: false,
  },
}

/**
 * 创建实体
 */
export function createEntity(entity: object) {
  return Object.assign({}, BaseEntity, entity)
}
