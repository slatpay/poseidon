import { SkeletonContainer } from "./styles";
import { ComponentProps } from 'react'

export interface SkeletonProps extends ComponentProps<typeof SkeletonContainer> {
    width: number
    height: number
    radius: number
}

export function Skeleton({
    width = 150,
    height = 6,
    radius = 6
}: SkeletonProps) {

    return (
        <SkeletonContainer
            css={{
                width,
                height,
                borderRadius: radius
            }}
        />
    )

}

Skeleton.displayName = 'Skeleton'