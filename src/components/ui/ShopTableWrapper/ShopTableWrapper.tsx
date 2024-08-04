import { useSelector } from "react-redux";
import { cn } from "../../../utils/cn";
import { Badge } from "../ShadCn";
import { RootState } from "../../../context/redux";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";
import { datacontent } from "../../../App";
import { SelectPagination } from "../SelectPaginatioin/SelectPagination";

export const ShopTableWrapper = ({
  sq,
  header,
  children,
}: {
  sq: string;
  header: string[];
  children: typeof datacontent;
}) => {
  const sqSelect =
    sq === "searchqueryTradesRunning"
      ? "currentpageTradesRuinning"
      : "currentpageTradesDone";
  const currentPage = useSelector((state: RootState) => state.table[sqSelect]);
  const search = useSelector(
    (state: RootState) =>
      state.table[sq as keyof typeof state.table] as {
        q: string;
        qBy: string;
      },
  );

  //NOTE: filtring the data depednign on the q
  const filteredData = children.filter((item) => {
    if (search.qBy === "") {
      return Object.values(item).some((value) =>
        value.toString().includes(search.q),
      );
    } else {
      return item[search.qBy as keyof typeof item]
        ?.toString()
        ?.includes(search.q);
    }
  });
  const splitIntoChunks = (array: typeof datacontent, chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const resultArrays = splitIntoChunks(filteredData, 5);

  return (
    <>
      <ul className="grid h-full gap-1 border border-border border-solid rounded-md mt-4">
        <li className="flex items-center gap-2 border-b border-b-solid border-b-zinc-300 p-3 bg-zinc-200">
          {header.map((item, idx) => (
            <div className="w-[112px] text-center text-[.9rem]" key={idx}>
              {item}
            </div>
          ))}
        </li>

        <div className=" h-[234.5px]">
          {resultArrays.length > 0 ? (
            resultArrays[currentPage]?.map((item, idx: number) => {
              return (
                <li
                  key={idx}
                  className="flex items-center gap-2 border-b border-b-solid border-b-border p-3"
                >
                  <>
                    <div className="w-[112px] text-center text-[.9rem] max-w-fit truncate">
                      {item.OpenedAt}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.Asset}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.Leverage}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.Amount}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.OpeningValue}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.CurrentValue}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.QTY}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.Direction}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      {item.PNL}
                    </div>
                    <div className="w-[112px] text-center text-[.9rem]">
                      <Badge
                        className={cn(
                          item.Status === "running"
                            ? "bg-green-500"
                            : item.Status === "won"
                              ? "bg-blue-500"
                              : "bg-red-500",
                        )}
                      >
                        {item.Status}
                      </Badge>
                    </div>
                  </>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              No Trades
            </div>
          )}
        </div>
      </ul>

      <div className="flex items-center justify-between mt-4">
        <SelectPagination columnsNumber={resultArrays.length} sq={sqSelect} />
        <PaginationWrapper columnsNumber={resultArrays.length} sq={sqSelect} />
      </div>
    </>
  );
};
