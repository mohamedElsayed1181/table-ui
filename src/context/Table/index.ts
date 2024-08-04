import { createSlice } from "@reduxjs/toolkit";

export type initialStateTypes = {
  searchqueryTradesRunning: {
    q: string;
    qBy: string;
  };
  searchqueryTradesDone: {
    q: string;
    qBy: string;
  };
  currentpageTradesRuinning: number;
  currentpageTradesDone: number;
};

const initialState: initialStateTypes = {
  searchqueryTradesRunning: {
    qBy: "",
    q: "",
  },
  searchqueryTradesDone: {
    qBy: "",
    q: "",
  },
  currentpageTradesRuinning: 0,
  currentpageTradesDone: 0,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchQueryTradesRunning: (state, action) => {
      state.searchqueryTradesRunning = action.payload;
    },
    setSearchQueryTradesDone: (state, action) => {
      state.searchqueryTradesDone = action.payload;
    },
    setCurrentPageTradesRuinning: (state, action) => {
      state.currentpageTradesRuinning = action.payload;
    },

    setCurrentPageTradesDone: (state, action) => {
      state.currentpageTradesDone = action.payload;
    },
  },
});

export const {
  setCurrentPageTradesRuinning,
  setCurrentPageTradesDone,
  setSearchQueryTradesRunning,
  setSearchQueryTradesDone,
} = tableSlice.actions;

export default tableSlice.reducer;
