import type { Meta, StoryObj } from '@storybook/react'
import { BreadcrumbContainer, BreadcrumbNavigation, BreadcrumbItem, BreadcrumbProps } from '@slat-ui/react'
import { CaretRight } from 'phosphor-react'

export default {
  title: 'Navigation/Breadcrumb',
  component: BreadcrumbContainer,
  args: {
    children: (
      <BreadcrumbNavigation>
        <ol>
          <BreadcrumbItem>
            <a href='#'>Label 01</a>
            <span><CaretRight /></span>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href='#'>Label 02</a>
            <span><CaretRight /></span>
          </BreadcrumbItem>
          <BreadcrumbItem currentPage>
            <a>Label 03</a>
            <span><CaretRight /></span>
          </BreadcrumbItem>
        </ol>
      </BreadcrumbNavigation>
    )
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
} as Meta<BreadcrumbProps>

export const Default: StoryObj<BreadcrumbProps> = {

}