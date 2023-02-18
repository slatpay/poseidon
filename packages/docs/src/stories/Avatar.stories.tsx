import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@slat-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabriel-roux.png',
    alt: 'Gabriel Roux',
    size: 'sm',
    rounded: true,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    rounded: {
      control: {
        type: 'boolean'
      }
    },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Story()}
        </div>
      )
    }
  ],
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {

}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
