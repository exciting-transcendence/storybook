import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Profile } from './Profile'
import { User } from './User'

export default {
  component: Profile,
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const DefaultMe = Template.bind({})
DefaultMe.args = {
  user: {
    pid: 'johndoe',
    nickname: 'John the Doe',
  } as User,
  isSelf: true,
}

export const DefaultOther = Template.bind({})
DefaultOther.args = {
  user: {
    pid: 'janedoe',
    nickname: 'Jane@Doe',
  } as User,
  isSelf: false,
}
