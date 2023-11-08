import { keyframes, styled } from "../../styles";

import * as Dropdown from '@radix-ui/react-dropdown-menu'


const dropDownOpenAnimation = keyframes({
    '0%': {
        transform: 'scale(0)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
})

const dropDownCloseAnimation = keyframes({
    '0%': {
        transform: 'scale(1)',
        opacity: 1
    },
    '100%': {
        transform: 'scale(0)',
        opacity: 0
    }
})


export const DropdownContent = styled(Dropdown.Content, {

    background: '#00000070',
    backdropFilter: 'blur(10px)',
    border: '1px solid $border',
    color: '$text-title',
    fontFamily: '$default',
    overflow: 'hidden',
    borderRadius: '$md',
    animation: `${dropDownOpenAnimation} 600ms ease`,
    willChange: 'transform, opacity',
    '&[data-state="closed"]': {
        opacity: 0,
        animation: `${dropDownCloseAnimation} 600ms ease`,
    }
})

export const DropdownItemMenu = styled(Dropdown.Item, {

    padding: '$3 $6',
    cursor: 'pointer',
    fontSize: '$md',
    borderBottom: '1px solid $border',
    transition: 'background 300ms ease',
    
    '&:hover': {
        outline: 0,
        background: '$border'
    }

})

export const DropdownRoot = Dropdown.Root
export const DropdownTrigger = Dropdown.Trigger
export const DropdownPortal = Dropdown.Portal