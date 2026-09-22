/** 侧边栏直链项 */
export interface DocsSidebarLink {
  text: string
  link: string
}

/** 侧边栏分组项 */
export interface DocsSidebarGroup {
  text: string
  prefix?: string
  link?: string
  collapsible?: boolean
  expanded?: boolean
  children: DocsSidebarItem[]
}

export type DocsSidebarItem = DocsSidebarLink | DocsSidebarGroup

export type DocsSidebarConfig = DocsSidebarItem[]
