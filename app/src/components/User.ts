export interface MatchResult {
  left: string
  right: string
  winner: 'LEFT' | 'RIGHT' | 'DRAW'
}
export interface User {
  pid: string
  nickname?: string
  avatarUrl?: string
  friends: User[]
  blocks: User[]
  history: MatchResult[]
}

export const MatchResultNumber = (user: string, result: MatchResult[]) => {
  let win = 0,
    lose = 0,
    draw = 0

  const leftWon = (result: MatchResult) =>
    result.left === user && result.winner === 'LEFT'
  const rightWon = (result: MatchResult) =>
    result.right === user && result.winner === 'RIGHT'

  result.forEach(item => {
    if (item.winner === 'DRAW') {
      draw++
    } else if (leftWon(item) || rightWon(item)) {
      win++
    } else {
      lose++
    }
  })
  return { win, lose, draw }
}
