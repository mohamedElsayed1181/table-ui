import { useDispatch } from "react-redux";
import { Icon } from "../../assets";
import { Input } from "../ShadCn";
import {
    setSearchQueryTradesDone,
    setSearchQueryTradesRunning,
} from "../../../context";

export const SearchWrapper = ({ sq }: { sq: string }) => {
    const dispatch = useDispatch();
    return (
        <div className="relative">
            <Input
                placeholder="Search..."
                onChange={(e) => {
                    sq === "searchqueryTradesRunning"
                        ? dispatch(
                            setSearchQueryTradesRunning({ q: e.target.value, qBy: "" }),
                        )
                        : dispatch(
                            setSearchQueryTradesDone({ qBy: "", q: e.target.value }),
                        );
                }}
            />
            <Icon.search className="size-[1.1rem] absolute right-3 top-1/2  -translate-y-1/2" />
        </div>
    );
};
