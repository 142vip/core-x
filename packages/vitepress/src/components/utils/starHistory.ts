import {
  VIP_STAR_HISTORY_DEFAULT_REPOS,
  VIP_STAR_HISTORY_SEALED_TOKEN,
} from '../constants/openSource'

const STAR_HISTORY_API = 'https://api.star-history.com/svg'

/**
 * Star History 图表地址（含 sealed_token，随深浅色切换 theme）
 */
export function getStarHistorySvgUrl(repoNames: string[] | undefined, isDark: boolean): string {
  const repos = (repoNames?.length ? repoNames : [...VIP_STAR_HISTORY_DEFAULT_REPOS])
    .map(repo => repo.toLowerCase())
    .join(',')

  const params = new URLSearchParams({
    repos,
    type: 'Date',
    sealed_token: VIP_STAR_HISTORY_SEALED_TOKEN,
  })

  if (isDark)
    params.set('theme', 'dark')

  return `${STAR_HISTORY_API}?${params.toString()}`
}
