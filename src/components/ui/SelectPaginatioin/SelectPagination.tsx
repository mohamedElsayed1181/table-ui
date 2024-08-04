import { useDispatch, useSelector } from "react-redux";
import { SelectWrapper } from "../SelectWrapper/SelectWrapper";
import { DropdownMenuItem } from "../ShadCn";
import { RootState } from "../../../context/redux";
import {
  setCurrentPageTradesDone,
  setCurrentPageTradesRuinning,
} from "../../../context";

export const SelectPagination = ({
  columnsNumber,
  sq,
}: {
  sq: string;
  columnsNumber: number;
}) => {
  const currentPage = useSelector(
    (state: RootState) => state.table[sq as keyof typeof state.table] as number,
  );
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 w-full">
      <span> Showing </span>
      <SelectWrapper
        className="max-w-[70px] h-[36px]"
        triggerPlaceHolder={(currentPage + 1).toString()}
        children={
          <>
            {Array.from({ length: columnsNumber }, (_, i) => i + 1).map(
              (item, idx) => {
                return (
                  <DropdownMenuItem
                    key={idx}
                    onClick={() => {
                      sq === "currentpageTradesRuinning"
                        ? dispatch(setCurrentPageTradesRuinning(idx))
                        : dispatch(setCurrentPageTradesDone(idx));
                    }}
                  >
                    {item}
                  </DropdownMenuItem>
                );
              },
            )}
          </>
        }
        label={"page"}
        tip={"navigate to page number"}
      />
      <span> out of </span>
    </div>
  );
};
//NOTE: actions should be added
