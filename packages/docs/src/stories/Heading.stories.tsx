import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@slat-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title'
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  
}

export const CustomTags: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade as'
      }
    }
  }
}
