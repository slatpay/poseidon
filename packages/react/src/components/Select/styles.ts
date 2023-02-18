import { styled } from "../../styles";
import Select from 'react-select';

export const SelectFieldContainer = styled('div', {
    backgroundColor: '$background-input',
    padding: '$1 $2',
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

export const SelectionField = styled(Select, {
    width: '100%',
    '& > div': {
        fontFamily: '$default',
        fontSize: '$sm',
        color: '$white !important',
        fontWeight: '$regular',
        border: 0,
    },
})