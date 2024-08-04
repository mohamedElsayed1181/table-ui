import { ReactElement } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  SelectGroup,
  SelectLabel,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "..";

export const SelectWrapper = ({
  triggerPlaceHolder,
  children,
  label,
  tip,
  className,
}: {
  triggerPlaceHolder: string;
  children: ReactElement;
  label: string;
  tip: string;
  className: string;
}) => {
  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger className={className}>
            <Button size={"sm"} variant={"outline"}>
              {triggerPlaceHolder}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}
            {children}
          </SelectGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent>{tip}</TooltipContent>
    </Tooltip>
  );
};
