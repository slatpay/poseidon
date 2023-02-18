import { ComponentProps } from "react";
import { Input, Prefix, TextFieldContainer } from "./styles";

export interface TextFieldProps extends ComponentProps<typeof Input> {

    prefix?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    rightButton?: React.ReactNode

}

export function TextField({prefix, leftIcon, rightIcon, rightButton, ...props}: TextFieldProps) {

    return (
        <TextFieldContainer>
            {!!leftIcon && <Prefix>{leftIcon}</Prefix>}
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input {...props} />
            {!!rightIcon && <Prefix>{rightIcon}</Prefix>}
            {!!rightButton && rightButton}
        </TextFieldContainer>
    )

}

TextField.displayName = 'TextField'