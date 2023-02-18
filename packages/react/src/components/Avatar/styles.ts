import { styled } from "../../styles";
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
    display: 'inline-block',
    borderRadius: '$md',
    overflow: 'hidden',

    variants: {
        size: {
            sm: {
                width: '$12',
                height: '$12', 
            },

            md: {
                width: '$40',
                height: '$40',
                svg: {
                    width: '$12',
                    height: '$12'
                }
            },

            lg: {
                width: '$80',
                height: '$80',
                svg: {
                    width: '$16',
                    height: '$16'
                }
            }
        },

        rounded: {
            true: {
                borderRadius: '$full',
            },

            false: {
                borderRadius: '$md'
            }
        }
    }
})

export const AvatarImg = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #00A0D8, #00CECE)',
    color: '$text-title',

    svg: {
        width: '$6',
        height: '$6',
    }
})