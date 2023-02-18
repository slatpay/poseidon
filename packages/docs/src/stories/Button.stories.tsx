import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@slat-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    disabled: false,
    loading: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'gradient', 'danger'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md', 'lg', 'full'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {

}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}


export const Gradient: StoryObj<ButtonProps> = {
  args: {
    variant: 'gradient',
    children: 'Save informations'
  }
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'DELETE'
  }
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true
  }
}


export const WithRightIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}

export const WithLeftIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <ArrowRight weight='bold' />
        Próximo passo
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Send'
  }
}

