import { X } from "phosphor-react/";
import { ComponentProps } from "react";
import { TagContainer } from "./styles";

export interface TagProps extends ComponentProps<typeof TagContainer> {

    children: React.ReactNode
    canRemove?: boolean

}

export function Tag({ children, canRemove = false, ...props }: TagProps) {


    return (
        <TagContainer {...props}>
            {children}
            {canRemove && <span><X /></span>}
        </TagContainer>
    )

}

Tag.displayName = 'Tag'