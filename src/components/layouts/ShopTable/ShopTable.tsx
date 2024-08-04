import { Icon } from "../../assets";
import { Button, DropdownMenuItem } from "../../ui";
import { ButtonSheet } from "../../ui/ButtonSheet/ButtonSheet";
import { SearchWrapper } from "../../ui/SearchWrapper/SearchWrapper";
import { SelectWrapper } from "../../ui/SelectWrapper/SelectWrapper";
import { ShopTableWrapper } from "../../ui/ShopTableWrapper/ShopTableWrapper";
import { ToggleButtonWrapper } from "../../ui/ToggleButton/ToggleButton";
import { useDispatch } from "react-redux";
import {
  setSearchQueryTradesDone,
  setSearchQueryTradesRunning,
} from "../../../context";

export const ShopTable = ({
  withHeader,
  sq,
  dataHeader,
  datacontent,
}: {
  dataHeader: string[];
  datacontent: any[];
  withHeader?: boolean;
  sq: string;
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full max-w-[1300px]">
        {withHeader && <h1 className="mb-3 font-semibold text-xl"> Trades</h1>}
        <div className="w-full p-10 pb-5 rounded-lg border border-solid border-border">
          <div className="flex items-center justify-between">
            <h2>Open Trades</h2>

            <div className="flex items-center gap-2">
              <SelectWrapper
                className="max-w-[200px] h-[36px]"
                triggerPlaceHolder="Search by"
                children={
                  <>
                    {dataHeader.map((item, idx) => {
                      return (
                        <DropdownMenuItem
                          key={idx}
                          onClick={() =>
                            sq === "searchqueryTradesRunning"
                              ? dispatch(
                                  setSearchQueryTradesRunning({
                                    q: "",
                                    qBy: item,
                                  }),
                                )
                              : dispatch(
                                  setSearchQueryTradesDone({
                                    q: "",
                                    qBy: item,
                                  }),
                                )
                          }
                        >
                          {item}
                        </DropdownMenuItem>
                      );
                    })}
                  </>
                }
                label={""}
                tip={"Search By"}
              />
              <SearchWrapper sq={sq} />

              <ButtonSheet
                trigger={
                  <Button size={"sm"} variant={"outline"}>
                    <Icon.calendarPlus className="size-4" />
                  </Button>
                }
                content={<div className="flex items-center gap-2">hi</div>}
                tip={"Add Trade"}
              />
              <ToggleButtonWrapper
                tip="Refresh Trades"
                trigger={
                  <Button size={"sm"} variant={"outline"}>
                    <Icon.refresh className="size-4" />
                  </Button>
                }
              />
            </div>
          </div>
          <ShopTableWrapper
            header={dataHeader}
            children={datacontent}
            sq={sq}
          />
        </div>
      </div>
    </>
  );
};
