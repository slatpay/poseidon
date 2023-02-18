import { ComponentProps, ReactNode } from "react";
import { SpinnerInfinity } from "spinners-react";
import { ButtonContainer } from "./styles";


export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
    loading?: boolean
    children: ReactNode
}

export function Button({loading = false, children, ...props}: ButtonProps) {


    return (
        <ButtonContainer {...props}>
            {
                loading ?
                <SpinnerInfinity size={60} color='#fff' />
                :
                children
            }
        </ButtonContainer>
    )

}


Button.displayName = 'Button'