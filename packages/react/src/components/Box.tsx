import { ComponentProps } from 'react'
import { styled } from "../styles";

export const Box = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$background-box',
    border: '1px solid $color$border',
})

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'