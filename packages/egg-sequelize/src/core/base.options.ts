export const BaseOptions = {
  // 全局默认配置
  freezeTableName: false,
  timestamps: true,
  /**
   * 重写时间戳
   */
  createdAt: 'createTime',
  updatedAt: 'updateTime',
  deletedAt: false,

  hooks: {
    // beforeCreate: (record, _options) => {
    //     record.dataValues.createTime = new Date().getTime()
    // },
    // beforeUpdate: (record, _options) => {
    //     record.dataValues.modifyTime = new Date().getTime()
    // },
    // 强制为每一行都更新
    beforeBulkUpdate: () => ({
      options: { individualHooks: true },
    }),
  },
}
