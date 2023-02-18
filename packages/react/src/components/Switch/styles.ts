import { styled } from "../../styles";
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root, {
    width: '$10',
    height: '$3',
    borderRadius: '$full',
    position: 'relative',
    webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    transition: 'all 300ms ease',
    background: '#54545450',
    border: '0',

    '&[data-state="checked"]': {
        background: '#00A0D840'
    }
})

export const SwitchThumb = styled(Switch.Thumb, {

        display: 'block',
        width: '21px',
        height: '21px',
        backgroundColor: '$text-description',
        borderRadius: '9999px',
        transition: 'transform 300ms ease',
        position: 'absolute',
        left: 0,
        top: '-4px',
        willChange: 'transform',

      '&[data-state="checked"]': {
        transform: 'translateX(21px)',
        background: '$slat-base'
      }
      

})