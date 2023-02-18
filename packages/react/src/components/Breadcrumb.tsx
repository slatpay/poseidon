import { ComponentProps } from 'react'
import { styled } from '../styles/index'

export const BreadcrumbContainer = styled('div', {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'

})

export const BreadcrumbNavigation = styled('nav', {
    display: 'flex',
    alignItems: 'center',

    ol: {
        display: 'flex',
        margin: 0,
        padding: 0
    }
})

export const BreadcrumbItem = styled('li', {
    display: 'flex',
    alignItems: 'center',

    a: {
        fontFamily: '$default',
        fontWeight: '$bold',
        fontSize: '$sm',
        color: '$text-subdescription',
        textDecoration: 'none',
        transition: 'color 300ms ease',
        
        '&:hover': {
            color: '$text-description',
        }
    },
    span: {
        svg: {
            margin: '0 $1',
            color: '$text-subdescription',
            display: 'flex',
            width: '$3',
            height: '$3' 
        }
    },

    variants: {
        currentPage: {
            true: {
                a: {
                    color: '$slat-light',
                    pointer: 'default',

                    '&:hover': {
                        color: '$slat-light',
                    }
                },
                span: {
                    display: 'none'
                }
            }
        }
    }
})


export interface BreadcrumbProps extends ComponentProps<typeof BreadcrumbContainer> { }

BreadcrumbContainer.displayName = 'Breadcrumb'
BreadcrumbNavigation.displayName = 'BreadcrumbContent'
BreadcrumbItem.displayName = 'BreadcrumbItem'