import { ComponentProps } from "react";
import { TooltipContent } from "./styles";
import * as TooltipRadix from '@radix-ui/react-tooltip';

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
    trigger: React.ReactNode
    children: React.ReactNode
}

export function Tooltip({ trigger, children, ...props }: TooltipProps) {

    return (

        <TooltipRadix.Provider>
            <TooltipRadix.Root>
                <TooltipRadix.Trigger asChild>
                    {trigger}
                </TooltipRadix.Trigger>
                <TooltipRadix.Portal>
                    <TooltipContent {...props} sideOffset={5}>
                        {children}
                        <TooltipRadix.Arrow />
                    </TooltipContent>
                </TooltipRadix.Portal>
            </TooltipRadix.Root>
        </TooltipRadix.Provider>

    )

}