import { styled } from "../../styles";


export const WarningContainer = styled('div', {

    width: '$80',
    padding: '$4 $4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    gap: '$1',

    svg: {
        width: '$6',
        height: '$6'
    },

    variants: {
        variant: {
            success: {
                background: '$success-low',
                borderLeft: '3px solid $success-base',
                svg: {
                    color: '$success-base',
                }
            },
            warning: {
                background: '$warning-low',
                borderLeft: '3px solid $warning-base',
                svg: {
                    color: '$warning-base',
                }
            },
            danger: {
                background: '$danger-low',
                borderLeft: '3px solid $danger-base',
                svg: {
                    color: '$danger-base',
                }
            },
        }
    }
})