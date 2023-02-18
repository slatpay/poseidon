import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagProps } from '@slat-ui/react'

export default {
  title: 'Data display/Tag',
  component: Tag,
  args: {
    children: 'LABEL',
    variant: 'active',
    size: 'sm',
  },
  argTypes: {
    variant: {
      options: ['active', 'inactive'],
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
    canRemove: {
      control: {
        type: null
      }
    }
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
} as Meta<TagProps>

export const Default: StoryObj<TagProps> = {

}

export const Inactive: StoryObj<TagProps> = {
  args: {
    children: 'LABEL',
    variant: 'inactive',
    size: 'sm',
  },
}

export const Removable: StoryObj<TagProps> = {
  args: {
    children: 'LABEL',
    variant: 'active',
    size: 'sm',
    canRemove: true
  },
  argTypes: {
    variant: {
      options: ['active'],
      control: {
        type: 'inline-radio'
      }
    },
    canRemove: {
      control: {
        type: 'boolean'
      }
    }
  }

}