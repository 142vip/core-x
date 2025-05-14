import type { SlimSearchLocaleData } from '@vuepress/plugin-slimsearch'

/**
 * 搜索框支持中文
 * 参考：https://ecosystem.vuejs.press/zh/plugins/search/slimsearch.html#locales
 */
export const slimSearchCNLocals: Partial<SlimSearchLocaleData> = {
  placeholder: '请输入需要搜索的关键字',
  search: '搜索文档',
  searching: '搜索中',
  cancel: '取消',
  select: '选择',
  navigate: '切换',
  exit: '关闭',
  loading: '正在努力搜索中...',
  queryHistory: '搜素文字历史',
  resultHistory: '搜索结果',
  emptyHistory: '没有搜索历史',
  emptyResult: '无法找到相关结果',
  defaultTitle: '搜索文档',
  autocomplete: '自动补齐',
}
