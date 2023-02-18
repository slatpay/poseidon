import { ComponentProps } from "react";
import { DropdownContent, DropdownItemMenu, DropdownPortal, DropdownRoot, DropdownTrigger } from "./styles";

export interface DropdownProps extends ComponentProps<typeof DropdownContent> {
    trigger: React.ReactNode
    children: React.ReactNode
}

export const DropdownItem = DropdownItemMenu

export function Dropdown({ trigger, children, ...props }: DropdownProps) {

    return (

        <DropdownRoot>
            <DropdownTrigger asChild>
                {trigger}
            </DropdownTrigger>

            <DropdownPortal>
                <DropdownContent {...props} side='left' sideOffset={5}>
                    {children}
                </DropdownContent>
            </DropdownPortal>
        </DropdownRoot>

    )

}

Dropdown.displayName = 'Dropdown'