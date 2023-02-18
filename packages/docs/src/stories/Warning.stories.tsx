import type { Meta, StoryObj } from '@storybook/react'
import { Warning, WarningProps } from '@slat-ui/react'


export default {
  title: 'Layout/Warning',
  component: Warning,
  args: {
    variant: 'success',
    message: 'Action accomplished with successfully'
  },
  argTypes: {
    variant: {
      options: ['success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<WarningProps>

export const Success: StoryObj<WarningProps> = {
  args: {
    variant: 'success',
    message: 'Action accomplished with successfully'
  },
}

export const Warnings: StoryObj<WarningProps> = {
  args: {
    variant: 'warning',
    message: 'This is a warning modal'
  },
}

export const Danger: StoryObj<WarningProps> = {
  args: {
    variant: 'danger',
    message: 'Do you have sure about delete this project'
  },
}