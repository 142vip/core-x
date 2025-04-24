export interface GitCommitAuthor {
  name: string
  email: string
}

export interface GitCommitRaw {
  message: string
  body: string
  shortHash: string
  author: GitCommitAuthor
}

export enum GitCommitMessageType {
  PULL_REQUEST = 'pull-request',
  ISSUE = 'issue',
  HASH = 'hash',
}

export interface GitCommitReference {
  type: GitCommitMessageType
  value: string
}

export interface GitCommitRecord extends GitCommitRaw {
  description: string
  type: string
  scope: string
  references: GitCommitReference[]
  authors: GitCommitAuthor[]
  isBreaking: boolean
}

export interface GitCommitDiffOptions {
  from?: string
  to?: string
}
