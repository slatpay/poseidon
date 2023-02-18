import { styled } from "../../styles";

export const TagContainer = styled('span', {

    padding: '$1 $3',
    transition: 'all 300ms ease',
    borderRadius: '$lg',
    color: '$text-title',
    fontWeight: '$bold',
    display: 'inline-flex',
    gap: '$1',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '$default',

    variants: {
        variant: {
            active: {
                background: '$background-input',
                border: '1px solid $background-input',
            },

            inactive: {
                border: '1px solid $text-description',
                background: 'transparent'
            }
        },

        size: {
            sm: {
                fontSize: '$sm',
                'span': {
                    color: '$text-title',
                    borderRadius: '$full',
                    background: '$text-description',
                    padding: '4px',
                    width: '$2',
                    height: '$2',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    
                    'svg': {
                        width: '$3',
                        height: '$3'
                    }
                }
            },
            md: {
                fontSize: '$md',
                'span': {
                    color: '$text-title',
                    borderRadius: '$full',
                    background: '$text-description',
                    padding: '4px',
                    width: '$3',
                    height: '$3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    
                    'svg': {
                        width: '$3',
                        height: '$3'
                    }
                }
            },
            lg: {
                fontSize: '$lg',
                'span': {
                    color: '$text-title',
                    borderRadius: '$full',
                    background: '$text-description',
                    padding: '4px',
                    width: '$4',
                    height: '$4',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'inline-flex',
                    cursor: 'pointer',
                    
                    'svg': {
                        width: '$4',
                        height: '$4'
                    }
                }
            }
        }
    },
})