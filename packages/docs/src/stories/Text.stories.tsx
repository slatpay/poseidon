import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@slat-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nam assumenda sunt distinctio hic, ab, nihil fugit facere deleniti deserunt recusandae autem reiciendis adipisci, quae beatae similique! Eos, quaerat explicabo?'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: 'inline-radio'
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTags: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
