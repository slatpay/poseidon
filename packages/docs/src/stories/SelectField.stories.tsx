import type { Meta, StoryObj } from '@storybook/react'
import { SelectField, SelectFieldProps } from '@slat-ui/react'
import { User } from 'phosphor-react'
const icons =  [<User />]

const options = [
  { value: '1', label: 'Options 01' },
  { value: '2', label: 'Options 02' },
  { value: '3', label: 'Options 03' },
  { value: '4', label: 'Options 04' },
]

export default {
  title: 'Form/Select Field',
  component: SelectField,
  args: {
    multiSelect: false
  },
  argTypes: {
    multiSelect: {
      control: {
        type: 'boolean'
      }
    },
    options: {
      control: {
        type: null
      }
    },
    leftIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Link: 'Link',
        }
      }
    },
    // rightIcon: {
    //   options: Object.keys(icons),
    //   mapping: icons,
    //   control: {
    //     type: 'select',
    //     labels: {
    //       Link: 'Link',
    //       User: 'User',
    //       Eye: 'Eye'
    //     }
    //   }
    // },
  }
} as Meta<SelectFieldProps>

export const Primary: StoryObj<SelectFieldProps> = {
  args: {
    placeholder: 'Select an option',
    options
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