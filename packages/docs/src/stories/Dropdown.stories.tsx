import type { Meta, StoryObj } from '@storybook/react'
import { DropdownItem, Dropdown, DropdownProps, IconButton, Text } from '@slat-ui/react'

export default {
  title: 'Overlay/Dropdown',
  component: Dropdown,
  args: {
    trigger: (
      <Text>Lorem ipsum dolor</Text>
    ),
    children: (
      <>
        <DropdownItem>Lorem ipsum</DropdownItem>
        <DropdownItem>Lorem ipsum</DropdownItem>
        <DropdownItem>Lorem ipsum</DropdownItem>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex', position: 'relative', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Story()}
        </div>
      )
    }
  ],
} as Meta<DropdownProps>

export const Default: StoryObj<DropdownProps> = {

}
