import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ShadCn";
import { RootState } from "../../../context/redux";
import {
  setCurrentPageTradesDone,
  setCurrentPageTradesRuinning,
} from "../../../context";

export function PaginationWrapper({
  columnsNumber,
  sq,
}: {
  columnsNumber: number;
  sq: string;
}) {
  const currentPage = useSelector(
    (state: RootState) => state.table[sq as keyof typeof state.table] as number,
  );
  const dispatch = useDispatch();

  console.log(currentPage);
  return (
    <Pagination className="w-fit">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              currentPage - 1 >= 0 && sq === "currentpageTradesRuinning"
                ? dispatch(setCurrentPageTradesRuinning(currentPage - 1))
                : dispatch(setCurrentPageTradesDone(currentPage - 1))
            }
          />
        </PaginationItem>
        {Array.from({ length: columnsNumber }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={currentPage === i}
              onClick={() => {
                sq === "currentpageTradesRuinning"
                  ? dispatch(setCurrentPageTradesRuinning(i))
                  : dispatch(setCurrentPageTradesDone(i));
              }}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              currentPage + 1 < columnsNumber &&
              sq === "currentpageTradesRuinning"
                ? dispatch(setCurrentPageTradesRuinning(currentPage + 1))
                : dispatch(setCurrentPageTradesDone(currentPage + 1))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
