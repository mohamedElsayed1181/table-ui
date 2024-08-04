import { Tooltip, TooltipContent, TooltipTrigger } from "../ShadCn/tooltip";
import { ReactElement } from "react";

export const ToggleButtonWrapper = ({
    trigger,
    tip,
}: {
    trigger: ReactElement;
    tip: string;
}) => {
    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                <TooltipContent>{tip}</TooltipContent>
            </Tooltip>
        </>
    );
};
