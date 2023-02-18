import { ComponentProps } from "react";
import { SwitchRoot, SwitchThumb } from "./styles";

export interface SwitchProps extends ComponentProps<typeof SwitchRoot> {}

export function Switch() {

    return (
        <SwitchRoot>
            <SwitchThumb />
        </SwitchRoot>
    )

}