import {
  Sheet,
  SheetContent,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "..";

export const ButtonSheet = ({
  trigger,
  content,
  tip,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
  tip: string;
}) => {
  return (
    <>
      <Tooltip>
        <Sheet>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
          </TooltipTrigger>
          <SheetContent>{content}</SheetContent>
        </Sheet>
        <TooltipContent>{tip}</TooltipContent>
      </Tooltip>
    </>
  );
};
