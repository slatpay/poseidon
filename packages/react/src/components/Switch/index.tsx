import { ComponentProps } from "react";
import { SwitchRoot, SwitchThumb } from "./styles";

export interface SwitchProps extends ComponentProps<typeof SwitchRoot> {}

export function Switch({ ...props }: SwitchProps) {

    return (
        <SwitchRoot {...props} >
            <SwitchThumb/>
        </SwitchRoot>
    )

}