import { User } from "phosphor-react";
import { AvatarContainer, AvatarImg, AvatarFallback } from "./styles";
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImg> {}

export function Avatar(props: AvatarProps) {

    return (

        <AvatarContainer {...props}>
            <AvatarImg src={props.src} alt={props.alt} />
            <AvatarFallback delayMs={600}>
                <User />
            </AvatarFallback>
        </AvatarContainer>

    )

}

Avatar.displayName = 'Avatar'