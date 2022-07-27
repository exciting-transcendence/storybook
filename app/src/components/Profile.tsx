import React from 'react'
import { User } from './User'
import styled from 'styled-components'

export interface ProfileProps {
  user: User
  isSelf: boolean
}

const Myself = () => {
  return <button>change profile image</button>
}

const Other = () => {
  return (
    <div>
      <button>send message</button>
      <button>add to favorite</button>
      <button>block</button>
    </div>
  )
}

const Circle = styled.img<{ radius: string }>`
  height: ${(p) => p.radius || '200px'};
  width: ${(p) => p.radius || '200px'};
  border-radius: 50%;
  object-fit: cover;
`

export const Profile = ({ user, isSelf }: ProfileProps) => {
  const { pid, nickname, avatarUrl } = user
  return (
    <div className="profile">
      <Circle
        src={avatarUrl || 'http://placekitten.com/200/200'}
        radius="200px"
        alt="profile"
      />
      <div className="profile-info">
        <h2 className="name">{nickname || pid}</h2>
        <p className="pid">{pid}</p>
        {isSelf ? <Myself /> : <Other />}
      </div>
    </div>
  )
}
