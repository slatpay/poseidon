import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";


export const IconButtonContainer = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$md',
    fontWeight: '$bold',
    fontFamily: '$default',
    textAlign: 'center',
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4 !important',
        height: '$4',
    },

    '&:disabled': {
        opacity: .6,
        cursor: 'not-allowed'
    },

    transition: 'all 300ms ease',

    variants: {
        variant: {
            primary: {
                color: '$white',
                background: '$slat-base',

                '&:not(:disabled):hover': {
                    background: '$slat-light'
                },
            },

            secondary: {
                color: '$slat-base',
                border: '2px solid $slat-base',

                '&:not(:disabled):hover': {
                    background: '$slat-base',
                    color: '$white'
                },
            },

            tertiary: {
                color: '$slat-base',
                
                '&:not(:disabled):hover': {
                    color: '$slat-light'
                },
            },
        },

        size: {
            sm: {
                padding: '$1',
                svg: {
                    width: '$4 !important',
                    height: '$4',
                },            
            },
            md: {
                padding: '$2',
                svg: {
                    width: '$4 !important',
                    height: '$4',
                },
            
            },
            lg: {
                padding: '$3',
                svg: {
                    width: '$6 !important',
                    height: '$6',
                },
            
            },
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})
