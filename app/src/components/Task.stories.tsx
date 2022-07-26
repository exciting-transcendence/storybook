import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Task, ITask } from './Task'

export default {
  component: Task,
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  } as ITask,
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'PINNED',
  } as ITask,
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'ARCHIVED',
  } as ITask,
}
