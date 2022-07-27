import React from 'react'
import { MatchResult, MatchResultNumber, User } from './User'
import styled from 'styled-components'
import { Button } from './Button'
import { Circle } from './Circle'

const Myself = () => {
  return <Button label="change profile image" />
}

const Other = () => {
  return (
    <div>
      <Button label="send message" />
      <Button label="add to favorite" />
      <Button label="block" />
    </div>
  )
}

const ProfileCircle = styled(Circle)`
  /* display: block; */
  /* margin: 0 auto; */
`

const Container = styled.div`
  width: 20rem;
  height: 30rem;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  history: MatchResult[]
}

export const Profile = ({ user, isSelf, history = [] }: ProfileProps) => {
  const { pid, nickname, avatarUrl } = user
  return (
    <Container>
      <ProfileCircle
        src={avatarUrl || 'http://placekitten.com/200/200'}
        radius="50%"
        alt="profile"
      />
      <div>
        <h2>{nickname || pid}</h2>
        <h4>{pid}</h4>
        <Stat pid={user.pid} history={history} />
        {isSelf ? <Myself /> : <Other />}
      </div>
    </Container>
  )
}
