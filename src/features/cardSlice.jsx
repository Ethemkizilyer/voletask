import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: JSON.parse(localStorage.getItem("budget")) || 100 };

const cardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount(state, action) {
      state.value += action.payload;
      localStorage.setItem("budget", JSON.stringify(state.value));
    },
    decrementByAmount(state, action) {
      state.value -= action.payload;
            localStorage.setItem("budget", JSON.stringify(state.value));
    },
  },
});

export const { incrementByAmount, decrementByAmount } = cardSlice.actions;
export default cardSlice.reducer;
