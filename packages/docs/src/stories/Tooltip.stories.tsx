import type { Meta, StoryObj } from '@storybook/react'
import { Text, Heading, Tooltip, TooltipProps } from '@slat-ui/react'


export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <Text>Lorem ipsum dolor</Text>
    ),
    children: (
      <>
        <Heading>Lorem</Heading>
        <Text size='sm' as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor. </Text>
      </>
    ),
    side: 'bottom'
  },
  argTypes: {
    side: {
      options: ['top', 'left', 'right', 'bottom'],
      control: {
        type: 'inline-radio'
      }
    },
    children: {
      control: {
        type: null
      }
    },
    trigger: {
      control: {
        type: null
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
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {

}
