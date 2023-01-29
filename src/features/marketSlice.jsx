import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMarketAsync = createAsyncThunk(
  "market/getMarketAsync",
  async () => {
    try {
      const {data} = await axios("http://challenge.vole.io/cards/market");

      return data;
    } catch (error) {
      alert(error.message);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  cards: [],
};

export const marketSlice = createSlice({
  name: "market",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getMarketAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMarketAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
        state.error = false;
      })
      .addCase(getMarketAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default marketSlice.reducer;
