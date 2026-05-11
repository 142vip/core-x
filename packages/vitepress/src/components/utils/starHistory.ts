import { VIP_STAR_HISTORY_DEFAULT_REPOS } from '../constants/openSource'

/**
 * Star History 图表地址（随深浅色切换 theme）
 */
export function getStarHistorySvgUrl(repoNames: string[] | undefined, isDark: boolean): string {
  const repos = repoNames?.length
    ? repoNames
    : [...VIP_STAR_HISTORY_DEFAULT_REPOS]
  return `https://api.star-history.com/svg?repos=${repos.join(',')}&type=Date${isDark ? '&theme=dark' : ''}`
}
