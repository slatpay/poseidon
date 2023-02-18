import { CircleWavyCheck, ShieldWarning, WarningOctagon } from "phosphor-react";
import { ComponentProps } from "react";
import { Text } from "../Text";
import { WarningContainer } from "./styles";

export interface WarningProps extends ComponentProps<typeof WarningContainer> {
    message: string
}

export function Warning({message, ...props}: WarningProps) {

    return (

        <WarningContainer {...props}>

            {
                props.variant === 'success' ?
                <CircleWavyCheck />
                :
                props.variant === 'warning' ?
                <WarningOctagon />
                :
                <ShieldWarning />
            }

            <Text size='sm'>{message}</Text>
        </WarningContainer>

    )

}