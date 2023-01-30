import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBudgetAsync = createAsyncThunk(
  "budget/getBudgetAsync",
  async () => {
    try {
      const { data } = await axios("https://challenge.vole.io/budget");
      return data;
    } catch (error) {
      alert(error.message);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  value: 0,
};

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
  extraReducers: (builder) => {
    builder
      .addCase(getBudgetAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBudgetAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value =
          (JSON.parse(localStorage.getItem("budget")) == 0 ||
          JSON.parse(localStorage.getItem("budget")))
            ? JSON.parse(localStorage.getItem("budget"))
            : action.payload.budget;
        state.error = false;
      })
      .addCase(getBudgetAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { incrementByAmount, decrementByAmount } = cardSlice.actions;
export default cardSlice.reducer;
