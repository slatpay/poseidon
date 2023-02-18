import type { Meta, StoryObj } from '@storybook/react'
import { Box, IconButton, Text, TextField, TextFieldProps } from '@slat-ui/react'
import { Link, User, Eye, Copy, Envelope } from 'phosphor-react'

const icons = [<Link />, <User />, <Eye />]
const buttons = [
  (<IconButton size='sm'>
    <Copy />
  </IconButton>)
]

export default {
  title: 'Form/Text Field',
  component: TextField,
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    rightButton: {
      options: Object.keys(buttons),
      mapping: buttons,
      control: {
        type: 'select',
        labels: {
          Copy: 'Copy',
        }
      }
    },
    leftIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Link: 'Link',
          User: 'User',
          Eye: 'Eye'
        }
      }
    },
    rightIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Link: 'Link',
          User: 'User',
          Eye: 'Eye'
        }
      }
    },
  }
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Type your email',
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
}

export const WithPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: 'https://'
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
}

export const WithIcon: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Type your email',
    leftIcon: (
      <Envelope />
    )
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
}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your email',
  }
}