import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "../features/marketSlice";
export default configureStore({
  reducer: {
    market: marketSlice,
  },
});