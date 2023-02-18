import type { Meta, StoryObj } from '@storybook/react'
import { IconButton, IconButtonProps } from '@slat-ui/react'
import { ArrowRight, Check } from 'phosphor-react'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    children: (
      <>
        <Check weight='bold' />
      </>
    ),
    disabled: false,
    loading: false
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {

}

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'secondary',
  }
}

export const Tertiary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'tertiary',
  }
}

export const Loading: StoryObj<IconButtonProps> = {
  args: {
    loading: true
  }
}

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    disabled: true,
    children: 'Send'
  }
}

