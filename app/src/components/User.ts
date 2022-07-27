export interface User {
  pid: string
  nickname?: string
  avatarUrl?: string
  friends: User[]
  blocks: User[]
}
