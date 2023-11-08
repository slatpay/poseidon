import { styled, keyframes } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip';

const tooltipOpenAnimation = keyframes({
    '0%': {
        transform: 'scale(0)',
        opacity: 0
    },
    '100%': {
        transform: 'scale(1)',
        opacity: 1
    }
})

const tooltipCloseAnimation = keyframes({
    '0%': {
        transform: 'scale(1)',
        opacity: 1
    },
    '100%': {
        transform: 'scale(0)',
        opacity: 0
    }
})

export const TooltipContent = styled(Tooltip.Content, {

    padding: '$3',
    display: 'flex',
    gap: '$2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '$background-input',
    borderRadius: '$md',
    border: '1px solid $border',
    position: 'relative',
    zIndex: 999,
    animation: `${tooltipOpenAnimation} 600ms ease`,
    willChange: 'transform, opacity',
    '&[data-state="closed"]': {
        opacity: 0,
        animation: `${tooltipCloseAnimation} 600ms ease`,
    }
})

