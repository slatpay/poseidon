import { ComponentProps, ReactNode } from "react";
import { SpinnerCircular } from "spinners-react";
import { IconButtonContainer } from "./styles";


export interface IconButtonProps extends ComponentProps<typeof IconButtonContainer> {
    loading?: boolean
    children: ReactNode
}

export function IconButton({loading = false, children, ...props}: IconButtonProps) {


    return (
        <IconButtonContainer {...props}>
            {
                loading ?
                <SpinnerCircular size={60} color='#fff' />
                :
                children
            }
        </IconButtonContainer>
    )

}


IconButton.displayName = 'Button'