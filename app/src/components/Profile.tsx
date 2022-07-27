import React from 'react'
import { User } from './User'
// import img from

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

export interface ProfileImageProps {
  url: string
  radius?: number
}

const ProfileImage = ({ url, radius = 200 }: ProfileImageProps) => (
  <img
    src={url}
    alt="profile"
    style={{
      width: radius,
      height: radius,
      borderRadius: radius / 2,
      objectFit: 'cover',
    }}
  />
)

export const Profile = ({ user, isSelf }: ProfileProps) => {
  const { pid, nickname, avatarUrl } = user
  return (
    <div className="profile">
      <ProfileImage url={avatarUrl || 'http://placekitten.com/200/200'} />
      <div className="profile-info">
        <h2 className="name">{nickname || pid}</h2>
        <p className="pid">{pid}</p>
        {isSelf ? <Myself /> : <Other />}
      </div>
    </div>
  )
}
