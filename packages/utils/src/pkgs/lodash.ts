import _ from 'lodash'

/**
 * lodash的一些方法
 */
export const VipLodash = _.pick(_, [
  'merge',
  'keys',
  'keyBy',
  'omit',
  'pick',
  'pickBy',
  'groupBy',
  'upperFirst',
])
