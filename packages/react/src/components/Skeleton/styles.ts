import { ComponentProps, ElementType } from "react"
import { styled, keyframes } from "../../styles"

const afterAnimation = keyframes({
    '0%': {
        transform: 'translateX(-100%)',
    },
    '100%': {
        transform: 'translateX(100%)',
    }
})

const skeletonAnimation = keyframes({
    '0%': {
        opacity: 1,
    },
    '70%': {
        opacity: 0.4,
    },
    '100%': {
        opacity: 1
    }
})

export const SkeletonContainer= styled('span', {
    width: '150px',
    height: '4px',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
  
    '&::before': {
      content: '',
      left: 0,
      top: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '$text-subdescription',
  
      animation: `${skeletonAnimation} 1.6s infinite cubic-bezier(0.22, 0.61, 0.36, 1)`,
    },
  
    '&::after': {
      animation: `1.6s linear 0.5s infinite normal none running ${afterAnimation}`,
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
      content: '',
      position: 'absolute',
      transform: 'translateX(-100%)',
      inset: 0,

    }
})

