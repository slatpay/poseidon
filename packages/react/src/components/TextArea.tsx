import { ComponentProps } from "react";
import { styled } from "../styles";


export const TextArea = styled('textarea', {
    backgroundColor: '$background-input',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $border',
    display: 'flex',
    alignItems: 'baseline',
    minWidth: '300px',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    resize: 'vertical',
    fontWeight: '$regular',

    minHeight: 80,
    transition: 'all 300ms ease',

    '&:focus': {
        borderColor: '$slat-base',
        outline: 0,
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },

    '&:placeholder': {
        color: '$text-subdescription'
    }

})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'