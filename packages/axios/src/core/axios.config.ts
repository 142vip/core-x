import { CreateAxiosDefaults } from 'axios'

export const defaultAxiosConfig: CreateAxiosDefaults = {
  timeout: 10 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export function createAxiosConfig(userAxiosConfig?: Partial<CreateAxiosDefaults>): CreateAxiosDefaults {
  return {
    ...defaultAxiosConfig,
    ...userAxiosConfig,
    headers: {
      ...defaultAxiosConfig.headers,
      ...userAxiosConfig?.headers,
    },
  }
}
