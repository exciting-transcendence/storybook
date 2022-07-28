import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Profile } from './Profile'
import { User } from './User'

export default {
  component: Profile,
} as ComponentMeta<typeof Profile>

// class Template<
//   T extends keyof JSX.Intrinsicany>,
// Elements | React.JSXElementConstructor<T> {
//   constructor(private readonly fn: ComponentStory<T>) {}

//   from(args?: Partial<React.ComponentProps<T>>): ComponentStory<T> {
//     const generated = this.fn.bind({})
//     generated.args = args
//     return generated
//   }
// }

// const template = new Template<typeof Profile>((args) => <Profile {...args} />)
const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />

export const DefaultMe = Template.bind({})
DefaultMe.args = {
  user: {
    pid: 'intraID',
    nickname: 'Example User',
    friends: [],
    blocks: [],
    history: [],
  },
  isSelf: true,
}

export const WithHistory = Template.bind({})
WithHistory.args = {
  user: {
    ...(DefaultMe.args.user as User),
    history: [
      {
        left: 'example',
        right: 'other',
        winner: 'LEFT',
      },
      {
        left: 'example',
        right: 'other',
        winner: 'RIGHT',
      },
      {
        left: 'example',
        right: 'other',
        winner: 'DRAW',
      },
    ],
  },
}

export const DefaultOther = Template.bind({})
DefaultOther.args = {
  user: DefaultMe.args.user,
  isSelf: false,
}
