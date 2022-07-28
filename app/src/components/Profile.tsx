import React from 'react'
import { MatchResult, MatchResultNumber, User } from './User'
import { Avatar, Button } from '@chatscope/chat-ui-kit-react'
import { Container, AvatarContainer, Rank, Name } from './Profile.styles'

const Myself = () => {
  return <Button border={true}>change profile image</Button>
}

const Other = () => {
  return (
    <div>
      <Button border={true}>send message</Button>
      <Button border={true}>add to favorite</Button>
      <Button border={true}>block</Button>
    </div>
  )
}

interface StatProps {
  pid: string
  history: MatchResult[]
}

export const Stat = ({ pid, history }: StatProps) => {
  if (!history) {
    return (
      <div>
        <p>no history</p>
      </div>
    )
  }

  const { win, lose, draw } = MatchResultNumber(pid, history)
  return (
    <div>
      <p>
        Wins: {win} / Loses: {lose} / Draws: {draw}
      </p>
    </div>
  )
}

export interface ProfileProps {
  user: User
  isSelf: boolean
}

export const Profile = ({ user, isSelf }: ProfileProps) => {
  const { pid, nickname, avatarUrl, history } = user
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          src={avatarUrl || 'http://placekitten.com/200/200'}
          name={nickname}
          size={'fluid'}
          status={'available'}
        />
      </AvatarContainer>
      <div>
        <Name>
          <h2>{nickname || pid}</h2>
          <h4>{pid}</h4>
        </Name>
        <h4>
          Rank: <Rank>{'B'}</Rank>
        </h4>
        <Stat pid={user.pid} history={history} />
        {isSelf ? <Myself /> : <Other />}
      </div>
    </Container>
  )
}
