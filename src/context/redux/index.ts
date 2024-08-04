import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tableReducer from "../Table";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    table: tableReducer,
});

export const store = configureStore({
    reducer: {
        table: tableReducer,
    },
});
