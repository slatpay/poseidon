import { ComponentProps } from 'react'
import { styled } from "../styles";

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    border: '1px solid $color$border',

    variants: {
        isTransparency: {
            true: {
                backgroundColor: '#00000050',
            },
            false: {
                backgroundColor: '$background-box',
            }
        }
    },

    defaultVariants: {
        isTransparency: false
    }
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'