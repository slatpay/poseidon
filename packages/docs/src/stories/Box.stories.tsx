import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@slat-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando</Text>
      </>
    )
  },
  argTypes: {
    children: {
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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
