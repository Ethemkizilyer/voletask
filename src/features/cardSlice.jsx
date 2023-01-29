import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 100 };

const cardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    decrementByAmount(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = cardSlice.actions;
export default cardSlice.reducer;
