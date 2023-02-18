import { styled } from "../../styles";

export const TextFieldContainer = styled('div', {
    backgroundColor: '$background-input',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $border',
    display: 'flex',
    minWidth: '300px',
    alignItems: 'center',
    transition: 'all 300ms ease',

    '&:has(input:focus)': {
        borderColor: '$slat-base',
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed'
    }

})

export const Prefix = styled('span', {

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$text-description',
    fontWeight: '$regular',
    display: 'flex',
    alignItems: 'center',

    svg: {
        width: '$5',
        height: '$5',
        color: '$slat-base',
        margin: '0 $2 0 0'
    }

})

export const Input = styled('input', {

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: '$regular',
    background: 'transparent',
    border: 0,
    width: '100%',

    '&:focus': {
        outline: 0
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },

    '&:placeholder': {
        color: '$text-subdescription'
    }
})