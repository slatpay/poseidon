import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonProps, Text } from '@slat-ui/react'

export default {
  title: 'Layout/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 250
      }
    },
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 250
      }
    },
    radius: {
      control: {
        type: 'range',
        min: 0,
        max: 50
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
} as Meta<SkeletonProps>

export const Primary: StoryObj<SkeletonProps> = {

}
