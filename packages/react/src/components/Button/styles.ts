import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";


export const ButtonContainer = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$md',
    fontWeight: '$bold',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
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

            gradient: {
                background: 'linear-gradient(90deg, $slat-base, $slat-dark)',
                color: '$white',
                opacity: .7,

                '&:disabled': {
                    opacity: .4,
                },

                '&:not(:disabled):hover': {
                    opacity: 1
                },
            },

            danger: {
                background: '$background-input',
                color: '$danger-base',
                opacity: .7,

                '&:disabled': {
                    opacity: .4,
                },

                '&:not(:disabled):hover': {
                    opacity: 1
                },
            }
        },

        size: {
            sm: {
                padding: '0 $4',
                height: 38
            },
            md: {
                padding: '0 $4',
                height: 46
            },
            lg: {
                padding: '0 $10',
                height: 50
            },
            full: {
                width: '100%',
                height: 50
            }
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})
