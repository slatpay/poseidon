import type { Meta, StoryObj } from '@storybook/react'
import { Switch, SwitchProps } from '@slat-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Story()}
        </div>
      )
    }
  ],
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {

}
